export type TLoading = "idle" | "succeeded" | "failed" | "pending";

export type TFetchInfo<T> = {
  records:{
    results:number,
    metadata:{
      currentPage: number,
      numberOfPages: number,
      limit: number,
      nextPage?: number
    },
    data:T[]
  }
  loading:TLoading,
  error:null | string
}