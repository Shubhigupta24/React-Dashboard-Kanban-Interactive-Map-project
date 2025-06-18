import './App.css'
import HeroSection from './components/HeroSection'
import Kanban from './components/Kanban'
import MapView from './components/MapView'

import Navbar from './components/Navbar'
import RecentSection from './components/RecentSection'
import SideBar from './components/SideBar'
import SocialData from './components/SocialData'

function App() {
  return (
    <main className='relative min-h-screen'>
      {/* Gradient Background */}
      <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-indigo-300/20 via-sky-300/20 to-pink-300/20 blur-3xl z-[-1]" />

      {/* Components */}
      <SideBar />
      <Navbar />
      <HeroSection />
      <RecentSection />
      <SocialData />
      <Kanban />
      <MapView/>
    </main>
  )
}

export default App
