import axios from "axios";

interface Info {
    id: string;
    title: string;
    icon: string;
    quantity: number;
    url: string;
}

export async function getcountdata(){
    const online = await axios.get(`http://localhost:3333/cars?active=1`);

    const offline = await axios.get(`http://localhost:3333/cars?active=0`);

    let data = {
        online: online.data.length,
        offline: offline.data.length
    };
    
    return  data;
}


export const InfoList = async () => {
    const count = await getcountdata();
    
    return [
        {
            id: "online-vehicles",
            title: "Veiculos on-line",
            icon: "assets/icons/vehicle-online.png",
            quantity: await count.online,
            url: "/veiculos-on-line",
        }, 
        {
            id: "offline-vehicles",
            title: "Veiculos offline",
            icon: "assets/icons/vehicle-offline.png",
            quantity: await count.offline,
            url: "/veiculos-offline",
        }, 
        {
            id: "points",
            title: "Points",
            icon: "assets/icons/points-online.png",
            quantity: 98,
            url: "/points",
        },
        {
            id: "offline-points",
            title: "USERS",
            icon: "assets/icons/User.png",
            quantity: 98,
            url: "",
        },
        {
            id: "on-road",
            title: "Em corrida",
            icon: "assets/icons/on-road.png",
            quantity: 98,
            url: "",
        }
    ]
}