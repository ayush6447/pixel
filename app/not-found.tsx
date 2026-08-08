'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'var(--font-mono), monospace',
        color: 'var(--bone)',
        background: 'var(--wall)',
        textAlign: 'center',
        padding: '1rem',
      }}
    >
      <h1 style={{ fontSize: '3rem', margin: '0 0 0.5rem', color: 'var(--amber)' }}>404</h1>
      <p style={{ margin: '0 0 1.5rem', opacity: 0.8 }}>This page doesn't exist in the room.</p>
      <Link
        href="/"
        style={{
          color: 'var(--bone)',
          textDecoration: 'none',
          borderBottom: '1px solid var(--amber)',
          paddingBottom: '2px',
        }}
      >
        Return to the room →
      </Link>
    </div>
  );
}
