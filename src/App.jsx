import Header from './components/header.jsx'
import Main from './components/main.jsx'
import Footer from './components/footer.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fontsource-variable/open-sans/wght.css';
import style from "./App.css"

function App() {
  return (
    <>
    <body className="container row m-auto">
      <Header />
      <Main />
      <Footer /> 
    </body> 
    </>
  )
}

export default App
