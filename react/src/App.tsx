import Banner from "./Banner"
import Footer from "./Footer"
import LanguageSwitcher from "./LanguageSwitcher"
import MobileNav from "./MobileNav"
import { lang, langs } from './state'
function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-[#111]">
      <LanguageSwitcher show={false} absolute current={lang} langs={langs} onSwitch={()=> console.log}/>
      <MobileNav yAxis={30}/>
      <main className="grow">
        <Banner
          large 
          hero="https://file.swayechateau.com/view/swayechateauZJpQjF4EPOj0MVC1e0t223"
          title="I am Swaye Chateau"
          subtitle="Photographer / Vlogger / Software Engineer / Investor"
        />
      </main>
      <Footer />
    </div>
  )
}

export default App
