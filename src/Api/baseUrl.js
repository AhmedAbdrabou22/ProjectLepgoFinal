import axios from "axios"


const baseURL = axios.create({baseURL: 'https://api.lepgo.online'} , {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
});


export default baseURL;