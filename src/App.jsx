import { Routes, Route } from "react-router-dom";
import Navs from "./components/Navs"
import Herosection from "./pages/Herosection"
import Cards from "./pages/Products"
import Contacts from "./pages/Contacts"
import Footer from "./layout/footer"
import Sliders from "./pages/Sliders"
import Flashsale from "./pages/Flashsale"
import Joinmember from "./pages/Joinmember"

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
                <div className='container mx-auto px-10 py-10'>
                    <h1 className='text-start text-4xl font-bold py-5'>
                        Flashsale
                    </h1>
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
                    <h1 className='text-start text-4xl font-bold py-5'>
                        HOT Deals!
                    </h1>
                </div>
                <Cards />
            </section>
            <section id="contact">
                <Contacts />
            </section>
            <Footer />
        </div>
    )
}