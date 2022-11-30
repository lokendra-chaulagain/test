import React, { useState, useEffect, useRef } from 'react';
import Title from '../components/Title';
import { useForm } from "react-hook-form";
import ImageUploading from "react-images-uploading";
import Api from '../../src/services/Api';
import Image from 'next/image';
import TextEditor from '../components/TextEditor';

const create = () => {

  const [obj, setObj] = useState({ title: '',Description:'',lineone: '', linetwo: '', year:'' });
 

  
  
  let CallApi = new Api();


  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  const addHandler = async () => {
    
    
    
    let res=await CallApi.storeData('workprocess/create', {...obj});
    console.log(res)

   
   

    reset();

  }




  return (
    <>

      <Title title="Create workprocess" />

      <form onSubmit={handleSubmit(addHandler)}>

        <div className="row mt-2">
          <div className="col-md-12 ">
            <div className="card">
              <div className="card-body">
                <div className="row">

                  <div className="form-group">
                    <label className='mb-1' > Title</label>
                    <input type="text"
                      {...register("title", { required: 'Title is required field' })}
                      placeholder="Enter workprocess Title" name='title' id='title' className='form-control' onChange={(e) => setObj({ ...obj, title: e.target.value })} />
                    {errors.title && <small className='text-danger'>{errors.title.message}</small>}
                  </div>



                  <div className="form-group">
                    <label className='mb-1 mt-3' >Description</label>
                    <textarea  name="Description" id="Description"  cols="30" rows="4" className='form-control' onChange={(e) => setObj({ ...obj, Description: e.target.value })} />

                  </div>


                 
                 
                  
                  
                  

                  
                  <div className="form-group col-md-12 mt-3">
                    <label className='mb-1' >lineone</label>
                    <textarea name="lineone" id="lineone"  cols="30" rows="4" className='form-control' onChange={(e) => setObj({ ...obj, lineone: e.target.value })}></textarea>
                  </div>


                   
                  <div className="form-group col-md-12 mt-3">
                    <label className='mb-1' >linetwo</label>
                    <textarea name="linetwo" id="linetwo"  cols="30" rows="4" className='form-control' onChange={(e) => setObj({ ...obj, linetwo: e.target.value })}></textarea>
                  </div>

                    
                  <div className="form-group col-md-12 mt-3">
                    <label className='mb-1' >year</label>
                    <input type="text"
                      placeholder="Enter workprocess authorName" name='year' id='year' className='form-control' onChange={(e) => setObj({ ...obj, year: e.target.value })} />
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