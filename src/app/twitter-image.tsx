import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'Nawin Sharma - Full Stack Developer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1da1f2 0%, #0d8bd9 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
          position: 'relative',
        }}
      >
        {/* Twitter-style background pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 20px 20px, rgba(255,255,255,0.15) 2px, transparent 0)',
            backgroundSize: '40px 40px',
            opacity: 0.4,
          }}
        />
        
        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            zIndex: 1,
          }}
        >
          {/* Twitter bird icon placeholder */}
          <div
            style={{
              width: '80px',
              height: '80px',
              background: 'white',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '30px',
              fontSize: '40px',
              fontWeight: 'bold',
              color: '#1da1f2',
            }}
          >
            🐦
          </div>
          
          {/* Name */}
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: 'white',
              margin: '0 0 16px 0',
              lineHeight: 1,
              letterSpacing: '-0.02em',
            }}
          >
            Nawin Sharma
          </h1>
          
          {/* Title */}
          <h2
            style={{
              fontSize: '28px',
              fontWeight: '600',
              color: 'rgba(255, 255, 255, 0.9)',
              margin: '0 0 30px 0',
              lineHeight: 1.2,
            }}
          >
            Full Stack Developer
          </h2>
          
          {/* Description */}
          <p
            style={{
              fontSize: '20px',
              color: 'rgba(255, 255, 255, 0.8)',
              margin: '0 0 30px 0',
              maxWidth: '500px',
              lineHeight: 1.4,
            }}
          >
            Crafting digital experiences with modern web technologies
          </p>
          
          {/* Tech stack */}
          <div
            style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {['React', 'Next.js', 'TypeScript', 'Node.js'].map((tech) => (
              <span
                key={tech}
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  padding: '6px 12px',
                  borderRadius: '16px',
                  fontSize: '14px',
                  fontWeight: '500',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Bottom accent */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'white',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
} 