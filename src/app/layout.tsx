// This root layout is intentionally minimal.
// Next.js requires it, but the real HTML structure (html, body, fonts, providers)
// is handled by src/app/[locale]/layout.tsx which is the actual entry point
// for all pages after next-intl middleware redirects to /en or /es.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children as any;
}