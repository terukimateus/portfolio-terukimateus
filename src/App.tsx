import "./App.css";
import LandingPage from "./features/landing";
import { ThemeProvider } from "./providers/ThemeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
