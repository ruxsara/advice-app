import { GetAdviceResponse } from "../types/Advice";
import { axiosInstance } from "./axios.config";

export const getAdvice = async (setAdvice: any, setCount: any) => {
  const response: GetAdviceResponse = await axiosInstance.get("advice");
  const { data } = response;
  setAdvice(data.slip.advice);
  setCount((c: number) => c + 1);
};
