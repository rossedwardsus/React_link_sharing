import React from 'react';
import { shallow } from 'enzyme/build';
import mockAxios from 'axios';
import renderer from 'react-test-renderer';

import { Outline } from '../components/Outline/outline';
import { Topic } from '../components/Outline/topic';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import sinon from 'sinon';
import { expect } from 'chai';

import {Provider } from 'react-redux'
//import Store from './store'


Enzyme.configure({ adapter: new Adapter() });

//props.onSubtopicTextChange(e, props.topic_id, props.subtopic.id)}
//props.outlineAddSubtopic(props.subtopic.id, props.subtopic.id)}

describe('<Topic />', () => {
  let wrapper;

  const component = renderer.create(
  //  <Link page="http://www.facebook.com">Facebook</Link>,
  //  <Provider store={Store}>
      
    <Topic topic={{id: 1, subtopics: [{id: 1, subtopic: ""}]}} onTopicTextChange={() => {}} outlineAddSubtopic={() => {}}/>
  //  </Provider>

  );
  //let tree = component.toJSON();
  //expect(tree).toMatchSnapshot();

  //const wrapper = shallow((
  //  <MyComponent>
  //    <div className="unique" />
  //  </MyComponent>
  //));
  //expect(wrapper.contains(<div className="unique" />)).to.equal(true);



  beforeEach(() => {
    //wrapper = shallow(<MyComponent />);
  });

  it('should get response successfully', async () => {
    // define the result via axios
    //mockAxios.mockImplementationOnce(() => (
    //  Promise.resolve({ data: { foo: 'foo' } })
    //));

    // <MyComponent /> component contains `doSubmit()` method which calls an api via axios
    // Assuming that the response will be stored in the state
    //await wrapper.instance().doSubmit();
    //expect(wrapper.instance().state.data).toEqual({ foo: 'foo' });
  });

  it('simulates click events', () => {
    const outlineAddSubtopic = sinon.spy();
    const onTopicTextChange = sinon.spy();
    const event = {target: {name: "pollName", value: "spam"}};
    
    const wrapper = shallow(<Topic topic={{id: 1, subtopics: [{id: 1, subtopic: ""}]}} onTopicTextChange={() => {}} outlineAddSubtopic={outlineAddSubtopic}/>);
    
    //wrapper.find(Button).at(1).simulate('click');
    //expect(outlineAddSubtopic).to.have.property('callCount', 1);

    //wrapper.ref(TextField).simulate('change', event);
    //expect(onSubtopicTextChange.calledOnce).to.equal(true);
  });
});