import axios from "axios"


const baseURL = axios.create({
    baseURL: 'https://api.lepgo.online',
    headers: {
        'Authorization': 'Bearer 1281|h5voZML98IH0eQlJBLRurAW4wFMzDPoyXZF8e7pe',
    },
});


export default baseURL;