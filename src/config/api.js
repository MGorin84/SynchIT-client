import axios from 'axios'

// Create an axios instance
export default axios.create({
  // baseURL: 'https://calm-mesa-59670.herokuapp.com/' 
  baseURL: 'http://localhost:3030',
  timeout: 5000,
  withCredentials: true
})