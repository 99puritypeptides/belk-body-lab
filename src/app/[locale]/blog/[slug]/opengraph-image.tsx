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

let interBoldPromise: Promise<ArrayBuffer | null> | null = null;

// Loaded from a local, vendored file (public/fonts/inter/Inter-Bold.woff) rather than
// fetched from Google Fonts at request/build time — build sandboxes (e.g. Vercel) can't
// always reach external hosts during static generation, and @vercel/og hard-requires at
// least one loaded font or it throws "No fonts are loaded."
function loadInterBold(): Promise<ArrayBuffer | null> {
  if (interBoldPromise) return interBoldPromise;

  interBoldPromise = (async () => {
    try {
      const filePath = path.join(process.cwd(), 'public', 'fonts', 'inter', 'Inter-Bold.woff');
      const buffer = await readFile(filePath);
      return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength) as ArrayBuffer;
    } catch {
      return null;
    }
  })();

  return interBoldPromise;
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
    loadInterBold(),
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
