import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Field from './components/Field';
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

  save() {
    console.log(this.state);
  }

  render() {
    const Fields = MockForm.fields.map((field) => <Field field={field} onUpdate={(event) => this.updateData(event)}/>);

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
