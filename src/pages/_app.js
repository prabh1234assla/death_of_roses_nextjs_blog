import '@/styles/globals.css'
import { Oswald } from 'next/font/google'

const oswald =  Oswald({
  subsets: ['latin'],
  variable: '--font-oswald'
})

export default function App({ Component, pageProps }) {
  return <>

    <style jsx global>
      {`
        :root {
          --font-oswald: ${oswald.style.fontFamily}
        }
      `}
    </style>

    <Component {...pageProps} />    
  </>
}