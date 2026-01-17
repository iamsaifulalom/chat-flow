import { env } from '@/config/env';
import axios from 'axios';

export const APIClientInstance = axios.create({
    baseURL: env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        "Content-Type": "application/json" 
    }
});