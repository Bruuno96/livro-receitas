import React, { useEffect, useState } from 'react';

import { Navbar } from './component/Navbar';
import { InfoCard } from '../../components/InfoCard';
import { Map } from '../../components/Map';

import { InfoList } from "./data";
import "./styles.css";

function EmployeeDashboard() {

  const [infoListData,setInfoListData] = useState([{} as any]);

  useEffect(() =>{
    async function getInfo(){
      const data = await InfoList();
      setInfoListData(data);
    }
    getInfo();
  },[])

  return (
    <div>
      <Navbar/>
      <div className="d-flex flex-column employee-container">
      
        <div className="section-info-container">
            {infoListData.map((info) => (
                <InfoCard 
                    title={info.title} 
                    icon={info.icon}
                    url={info.url}
                    quantity={info.quantity} 
                />
            ))}
        </div>

        <div className="section-map-container">
          <Map />
        </div>
      </div>
      </div>
  );
}

export default EmployeeDashboard;
