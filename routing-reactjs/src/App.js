import './App.css';
import {Route, Link, NavLink, Switch} from 'react-router-dom';
import Courses from './components/Courses';
import Blog from './components/Blog';

function App() {
  return (
    <div className='app'>
      {/* header */}
       <div className='header'>
          <h3>Menu (Dùng NavLink để tạo menu)</h3>
          <ul className='menu'>
              <li>
                <NavLink to="/Courses" activeClassName='active'>Danh sách khóa học</NavLink>
              </li>
              <li>
               <NavLink to="/blog" activeClassName='active'>Blog</NavLink>
              </li>
           </ul>
          <hr/>
       </div>
       {/* Content */}
       <h3>Content</h3>
          <div className='content'>
            <Switch>
              <Route path="/courses" component={Courses} />
              <Route path="/courses" component={Courses} />
              <Route path="/courses" component={Courses} />
              <Route path="/blog" component={Blog} />
            </Switch>
        </div>
        <hr/>
        {/* Footer */}
        <div className='footer'>
            <h3>Footer</h3>
        </div>
    
    </div>
  );
}

export default App;
