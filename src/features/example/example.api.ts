import { api } from "../../lib/axios";

export const getExamples = async () => {
  const { data } = await api.get("/examples");
  return data;
};
