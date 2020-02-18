import React from 'react';
import ProjectComp from './ProjectComp.jsx'
import data from './projects_page_data.json'
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
      this.state = {
        data: data,
        
      }

  }
  render () {
    return (
      <React.Fragment>

        <ProjectComp data={this.state.data} />
      </React.Fragment>
    );
  }
}
export default App;