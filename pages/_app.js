import '../styles/globals.css'
import '../styles/main.css';
import '../styles/imgprev.css';
import Head from "next/head";
import Sidebar from "./components/Sidebar";
import Header from './components/Header';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React,{useState,useEffect} from 'react';

import Login from './auth/login';



function MyApp({ Component, pageProps }) {
  let router=useRouter();
 const [token, setToken] = useState()


 useEffect(() => {
  Tchange();
}, [router.query])



let Tchange=async()=>{
  let tokens= localStorage.getItem('admin-token')
   tokens&& setToken(tokens)
}
let updateToken=async(token)=>{
  setToken(token)
}
  
  return (
  <>

<Head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>

    </Head>

  <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>

<ToastContainer />

{
   token &&token!=undefined&&
   <>

   <Sidebar />

   <div className="overlay"></div>
 </>
}




  <main className="main-wrapper">

  {
        token &&token!=undefined &&
          <Header setToken={updateToken}/>
      }



      <div className="container">
      {token ? <Component {...pageProps} />:<Login setToken={setToken}/>}


      </div>

    </main>

    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"  />
  {/* <Script async src={`${process.env.NEXT_PUBLIC_APP_URL}js/app.js`} /> */}

   
   
  </>
 
)}

export default MyApp
