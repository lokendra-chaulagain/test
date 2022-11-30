import React, { useState,useEffect } from 'react';
import Title from '../components/Title';
import { useForm } from "react-hook-form";
import ImageUploading from "react-images-uploading";
import Api from '../../src/services/Api';
import { useRouter } from 'next/router';
import Image from 'next/image';
import TextEditor from '../components/TextEditor';


const create=()=>{
    const [obj, setObj] = useState({ title: '', thumbnail:'',Description:''});
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
    formData.append('title', obj.title);
    formData.append('Description', obj.Description);
    if (images) {
        formData.append('thumbnail', images[0].file, images[0].file.name);
        setImages('');
    }
 let res=await CallApi.updateData(`ourservice/update/${router.query.id}`, formData);
// setisupdated(1);
console.log(res)
if (!res.error) {
  router.push('/ourservice')
    
  }
  }


  // use effect for every router value changes
  useEffect(() => {
    router.query.id&&fetchData(router.query.id);
  }, [router.query.id])


  //fetching edit data
  let fetchData=async(id)=>{
    // console.log(id);
    let data=await CallApi.EditData(`ourservice/edit/${id}`);
    console.log(data);
     setObj({title:data.title,thumbnail:data.thumbnail,Description:data.Description});

   }


   return (
    <>

    <Title title="Create ourservice" />

    <form onSubmit={handleSubmit(updateHandler)}>

      <div className="row mt-2">
        <div className="col-md-12 ">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  

                {/* for title */}
                <div className="form-group">
                  <label className='mb-1' > Title</label>
                  <input type="text"
                    {...register("title", { required: 'Title is required field' })}
                    placeholder="Enter ourservice title" name='title'
                    id='title' className='form-control'
                    onChange={(e) => setObj({ ...obj, title: e.target.value })}
                    value={obj.title}
                    />
                   {errors.title && <small className='text-danger'>{errors.title.message}</small>}
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

             

             <div className="form-group col-md-12 mt-3">
                    <label className='mb-1' >Description</label>
                    <textarea  name="Description" id="Description"  cols="30" rows="4" className='form-control' onChange={(e) => setObj({ ...obj, Description: e.target.value })} value={obj.Description}/>

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
