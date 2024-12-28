import Header from "./components/Header";
import { ChakraProvider } from "@chakra-ui/react";
import Landing from "./components/Landing";
import ProjectSection from "./components/Project";
import ".//styles/app.css";
import ContactSection from "./components/Contact";
import { AlertPrv } from "./context/Alert";
import Alert from "./components/AlertGl";
import Footer from "./components/Footer";
function App() {
  return (
    <ChakraProvider>
      <AlertPrv>
        <main>
          <Header />
          <Landing />
          <ProjectSection />
          <ContactSection />
          <Footer />
          <Alert />
        </main>
      </AlertPrv>
    </ChakraProvider>
  );
}

export default App;
