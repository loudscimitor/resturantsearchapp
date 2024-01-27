import React,{useState, useEffect } from 'react';//usestate is hook, provides spcl fucntionality to the
//useEffect is used to render one compenent whenever screen loads 
//useEffect(() => {}, []) pass in empty array for only once, add value to render multiple times
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from './components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    return(
        <View>
            <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit ={() => searchApi(term)}
            />
           {errorMessage ? <Text> {errorMessage}</Text> :null}
            <Text>We have found {results.length} results</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;

