import React from 'react';
import data from './projects_page_data.json'
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
      this.state = {
        projectData: data,
        
      }

  }
  render () {
    return (
      <React.Fragment>

      </React.Fragment>
    );
  }
}
export default App;