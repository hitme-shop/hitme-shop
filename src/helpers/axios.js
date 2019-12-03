
import axios from "axios"

const DEV_API = axios.create({
   baseURL: "https://hitme-shop-api.herokuapp.com/v1/"
})

const PRODUCTION_API = axios.create({
   baseURL: "https://hitme-shop-api.herokuapp.com/v1/"
})

export default DEV_API