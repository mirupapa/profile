import { configureStore } from '@reduxjs/toolkit'

import { skillApi } from 'service/skill'

export const store = configureStore({
  reducer: {
    [skillApi.reducerPath]: skillApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(skillApi.middleware),
})
