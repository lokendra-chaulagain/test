import React,{useState,useEffect} from 'react'
import Title from '../components/Title';
import Add from '../components/Add';
import Api from "../../src/services/Api";
import Table from './table';


const index = () => {

  const [search, setSearch] = useState('');
  const [clients, setclients] = useState([]);
  const [isDelete, setisDelete] = useState(0);

  let CallApi = new Api();

// Delete 
  const handleDelete=(e)=>{
    let id=e.target.getAttribute('value');
    CallApi.deleteData(`clients/delete/${id}`);
    setisDelete(1);

  }
  




 useEffect(() => {
  fetchData();
 }, [isDelete]);
 

 let fetchData=async()=>{
  let data= await CallApi.fetchData('clients');
  console.log(data);
  setisDelete(0);
  setclients(data);
 }

  return (
    <>
  <Title title="clients List"/>
 
   <div className="row mt-3">
    <div className="col-md-12">
      <div className="card">
        <div className="card-body">

    <Add btnvalue="Add clients" btnlink="/clients/create"/>
  
{clients&&<Table data={clients} handleDelete={handleDelete}/>}
        </div>
      </div>
    </div>
   </div>
   </>

  )
}

export default index