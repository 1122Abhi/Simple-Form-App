import Grid from "./Grid";
import React, { Component } from "react";

 class Table extends Component {

  constructor(){
    super()
  }
  
  const tableInfo=(value, index)=>{
      return(
        
      );
  }

  
  
  
  render() {
    
    return (
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Sr no</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">City</th>
            </tr>
          </thead>
          <tbody>
           {this.state.rawData.map(tableInfo)}
         </tbody>
        </table>
      </div>
    );
  }
}

export default Table