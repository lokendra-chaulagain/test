import Title from '../../components/Title.js';
import React, { useState, useEffect, useRef } from 'react';
import { useForm } from "react-hook-form";
import ImageUploading from "react-images-uploading";
import Api from '../../../src/services/Api.js';
import Image from 'next/image';
const create = () => {



    const [obj, setObj] = useState({Name:'', Address1: '',Address2: '', Phone1: '', Phone2: '', Email1: '',Email2: '', OfficeTime: '', logo: '',image1: '',Facebook:"",Instagram:"",Tiktok:"",Youtube:""});
    const [images, setImages] = useState();
    const [images2, setImages2] = useState();


    const [isupdated, setisupdated] = useState(0);




    const onChange = (imageList) => {
        setImages(imageList);
    };

    const onChange2 = (imageList2) => {
        setImages2(imageList2);
    };



   
    let CallApi = new Api();


    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const updateHandler = async () => {
        console.log('hello');
        const formData = new FormData();
        formData.append('Name', obj.Name);
        formData.append('Address1', obj.Address1);
        formData.append('Address2', obj.Address2);
        formData.append('Phone1', obj.Phone1);
        formData.append('Phone2', obj.Phone2);
        formData.append('Email1', obj.Email1);
        formData.append('Email2', obj.Email2);

        formData.append('metatitle', obj.metatitle);
        formData.append('metakeyword', obj.metakeyword);
        formData.append('metadescription', obj.metadescription);

        formData.append('Facebook', obj.Facebook);

        formData.append('Instagram', obj.Instagram);

        formData.append('Tiktok', obj.Tiktok);

        formData.append('Youtube', obj.Youtube);


        // formData.append('OfficeTime', obj.OfficeTime);

        if (images) {
            formData.append('logo', images[0].file, images[0].file.name);
        }

        if (images2) {
            formData.append('image1', images2[0].file, images2[0].file.name);
        }
      
        let res = await CallApi.updateData(`cmssetting/update`, formData);
       setImages('')
       setImages2('')
      

        if (!res.error) {
            setisupdated(1)

        }


    }



    // use effect for every router value changes
    useEffect(() => {
        fetchData();
    }, [])

    // use effect for every router value changes
    useEffect(() => {
        fetchData();
    }, [isupdated])



    // fetching edit data 
    let fetchData = async () => {
        let data = await CallApi.EditData(`cmssetting`);
        console.log(data);
         setObj({ Name:data.Name,Address1:data.Address1,Address2: data.Address2,  Phone1: data.Phone1, Phone2:data.Phone2, Email1: data.Email1,Email2: data.Email2, logo: data.logo,image1:data.image1, OfficeTime: data.OfficeTime,Facebook:data.Facebook,Instagram:data.Instagram,Youtube:data.Youtube,Tiktok:data.Tiktok});
    }




    return (
        <>
            {/* title  */}
            <Title title="Update Cms" />
            <form onSubmit={handleSubmit(updateHandler)}>


                <div className="card">
                    <div className="card-header">
                        <h5 className='card-title bg-gray'>Update Cms</h5>
                    </div>
                    <div className="card-body">


                        <div className="row mt-2">
                            



                           

                            


                            <div className="col-md-6">

                                <div className="form-group mt-3">
                                    <label className="form-label">Name </label>
                                    <input className="form-control" type="text" name='Name' id='Name'

                                        value={obj.Name}
                                        onChange={(e) => setObj({ ...obj, Name: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group mt-3">
                                    <label className="form-label">Phone1 </label>
                                    <input className="form-control" type="text" name='Phone1' id='Phone1'
                                        value={obj.Phone1}
                                        onChange={(e) => setObj({ ...obj, Phone1: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group mt-3">
                                    <label className="form-label">Phone2 </label>
                                    <input className="form-control" type="text" name='Phone2' id='Phone2'
                                        value={obj.Phone2}
                                        onChange={(e) => setObj({ ...obj, Phone2: e.target.value })}
                                    />
                                </div>
                            </div>


                            <div className="col-md-6">
                                <div className="form-group mt-3">
                                    <label className="form-label">Address1 </label>
                                    <input className="form-control" type="text" name='Address1' id='Address1'
                                        value={obj.Address1}
                                        onChange={(e) => setObj({ ...obj, Address1: e.target.value })}
                                    />
                                </div>
                            </div>


                            <div className="col-md-6">
                                <div className="form-group mt-3">
                                    <label className="form-label">Address2 </label>
                                    <input className="form-control" type="text" name='Address2' id='Address2'
                                        value={obj.Address2}
                                        onChange={(e) => setObj({ ...obj, Address2: e.target.value })}
                                    />
                                </div>
                            </div>

                            

                            <div className="col-md-6">
                                <div className="form-group mt-3">
                                    <label className="form-label">Email1 </label>
                                    <input className="form-control" type="Email1" name='Email1' id='Email1'
                                        value={obj.Email1}
                                        onChange={(e) => setObj({ ...obj, Email1: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group mt-3">
                                    <label className="form-label">Email2 </label>
                                    <input className="form-control" type="email" name='Email2' id='Email2'
                                        value={obj.Email2}
                                        onChange={(e) => setObj({ ...obj, Email2: e.target.value })}
                                    />
                                </div>
                            </div>



                            <div className="col-md-6">
                                <div className="form-group mt-3">
                                    <label className="form-label">metaTitle</label>
                                    <input className="form-control" type="text" name='metatitle' id='metatitle'
                                        value={obj.metatitle}
                                        onChange={(e) => setObj({ ...obj, metatitle: e.target.value })}
                                    />
                                </div>
                            </div>



                            <div className="col-md-6">
                                <div className="form-group mt-3">
                                    <label className="form-label">metaKeyword </label>
                                    <input className="form-control" type="text" name='metakeyword' id='metakeyword'
                                        value={obj.metakeyword}
                                        onChange={(e) => setObj({ ...obj,metakeyword: e.target.value })}
                                    />
                                </div>
                            </div>




                            <div className="col-md-6">
                                <div className="form-group mt-3">
                                    <label className="form-label">metaDescription </label>
                                    <input className="form-control" type="text" name='metadescription' id='metadescription'
                                        value={obj.metadescription}
                                        onChange={(e) => setObj({ ...obj, metadescription: e.target.value })}
                                    />
                                </div>
                            </div>
                            {/* <div className="col-md-6">
                                <div className="form-group mt-3">
                                    <label className="form-label">OfficeTime</label>
                                    <input className="form-control" type="text" name='OfficeTime' id='OfficeTime'
                                        value={obj.OfficeTime}
                                        onChange={(e) => setObj({ ...obj, OfficeTime: e.target.value })}
                                    />
                                </div>
                            </div> */}

                            {/* upload logo image by imageuploady */}
                            <div className="form-group mt-3 col-md-6">
                                <label htmlFor="formFile" className="form-label"> logo</label>
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

                                {obj.logo && <Image src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}${obj.logo}`} alt="" width="80" height={80} className="img-fluid custom-border-radius-50-per" />
                                }
                            </div>






                            <div className="form-group mt-3 col-md-6">
                                <label htmlFor="formFile" className="form-label"> Imge</label>
                                <ImageUploading
                                    value={images2}
                                    onChange={onChange2}
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

                                {obj.image1 && <Image src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}${obj.image1}`} alt="" width="80" height={80} className="img-fluid custom-border-radius-50-per" />
                                }
                            </div>




                            



                            <div className="col-md-6">
                                <div className="form-group mt-3">
                                    <label className="form-label">Facebook </label>
                                    <input className="form-control" type="text" name='Facebook' id='Facebook'
                                        value={obj.Facebook}
                                        onChange={(e) => setObj({ ...obj, Facebook: e.target.value })}
                                    />
                                </div>
                            </div>


                            <div className="col-md-6">
                                <div className="form-group mt-3">
                                    <label className="form-label">Instagram </label>
                                    <input className="form-control" type="text" name='Instagram' id='Instagram'
                                        value={obj.Instagram}
                                        onChange={(e) => setObj({ ...obj, Instagram: e.target.value })}
                                    />
                                </div>
                            </div>


                            <div className="col-md-6">
                                <div className="form-group mt-3">
                                    <label className="form-label">Youtube </label>
                                    <input className="form-control" type="text" name='Youtube' id='Youtube'
                                        value={obj.Youtube}
                                        onChange={(e) => setObj({ ...obj, Youtube: e.target.value })}
                                    />
                                </div>
                            </div>


                            <div className="col-md-6">
                                <div className="form-group mt-3">
                                    <label className="form-label">Tiktok </label>
                                    <input className="form-control" type="text" name='Tiktok' id='Tiktok'
                                        value={obj.Tiktok}
                                        onChange={(e) => setObj({ ...obj, Tiktok: e.target.value })}
                                    />
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

export default create