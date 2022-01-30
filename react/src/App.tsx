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

      </main>
      <Footer />
    </div>
  )
}

export default App
