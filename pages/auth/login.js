import React,{useState,useEffect} from 'react'
import { useForm } from "react-hook-form";
import Api from '../../src/services/Api';
import { useRouter } from 'next/router';

const login = (props) => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const watchAllFields = watch();

console.log(watchAllFields);
//  const [data, setData] = useState({email:'',password:''})




let CallApi = new Api();
let router=useRouter();
 // upddate method for Api servce folder 
  const Loginhandler = async () => {
 let res=await CallApi.storeData(`login`,watchAllFields);
if (!res.error) {
localStorage.setItem('admin-token',res.data);
   props.setToken(res.data)
  router.push(`/`)    
  }
  }



  useEffect(() => {
   let token= localStorage.getItem('admin-token');
if (token&&token!=undefined) {
    router.push('/')
}
  }, [])





  
  return (
    <>
    <div className="pt-3"></div>
    <div className="my-5">
        <div className="row">
            <form onSubmit={handleSubmit(Loginhandler)}>

            <div className="col-md-6 offset-md-2">
             <div className="card">
                <div className="card-header">
                    <h5 className="card-title">Admin Login</h5>
                </div>
                <div className="card-body">
                    <div className='mb-3'>

                    <input 
                        {...register("email", { required: 'Email is required field' })}
                    type="email" name="email" 
                    // onChange={(e)=>{setData({...data,email:e.target.value})}}
                    className="form-control" placeholder='Email'
                    />
               {errors.email && <small className='text-danger'>{errors.email.message}</small>}

                    </div>

                    <div className='mb-3'>
                    <input
                     {...register("password", { required: 'Password is required field' })}
                    //  onChange={(e)=>{setData({...data,password:e.target.value})}}

                    type="password" name="password"  className="form-control" placeholder='Password'/>
      {errors.password && <small className='text-danger'>{errors.password.message}</small>}

                    </div>

                    <input type="submit" value="Login" className='btn btn-primary btn-block d-block w-100' />
                </div>
             </div>
            </div>
            </form>

        </div>
    </div>
    </>
  )
}

export default login