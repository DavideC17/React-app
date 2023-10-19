import React, { useEffect, useState } from "react";
import axios from "axios";



const DeletePage = () => {

    const [index, setIndex] = useState();

    const handleIndexChange = (e) => {
        setIndex(e.target.value)
    }

    const fetchData = async () => {
        try {
            const response = axios.delete("https://reqres.in/api/users/"+index)
            console.log((await response).status);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }

    return(
        <div className="container">
            <h1>DELETE USER</h1>
            <div className="mb-3">
                <input type="number" name="index" placeholder="inserisci id user" onChange={handleIndexChange}/>
            </div>
            <button type="button" className="btn btn-outline-danger" onClick={fetchData}>DELETE</button>
        </div>
    )

}


export default DeletePage;