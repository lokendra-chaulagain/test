import Link from 'next/link';
import React from 'react';

const Add = (props) => {
  return (
    <>
    <div className="add d-flex justify-content-end mb-2">
    <Link  href={{
      
      pathname:`${props.btnlink}`,
      query:props.product_id&&{product_id:props.product_id?props.product_id:''}
    
    }
  
  }>
   <a className="btn btn-primary">  <i className="i fas fa-plus"> </i>
     &nbsp;{props.btnvalue}
   </a></Link>
 
  </div>
  
    </>
  )
}

export default Add