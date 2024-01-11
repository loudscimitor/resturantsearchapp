//easier than fetch 
//error handeling gets better 
//Fetch - requires to write a lot of wrapper code 

import axios from "axios";


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:
    {
        Authorization: 'Bearer l7l0YqijFma8PACNf4oAsW0PWYpM8SXYlZxNY_Y75kAmiRDFBCharUqd4lDLkNBjcq20PiF7Nj6FZz62XGoRXYt9xmvW_S0aUz31qtwNNKKOL3MiIGFxlsUj3difZXYx' 
    }
});

