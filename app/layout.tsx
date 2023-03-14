import Header from './components/header'
import './globals.css'
import { personalinfo } from '@/data/mydata'

export const metadata = {
  title: 'Yasir',
  description: 'Resume',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      
      <body className="bg-cyan-600">
          <Header />
          {children}
        </body>
    </html>
  )
}
