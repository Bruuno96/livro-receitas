import React, {useState, useEffect} from 'react';
import poinImage from '../../assets/PointsImage.png'

import { Navbar } from './component/Navbar';


import "./styles.css";
import axios from 'axios';

interface CardCarProps{
  datatime: string
  image: string
  id: string
  ruanumero: string
  rua: string
  cidade: string
}

function PointTela() {

  const [objectCard, setObjectCar] = useState([{} as any]);

  useEffect(() =>{
    async function getDataObjectCar(){
      const response = await axios.get(`http://localhost:3333/points?active=1`);
      setObjectCar(response.data as any);
    }
    getDataObjectCar();
  },[])

  return (
    <div>
      <Navbar/>
      <div className="card-list">
        {
          objectCard.map((point, key) => (
            <CardListCar 
              id={point.id}
              datatime={"Criado 26/07/2019 14:59:00"}
              image={poinImage}
              rua={point.name}
              ruanumero={point.address_id}
              cidade={point.trip_distance}
              key={key}
            />
          ))
        }
      </div>
    </div>
  );
}

export default PointTela;

function CardListCar({
  id,
  datatime,
  image,
  rua,
  ruanumero,
  cidade,
}:CardCarProps){

  return(
    <div id={id} className="card">
      <section className="label">
        <span className="datatime">{datatime}</span>
      </section>
      <div className="card-bodypoint">
        <img src={image} />
      </div>
      <div className="footer">
        <span className="data-name">RUA:{rua}</span>
        </div>

        <div className="footer">
        <span className="data-name">NUMERO:{ruanumero}</span>
        </div>

        <div className="footer">
        <span className="data-name">CIDADE:{cidade}</span>
        </div>

        <span className="line-footer">  
        
        </span>
        </div>
    
  );

}

