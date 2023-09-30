import type { AppProps } from 'next/app';
import "@/scss/index.scss";

// Import Google Fonts
import { Poppins, Raleway, Syne } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] });
const raleway = Raleway({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] });
const syne = Syne({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --poppins: ${poppins.style.fontFamily};
          --raleway: ${raleway.style.fontFamily};
          --syne: ${syne.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
