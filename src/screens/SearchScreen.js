import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ResultsList from '../components/ResultsList'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchApi, results, errorMessage] =useResults()
  
  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price === price
    })
  }
  
  return (
    <>
      <SearchBar 
        term={term} 
        onTermChange={setTerm} 
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList 
          results={filterResultsByPrice('$')} 
          title='Cost Effective'
        />
        <ResultsList 
          results={filterResultsByPrice('$$')} 
          title='Big Pricier'
        />
        <ResultsList 
          results={filterResultsByPrice('$$$')} 
          title='Big Spender'
        />
      </ScrollView>
      
    </>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})
