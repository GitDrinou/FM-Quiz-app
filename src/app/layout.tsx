import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import React from "react";

const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Frontend Mentor | Quiz app',
  description: 'Frontend mentor challenge : develop a quiz app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={rubik.className}>{children}</body>
    </html>
  )
}
