import { BASE_URL } from "./config"
import axios from 'axios'

export async function loginUser(email, password) {
    const url = BASE_URL + '/api/auth/login'
    const body = {
        email, password
    }   
    const response = await axios.post(url, body) 
    return response
}