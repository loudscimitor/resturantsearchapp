import { useState,useEffect } from "react";
import yelp from "../api/yelp";

export default () =>{
    const [results, setResults] = useState([]);
    const[errorMessage, setErrorMessage] = useState(''); 
    //always think about state 
    //when u want to update anything on the screen 
  
    const searchApi = async(searchTerm) =>{
        console.log('Hi There !');
        try{
        const response =await yelp.get('/search', {
           params: {
                limit: 50,
                term: searchTerm,
                location:'san jose'
            }
        });
        setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
    };

    useEffect(() => {
        searchApi('pasta');
    },[]);

    return [searchApi, results, errorMessage];
};