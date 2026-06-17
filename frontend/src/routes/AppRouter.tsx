import { Routes, Route } from "react-router-dom";

import Header from "../components/layout/Header";
import HomePage from "../pages/HomePage";
import Footer from "../components/layout/Footer";
import MenuPage from "../pages/MenuPage";
import CoffeeDetailPage from "../pages/CoffeeDetailPage";


export default function AppRouter() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/menu' element={<MenuPage />} />
                    <Route path='/menu' element={<MenuPage />} />
                    <Route path='/menu/:id' element={<CoffeeDetailPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}