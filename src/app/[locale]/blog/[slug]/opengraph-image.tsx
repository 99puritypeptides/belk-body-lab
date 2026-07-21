import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { blogPosts } from '@/data/blog/posts';
import { locales } from '@/i18n/config';

export const runtime = 'nodejs';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    blogPosts.map((post) => ({ locale, slug: post.slug }))
  );
}

async function getImageDataUri(publicPath: string): Promise<string | null> {
  try {
    const filePath = path.join(process.cwd(), 'public', publicPath);
    const buffer = await readFile(filePath);
    // next/og's renderer (satori/resvg) cannot decode WEBP data URIs reliably —
    // normalize everything to PNG in-memory before embedding.
    const pngBuffer = await sharp(buffer).png().toBuffer();
    return `data:image/png;base64,${pngBuffer.toString('base64')}`;
  } catch {
    return null;
  }
}

const fontCache = new Map<string, Promise<ArrayBuffer | null>>();

async function loadInterBold(text: string): Promise<ArrayBuffer | null> {
  if (fontCache.has(text)) return fontCache.get(text)!;

  const promise = (async () => {
    try {
      const cssUrl = `https://fonts.googleapis.com/css2?family=Inter:wght@700&text=${encodeURIComponent(text)}`;
      const cssRes = await fetch(cssUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.0.0 Safari/537.36',
        },
      });
      const css = await cssRes.text();
      const match = css.match(/src: url\(([^)]+)\)/);
      if (!match) return null;
      const fontRes = await fetch(match[1]);
      if (!fontRes.ok) return null;
      return await fontRes.arrayBuffer();
    } catch {
      return null;
    }
  })();

  fontCache.set(text, promise);
  return promise;
}

function titleFontSize(title: string): number {
  if (title.length > 70) return 44;
  if (title.length > 50) return 54;
  return 64;
}

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function Image({ params }: Props) {
  const { locale, slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  const content = post ? post[locale as 'en' | 'es'] || post.en : undefined;

  const title = content?.title || 'Belk Body Lab';
  const category = post?.category || '';

  const [imageDataUri, fontData] = await Promise.all([
    post ? getImageDataUri(post.image) : Promise.resolve(null),
    loadInterBold(`${title} ${category} BELK BODY LAB`),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          position: 'relative',
          backgroundColor: '#050505',
        }}
      >
        {imageDataUri && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageDataUri}
            width={1200}
            height={630}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '1200px',
              height: '630px',
              objectFit: 'cover',
            }}
          />
        )}

        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '1200px',
            height: '630px',
            display: 'flex',
            backgroundImage:
              'linear-gradient(to bottom, rgba(5,5,5,0.25) 0%, rgba(5,5,5,0.55) 55%, rgba(5,5,5,0.96) 100%)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '1200px',
            display: 'flex',
            flexDirection: 'column',
            padding: '64px 72px',
          }}
        >
          {category && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '28px',
              }}
            >
              <div style={{ width: '28px', height: '2px', display: 'flex', backgroundColor: '#AAFF00' }} />
              <span
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  letterSpacing: '4px',
                  color: '#AAFF00',
                  textTransform: 'uppercase',
                }}
              >
                {category}
              </span>
            </div>
          )}

          <div
            style={{
              display: 'flex',
              fontSize: `${titleFontSize(title)}px`,
              fontWeight: 700,
              lineHeight: 1.2,
              color: '#FFFFFF',
              letterSpacing: '-0.01em',
              maxWidth: '1050px',
            }}
          >
            {title}
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              marginTop: '40px',
            }}
          >
            <div style={{ width: '10px', height: '10px', borderRadius: '9999px', display: 'flex', backgroundColor: '#AAFF00' }} />
            <span
              style={{
                fontSize: '22px',
                fontWeight: 700,
                letterSpacing: '3px',
                color: 'rgba(255,255,255,0.65)',
                textTransform: 'uppercase',
              }}
            >
              Belk Body Lab
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fontData
        ? [{ name: 'Inter', data: fontData, weight: 700 as const, style: 'normal' as const }]
        : [],
    }
  );
}
