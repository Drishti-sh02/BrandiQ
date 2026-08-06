"use client";
import Link from 'next/link';

export default function WebDevelopmentArticle() {
  return (
    <div style={{ backgroundColor: '#1a1a1a', minHeight: '100vh', padding: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: '100%', maxWidth: '900px', display: 'flex', justifyContent: 'flex-start', marginBottom: '2rem' }}>
        <Link href="/" style={{ color: '#fff', textDecoration: 'none', border: '1px solid #fff', padding: '0.6rem 1.2rem', borderRadius: '6px', fontSize: '1rem', fontFamily: 'var(--font-inter), sans-serif', backgroundColor: 'transparent' }}>
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
        <style>{`
          @keyframes floating {
            0% { transform: translateY(0px) rotate(-2deg); }
            50% { transform: translateY(-15px) rotate(2deg); }
            100% { transform: translateY(0px) rotate(-2deg); }
          }
        `}</style>
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

        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <img 
            src="/blog-web.png" 
            alt="Web Development Illustration" 
            style={{ 
              width: '100%', 
              maxWidth: '350px', 
              animation: 'floating 4s ease-in-out infinite',
              filter: 'contrast(1.2) brightness(0.9)',
              mixBlendMode: 'multiply'
            }} 
          />
        </div>

        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>Web Development Trends You Should Watch in 2024</h1>
        <div style={{ lineHeight: '1.8', fontSize: '1.6rem', color: '#111' }}>
          <p style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-inter), sans-serif', fontSize: '1.1rem', color: '#555' }}>
            Explore the latest web development trends and technologies shaping the future of the digital experience.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Web development moves incredibly fast. What was cutting-edge last year is standard practice today. Here are the top trends you need to implement in your upcoming projects to ensure they are modern and performant.
          </p>
          <ul style={{ paddingLeft: '2rem', listStyleType: 'disc', margin: 0 }}>
            <li style={{ marginBottom: '1rem' }}><strong>Server-Side Rendering (SSR) & Next.js:</strong> Delivering pre-rendered HTML for lightning-fast first contentful paints and superior SEO is now the default standard.</li>
            <li style={{ marginBottom: '1rem' }}><strong>AI-Powered Features:</strong> Integrating generative AI directly into user interfaces for search, content generation, and customer support.</li>
            <li style={{ marginBottom: '1rem' }}><strong>Micro-Frontends:</strong> Breaking monolithic applications into smaller, manageable chunks that teams can deploy independently.</li>
            <li style={{ marginBottom: '1rem' }}><strong>Immersive 3D Experiences:</strong> Using WebGL and Three.js to create highly interactive, engaging visual experiences directly in the browser.</li>
            <li style={{ marginBottom: '1rem' }}><strong>Edge Computing:</strong> Pushing logic and data closer to the user to reduce latency and dramatically improve response times.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
