import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const radioStyle = {
  marginRight: '5px'
};

class Radio extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const radioBtns = this.props.dynamicProps.options.map((option) => {
      return (
        <div className="form-check form-check-inline">
          <Label className="form-check-label">
            <Input type="radio" style={radioStyle}
              name={this.props.dynamicProps.name} value={option.value} onClick={this.props.callback} />{option.label}
          </Label>
        </div>
      )
    });

    return (
      <FormGroup className="row col-sm-12">
        <Label className="col-sm-2">{this.props.dynamicProps.label}</Label>
        {radioBtns}
      </FormGroup>
    )
  }
}

export default Radio;