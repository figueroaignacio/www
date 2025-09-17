import { ReactNode } from 'react'

import '@/css/globals.css'

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return children
}
