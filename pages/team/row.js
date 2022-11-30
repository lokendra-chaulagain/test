
import React from 'react'
import Image from 'next/image'
import  Link  from 'next/link';

const row = (props) => {
   let row=props.row;
  return (
    <>
      
<tr >
    <td>
       {props.index}
    </td>


    <td>
      <a href={`${process.env.NEXT_PUBLIC_API_URL}${row.Img}`}>
    <Image src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}${row.Img}`} width={60} height={50} />
    </a>
    </td>

    <td>
       {row.Name}
    </td>

    <td>
       {row.Email}
    </td>

    <td>
       
     {row.Description.substring(0,20)}...
    </td>

    <td>
       {row.Position}
    </td>


    <td>
       {/* {row.SocialLink} */}
     {row.SocialLink.substring(0,20)}...
    </td>

    <td>
       {row.Color}
    </td>



    


    


   

    
    <td>
    <a className=' btn btn-danger btn-sm' onClick={props.handleDelete} value={row._id }>Delete</a>

<Link href={{
  pathname: "/team/[id]",
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
