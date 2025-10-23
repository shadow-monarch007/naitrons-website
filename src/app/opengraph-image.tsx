import { ImageResponse } from 'next/og';

// Use Node.js runtime for broader compatibility in dev/prod on Windows/Webpack
export const runtime = 'nodejs';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  const title = 'nAItronS — Applied AI & Automation';
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg,#0a0a0a,#1e3a8a)',
          padding: 64,
          fontFamily: 'system-ui, sans-serif',
          color: '#fff'
        }}
      >
        <div style={{ fontSize: 56, lineHeight: 1.15, fontWeight: 600, maxWidth: 900 }}>{title}</div>
        <div style={{ fontSize: 24, opacity: 0.8 }}>nAItronS • AI Strategy • ML Engineering • Automation</div>
      </div>
    ),
    size
  );
}
