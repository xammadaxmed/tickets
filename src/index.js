import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import TicketForm from './views/TicketForm';
import HDLayout from './layouts/HDLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './views/NotFound';
import Dashboard from './views/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <HDLayout>
      <Routes>

        <Route path="/" element={<Dashboard />} />
        <Route path="/create-ticket" element={<TicketForm />} />

        <Route path="*" element={<NotFound/>} />

      </Routes>
    </HDLayout>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
