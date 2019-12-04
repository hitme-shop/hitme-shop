
import axios from "axios"

const DEV_API = axios.create({
<<<<<<< HEAD
   baseURL: "http://localhost:3100/v1/"
=======
   baseURL: "https://localhost:3100/v1/"
>>>>>>> e42084ff785f7e63647474b83b56b8db2f3866dd
})

const PRODUCTION_API = axios.create({
   baseURL: "https://hitme-shop-api.herokuapp.com/v1/"
})


//export default DEV_API


 export default PRODUCTION_API

