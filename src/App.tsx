import { toast } from "sonner";

const App = () => {
  // toast.success("Tailwind v4 is working 🚀");
  toast("Welcome to the Osahon React Starter Template!");

  return (
    <div className="p-6 text-red-500 font-semibold">
      Tailwind v4 is working 🚀
    </div>
  );
};

export default App;
