import React, { useState,useEffect } from 'react';
import Title from '../components/Title';
import { useForm } from "react-hook-form";
import ImageUploading from "react-images-uploading";
import Api from '../../src/services/Api';
import { useRouter } from 'next/router';
import Image from 'next/image';
import TextEditor from '../components/TextEditor';


const create=()=>{
    const [obj, setObj] = useState({ Name: '', Img:'',Email:'',Description:'',Position:'',SocialLink:'',Color:''});

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
    formData.append('Name', obj.Name);
    formData.append('Email', obj.Email);
    formData.append('Description', obj.Description);
    formData.append('Position', obj.Position);
    formData.append('SocialLink', obj.SocialLink);
    formData.append('Color', obj.Color);
    if (images) {
        formData.append('Img', images[0].file, images[0].file.name);
        setImages('');
    }
 let res=await CallApi.updateData(`team/update/${router.query.id}`, formData);
// setisupdated(1);
console.log(res)
if (!res.error) {
  router.push('/team')
    
  }
  }


  // use effect for every router value changes
  useEffect(() => {
    router.query.id&&fetchData(router.query.id);
  }, [router.query.id])


  //fetching edit data
  let fetchData=async(id)=>{
    // console.log(id);
    let data=await CallApi.EditData(`team/edit/${id}`);
    console.log(data);
     data && setObj({ Name: data.Name, Img:data.Img,Email:data.Email,Description:data.Description,Position:data.Position,SocialLink:data.SocialLink});


   }


   return (
    <>

    <Title title="Create team" />

    <form onSubmit={handleSubmit(updateHandler)}>

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
                    placeholder="Enter  Name" name='Name'
                    id='Name' className='form-control'
                    onChange={(e) => setObj({ ...obj, Name: e.target.value })}
                    value={obj.Name}
                    />
                   {errors.Name && <small className='text-danger'>{errors.Name.message}</small>}
                  </div>



                  <div className="form-group">
                  <label className='mb-1' >Color</label>
                  <input type="color"
                    {...register("Color", { required: 'Color is required field' })}
                    name='Color'
                    id='Color' className='form-control'
                    onChange={(e) => setObj({ ...obj, Color: e.target.value })}
                    value={obj.Color}
                    />
                   {errors.Color && <small className='text-danger'>{errors.Color.message}</small>}
                  </div>



                  {/* upload Img image by imageuploady */}
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
               {obj.Img&&   <Image src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}${obj.Img}`} alt="" width="80" height={80} className="img-fluid custom-border-radius-50-per"/>
}
             </div>

             




             <div className="form-group col-md-12 mt-3">
                    <label className='mb-1' >Email</label>
                    <input type="Email" name="Email" id="Email"  cols="30" rows="4" className='form-control' onChange={(e) => setObj({ ...obj, Email: e.target.value })} value={obj.Email} /> 
                  </div>

                  <div className="form-group col-md-12 mt-3">
                    <label className='mb-1' >Description</label>
                    
                    <textarea  name="Description" id="Description"  cols="30" rows="4" className='form-control' onChange={(e) => setObj({ ...obj, Description: e.target.value })} value={obj.Description} /> 

                  </div>

                  <div className="form-group col-md-12 mt-3">
                    <label className='mb-1' >Position</label>
                    <input type="text"  name="Position" id="Position"  cols="30" rows="4" className='form-control' onChange={(e) => setObj({ ...obj, Position: e.target.value })} value={obj.Position} />
                  </div>

                  <div className="form-group col-md-12 mt-3">
                    <label className='mb-1' >SocialLink</label>
                    <input type='text' name="SocialLink" id="SocialLink"  cols="30" rows="4" className='form-control' onChange={(e) => setObj({ ...obj, SocialLink: e.target.value })} value={obj.SocialLink} />
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
