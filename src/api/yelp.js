import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer AnZCzQpjsjJUbFa_FXCUGd7wvDvKERCNGhBYU7tAxY5XtgQfCawMF9sRqvIHuEro-3uIdZYDYibZEOy-AiRcfX95-fKSsBcJHP31o2Zo9-QcQ-6MC_vsT-ZP-XGGX3Yx'
  }
})
