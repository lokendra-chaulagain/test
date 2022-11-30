import React, { useState, useEffect, useRef } from 'react';
import Title from '../components/Title';
import { useForm } from "react-hook-form";
import ImageUploading from "react-images-uploading";
import Api from '../../src/services/Api';
import Image from 'next/image';
import { useRouter } from 'next/router';
import TextEditor from '../components/TextEditor';

const create = () => {

  const [obj, setObj] = useState({ title: '',authorName:'',thumbnail: '', Description: '', status: 1,date:'',metatitle:'',metakeyword:'',metadescription:'' });
  const [images, setImages] = useState();
  let router=useRouter();

  const onChange = (imageList) => {
    setImages(imageList);
  };

  
  let CallApi = new Api();


  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  const addHandler = async () => {
    const formData = new FormData();
    formData.append('title', obj.title);
    formData.append('date', obj.date);
    formData.append('status', obj.status);
    formData.append('Description', obj.Description);
    formData.append('authorName', obj.authorName);
    formData.append('metatitle', obj.metatitle);
    formData.append('metakeyword', obj.metakeyword);
    formData.append('metadescription', obj.metadescription);
    
    if (images) {
      formData.append('thumbnail', images[0].file, images[0].file.name);
    }
   
    let res=await CallApi.storeData('blog/create', formData);
    // console.log(res)
    router.push('/blog')

    setImages('');
   

    reset();

  }




  return (
    <>

      <Title title="Create Blog" />

      <form onSubmit={handleSubmit(addHandler)}>

        <div className="row mt-2">
          <div className="col-md-12 ">
            <div className="card">
              <div className="card-body">
                <div className="row">

                  <div className="form-group">
                    <label className='mb-1' >Blog Title</label>
                    <input type="text"
                      {...register("title", { required: 'Title is required field' })}
                      placeholder="Enter Blog Title" name='title' id='title' className='form-control' onChange={(e) => setObj({ ...obj, title: e.target.value })} />
                    {errors.title && <small className='text-danger'>{errors.title.message}</small>}
                  </div>



                  <div className="form-group">
                    <label className='mb-1' >authorName</label>
                    <input type="text"
                      {...register("authorName", { required: 'authorName is required field' })}
                      placeholder="Enter Blog authorName" name='authorName' id='authorName' className='form-control' onChange={(e) => setObj({ ...obj, authorName: e.target.value })} />
                    {errors.authorName && <small className='text-danger'>{errors.authorName.message}</small>}
                  </div>


                  {/* upload thumbnail image by imageuploady */}
                  <div className="form-group mt-3 col-md-6">
                    <label htmlFor="formFile" className="form-label"> Thumbnail</label>
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
                              <Image src={image.data_url} alt="" width="80" height={80} className="custom-border-radius-50-per" />
                              <div className="image-item__btn-wrapper">
                                <button onClick={() => onImageUpdate(index)} className='btn btn-primary btn-sm'>Update</button>
                                <button onClick={() => onImageRemove(index)} className='btn btn-danger btn-sm'>Remove</button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </ImageUploading>
                  </div>

                
                 
                  
                  
                  

                  
                  <div className="form-group col-md-12 mt-3">
                    <label className='mb-1' >Description</label>
                    <TextEditor setvalue={setObj} myobj={obj} /> 

                  </div>


                   
                  <div className="form-group col-md-12 mt-3">
                    <label className='mb-1' >Date</label>
                    <input type='text' name="date" id="date"  cols="30" rows="4" className='form-control' onChange={(e) => setObj({ ...obj, date: e.target.value })} />
                  </div>

                  <div className="form-group col-md-12 mt-3">
                    <label className='mb-1' >MetaTitle</label>
                    <input type='text' name="metatitle" id="metatitle"  cols="30" rows="4" className='form-control' onChange={(e) => setObj({ ...obj, metatitle: e.target.value })} />
                  </div>


                  <div className="form-group col-md-12 mt-3">
                    <label className='mb-1' >Metakeyword</label>
                    <input type='text' name="metakeyword" id="metakeyword"  cols="30" rows="4" className='form-control' onChange={(e) => setObj({ ...obj, metakeyword: e.target.value })} />
                  </div>


                  <div className="form-group col-md-12 mt-3">
                    <label className='mb-1' >MetaDescription</label>
                    <input type='text' name="metadescription" id="metadescription"  cols="30" rows="4" className='form-control' onChange={(e) => setObj({ ...obj, metadescription: e.target.value })} />
                  </div>


                  <div className="form-group mt-3 col-md-6">
                    <label className='mb-1'>Status</label>
                    <select id='status' name='status' className='form-control' onChange={(e) => setObj({ ...obj, status: e.target.value })}>
                      <option value="1">Active</option>
                      <option value="0">Deactive</option>
                    </select>
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