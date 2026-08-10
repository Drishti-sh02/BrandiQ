"use client";
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div style={{ backgroundColor: '#1a1a1a', minHeight: '100vh', padding: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: '100%', maxWidth: '900px', display: 'flex', justifyContent: 'flex-start', marginBottom: '2rem' }}>
        <Link href="/#footer" style={{ color: '#fff', textDecoration: 'none', border: '1px solid #fff', padding: '0.6rem 1.2rem', borderRadius: '6px', fontSize: '1rem', fontFamily: 'var(--font-inter), sans-serif', backgroundColor: 'transparent' }}>
          ← Go Back
        </Link>
      </div>

      <div style={{
        maxWidth: '900px',
        width: '100%',
        backgroundColor: '#ffffff',
        color: '#111111',
        padding: '4rem 5rem',
        borderRadius: '2px 5px 3px 4px',
        boxShadow: '10px 10px 30px rgba(0,0,0,0.5)',
        transform: 'rotate(0.5deg)',
        position: 'relative',
        fontFamily: 'var(--font-caveat), cursive'
      }}>
        <div style={{
          position: 'absolute',
          top: '25px',
          left: '25px',
          width: '18px',
          height: '18px',
          backgroundColor: '#ff4b4b',
          borderRadius: '50%',
          boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.3), 2px 2px 5px rgba(0,0,0,0.4)',
          zIndex: 10
        }}></div>

        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>Privacy Policy</h1>
        <div style={{ lineHeight: '1.8', fontSize: '1.6rem', color: '#111' }}>
          <p style={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>Last updated: August 6, 2026</p>
          <ul style={{ paddingLeft: '2rem', listStyleType: 'disc', margin: 0 }}>
            <li style={{ marginBottom: '1rem' }}>Your privacy is critically important to us. It is BrandeQ's policy to respect your privacy regarding any information we may collect from you across our website and other sites we own and operate.</li>
            <li style={{ marginBottom: '1rem' }}>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used.</li>
            <li style={{ marginBottom: '1rem' }}>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</li>
            <li style={{ marginBottom: '1rem' }}>We don't share any personally identifying information publicly or with third-parties, except when required to by law.</li>
            <li style={{ marginBottom: '1rem' }}>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
