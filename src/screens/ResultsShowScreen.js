import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import yelp from '../api/yelp'

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null)
  const id = navigation.getParam('id')

  console.log(result)
  
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }

  useEffect(() => {
    getResult(id)
  }, [])

  return (
    <View>
      <Text>Results Show Screen</Text>
    </View>
  )
}

export default ResultsShowScreen

const styles = StyleSheet.create({})
