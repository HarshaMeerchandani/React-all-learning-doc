import React, { Component } from "react";

class Actors extends Component {
  constructor() {
    super();
    this.state = {
      Actors: [
        {
          name: "Amitabh bacchan",
          pic: "https://timesofindia.indiatimes.com/thumb/msid-66822576,imgsize-182380,width-800,height-600,resizemode-4/66822576.jpg",
          age: 78,
          country: "india",
          no_of_superhits: [
            {
              film_name: "Tazab",
              film_turn: "100 Crores",
              film_poster: "https://static.toiimg.com/photo/64870090.cms"
            }
          ]
        },
        {
            name: "Shahrukh khan",
            pic: "https://timesofindia.indiatimes.com/thumb/msid-68219437,width-800,height-600,resizemode-4/68219437.jpg?imglength=106103",
            age: 55,
            country: "India",
            no_of_superhits: [
              {
                film_name: "Chak de Indai",
                film_turn: "110 Crores",
                film_poster: "https://static.toiimg.com/photo/64870090.cms"
              }
            ]
          }
      ]
    };
  }
  
  render() {
    return (
      <div>
        <h1>Hero Details</h1>
        <table>
          <tr>
            <td>
              <th>Hero</th>
            </td>
            <td>
              <th>Pic</th>
            </td>
            <td>
              <th>Age</th>
            </td>
            <td>
              <th>Country</th>
            </td>
            <td>
              <th>No. of Superhits</th>
            </td>
          </tr>

          {this.state.Actors.map(Actor => {
            return (
              <tr>
                <td>{Actor.name}</td>
                <td><img src={Actor.pic} alt="actir_img" width="100px"/></td>
                <td>{Actor.age}</td>
                <td>{Actor.country}</td>
                
                { Actor.no_of_superhits.map(no_of_superhit => {
                  return (
                   <td> Film Name:   {no_of_superhit.film_name} <br></br>
                    Film Turn:    {no_of_superhit.film_turn} <br></br>
                    Poster:   <img src={no_of_superhit.film_poster} width="100px" alt="imgelement"/> </td>
                  );
                })}
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default Actors;
