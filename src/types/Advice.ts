export interface Advice {
  slip: {
    advice: string;
  };
}

export interface GetAdviceResponse {
  data: Advice;
}
