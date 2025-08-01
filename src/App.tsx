import { lazy, Suspense } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import { store } from '@app/store.js'

// Components 
const AppRoutes = lazy(() => import('@routes/Index.jsx'))
const PageLoader = lazy(() => import('@components/loaders/PageLoader'))

function App() {

  return (
    <Provider store={store} >
      <Suspense fallback={<PageLoader />}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Suspense>
    </Provider>
  )
}

export default App
