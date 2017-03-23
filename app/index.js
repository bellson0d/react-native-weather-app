/**
 * Created by bellson on 17-3-21.
 */
import React from 'react'

import dva from 'dva/mobile'

const app=dva();


import Router from './router'

import weather from './models/weather'

app.model(weather);
app.router( () => <Router/>);

export default app;