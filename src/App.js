import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FieldComponent from './components/FieldComponent';
import { Form, Button } from 'reactstrap';
import MockForm from './static/mockForm.json';

const marginTop = { marginTop: '50px' };

/**
 * A field is a component, we define it's type in form creation
 *
 * Structure, => "Dynamic" fieldComponent => determine component w/ pre-defined components we know of and render
 * component.
 */
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { formData: {} };
  }

  updateData(event) {
    const field = MockForm.fields.filter((f) => f.name === event.target.name);
    if (field.length === 1) {
      const currentFormState = this.state;
      currentFormState.formData[field[0].name] = event.target.value;
      this.setState(currentFormState);
    }
  }

  checkRequired() {
    const currentState = this.state;
    const fields = MockForm.fields

    MockForm.fields.forEach((field) => {
      if (typeof this.state.formData[field.name] === 'undefined' && field.required) {
        console.log(field);
      }
    });

    // Object.keys(currentState.formData).forEach((key) => {
    //   const value = currentState.formData[key];
    //   const hasValue = !!hasValue;
    //   const field = MockForm.fields.filter((field) => field.name === key);

    //   if (field.required && !hasValue) {
    //     console.log(field);
    //   }
    //   // if (!hasValue && MockForm.)
    // });
  }

  save() {
    this.checkRequired();

    console.log(this.state);
  }

  render() {
    const Fields = MockForm.fields.map((field) => <FieldComponent field={field} showRequired={this.state.required} onUpdate={(event) => this.updateData(event)}/>);

    return (
      <div className="container-fluid" style={{ marginTop: '50px' }}>
        <Form>
          { Fields }
          <Button type="button" onClick={() => this.save()}>Save</Button>
        </Form>
      </div>
    );
  }
}

export default App;
