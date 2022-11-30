import React, { useState, useEffect, useRef } from 'react';
import Title from '../components/Title';
import { useForm } from "react-hook-form";
import ImageUploading from "react-images-uploading";
import Api from '../../src/services/Api';
import Image from 'next/image';
import { useRouter } from 'next/router';
import TextEditor from '../components/TextEditor';
const create = () => {

  const [obj, setObj] = useState({ title:'',Description:'',lineone: '', linetwo: '', year:'' });
  

  let router=useRouter();

 


  
  let CallApi = new Api();


  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  const updateHandler = async () => {
    
    
    
   let res=await CallApi.updateData(`workprocess/update/${router.query.id}`, {...obj});
   console.log(res)

    if (!res.error) {
    router.push('/workprocess')
      
    }


  }



  // use effect for every router value changes
  useEffect(() => {
    router.query.id&&fetchData(router.query.id);
  }, [router.query.id])
  



  // fetching edit data 
  let fetchData=async(id)=>{
   let data=await CallApi.EditData(`workprocess/edit/${id}`);
    setObj({ title:data.title,Description:data.Description,lineone: data.lineone, linetwo: data.linetwo, year:data.year});
  }

  return (
    <>

      <Title title="Edit workprocess" />

      <form onSubmit={handleSubmit(updateHandler)}>

        <div className="row mt-2">
          <div className="col-md-12 ">
            <div className="card">
              <div className="card-body">
                <div className="row">
                <div className="form-group">


                    <label className='mb-1' > Title</label>
                    <input type="text"
                      {...register("title", { required: 'Title is required field' })}
                      placeholder="Enter workprocess Title" name='title' id='title' className='form-control' 
                      value={obj.title}  onChange={(e) => setObj({ ...obj, title: e.target.value })} />
                    {errors.title && <small className='text-danger'>{errors.title.message}</small>}
                  </div>



                  <div className="form-group">
                    <label className='mb-1 mt-3' >Description</label>
                    <textarea  name="Description" id="Description"  cols="30" rows="4" className='form-control' onChange={(e) => setObj({ ...obj, Description: e.target.value })} value={obj.Description} />

                  </div>


                 
                 
                  
                  
                  

                  
                  <div className="form-group col-md-12 mt-3">
                    <label className='mb-1' >lineone</label>
                    <textarea name="lineone" id="lineone"  cols="30" rows="4" className='form-control'
                     value={obj.lineone} onChange={(e) => setObj({ ...obj, lineone: e.target.value })}></textarea>
                  </div>


                   
                  <div className="form-group col-md-12 mt-3">
                    <label className='mb-1' >linetwo</label>
                    <textarea name="linetwo" id="linetwo"  cols="30" rows="4" className='form-control'
                     value={obj.linetwo} onChange={(e) => setObj({ ...obj, linetwo: e.target.value })}></textarea>
                  </div>

                    
                  <div className="form-group col-md-12 mt-3">
                    <label className='mb-1' >year</label>
                    {/* <textarea name="year" id="year"  cols="30" rows="4" className='form-control' 
                     value={obj.year} onChange={(e) => setObj({ ...obj, year: e.target.value })}></textarea> */}
                     <input type="text"
                      placeholder="Enter workprocess authorName" name='year' id='year' className='form-control' onChange={(e) => setObj({ ...obj, year: e.target.value })}  value={obj.year} />
                  
                  </div>



                  
                 

                  
                


                 


                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1 offset-md-11">

            <div className="form-group mt-3">
              <button type="submit" value="save" className="form-control btn  btn-primary  " >
                Save
              </button>
            </div>
          </div>

        </div>
      </form>

    </>
  )
}

export default create