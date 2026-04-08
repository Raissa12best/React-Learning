import ReactDom from 'react-dom/client'
import { Routes , Route,Link} from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Services from './components/services'
import Contact from './components/contacts'
import Dashboard from './components/dashboard'
import Notfound from './components/notfound'
export default function App() {
  return (
    <>
  

  <div className="page-content">
    <Routes>
      <Route path="/" element={<Navbar />} >
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path = "*" element = {<Notfound/>}/>
      </Route>
    </Routes>
  </div>

    </>
  )
}
