import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import AppState from './js/AppState'
import TopBar from './component/TopBar/TopBar'
import Introduction from './component/Introduction/Introduction'
import WorkExperience from './component/WorkExperience/WorkExperience'
import WorkSkills from './component/WorkSkills/WorkSkills'
import WorkProject from './component/WorkProject/WorkProject'
import WorkContact from './component/Contact/WorkContact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>


      <TopBar />

      <Introduction />


      {/* <WorkExperience /> */}

      <WorkSkills />

      <WorkProject />

      <WorkContact />
    </div>
  )
}

export default App
