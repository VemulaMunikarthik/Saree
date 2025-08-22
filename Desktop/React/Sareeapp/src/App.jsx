import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SareeList from './SareeList';
import SareeDetail from './SareeDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1>Saree Showcase</h1>
        <Routes>
          <Route path="/" element={<SareeList />} />
          <Route path="/saree/:id" element={<SareeDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
