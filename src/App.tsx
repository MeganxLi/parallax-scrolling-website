import { useState } from 'react'

import Home from './pages/Home'
import Loading from './pages/Loading'

const App = () => {
  const [page, setPage] = useState<Boolean>(false)
  return (
    <div className="App">
      {
        page
          ? <Home />
          : <Loading switchPage={(finish) => setPage(finish)} />

      }

    </div>
  )
}

export default App
