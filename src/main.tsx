import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import GlobalStyle from './GlobalStyle'

//CONTAINERS IMPORT
import Header from './containers/Header'
import Hero from './containers/Hero'
import About from './containers/About'
import Portfolio from './containers/Portfolio'
import Location from './containers/Location'
import Contact from './containers/Contact'
import Footer from './containers/Footer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <Header />
    <Hero />
    <About />
    <Portfolio />
    <Location />
    <Contact />
    <Footer />
  </StrictMode>,
)
