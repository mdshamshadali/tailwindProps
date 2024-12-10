import {} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card1  from './components/Card1'

function App() {
   

  return (
    <>
     <h1 className=' bg-green-400 text-blue-700 
     p-4 rounded-xl mb-4 '>Tailwind Testing</h1>

<figure className="md:flex bg-slate-100 mt-4 rounded-xl p-8 md:p-0 dark:bg-slate-800 ">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://i.ytimg.com/vi/5UPdRF5xpVM/maxresdefault.jpg" alt="" width="384" height="512" /> 
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4"> 
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>

 <Card1 userName = "Chai aur Code" btnText = "Click Me!" />
 <Card1  userName = "Saim Aur code" btnText = "Visit Me!"/>
  </>   

  )
}

export default App
