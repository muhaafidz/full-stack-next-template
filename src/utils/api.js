import axios from 'axios'

const errorHandler = (error) => {
  if (error.response) {
    console.log(error.response.data)
    console.log(error.response.status)
    console.log(error.response.headers)
  } else if (error.request) {
    console.log(error.request)
  } else {
    console.log('Error', error.message)
  }
  console.log(error.config)
}

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json',
    'X-Custom-Header': 'hellodunia',
  }
})

export {
  api,
  errorHandler,
}