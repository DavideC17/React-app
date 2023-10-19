import React, { useEffect, useState } from "react";
import axios from "axios";

const UpdatePage = () => {

    const [data, setData] = useState();
    const [index, setIndex] = useState();

    const fetchData = async () => {
        try {
          const response = await axios.get('https://reqres.in/api/users/'+index);
          console.log(response.data.data)
          setData(response.data.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    const handleIndexChange = (e) => {
       setIndex(e.target.value)
    }

    const handleUserChange = (e) => {
        const{ name, value }= e.target;
        setData(prevUser => ({...prevUser, [name] : value}));
        console.log(data);
    }

    const updateUsers = async () => {
        try {
            const response = axios.put("https://reqres.in/api/users/"+index, data);
            console.log((await response).status);
        } catch (e) {
            console.error('Error fetching data:', e);
        }

    }


    return(
        <div className="container">
            <h1>UPDATE USER</h1>
            <div className="mb-3">
                <input type="number" name="index" placeholder="inserisci id user" onChange={handleIndexChange}/>
            </div>
            <button type="button" className="btn btn-outline-warning" onClick={fetchData}>CERCA</button>
            {(data != null && index != null) && (
                <div className="container" style={{marginTop : "24px"}}>
                    <div className="mb-3">
                        <input name="avatar" placeholder={data.avatar} onChange={handleUserChange}/>
                    </div>
                    <div className="mb-3">
                        <input name="first_name" placeholder={data.first_name} onChange={handleUserChange}/>
                    </div>
                    <div className="mb-3">
                        <input name="last_name" placeholder={data.last_name} onChange={handleUserChange}/>
                    </div>
                    <div className="mb-3">
                        <input name="email" placeholder={data.email} onChange={handleUserChange}/>
                    </div>
                    <button type="button" className="btn btn-outline-warning" onClick={updateUsers}>UPDATE</button>
                </div>
            )}
        </div>
    )
}


export default UpdatePage;