import React from 'react';
import "./project_page.css"

class ProjectComponent extends React.Component{
  constructor(props) {
    super(props);
     
      }

  
  render () {
    return (
      <React.Fragment>
          <section>
              <div className="row">
                  <div className="col-lg-5">
                    <a href={}><img
                    class="img-responsive"
                    src={this.props.data.image}
                    width="400"
                    /></a>
                  </div>
                  <div className="col-lg-7">
                    <h2>{this.props.data.title}</h2>
                    <p>
                        {this.props.data.features}
                    </p>
                    <footer></footer>
                  </div>
              </div>
          </section>

      </React.Fragment>
    );
  }
}

export default ProjectComponent;