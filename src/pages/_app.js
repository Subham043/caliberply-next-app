import '@/styles/globals.css'
import '@/styles/Navbar.css'

import { ToastContainer } from 'react-toastify';


export default function App({ Component, pageProps }) {

  return <> <ToastContainer
  position="top-right"
  autoClose={2000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  width={100}
  pauseOnFocusLoss
  draggable
  pauseOnHover
/>
            <Component {...pageProps} />
        
        </>
}
