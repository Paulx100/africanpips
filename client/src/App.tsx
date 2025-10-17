import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import ForexTrading from "@/pages/ForexTrading";
import Cryptocurrency from "@/pages/Cryptocurrency";
import PropFirms from "@/pages/PropFirms";
import Tools from "@/pages/Tools";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/forex" component={ForexTrading} />
      <Route path="/crypto" component={Cryptocurrency} />
      <Route path="/prop-firms" component={PropFirms} />
      <Route path="/tools" component={Tools} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
