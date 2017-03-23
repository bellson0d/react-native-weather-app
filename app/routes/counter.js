/**
 * Created by bellson on 17-3-21.
 */
import React from 'react'

import UI from '../components/Counter'

import {connect} from 'react-redux'

import {bindActionCreators} from 'redux'

class App extends React.Component{
  render(){
    const {counter,dispatch} = this.props

    function setInterval(){
      dispatch({type:'counter/start'})
    }

    function reset() {
      dispatch({type:'counter/reset'})
    }

    return (
      <UI
        counter={counter}
        setInterval={setInterval}
        reset={reset}
      />
    )
  }
}

const mapProps = ({counter}) => ({counter})

export default connect(mapProps)(App);

