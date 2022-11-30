import {React,useState }from 'react';
import Title from '../components/Title';
import { useForm } from "react-hook-form";
import ImageUploading from "react-images-uploading";
import Api from "../../src/services/Api";
import Image from 'next/image';
import { useRouter } from 'next/router';
import TextEditor from '../components/TextEditor';




const create = () => {
    const [obj, setObj] = useState({ Name: '', Img:'',Email:'',Description:'',Position:'',SocialLink:'',Color:''});
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
    formData.append('Email', obj.Email);
    formData.append('Description', obj.Description);
    formData.append('Position', obj.Position);
    formData.append('SocialLink', obj.SocialLink);
    formData.append('Color', obj.Color);

   
    if (images) {
      formData.append('Img', images[0].file, images[0].file.name);
    }

    
    CallApi.storeData('team/create', formData);
    let res= setObj({ Name: '', Img:'',Email:'',Description:'',Position:'',SocialLink:'',Color:''});
    
    console.log(formData.Name);
    console.log(obj.Name);
   
      router.push('/team')
    
    setImages('');
    reset();

  }
    



    return (
        <>
      <Title title="Create team" />
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
                    placeholder="Enter team title"
                    id='Name' className='form-control'
                    onChange={(e) => setObj({ ...obj, Name: e.target.value })}
                  //  onChange={(e)=>console.log(e.target.value)}

                    />
                   {errors.Name && <small className='text-danger'>{errors.Name.message}</small>}
                  </div>



                  
            {/* for Color */}
                <div className="form-group">
                  <label className='mb-1' >Color</label>
                  <input type="Color"
                    {...register("Color", { required: 'Color is required field' })}
                   
                    id='Color' className='form-control'
                    onChange={(e) => setObj({ ...obj, Color: e.target.value })}
                    // onChange={(e)=>console.log(e.target.value)}
                    />
                   {errors.Color && <small className='text-danger'>{errors.Color.message}</small>}
                  </div>




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

                <div className="form-group col-md-12 mt-3">
                    <label className='mb-1' >Email</label>
                    <input type="email" name="description" id="description"  cols="30" rows="4" className='form-control' onChange={(e) => setObj({ ...obj, Email: e.target.value })} />
                  </div>

                  <div className="form-group col-md-12 mt-3">
                    <label className='mb-1' >Description</label>
                  
                   <textarea  name="description" id="description"  cols="30" rows="4" className='form-control' onChange={(e) => setObj({ ...obj, Description: e.target.value })} />

                    
                  </div>

                  <div className="form-group col-md-12 mt-3">
                    <label className='mb-1' >Position</label>
                    <input type="text" name="Position" id="Position"  cols="30" rows="4" className='form-control' onChange={(e) => setObj({ ...obj, Position: e.target.value })} />
                  </div>

                  <div className="form-group col-md-12 mt-3">
                    <label className='mb-1' >SocialLink</label>
                    <input type="text" name=" Sociallink" id="Sociallink"  cols="30" rows="4" className='form-control' onChange={(e) => setObj({ ...obj, SocialLink: e.target.value })} />
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