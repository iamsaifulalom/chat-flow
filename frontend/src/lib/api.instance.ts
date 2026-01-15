import axios from 'axios';

export const APIClientInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000",
    headers: {
        "Content-Type": "application/json" 
    }
});