import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Skill } from 'types/skill'

export const skillApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/skills',
  }),
  endpoints: (builder) => ({
    getSkills: builder.query<Skill[], void>({
      query: () => '',
    }),
  }),
})
export const { useGetSkillsQuery } = skillApi
