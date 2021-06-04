import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://nissinsolutions.com.br/api/wp-json/wp/v2/'
})