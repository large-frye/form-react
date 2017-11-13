import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

export default class Date extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FormGroup className="row col-sm-12">
        <Label for="exampleDatetime" className="col-sm-2">Datetime</Label>
        <Input type="date" className="col-sm-8" name={this.props.dynamicProps.name} id={this.props.dynamicProps.id} 
          placeholder="datetime placeholder" onChange={this.props.callback} />
      </FormGroup>
    )
  }
}