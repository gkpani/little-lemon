import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";

import { Routes, Route } from "react-router-dom";


import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Nav />
      
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/booking"
          element={<BookingPage />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;





