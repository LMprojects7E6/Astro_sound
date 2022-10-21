import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "router";
import AuthProvider from "hooks/context/AuthProvider";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router></Router>
      </AuthProvider>
      <Toaster position="bottom-right" reverseOrder={false} />
    </QueryClientProvider>
  );
}
export default App;
