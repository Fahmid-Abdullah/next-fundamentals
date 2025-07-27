import type { NextConfig } from 'next';

// These headers provide a strong baseline for securing your Next.js app in production.
// You can adjust them based on your app’s needs and external dependencies.
// Notably, the Content-Security-Policy is configured to:
// - Restrict content to same-origin by default
// - Allow inline styles and scripts (via 'unsafe-inline') for compatibility with many libraries
// - Include 'unsafe-eval' only in development mode to support tools like React Server Components and HMR
//   (avoid using 'unsafe-eval' in production due to security risks)

// Once you've reviewed and understood the settings, head back to the lesson page.

const isDev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in the app
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            // Controls allowed sources for content like scripts, images, styles to prevent XSS attacks
            // Here: only allow loading resources from the same origin ('self')
            // Alternatives:
            // - Add trusted CDNs: e.g. "default-src 'self' https://cdn.example.com"
            // - Add script-src, style-src, img-src for fine-grained control
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval'" : ''};
              style-src 'self' 'unsafe-inline';
              object-src 'none';
              connect-src 'self';
              img-src 'self' data:;
              font-src 'self' https://fonts.gstatic.com;
              frame-ancestors 'none';
            `.replace(/\s+/g, ' ').trim()
            ,
                      },
          {
            key: 'X-Frame-Options',
            // Prevents the site from being embedded in an iframe to avoid clickjacking attacks
            // 'DENY' forbids all framing
            // Alternatives:
            // - 'SAMEORIGIN' allows framing by same origin only
            // - 'ALLOW-FROM uri' allows framing from specific origin (less supported)
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            // Stops browsers from MIME-sniffing the response away from the declared content-type
            // Helps prevent attacks based on incorrect content interpretation
            // Commonly set to 'nosniff'
            value: 'nosniff',
          },
          {
            key: 'Strict-Transport-Security',
            // Enforces HTTPS by telling browsers to only connect using HTTPS for the next 2 years (63072000 seconds)
            // includeSubDomains applies to all subdomains
            // preload allows inclusion in browser preload lists for HSTS
            // Alternatives: omit preload if not submitting to preload list
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Referrer-Policy',
            // Controls how much referrer information is sent with requests originating from your site
            // 'no-referrer-when-downgrade' sends referrer to HTTPS destinations but not HTTP (downgrade)
            // Alternatives:
            // - 'no-referrer' (never send referrer)
            // - 'origin' (send only origin, not full URL)
            // - 'strict-origin-when-cross-origin' (modern recommended default)
            value: 'no-referrer-when-downgrade',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
