import { HttpClient } from '@utils';
import ky from 'ky';

export const api = HttpClient(
    ky.create({
        prefixUrl: process.env.NEXT_PUBLIC_API_URL,
    })
);
