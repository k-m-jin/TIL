import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
  reducerPath: 'postApi',
  tagTypes: ['Posts'],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts',
      providesTags: [{ type: 'Posts', id: 'LIST' }],
    }),
    getPostById: builder.query({
      query: (postId) => `posts/${postId}`,
      providesTags: (result, error, postId) => [{ type: 'Posts', id: postId }],
    }),
    createPost: builder.mutation({
      query: ({ data }) => ({
        url: 'posts',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: (result) => (result ? [{ type: 'Posts', id: 'LIST' }] : []),
    }),
  }),
})

export const { useGetPostsQuery, useGetPostByIdQuery, useCreatePostMutation } = postApi
