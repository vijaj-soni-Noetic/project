import React from 'react';
import './App.css';
import Card from './Card';

class Courselist extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
     
    }
  }
  componentDidMount() {

    const url = "http://localhost:4000/api/v1/tvSeries/";
    fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
           
        },
  
    }).then(response => response.json()).then(posts => {
      this.setState({ posts: posts.data });
      console.log("------", posts)
      
    })
  
  }
  render(){
    return (
      <div>
        <div className="my-5">
          <h1 className="tab-center">TV Series List</h1>
        </div>
        <div className="container-fluid mb-5">
          <div className='row'>
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                {
                  this.state.posts.map((val, i) => {
                    return <Card
                      key={i}    
                      name={val.name}
                      descriptions={val.summary}
                      imdb_rating={val.imdb_rating}
                      genre={val.genre_id.name}
                    />
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Courselist;
