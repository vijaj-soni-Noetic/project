import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { NavLink, withRouter } from 'react-router-dom';


    class AddCourse extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
              posts: [],
              teams: [],
              name: "",
              summary: "",
              imdb_rating: "",
              nameError: "",
              summaryError: "",
              imdb_ratingError: "", 
              genre:""
           
          }
        }
       
        onSubmit = e => {
            e.preventDefault();
                let url = "http://localhost:4000/api/v1/tvSeries";
               
                let data = this.state;
                fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                         },
                    body: JSON.stringify({
                        name: data.name,
                        summary: data.summary,
                        imdb_rating: data.imdb_rating,
                        genre_id: data.genre
                    })
                }).then((result) => {
                    result.json().then((resp) => {
                        alert(resp.status);
                    })
    
                })
                    .catch(err => {
                        console.error(err)
                    })
    
        };
        
    componentDidMount() {
     
        var course_name = this.props.match.params.id;
      const url = "http://localhost:4000/api/v1/genre";
      fetch(url, {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
          },
          
      }).then(response => response.json()).then(data => {
          console.log(data.data);
          let teamsFromApi = data.data.map(team => {  return { value: team._id, display: team.name  } })
         
          this.setState({ teams: [{ value: '', display: 'Select' }].concat(teamsFromApi) });
          
    }).catch(error => {
        console.log(error);
    });
    
        }
        render() {
            return (
                <form className="row" noValidate autoComplete="off">
                <div className="col-md-12 col-12 mt-4">
                    <div className="form-row">
                        <div className="col-md-4 col-12 mt-0">
                            <label htmlFor="exampleFormControlInput1"
                                style={{ fontFamily: "'Poppins', sans-serif", float: "right", fontStyle: "normal", fontSize: "16px", color: "#000000", marginRight: "30px" }}> Name</label>
                        </div>
                        <div className="col-md-4 col-12 mt-0">
                            <input type="text" className="form-control" value={this.state.name} name="name"
                                onChange={(data) => { this.setState({ name: data.target.value }) }}
                                placeholder="Name" required />
                        </div>
                        <div className="col-md-4 col-12 mt-0">
                            <label htmlFor="exampleFormControlInput1" style={{color:"red"}}  >{this.state.nameError}</label>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-12 mt-4">
                    <div className="form-row">
                        <div className="col-md-4 col-12 mt-0">
                            <label htmlFor="exampleFormControlInput1"
                                style={{ fontFamily: "'Poppins', sans-serif", float: "right", fontStyle: "normal", fontSize: "16px", color: "#000000", marginRight: "30px" }}>Summary</label>
                        </div>
                        <div className="col-md-4 col-12 mt-0">
                            <input type="text" className="form-control" value={this.state.summary} name="summary"
                                onChange={(data) => { this.setState({ summary: data.target.value }) }}
                                 required />
                        </div>
                        <div className="col-md-4 col-12 mt-0">
                            <label htmlFor="exampleFormControlInput1" style={{color:"red"}}  >{this.state.summaryError}</label>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-12 col-12 mt-4">
                    <div className="form-row">
                        <div className="col-md-4 col-12 mt-0">
                            <label htmlFor="exampleFormControlInput1"
                                style={{ fontFamily: "'Poppins', sans-serif", float: "right", fontStyle: "normal", fontSize: "16px", color: "#000000", marginRight: "30px" }}>IMDB Rating</label>
                        </div>
                        <div className="col-md-4 col-12 mt-0">
                            <input type="text" className="form-control" value={this.state.imdb_rating} name="imdb_rating"
                                onChange={(data) => { this.setState({ imdb_rating: data.target.value }) }}
                                 required />
                        </div>
                        <div className="col-md-4 col-12 mt-0">
                            <label htmlFor="exampleFormControlInput1" style={{color:"red"}}  >{this.state.imdb_ratingError}</label>
                        </div>
                    </div>
                </div>
               
               
                <div className="col-md-12 col-12 mt-1">
                    <div className="form-row">
                        <div className="col-md-4 col-12 mt-2"><br />
                            <label htmlFor="exampleFormControlInput1"
                                style={{ fontFamily: "'Poppins', sans-serif", float: "right", fontStyle: "normal", fontSize: "16px", color: "#000000", marginRight: "30px" }}>Genre</label>
                        </div>
                        <div className="col-md-4 col-12 mt-2">
                           
                            <select value={this.state.genre} className="custom-select mt-3"
                                onChange={(e) => this.setState({ genre: e.target.value })}>
                                {this.state.teams.map((team) => <option key={team.value} value={team.value}>{team.display}</option>)}
                            </select>
                        </div>
                        
                    </div>
                </div>
               
                <div className="col-md-12 col-12 mt-1">
                    <div className="form-row">
                        <div className="col"><br />
                            <NavLink className="prepend-icon" to="/">
                                    <Button color="default"
                                style={{marginLeft:"40%"}}
                                    >cancel</Button>
                            </NavLink>
                            <Button color="black"
                                onClick={(e) => { this.onSubmit(e) }}
                                style={{ background: "black", color: "yellow", marginRight: "40%", float: "right" }}>Submit</Button>
                        </div>
                    </div>
                </div>

              
            </form>
            );
        }
};
export default AddCourse;