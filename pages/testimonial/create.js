import {React,useState }from 'react';
import Title from '../components/Title';
import { useForm } from "react-hook-form";
import ImageUploading from "react-images-uploading";
import Api from "../../src/services/Api";
import Image from 'next/image';
import { useRouter } from 'next/router';





const create = () => {
    const [obj, setObj] = useState({ Name: '', thumbnail:'',Address:'',Description:'',CompanyType:''});
    const [images, setImages] = useState();
    let router=useRouter();

    const onChange = (imageList) => {
        setImages(imageList);
      };

      
  let CallApi = new Api();

  

  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

  const addHandler = async () => {
    const formData = new FormData();
    formData.append('Name', obj.Name);
    formData.append('Address', obj.Address);
    formData.append('Description', obj.Description);
    formData.append('CompanyType', obj.CompanyType);

   
    if (images) {
      formData.append('thumbnail', images[0].file, images[0].file.name);
    }

    
    CallApi.storeData('testimonial/create', formData);
    let res= setObj({ Name: '', thumbnail:'',Address:'',Description:'',CompanyType:''});
    
    
      router.push('/testimonial')
    
    setImages('');
    reset();

  }
    



    return (
        <>
      <Title title="Create testimonial" />
      <form onSubmit={handleSubmit(addHandler)}>

      <div className="row mt-2">
          <div className="col-md-12 ">
            <div className="card">
              <div className="card-body">
                <div className="row">
                
            

            {/* for Name */}
                <div className="form-group">
                  <label className='mb-1' >Name</label>
                  <input type="text"
                    {...register("Name", { required: 'Name is required field' })}
                    placeholder="Enter testimonial title"
                    id='Name' className='form-control'
                    onChange={(e) => setObj({ ...obj, Name: e.target.value })}/>
                   {errors.Name && <small className='text-danger'>{errors.Name.message}</small>}
                  </div>


              {/* upload thumbnail image by imageuploady */}
                  <div className="form-group mt-3 col-md-6">
                  <label htmlFor="formFile" className="form-label"> Image</label>
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
                            <Image src={image.data_url} alt="" width="80"height={80} className="custom-border-radius-50-per" />
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
                    <label className='mb-1' >CompanyType</label>
                    <input type="text" name="CompanyType" id="CompanyType"  cols="30" rows="4" className='form-control' onChange={(e) => setObj({ ...obj, CompanyType: e.target.value })} />
                  </div>


                  <div className="form-group col-md-12 mt-3">
                    <label className='mb-1' >Address</label>
                    <input type="text" name="Address" id="Address"  cols="30" rows="4" className='form-control' onChange={(e) => setObj({ ...obj, Address: e.target.value })} />
                  </div>

                  <div className="form-group col-md-12 mt-3">
                    <label className='mb-1' >Description</label>
                    <textarea  name="Description" id="Description"  cols="30" rows="4" className='form-control' onChange={(e) => setObj({ ...obj, Description: e.target.value })} />
                    
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