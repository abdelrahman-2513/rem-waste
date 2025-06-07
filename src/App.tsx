import { BrowserRouter as Router } from "react-router-dom";
import { DarkModeProvider } from "./contexts/Darkmode";
import AppRoutes from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}

        <DarkModeProvider>
          <AppRoutes />
        </DarkModeProvider>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
