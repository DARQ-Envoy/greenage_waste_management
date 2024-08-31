import './App.css'
import Header from './mains/header'
import Services from './mains/services'
import Problem from './mains/problem'
import { Provider } from 'react-redux'
import store from './Redux/store'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from './mains/footer'
function App() {
gsap.registerPlugin(ScrollTrigger);

// const allServices: Array<ServiceType> = [
//   {
//     imageSrc:
//   }
// ] 
  return (
    <Provider store={store}>
           <main className='bg-theme'>
        <Header/>
        <Problem/>
        <Services/>
        </main>
        <Footer/>
    </Provider>
 
  )
}

export default App






