import axios from 'axios'

// Create an axios instance
export default axios.create({
  baseURL: 'https://calm-mesa-59670.herokuapp.com/', 
  //baseURL: 'http://localhost:3030',
  timeout: 50000,
  withCredentials: true
})