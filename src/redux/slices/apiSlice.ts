import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: 'http://localhost:5050', credentials: 'include' });

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User', 'Document'],
    endpoints: (builder) => ({})
});