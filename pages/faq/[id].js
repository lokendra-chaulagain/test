import React, { useState, useEffect, useRef } from 'react';
import Title from '../components/Title';
import { useForm } from "react-hook-form";
import ImageUploading from "react-images-uploading";
import Api from '../../src/services/Api';
import Image from 'next/image';
import { useRouter } from 'next/router';
const create = () => {

  const [obj, setObj] = useState({ question:'',answer:'' });
  

  let router=useRouter();

 


  
  let CallApi = new Api();


  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  const updateHandler = async () => {
    
    
    
   let res=await CallApi.updateData(`faq/update/${router.query.id}`, {...obj});
   console.log(res)

    if (!res.error) {
    router.push('/faq')
      
    }


  }



  // use effect for every router value changes
  useEffect(() => {
    router.query.id&&fetchData(router.query.id);
  }, [router.query.id])
  



  // fetching edit data 
  let fetchData=async(id)=>{
   let data=await CallApi.EditData(`faq/edit/${id}`);
    setObj({ question:data.question,answer:data.answer});
  }

  return (
    <>

      <Title title="Edit faq" />

      <form onSubmit={handleSubmit(updateHandler)}>

        <div className="row mt-2">
          <div className="col-md-12 ">
            <div className="card">
              <div className="card-body">
                <div className="row">
                <div className="form-group">


                    <label className='mb-1' > Question</label>
                    <input type="text"
                      {...register("question", { required: 'question is required field' })}
                      placeholder="Enter faq question" name='question' id='question' className='form-control' 
                      value={obj.question}  onChange={(e) => setObj({ ...obj, question: e.target.value })} />
                    {errors.question && <small className='text-danger'>{errors.question.message}</small>}
                  </div>



                  <div className="form-group">
                    <label className='mb-1' >Answer</label>
                    <input type="text"
                      {...register("answer", { required: 'answer is required field' })}
                      placeholder="Enter faq authorName" name='answer' id='answer' className='form-control'
                      value={obj.answer} onChange={(e) => setObj({ ...obj, answer: e.target.value })} />
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