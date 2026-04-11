import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import Academia from "./pages/Academia";
import UniversoSolux from "./pages/UniversoSolux";
import RefugioSolux from "./pages/RefugioSolux";
import Blog from "./pages/Blog";
import Contato from "./pages/Contato";
import Ikigai from "./pages/Ikigai";
import Privacidade from "./pages/Privacidade";
import Layout from "./components/Layout";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/quem-somos" component={QuemSomos} />
        <Route path="/academia" component={Academia} />
        <Route path="/universo-solux" component={UniversoSolux} />
        <Route path="/refugio-solux" component={RefugioSolux} />
        <Route path="/blog" component={Blog} />
        <Route path="/contato" component={Contato} />
        <Route path="/ikigai" component={Ikigai} />
        <Route path="/privacidade" component={Privacidade} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
