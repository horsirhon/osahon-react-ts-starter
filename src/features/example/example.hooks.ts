import { useQuery } from "@tanstack/react-query";
import { getExamples } from "./example.api";

export const useExamples = () =>
  useQuery({
    queryKey: ["examples"],
    queryFn: getExamples,
  });
