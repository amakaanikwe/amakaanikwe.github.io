import React from 'react';

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
                    src={}
                    width="400"
                    /></a>
                  </div>
                  <div className="col-lg-7">
                    <h2>{}</h2>
                    <footer></footer>
                  </div>
              </div>
          </section>

      </React.Fragment>
    );
  }
}

export default ProjectComponent;