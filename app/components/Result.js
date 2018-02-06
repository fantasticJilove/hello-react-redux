import React, { Component } from 'react';
import store from '../../store';
import {connect} from 'react-redux';
class Result extends React.Component { 

    render() {
        return (
            <div>
                <br/>
                { this.props.fetch ? <h3>Date Result</h3> : null }
                <div>{this.props.name}</div>
                <div>{this.props.email}</div>
                <div>{this.props.dob}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
      // Pass the network used for the viz as a prop
      name: state.name,
      email: state.email,
      dob: state.dob,
      fetch :state.fetch,
    };
  }
  
export default connect(mapStateToProps)(Result);