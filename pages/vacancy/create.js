import {React,useState }from 'react';
import Title from '../components/Title';
import { useForm } from "react-hook-form";
import Api from "../../src/services/Api";
import Image from 'next/image';
import { useRouter } from 'next/router';
import TextEditor from '../components/TextEditor.js';
import ImageUploading from "react-images-uploading";





const create = () => {
    const [obj, setObj] = useState({ Jobtitle: '',thumbnail:'', position:'',salary:'',employeeNumberRequired:'',levelofexperience:'',Description:''});
    const [images, setImages] = useState();
    

  let CallApi = new Api();
  let router=useRouter();


  const onChange = (imageList) => {
    setImages(imageList);
  };

  

  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  const addHandler = async () => {
    const formData = new FormData();
    formData.append('Jobtitle', obj.Jobtitle);
    formData.append('position', obj. position);
    formData.append('salary', obj.salary);
    formData.append('employeeNumberRequired', obj.employeeNumberRequired);
    formData.append('Description', obj.Description);

    formData.append('levelofexperience', obj.levelofexperience);
    
    if (images) {
      formData.append('thumbnail', images[0].file, images[0].file.name);
    }
   



    CallApi.storeData('vacancy/create',formData);
     
    
    router.push('/vacancy');
    reset();
    // setImages('');

  }
    



    return (
        <>
      <Title title="Create vacancy" />
      <form onSubmit={handleSubmit(addHandler)}>

      <div className="row mt-2">
          <div className="col-md-12 ">
            <div className="card">
              <div className="card-body">
                <div className="row">
                
            

            {/* for title */}
                <div className="form-group">
                  <label className='mb-1' >Jobtitle</label>
                  <input type="text"
                    {...register("Jobtitle", { required: 'Jobtitle is required field' })}
                    placeholder="Enter vacancy jobtitle"
                    id='Jobtitle' className='form-control'
                    onChange={(e) => setObj({ ...obj, Jobtitle: e.target.value })}/>
                   {errors.Jobtitle && <small className='text-danger'>{errors.Jobtitle.message}</small>}
                  </div>



                  <div className="form-group">
                  <label className='mb-1' >position</label>
                  <input type="text"
                    {...register("position", { required: 'position is required field' })}
                    placeholder="Enter vacancy position"
                    id='Jobtitle' className='form-control'
                    onChange={(e) => setObj({ ...obj, position: e.target.value })}/>
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
                  </div>



   
             {/* for salary */}
             <div className="form-group col-md-12 mt-3">
                    <label className='mb-1' >Salary</label>
                    <input type="text"
                    id='salary' className='form-control' name='salary'
                    onChange={(e) => setObj({ ...obj, salary: e.target.value })}
                    />
                  </div>


                  <div className="form-group col-md-12 mt-3">
                    <label className='mb-1' >EmployeeNumberRequired</label>
                    <input type="text"
                    id='employeeNumberRequired' className='form-control' name='employeeNumberRequired'
                    onChange={(e) => setObj({ ...obj, employeeNumberRequired: e.target.value })}
                    />                    

                  </div>


                  <div className="form-group col-md-12 mt-3">
                    <label className='mb-1' >levelofexperience</label>
                    <textarea name="levelofexperience" id="levelofexperience"  cols="30" rows="4" className='form-control' onChange={(e) => setObj({ ...obj, levelofexperience: e.target.value })}></textarea>
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

</div>
</form>
            
            

        </>
    )
}

export default create