import "./App.css";
import Navigation from "./components/Navigation";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Navigation />
      </QueryClientProvider>
    </div>
  );
};

export default App;
