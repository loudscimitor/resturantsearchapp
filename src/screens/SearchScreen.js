import React,{useState} from 'react';//usestate is hook, provides spcl fucntionality to the
//useEffect is used to render one compenent whenever screen loads 
//useEffect(() => {}, []) pass in empty array for only once, add value to render multiple times
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from './components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from './components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return(
        //remove view element for react native to keep everything in the border
        //remove  scrollview if you want to have a single page app
        //just passing an empty container pretty much does the job.
        <>
            <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit ={() => searchApi(term)}
            />
           {errorMessage ? <Text> {errorMessage}</Text> :null}
            
            <ScrollView>
            <ResultsList results ={filterResultsByPrice('$')}title = "Cost Effecttive" />
            <ResultsList results ={filterResultsByPrice('$$')}title = "Bit Pricier" />
            <ResultsList results ={filterResultsByPrice('$$$')}title = "Big Spender" />
            </ScrollView>
            </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;

