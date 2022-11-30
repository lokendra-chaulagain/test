
import React,{useState,useEffect} from 'react';
import Table from './table';
import Title from '../components/Title';
import Api from "../../src/services/Api"



let CallApi = new Api();


const index = () => {

const [subscriber, setSubscriber] = useState([]);

let fetchData=async()=>{
  let data= await CallApi.fetchData('subscriber');
  console.log(data)
  setSubscriber(data);
 }

 useEffect(() => {
  fetchData();
 }, []);
 
  

  return (
    <>
  <Title title="ALl Subscriber "/>
 
   <div className="row mt-3">
    <div className="col-md-12">
      <div className="card">
        <div className="card-body">

        {subscriber&& <Table data={subscriber}/>}
        
        </div>
      </div>
    </div>
   </div>
   </>

  )
}

export default index