import React, { Component } from 'react';
import { Label, Input, FormGroup, Alert } from 'reactstrap';

const numberStyle = {
  display: 'inline',
  marginRight: '5px'
};

export default class Phone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayAlert: (<div></div>),
      phone: ''
    }
  }

  confirmPhone(event, limit) {
    const val = event.target.value;
    const allowedKeyCodes = [8, 9, 27, 46]; // backspace, tab, escape, delete

    if (val.length >= limit && allowedKeyCodes.indexOf(event.keyCode) === -1) {
      this.setDisplayAlert(limit);
      event.preventDefault();
    } else {
      this.setDisplayAlert();
    }
  }

  updatePhone(event) {
    const value = event.target.value;
    const currentState = this.state;
    currentState[event.target.name] = event.target.value;

    const area = currentState[this.props.dynamicProps.name + '_area'] || '';
    const mid = currentState[this.props.dynamicProps.name + '_mid'] || '';
    const end = currentState[this.props.dynamicProps.name + '_end'] || '';
    currentState.phone = area + '-' + mid + '-' + end;
    this.setState(currentState, () => {
      this.props.callback({
        target: {
          name: this.props.dynamicProps.name,
          value: this.state.phone
        }
      });
    });
  }

  setDisplayAlert(limit) {
    const currentState = this.state;
    currentState.displayAlert = '';
    if (typeof limit !== 'undefined') {
      currentState.displayAlert = (
        <div><Alert color="danger">Only {limit} allowed.</Alert></div>
      );
    }
    this.setState(currentState);
  }

  render() {
    const DisplayAlert = this.state.displayAlert;
    return (
      <FormGroup className="row col-sm-12">
        <Label className="col-sm-2">{this.props.dynamicProps.label}</Label>
        <div>
          <Input type="number" className="col-sm-2" style={numberStyle} name={this.props.dynamicProps.name + '_area'}
            onKeyDown={(event) => this.confirmPhone(event, 3)} 
            onChange={(event) => this.updatePhone(event)} />
          <Input type="number" className="col-sm-2" style={numberStyle} name={this.props.dynamicProps.name + '_mid'}
            onKeyDown={(event) => this.confirmPhone(event, 3)}
            onChange={(event) => this.updatePhone(event)} />
          <Input type="number" className="col-sm-2" style={numberStyle} name={this.props.dynamicProps.name + '_end'}
            onKeyDown={(event) => this.confirmPhone(event, 4)} 
            onChange={(event) => this.updatePhone(event)} />
          {DisplayAlert}
        </div>
      </FormGroup>
    );
  }
}