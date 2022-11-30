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
        {row.title}
    </td>

    <td>
        {row.Description}
       
    </td>

    <td>
        {row.lineone}
    </td>

   

    <td>
        {row.linetwo}
    </td>

    <td>
        {row.year}
    </td>


    


    <td>
    <a className=' btn btn-danger btn-sm'  onClick={props.handleDelete} id={row._id} value={row._id}>Delete</a>

<Link href={ 
   { 
    pathname:'/workprocess/[id]',
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