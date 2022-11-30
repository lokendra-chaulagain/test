import {React,useState }from 'react';
import Title from '../components/Title';
import { useForm } from "react-hook-form";
import ImageUploading from "react-images-uploading";
import Api from "../../src/services/Api";
import Image from 'next/image';
import { useRouter } from 'next/router';




const create = () => {
    const [obj, setObj] = useState({ thumbnail:'',status:1});
    const [images, setImages] = useState();
    let router=useRouter();

    const onChange = (imageList) => {
        setImages(imageList);
      };

  let CallApi = new Api();

  

  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  const addHandler = async () => {
    const formData = new FormData();
     formData.append('status',obj.status)
   
    if (images) {
      formData.append('thumbnail', images[0].file, images[0].file.name);
    }
    CallApi.storeData('clients/create', formData);
    setObj({thumbnail:'',status:''});

    router.push('/clients');
    setImages('');
    reset();

  }
    



    return (
        <>
      <Title title="Create clients" />
      <form onSubmit={handleSubmit(addHandler)}>

      <div className="row mt-2">
          <div className="col-md-12 ">
            <div className="card">
              <div className="card-body">
                <div className="row">
                
            


    {/* upload thumbnail image by imageuploady */}
                  {/* <div className="form-group mt-3 col-md-6">
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
                </div> */}




 {/* upload Img image by imageuploady */}
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

        



         {/* for status */}

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