import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ResumeDocument from './components/ResumeDocument';

export default function AppRouter() {
  return (
    <BrowserRouter basename="/resume">
      <Routes>
        <Route path="/" element={<ResumeDocument />} />
      </Routes>
    </BrowserRouter>
  );
}
