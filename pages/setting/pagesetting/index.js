import Title from '../../components/Title.js';
import React, { useState, useEffect, useRef } from 'react';
import { useForm } from "react-hook-form";
import ImageUploading from "react-images-uploading";
import Api from '../../../src/services/Api.js';
import Image from 'next/image';
const create = () => {



    const [obj, setObj] = useState({  privacy_policy: '', term_condition: '' });

    const [isupdated, setisupdated] = useState(0);




    const onChange = (imageList) => {
        setImages(imageList);
    };



   
    let CallApi = new Api();


    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const updateHandler = async () => {
        
        let res = await CallApi.updateData(`cmssetting/update`, {...obj});
       setImages('')
      

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
         setObj({ privacy_policy: data.privacy_policy,  term_condition: data.term_condition});
    }




    return (
        <>
            {/* title  */}
            <Title title="Update Cms" />
            <form onSubmit={handleSubmit(updateHandler)}>


                <div className="card">
                    <div className="card-header">
                        <h5 className='card-title bg-gray'>Update Page Setting</h5>
                    </div>
                    <div className="card-body">


                        <div className="row mt-2">
                            



                           

                            


                            <div className="col-md-6">

                                <div className="form-group mt-3">
                                    <label className="form-label">privacy_policy </label>
                                    <input className="form-control" type="text" name='privacy_policy' id='privacy_policy'

                                        value={obj.privacy_policy}
                                        onChange={(e) => setObj({ ...obj, privacy_policy: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group mt-3">
                                    <label className="form-label">term_condition </label>
                                    <input className="form-control" type="text" name='term_condition' id='term_condition'
                                        value={obj.term_condition}
                                        onChange={(e) => setObj({ ...obj, term_condition: e.target.value })}
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