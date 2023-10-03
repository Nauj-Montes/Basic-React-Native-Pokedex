import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const ReactQueryWrapper = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryWrapper;