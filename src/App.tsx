import logo from './assets/react.svg'
import { Header } from "./components/Header";
import { Profile } from './pages/Profile';


export function App() {

   return (
      <div className=''>
         <Header logo={logo} />
         <Profile userName='ismaelsoares' />
      </div>
   )
}

