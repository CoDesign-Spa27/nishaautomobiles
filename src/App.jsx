import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage"
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
// import Services from "./pages/Services";

function App() {

   

  return (
<BrowserRouter>
<Routes>
   
  <Route path="/" element={<LandingPage />}>
          <Route index path="/home" element={<LandingPage />} />
        </Route>
        <Route path="/about" element={<AboutUs />} />
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/contact" element={<ContactUs />} />
</Routes>
 </BrowserRouter>
  )
}

export default App
