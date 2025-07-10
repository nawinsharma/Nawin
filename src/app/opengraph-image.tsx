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
          background: 'linear-gradient(135deg, #000319 0%, #1a1a2e 100%)',
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
        {/* Background pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 2px, transparent 0)',
            backgroundSize: '50px 50px',
            opacity: 0.3,
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
          {/* Name */}
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: 'white',
              margin: '0 0 20px 0',
              lineHeight: 1,
              letterSpacing: '-0.02em',
            }}
          >
            Nawin Sharma
          </h1>
          
          {/* Title */}
          <h2
            style={{
              fontSize: '32px',
              fontWeight: '600',
              color: '#60a5fa',
              margin: '0 0 40px 0',
              lineHeight: 1.2,
            }}
          >
            Full Stack Developer
          </h2>
          
          {/* Description */}
          <p
            style={{
              fontSize: '24px',
              color: '#9ca3af',
              margin: '0 0 40px 0',
              maxWidth: '600px',
              lineHeight: 1.4,
            }}
          >
            A Full Stack Developer, loves building robust and scalable web applications.
          </p>
          
          {/* Tech stack */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS'].map((tech) => (
              <span
                key={tech}
                style={{
                  background: 'rgba(96, 165, 250, 0.1)',
                  color: '#60a5fa',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '16px',
                  fontWeight: '500',
                  border: '1px solid rgba(96, 165, 250, 0.3)',
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
            height: '4px',
            background: 'linear-gradient(90deg, #60a5fa, #8b5cf6, #ec4899)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
} 