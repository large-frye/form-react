import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Checkbox from './../components/Checkbox';
import App from './../App';
import MockOptions from './../static/mockForm.json';

describe('Checkbox', () => {
  it('should render correctly', () => {
    const app = new App({});
    const checkbox = mount(<Checkbox dynamicProps={MockOptions.fields[2]} callback={(event) => app.updateData(event)}/>);
    const checkbox_1 = checkbox.find('#checkbox_1_1');
    checkbox_1.hostNodes().simulate('click', { preventDefault() {}, target: { name: 'checkbox_1', checked: true } });

    expect(app.state.formData.checkbox_1.andrew).toEqual(true);
    expect(checkbox.text()).toEqual('Choose oneTaylorAndrew');
  });
});