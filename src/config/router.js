import React from 'react'
import {
   Route,
   Redirect
}from 'react-router-dom'

import TopicList from '../pages/topicList/index.jsx'
import DetailList from '../pages/detailList/index.jsx'
export default () => [
    <Route path="/" render={()=><Redirect to="list" />} exact />,
    <Route path="/list" component={TopicList} />,
    <Route path="/detail" component={DetailList} />
]