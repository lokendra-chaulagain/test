const row = (props) => {
    let row=props.row;
   return (
     <>

<tr>
     <td>
       {props.index}
    </td>
      
    <td>
        {row.email}
    </td>
    

    
    </tr>
    </>
    )}
    export default row