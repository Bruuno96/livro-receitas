import React, {useState, useEffect} from 'react';

import { Navbar } from './component/Navbar';

import Baterry from '../../assets/battery_charging_full_24px.png'
import CarInfo from '../../assets/icons8-car-96 1.png'


import "./styles.css";
import axios from 'axios';


interface CardCarProps{
  plate: string
  image: string
  id: string
  name: string
  baterry: string
  km: string
}

function EmployeeDashboard() {

  const [objectCard, setObjectCar] = useState([{} as any]);

  useEffect(() =>{
    async function getDataObjectCar(){
      const response = await axios.get(`http://localhost:3333/cars?active=1`);
      setObjectCar(response.data as any);
    }
    getDataObjectCar();
  },[])

  return (
    <div>
      <Navbar/>
      <div className="card-list">
        {
          objectCard.map((car, key) => (
            <CardListCar 
              id={car.id}
              plate={car.license_plate}
              image={car.image_url}
              baterry={car.hv_battery_energy_level}
              name={"Carro"}
              km={car.trip_distance}
              key={key}
            />
          ))
        }
      </div>
    </div>
  );
}

export default EmployeeDashboard;

function CardListCar({
  id,
  plate,
  image,
  name,
  baterry,
  km
}:CardCarProps){

  return(
    <div id={id} className="card">
      <section className="label">
        <img className="icon-card" src={CarInfo} />
        <span className="plate">{plate}</span>
      </section>
      <div className="card-body">
        <img src={image} />
      </div>
      <div className="footer">
        <span className="car-name">{name}</span>
        <span className="line-footer">
          <img className="icon-card" src={Baterry} />
          <span>{baterry}% ~ {km}km</span>
        </span>
      </div>
    </div>
  );

}
{/* <div className="d-flex flex-column employee-container">
        <div className="section-info-container">
            {InfoList.map((info) => (
                <InfoCard 
                    title={info.title} 
                    icon={info.icon}
                    url={info.url}
                    quantity={info.quantity} 
                />
            ))}
        </div>
      </div> */}
