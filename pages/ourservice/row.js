
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
      <a href={`${process.env.NEXT_PUBLIC_API_URL}${row.thumbnail}`}>
    <Image src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}${row.thumbnail}`} width={60} height={50} />
    </a>
    </td>


    <td>
        {row.Description}
       {/* {row.Description.substring(0,20)}... */}
    </td>


   

    
    


    <td>
    <a className=' btn btn-danger btn-sm' onClick={props.handleDelete} value={row._id }>Delete</a>

<Link href={{
  pathname: "/ourservice/[id]",
  query: { id: row._id },
}}  >
<a className='btn btn-primary btn-sm'>Edit   </a>
</Link>
    </td>
</tr>
    </>
  )
}

export default row
