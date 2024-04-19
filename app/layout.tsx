import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header/header'
import Providers from '@/components/Providers'
import Sidebar from '@/components/Sidebar'
import DrawerButton from '@/components/DrawerButton'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="drawer">
            <DrawerButton />
            <div className="drawer-content">
              {/* Page content here */}
              <div className="min-h-screen flex flex-col">
                <Header />
                {children}
                <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                  <aside className="grid grid-flow-col gap-4">
                    <p className="font-bold">
                      Copyright © 2023 - All right reserved by{' '}
                      {process.env.NEXT_PUBLIC_APP_NAME || 'Next Shop'}
                    </p>
                  </aside>
                </footer>
              </div>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <Sidebar />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}