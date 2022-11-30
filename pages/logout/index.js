import React from 'react';
import { useRouter } from 'next/router';

const index = () => {


    let router=useRouter()
  const logout=async()=>{
    localStorage.removeItem('admin-token')
    // await props.setToken('')
    await  router.push('/auth/login')
  }


  return (
    <div>
        <button onClick={logout}>logout</button>
    </div>
  )
}

export default index