import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Navbar from './components/layout/Navbar'

function AppContent() {
  return (
    <div>
      <Navbar />
      <main className="pt-14 md:pt-20">
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

function App() {

  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
