import React, { useState, useEffect, useRef } from 'react';
import Title from '../components/Title';
import { useForm } from "react-hook-form";
import ImageUploading from "react-images-uploading";
import Api from '../../src/services/Api';
import Image from 'next/image';
import { useRouter } from 'next/router';

const create = () => {

  const [obj, setObj] = useState({question: '',answer:'' });
  const router=useRouter();
 

  
  
  let CallApi = new Api();


  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  const addHandler = async () => {
    
    
    
    let res=await CallApi.storeData('faq/create', {...obj});
    console.log(res)

   
   

    reset();
    router.push('/faq');

  }




  return (
    <>

      <Title title="Create faq" />

      <form onSubmit={handleSubmit(addHandler)}>

        <div className="row mt-2">
          <div className="col-md-12 ">
            <div className="card">
              <div className="card-body">
                <div className="row">

                  <div className="form-group">
                    <label className='mb-1' > Question</label>

                    <input type="text"
                      {...register("question")}
                      placeholder="Enter faq Question" name='question' id='question' className='form-control' onChange={(e) => setObj({ ...obj, question: e.target.value })} />
                    {errors.question && <small className='text-danger'>{errors.question.message}</small>}
                  </div>



                  <div className="form-group">
                    <label className='mb-1' >Answer</label>
                    <input type="text"
                      {...register("answer", { required: 'answer is required field' })}
                      placeholder="Enter faq authorName" name='answer' id='answer' className='form-control' onChange={(e) => setObj({ ...obj, answer: e.target.value })} />
                    {errors.answer && <small className='text-danger'>{errors.answer.message}</small>}
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