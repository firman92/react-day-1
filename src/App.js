import React from "react";
import "./App.css";
import Header from './components/Header'
import Footer from './components/Footer'
import Section from'./components/Section'
import Title from './components/Title'
import Name from './components/Name'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Title title="Profile" />
        <Section>
          <Name />
        </Section>
        <Footer />
      </div>
    )
  }
}

export default App;