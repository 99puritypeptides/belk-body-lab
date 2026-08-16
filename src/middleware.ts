import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';
import { ENGLISH_ONLY_SLUGS } from './data/blog/english-only-slugs';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
});

export default function middleware(request: NextRequest) {
  // English-only posts have no /es/ page — issue a real HTTP 308 redirect to
  // the English canonical URL instead of letting next-intl route to a page
  // that would otherwise render duplicate English content under /es/.
  // (A page-level redirect() call only inserts a client-side meta-refresh in
  // a Server Component, not an actual HTTP status — this has to happen here.)
  const match = request.nextUrl.pathname.match(/^\/es\/blog\/([^/]+)\/?$/);
  if (match && ENGLISH_ONLY_SLUGS.has(match[1])) {
    const url = request.nextUrl.clone();
    url.pathname = `/blog/${match[1]}`;
    return NextResponse.redirect(url, 308);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon\\.ico|images|fonts|lab-verification-coa-transparency|.*\\..*).*)',
  ],
};
