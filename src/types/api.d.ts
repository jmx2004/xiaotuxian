// src/types/api.d.ts
export interface ApiResponse<T = any> {
  code: string
  msg: string
  result: T
}
