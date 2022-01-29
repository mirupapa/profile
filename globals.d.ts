/* eslint-disable no-unused-vars */
/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test'

    readonly NEXT_PUBLIC_SKILL_API_URL: string

    readonly NEXT_PUBLIC_SKILL_API_KEY: string
  }
}
