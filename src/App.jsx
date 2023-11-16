import './App.css'
import { SideBar } from './components'
import { GlobalStyles } from './styles/Global'
import { ThemeProvider } from 'styled-components'
import { Link, createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import { DashBoard, InfoAnalysisPage, DomainAnalysisPage, WebContentAnalysisPage } from './Pages'

const theme = {
  palette: {
    primary: '#19A7CE',
    secondary: '#146C94',
    white: '#FFFFFF',
    black: '#000000',
    gray: '#4B4B4B',
    lightgray: '#828282',
  },
  indicator: {
    warning: '#FE1405',
    clean: '#00DA58',
    sus: '#A18800',
  },
  bg: '#F6F1F1',
  placeholder : '#5E5E5E;'
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} >
      <Route index element={ <DashBoard /> } />
      <Route path='info' element={ <InfoAnalysisPage /> } />
      <Route path='domain' element={ <DomainAnalysisPage /> } />
      <Route path='web-content' element={ <WebContentAnalysisPage /> } />
    </Route>
  )
)

function App() {

  return (
    <ThemeProvider theme={theme} >
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
    </ThemeProvider>
  )
}

export default App
