
import axios from "axios"

const DEV_API = axios.create({
   baseURL: "https://localhost:3100/v1/"
})

const PRODUCTION_API = axios.create({
   baseURL: "https://hitme-shop-api.herokuapp.com/v1/"
})

//<<<<<<< HEAD
export default PRODUCTION_API
//=======

// export default PRODUCTION_API
// >>>>>>> dafc56b174540fd135faee2cb023148d732a0491
