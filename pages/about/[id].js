
import React, { useState,useEffect } from 'react';
import Title from '../components/Title';
import { useForm } from "react-hook-form";
import ImageUploading from "react-images-uploading";
import Api from '../../src/services/Api';
import { useRouter } from 'next/router';
import Image from 'next/image';


const create=()=>{
    const [obj, setObj] = useState({thumbnail:'',headingone:"",descriptionone:'',headingtwo:"",descriptiontwo:'',headingthree:"",descriptionthree:'',headingfour:"",descriptionfour:''});

    const [images, setImages] = useState();  

    let router=useRouter();


    const onChange = (imageList) => {
        setImages(imageList);
      };  

      let CallApi = new Api();

     

  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

  
  
  // upddate method for Api servce folder 
  const updateHandler = async () => {
    const formData = new FormData();
    formData.append('headingone', obj.headingone);
    formData.append('descriptionone', obj.descriptionone);
    formData.append('headingtwo', obj.headingtwo);
    formData.append('descriptiontwo', obj.descriptiontwo);
    formData.append('headingthree', obj.headingthree);
    formData.append('descriptionthree', obj.descriptionthree);
    formData.append('headingfour', obj.headingfour);
    formData.append('descriptionfour', obj.descriptionfour);
    
    if (images) {
        formData.append('thumbnail', images[0].file, images[0].file.name);
        setImages('');
    }
 let res=await CallApi.updateData(`about/update/${router.query.id}`, formData);
// setisupdated(1);
console.log(res)
if (!res.error) {
  router.push('/about')
    
  }
  }


  // use effect for every router value changes
  useEffect(() => {
    router.query.id&&fetchData(router.query.id);
  }, [router.query.id])


  //fetching edit data
  let fetchData=async(id)=>{
    // console.log(id);
    let data=await CallApi.EditData(`about/edit/${id}`);
    console.log(data);
     setObj({headingone:data.headingone,thumbnail:data.thumbnail,descriptionone:data.descriptionone,headingtwo:data.headingtwo,descriptiontwo:data.descriptiontwo,headingthree:data.headingthree,descriptionthree:data.descriptionthree,headingfour:data.headingfour,descriptionfour:data.descriptionfour});

   }


   return (
    <>

    <Title title="Create about" />

    <form onSubmit={handleSubmit(updateHandler)}>

      <div className="row mt-2">
        <div className="col-md-12 ">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  

                 {/* for title */}
                 <div className="form-group">
                  <label className='mb-1' >headingone</label>
                  <input type="text"
                    {...register("headinone", { required: 'Title is required field' })}
                    placeholder="Enter about title"
                    id='headingone' className='form-control'
                    value={obj.headingone}
                    onChange={(e) => setObj({ ...obj, headingone: e.target.value })}/>
                   {errors.headingone && <small className='text-danger'>{errors.headingone.message}</small>}
                  </div>



                  <div className="form-group col-md-12 mt-3">
                    <label className='mb-1' >Descriptionone</label>
                    <textarea name="description" id="description"  cols="30" rows="4" className='form-control' onChange={(e) => setObj({ ...obj, descriptionone: e.target.value })}  value={obj.descriptionone}></textarea>
                  </div>




                  <div className="form-group col-md-12 mt-3">
                    <label className='mb-1' >headingtwo</label>
                    <textarea name="description" id="description"  cols="30" rows="4" className='form-control' onChange={(e) => setObj({ ...obj, headingtwo: e.target.value })}  value={obj.headingtwo}></textarea>
                  </div>


                  <div className="form-group col-md-12 mt-3">
                    <label className='mb-1' >Descriptiontwo</label>
                    <textarea name="description" id="description"  cols="30" rows="4" className='form-control' onChange={(e) => setObj({ ...obj, descriptiontwo: e.target.value })}  value={obj.descriptiontwo}></textarea>
                  </div>


                  <div className="form-group col-md-12 mt-3">
                    <label className='mb-1' >headingthree</label>
                    <textarea name="description" id="description"  cols="30" rows="4" className='form-control' onChange={(e) => setObj({ ...obj, headingthree: e.target.value })}  value={obj.headingthree}></textarea>
                  </div>


                  <div className="form-group col-md-12 mt-3">
                    <label className='mb-1' >Descriptionthree</label>
                    <textarea name="description" id="description"  cols="30" rows="4" className='form-control' onChange={(e) => setObj({ ...obj, descriptionthree: e.target.value })}  value={obj.descriptionthree}></textarea>
                  </div>


                  <div className="form-group col-md-12 mt-3">
                    <label className='mb-1' >headingfour</label>
                    <textarea name="description" id="description"  cols="30" rows="4" className='form-control' onChange={(e) => setObj({ ...obj, headingfour: e.target.value })}  value={obj.headingfour}></textarea>
                  </div>


                  <div className="form-group col-md-12 mt-3">
                    <label className='mb-1' >Descriptionfour</label>
                    <textarea name="description" id="description"  cols="30" rows="4" className='form-control' onChange={(e) => setObj({ ...obj, descriptionfour: e.target.value })}  value={obj.descriptionfour}></textarea>
                  </div>


                  {/* upload thumbnail image by imageuploady */}
                  <div className="form-group mt-3 col-md-6">
                  <label htmlFor="formFile" className="form-label">Image</label>
                 
                  <ImageUploading
                    value={images}
                    onChange={onChange}
                    maxNumber={1}
                    dataURLKey="data_url"
                    acceptType={["jpg", "png", "jpeg", "webp"]}
                  >
                    {({
                      imageList,
                      onImageUpload,
                      onImageUpdate,
                      onImageRemove,
                      isDragging,
                      dragProps
                    }) => (
                      // write your building UI
                      <div className="upload__image-wrapper">
                        <button type='button' className='btn btn-secondary btn-block d-block w-100'
                          style={isDragging ? { color: "red" } : null}
                          onClick={onImageUpload}
                          {...dragProps}
                        >
                          Click or Drop here
                        </button>
                        &nbsp;
                        {imageList.map((image, index) => (
                          <div key={index} className="image-item">
                            <Image src={image.data_url} alt="" width="80" height={80} className="custom-border-radius-50-pers" />
                          

                            <div className="image-item__btn-wrapper">
                            <button onClick={() => onImageUpdate(index)} className='btn btn-primary btn-sm'>Update</button>
                                <button onClick={() => onImageRemove(index)} className='btn btn-danger btn-sm'>Remove</button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </ImageUploading>
               {obj.thumbnail&&   <Image src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}${obj.thumbnail}`} alt="" width="80" height={80} className="img-fluid custom-border-radius-50-per"/>
}
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
export default create;

