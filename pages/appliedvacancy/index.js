import React,{useState,useEffect} from 'react'
import Title from '../components/Title';
import Add from '../components/Add';
import Api from "../../src/services/Api";
import Table from './table';


const index = () => {

  const [appliedvacancy, setappliedvacancy] = useState([]);
  const [isDelete, setisDelete] = useState(0);

  let CallApi = new Api();

// Delete 
  const handleDelete=(e)=>{
    let id=e.target.getAttribute('value');
    CallApi.deleteData(`appliedvacancy/delete/${id}`);
    setisDelete(1);

  }
  




 useEffect(() => {
  fetchData();
 }, [isDelete]);
 

 let fetchData=async()=>{
  let data= await CallApi.fetchData('appliedvacancy');
  // console.log(data);
  // console.log(data[3].vacancy[0].Jobtitle);
  setisDelete(0);
  setappliedvacancy(data);
 }

  return (
    <>
  <Title title="appliedvacancy List"/>
 
   <div className="row mt-3">
    <div className="col-md-12">
      <div className="card">
        <div className="card-body">

  
{appliedvacancy&&<Table data={appliedvacancy} handleDelete={handleDelete}/>}
        </div>
      </div>
    </div>
   </div>
   </>

  )
}

export default index