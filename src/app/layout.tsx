import { ReactNode } from 'react'

import '@/css/globals.css'

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return children
}
