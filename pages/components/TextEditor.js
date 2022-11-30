import React from 'react';
import { useRef } from 'react';
import dynamic from 'next/dynamic'



const JoditEditor = dynamic(() => import('jodit-react'), {
    ssr: false,
  })



const TextEditor = ({setvalue,myobj}) => {
   const editor=useRef(null) ;
   const Description=myobj.Description;
 

   console.log(myobj);
   


  return (
    <>
   
<JoditEditor ref={editor}  onChange={(content)=>setvalue({...myobj,Description:content })} value={myobj.Description}/>

    </> 
  )
}


export default TextEditor;