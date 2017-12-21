import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

export default class Time extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<FormGroup className="row col-sm-12">
        <Label className="col-sm-2">{this.props.dynamicProps.label}</Label>
        <Input type="time" className="col-sm-8" name={this.props.dynamicProps.name} onChange={(event) => this.props.callback(event) } />
      </FormGroup>
      );
  }
}