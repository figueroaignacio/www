const isLocal = process.env.NODE_ENV === 'development';

export const API_ENPOINT = isLocal ? 'http://localhost:3000/api' : process.env.NEXT_PUBLIC_API_URL!;
