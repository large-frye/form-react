import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const checkboxStyle = {
  marginRight: '5px'
};

export default class Checkbox extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  };

  updateCheckboxState(event, keyName) {
    const currentState = this.state;
    currentState[event.target.name] = currentState[event.target.name] || {};
    currentState[event.target.name][keyName.toLowerCase()] = event.target.checked;

    this.setState(currentState, () => {
      this.props.callback({
        target: {
          name: this.props.dynamicProps.name,
          value: this.state[this.props.dynamicProps.name]
        }
      });
    });
  }

  render() {
    const checkboxes = this.props.dynamicProps.options.map((option, index) => {
      return (
        <div className="form-check form-check-inline" key={index}>
          <Label className="form-check-label">
            <Input type="checkbox" style={checkboxStyle} id={this.props.dynamicProps.name + '_' + index}
              name={this.props.dynamicProps.name} onClick={(event) => this.updateCheckboxState(event, option.label)} />{option.label}
          </Label>
        </div>
      );
    });

    return (
      <FormGroup className="row col-sm-12">
        <Label className="col-sm-2">{this.props.dynamicProps.label}</Label>
        {checkboxes}
      </FormGroup>
    );
  }
}