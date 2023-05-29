import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FindingPage from './@pages/findingPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FindingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
