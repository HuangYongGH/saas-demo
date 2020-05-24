import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Index from '../pages/index/index';
import NewPage from '../pages/newPage/index';
 const Root = () => (
     <Router>
        <Route path="/" component={NewPage}></Route>
        {/* <Route path="/new" component={NewPage}></Route> */}
     </Router>
 );
 export default Root;