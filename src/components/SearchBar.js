import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather name='search' style={styles.iconStyle}/>
      <TextInput 
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.inputStyle} 
        placeholder='Search'
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 10,
  },
  iconStyle: {
    fontSize: 40,
    alignSelf: 'center'
  },
  inputStyle: {
    marginLeft: 10,
    fontSize: 18,
    flex: 1
  }
})
