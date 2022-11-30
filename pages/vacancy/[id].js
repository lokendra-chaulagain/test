import React, { useState,useEffect } from 'react';
import Title from '../components/Title';
import { useForm } from "react-hook-form";
import ImageUploading from "react-images-uploading";
import Api from '../../src/services/Api';
import { useRouter } from 'next/router';
import Image from 'next/image';
import TextEditor from '../components/TextEditor';


const create=()=>{
    const [obj, setObj] = useState({ Jobtitle: '', position:'',salary:'',employeeNumberRequired:'',levelofexperience:'',Description:'',thumbnail:''});
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
    formData.append('Jobtitle', obj.Jobtitle);
    formData.append('position', obj.position);
    
    formData.append('salary', obj.salary);
    formData.append('Description', obj.Description);

    formData.append('levelofexperience', obj.levelofexperience);
    formData.append('employeeNumberRequired', obj.employeeNumberRequired);
    
    if (images) {
      formData.append('thumbnail', images[0].file, images[0].file.name);
    }




   
 let res=await CallApi.updateData(`vacancy/update/${router.query.id}`, formData);
// setisupdated(1);
console.log(res)
if (!res.error) {
  router.push('/vacancy')
    
  }
  }


  // use effect for every router value changes
  useEffect(() => {
    router.query.id&&fetchData(router.query.id);
  }, [router.query.id])




  //fetching edit data
  let fetchData=async(id)=>{
    // console.log(id);
    let data=await CallApi.EditData(`vacancy/edit/${id}`);
    console.log(data);
     setObj({Jobtitle:data.Jobtitle,position:data.position,salary:data.salary,employeeNumberRequired:data.employeeNumberRequired,levelofexperience:data.levelofexperience, thumbnail:data.thumbnail,Description:data.Description});

   }


   return (
    <>

    <Title title="Create vacancy" />

    <form onSubmit={handleSubmit(updateHandler)}>

      <div className="row mt-2">
        <div className="col-md-12 ">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  

                {/* for title */}
                <div className="form-group">
                  <label className='mb-1' >vacancy </label>

                  <input type="text"
                    {...register("Jobtitle", { required: 'Jobtitle is required field' })}
                    placeholder="Enter vacancy title" name='Jobtitle'
                    id='Jobtitle' className='form-control'
                    onChange={(e) => setObj({ ...obj, Jobtitle: e.target.value })}
                    value={obj.Jobtitle}
                    />
                   {errors.Jobtitle && <small className='text-danger'>{errors.Jobtitle.message}</small>}
                  </div>



                  <div className="form-group">
                  <label className='mb-1' >vacancy </label>

                  <input type="text"
                    {...register("position", { required: 'position is required field' })}
                    placeholder="Enter vacancy position" name='position'
                    id='position' className='form-control'
                    onChange={(e) => setObj({ ...obj, position: e.target.value })}
                    value={obj.position}
                    />
                   {errors.position && <small className='text-danger'>{errors.position.message}</small>}
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

                    {obj.thumbnail&&   <Image src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}${obj.thumbnail}`} alt="" width="80" height={80} className="img-fluid custom-border-radius-50-per"/>
}
                  </div>
                  


                 



                 {/* for salary */}
             <div className="form-group col-md-12 mt-3">
                <label className='mb-1' >Salary</label>
                <input type="text"
                    id='salary' className='form-control' name='salary'
                    onChange={(e) => setObj({ ...obj, salary: e.target.value })}
                    value={obj.salary} />
                    </div></div>


                  <div className="form-group col-md-12 mt-3">
                    <label className='mb-1' >EmployeeNumberRequired</label>
                    
                    <input type="text"
                    id='employeeNumberRequired' className='form-control' name='employeeNumberRequired'
                    onChange={(e) => setObj({ ...obj, employeeNumberRequired: e.target.value })}
                    value={obj.employeeNumberRequired} />

                  </div>


                  <div className="form-group col-md-12 mt-3">
                    <label className='mb-1' >levelofexperience</label>
                    <textarea name="description" id="description"  cols="30" rows="4" className='form-control' onChange={(e) => setObj({ ...obj, levelofexperience: e.target.value })} value={obj.levelofexperience}></textarea>
                  </div>


                  <div className="form-group col-md-12 mt-3">
                    <label className='mb-1' >Description</label>
                    <TextEditor setvalue={setObj} myobj={obj} /> 
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

        
      </form>

    
    </>
   )


}
export default create;
