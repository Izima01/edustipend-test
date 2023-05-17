import './App.css'
import Left from './components/Left'
import Right from './components/Right'

function App() {

  return (
    <div className='bg-slate-100 pt-6 px-[5%] w-full h-screen flex sm:flex-row flex-col justify-between items-center gap-6 sm:gap-0'>
        <Left />
        <Right />
    </div>
  )
}

export default App
