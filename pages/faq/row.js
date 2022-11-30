import React from 'react'
import Image from 'next/image'
import  Link  from 'next/link';

const row = (props) => {
   let row=props.row;
  
  return (
    <>
      
<tr>
<td>
        {props.index}
    </td>


   

    <td>
        {/* {row.question.substring(0,27)}... */}
        {row.question}

    </td>

    <td>
    {/* {row.answer.substring(0,27)}... */}
    {row.answer}
              
    </td>

   

  


    


    <td>
    <a className=' btn btn-danger btn-sm'  onClick={props.handleDelete} id={row._id} value={row._id}>Delete</a>

<Link href={ 
   { 
    pathname:'/faq/[id]',
    query:{id:row._id}

}
}  >
<a className='btn btn-primary btn-sm'>Edit   </a>
</Link>
    </td>
</tr>
    </>
  )
}

export default row