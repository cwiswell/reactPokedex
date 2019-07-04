import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Pokedex from './main-pokedex';


describe('', () =>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Pokedex />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('shallow renders without crashing', () => {
    const calc = shallow(<Pokedex />);
  })
});
