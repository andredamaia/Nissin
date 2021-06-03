import 'bootstrap/dist/css/bootstrap.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

import '../styles/utils/base.scss';
import '../styles/utils/button.scss';
import '../styles/utils/text.scss';




import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
