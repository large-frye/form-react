import React, { Component } from 'react';
import Text from './Text';
import Radio from './Radio';
import Date from './Date';
import Phone from './Phone';
import Checkbox from './Checkbox';

class Field extends Component {
  constructor(props) {
    super(props);

    this.fieldsComponents = {
      Text: { component: Text, props: this.props.field, callback: this.props.onUpdate },
      Radio: { component: Radio, props: this.props.field, callback: this.props.onUpdate },
      Date: { component: Date, props: this.props.field, callback: this.props.onUpdate },
      Phone: { component: Phone, props: this.props.field, callback: this.props.onUpdate },
      Checkbox: { component: Checkbox, props: this.props.field, callback: this.props.onUpdate }
    }
  }

  render() {
    const DynamicComponent = this.fieldsComponents[this.props.field.type];
    return <DynamicComponent.component dynamicProps={DynamicComponent.props} callback={DynamicComponent.callback}/>;
  }
}

export default FieldComponet;
