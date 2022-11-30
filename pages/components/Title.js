import React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';
import Head from 'next/head';


const Title =  (props) => {
    let router=useRouter();
    let page=router.pathname.split('/')
    let page1=page[1];
    let page2=page[2];
    let page_title='';
    if (page.length==3) {
      page_title=page2
    }else{
      page_title=page1
    }
  return (
    <>
    <Head>
    <title>{props.title} | Falcontech</title>
    </Head>
      <div className="title-wrapper pt-30">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="titlemb-30">
                  <h4 className='page_title'>{props.title}</h4>
                </div>
              </div>



              <div className="col-md-6">
                <div className="breadcrumb-wrapper mb-30">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                      <Link href='/'><a>Home</a></Link>

                      </li>
                      <li className="breadcrumb-item">
                        
                        
                        <Link  
                        
                        
                        href={
                          
                          props.product_id?{
                          pathname:`/${page1}`,
                          query:props.product_id&&{product_id:props.product_id?props.product_id:''},
                        }:{
                          pathname:`/${page1}`,
                          query:props.status&&{status:props.status?props.status:''}
                        }
                      }
                        ><a>{page1}</a></Link></li>
                      {
                        page2 &&
                      <li className="breadcrumb-item active" aria-current="page">
                        {page2}
                      </li>
                      }

                    </ol>
                  </nav>
                </div>
              </div>
             
            </div>
            
          </div>
    </>
  )
}

export default Title