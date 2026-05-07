import { Routes, Route } from "react-router-dom";
import Navs from "./components/Navs.jsx";
import Herosection from "./pages/Herosection.jsx";
import Cards from "./pages/Products.jsx";
import Contacts from "./pages/Contacts.jsx";
import Footer from "./layout/footer.jsx";
import Sliders from "./pages/Sliders.jsx";
import Flashsale from "./pages/Flashsale.jsx";
import Joinmember from "./pages/Joinmember.jsx";

export default function App() {
  return (
    <div id="top">
      <Routes>
        <Route path="/" element={<Navs />} />
        <Route path="/Joinmember" element={<Joinmember />} />
      </Routes>
      <section id="slider">
        <Sliders />
      </section>
      <section id="flashsale">
        <div className="container mx-auto px-10 py-10">
          <h1 className="text-start text-4xl font-bold py-5">Flashsale</h1>
        </div>
        <div className="flex justify-center items-center">
          <Flashsale />
        </div>
      </section>
      <section id="home">
        <Herosection />
      </section>

      <section id="cards">
        <div className="container mx-auto px-10">
          <h1 className="text-start text-4xl font-bold py-5">HOT Deals!</h1>
        </div>
        <Cards />
      </section>
      <section id="contact">
        <Contacts />
      </section>
      <Footer />
    </div>
  );
}
