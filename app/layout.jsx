import './globals.css'


export const metadata = {
  title: 'Food cart',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='shadow-2xl min-w-[360px] min-h-screen sm:w-[100%] 
        sm:h-[100%] md:w-[100%] md:h-[100%] lg:w-[100%] lg:h-[100%]
         xl:hidden 2xl:hidden bg-grey overflow-hidden'>
        {children}
        </div>
        </body>
    </html>
  )
}
