import React from 'react'

import Helmet from 'components/Helmet'
import Header from 'components/Header'
import Windmill from 'components/Windmill'

import 'styles/index.sass'


class App extends React.Component {

  render = () =>
    <>
      <Helmet />
      <div className="App">

        <Header />

        <Windmill />

      </div>
    </>
}

export default App
