import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "router";
import GeneralProvider from "context/GeneralProvider";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GeneralProvider>
        <Router></Router>
      </GeneralProvider>
      <Toaster position="bottom-right" reverseOrder={false} />
    </QueryClientProvider>
  );
}
export default App;
