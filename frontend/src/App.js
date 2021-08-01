import React from 'react'
import { Container } from 'react-bootstrap'
// import components
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
    <>
      <Header />
      {/* py-3 is a bootstrap className that gives us padding on top and bottom */}
      <main className="py-3">
        {/* Container centers the content of the page */}
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
