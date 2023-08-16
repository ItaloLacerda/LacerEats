import axios from 'axios'
import config from '../../config/index'

const { apiBaseURL } = config

export const axiosClient = axios.create({
  baseURL: apiBaseURL
})
