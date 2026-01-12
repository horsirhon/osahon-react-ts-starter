import { useExamples } from "./example.hooks";

export const ExampleView = () => {
  const { data, isLoading } = useExamples();

  if (isLoading) return <p>Loading...</p>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};
