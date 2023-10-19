import axios from "axios";
import React, { useState } from 'react';
import './css/PostPage.css'

const PostPage = () => {

    const [ json, setJson] = useState({
        avatar: "",
        email: "",
        first_name: "",
        last_name: ""
    })

    const fetchData = async () => {
        try {
          const response = await axios.post('https://reqres.in/api/users', json);
          console.log(response.status)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      const handleInputChange = (e) => {
        const {name, value} = e.target;
        setJson(prevJson => ({...prevJson, [name] : value}));
        console.log(e.target.value);
        console.log(json);
      }

    return(
        <div className="container">
            <h1>ADD USER</h1>
            <div className="mb-3">
                <input name="avatar" placeholder="avatar" onChange={handleInputChange}/>
            </div>
            <div className="mb-3">
                <input name="first_name" placeholder="nome" onChange={handleInputChange}/>
            </div>
            <div className="mb-3">
                <input name="last_name" placeholder="cognome" onChange={handleInputChange}/>
            </div>
            <div className="mb-3">
                <input name="email" placeholder="email" onChange={handleInputChange}/>
            </div>
            <button type="button" className="btn btn-outline-success" onClick={fetchData}>ADD</button>
        </div>
    )
}

export default PostPage;