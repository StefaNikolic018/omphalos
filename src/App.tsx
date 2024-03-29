import { BrowserRouter } from 'react-router-dom'

import './App.css'
import Router from './Router'
import GlobalContextProvider from './Context/Global/GlobalContext'
import Content from './Components/Shared/Content'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalContextProvider>
          <Content>
            <Router />
          </Content>
        </GlobalContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
