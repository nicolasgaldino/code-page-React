import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { HomePage } from './components/HomePage/HomePage';
import { Orcamento } from './components/Orcamento/Orcamento';
import { About } from './components/About/About';
import { ServicesPage } from './components/ServicesPage/ServicesPage';
import { Login } from './components/Login/Login';
import { Cadastro } from './components/Cadastro/Cadastro';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/orcamento" element={<Orcamento />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
