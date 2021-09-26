import { Navigation } from "./components/navigation/Navigation";
import { Routes } from "./routes/Routes";
import { UserProvider } from "./shared/provider/UserProvider";
import './shared/globals/Style.css'
import { Footer } from "./components/footer/Footer";


function App() {
  return (
    <UserProvider>
      <Routes>
        <Navigation/>
      </Routes>
      <Footer/>
    </UserProvider>
  );
}

export default App;
