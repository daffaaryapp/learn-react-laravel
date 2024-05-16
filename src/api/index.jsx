//import axios
import axios from "axios";

const Api = axios.create({
    //set default endpoint
    baseURL: 'http://localhost:8000'
})

export default Api