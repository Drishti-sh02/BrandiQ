"use client";
import Link from 'next/link';

export default function TermsOfService() {
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
        transform: 'rotate(-0.5deg)',
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

        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>Terms of Service</h1>
        <div style={{ lineHeight: '1.8', fontSize: '1.6rem', color: '#111' }}>
          <p style={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>Last updated: August 6, 2026</p>
          <ul style={{ paddingLeft: '2rem', listStyleType: 'disc', margin: 0 }}>
            <li style={{ marginBottom: '1rem' }}>By accessing our website, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</li>
            <li style={{ marginBottom: '1rem' }}>Permission is granted to temporarily download one copy of the materials (information or software) on BrandiQ's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not modify or copy the materials.</li>
            <li style={{ marginBottom: '1rem' }}>The materials on BrandiQ's website are provided on an 'as is' basis. BrandiQ makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</li>
            <li style={{ marginBottom: '1rem' }}>In no event shall BrandiQ or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on BrandiQ's website, even if BrandiQ or a BrandiQ authorized representative has been notified orally or in writing of the possibility of such damage.</li>
            <li style={{ marginBottom: '1rem' }}>We may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
