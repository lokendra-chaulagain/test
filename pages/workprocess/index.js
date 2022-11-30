import React,{useState,useEffect} from 'react'
import Title from '../components/Title';
import Add from '../components/Add';
import Api from '../../src/services/Api';
import Table from './table';


const index = () => {
  const [workprocess, setworkprocess] = useState([]);
  const [isDelete, setisDelete] = useState(0);

  let CallApi = new Api();

// Delete 
  const handleDelete=(e)=>{
    let id=e.target.getAttribute('value');
    CallApi.deleteData(`workprocess/delete/${id}`);
    setisDelete(1);

  }
  




 useEffect(() => {
  fetchData();
 }, [isDelete]);


 let fetchData=async()=>{
  let data= await CallApi.fetchData('workprocess');
  setisDelete(0);
  setworkprocess(data);

 }

  return (
    <>
  <Title title="workprocess List"/>
 
   <div className="row mt-3">
    <div className="col-md-12">
      <div className="card">
        <div className="card-body">

    <Add btnvalue="Add workprocess" btnlink="/workprocess/create"/>
  
   {workprocess &&<Table data={workprocess} handleDelete={handleDelete}/>}
        </div>
      </div>
    </div>
   </div>
   </>

  )
}

export default index