
import React from 'react'
import Image from 'next/image'
import  Link  from 'next/link';
import moment from "moment/moment";

const row = (props) => {
   let row=props.row;
    //  console.log(row.vacancy[0]) 

   
  return (
    <>
      
<tr>
    <td>
       {props.index}
    </td>



    <td>
        {row.Name}
    </td>


    <td>
        {row.Email}
    </td>


    <td>
   
    <a href={`${process.env.NEXT_PUBLIC_API_URL}${row.thumbnail}`} download target="_blank">
    <button type="button" class="btn btn-primary btn-sm p-1">download pdf</button>
   </a> 
  

    </td>

   <td>
        {row.vacancy[0]&&row.vacancy[0].Jobtitle}
    
    </td>


    <td>
        {row.experience}
    </td>



   

    <td>
        {row.shortDescription}
        {/* {row.shortDescription.substring(0,10)}... */}
    </td>


    <td>
        {moment(row.createdAt).format('DD-MM-YYYY')}
    </td>

    
    


    <td>
    <a className=' btn btn-danger btn-sm' onClick={props.handleDelete} value={row._id }>Delete</a>


    </td>
</tr>
    </>
  )
}

export default row
