import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/GetPage.css';

const GetPage = () => {

    const [data, setData] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://reqres.in/api/users?page=2');
            console.log(response.data.data)
            setData(response.data.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);


    return (
        <div className='container-cards'>
            {data && data.map((item, index) => (
              <div key={item.id} className="card" style={{ width: "calc(100% / 4)", margin: "24px" }}>
                <img src={item.avatar} className="card-img-top" />
                <div className="card-body" style={(index % 2 === 0) ? {backgroundColor: "white"} : {backgroundColor: "silver"}}>
                  <h5 className="card-title">{item.first_name} {item.last_name}</h5>
                  <p className="card-text">Email: {item.email}</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            ))}
        </div>
    )
}


export default GetPage;