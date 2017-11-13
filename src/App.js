import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FieldComponent from './components/FieldComponent';
import { Form, Button } from 'reactstrap';

const MockForm = {
  fields: [
    {
      type: 'Text',
      value: '',
      label: 'Who is your favorite person',
      id: 'text_1',
      name: 'text_1'
    },
    {
      type: 'Radio',
      options: [{ label: 'Yes', value: 'yes'}, { label: 'No', value: 'no' }],
      value: '', // maybe not needed
      label: 'Choose one',
      id: 'radio_1',
      name: 'radio_1'
    },
    {
      type: 'Date',
      label: 'What is your birthday',
      id: 'date_1',
      name: 'date_1'
    },
    {
      type: 'Phone',
      label: 'Your phone #',
      id: 'phone_1',
      name: 'phone_1'
    }
  ]
};

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

  save() {
    console.log(this.state);
  }

  render() {
    const Fields = MockForm.fields.map((field) => <FieldComponent field={field} onUpdate={(event) => this.updateData(event)}/>);

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
