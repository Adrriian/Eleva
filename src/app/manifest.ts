
import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Eleva - Gestão Financeira',
    short_name: 'Eleva',
    description: 'Organize suas finanças, metas e investimentos.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0C',
    theme_color: '#fff',
    orientation: 'portrait',
    icons: [
      {
        src: '/assests/logo/logo3.svg',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/assests/logo/logo3.svg',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
