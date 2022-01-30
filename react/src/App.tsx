import LanguageSwitcher from "./LanguageSwitcher"
import { lang, langs } from './state'
function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-[#111]">
      <LanguageSwitcher show={false} absolute current={lang} langs={langs} onSwitch={()=> console.log}/>
    </div>
  )
}

export default App
