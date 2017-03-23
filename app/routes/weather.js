/**
 * Created by bellson on 17-3-23.
 */

import React from 'react'

import UI from '../components/Counter'

import {connect} from 'react-redux'

import {bindActionCreators} from 'redux'

const actions = {

}

class App extends React.Component {
  render(){

    const {pm25, pm10, temperature} = this.props

    const weatherProps = {pm25, pm10, temperature}

    return (
      <UI
        {...weatherProps}
      />
    )
  }
}

const mapProps = ({weather}) => ({...weather})

const mapActions = dispatch => ({
  actions: bindActionCreators({...actions},dispatch)
})

export default connect (mapProps,mapActions)(App)



