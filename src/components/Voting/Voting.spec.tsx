import React from 'react';
import { shallow } from 'enzyme';

import Voiting from './index';


describe('Voting', () => {
  it('renders a pair of buttons', () => {
    const buttons = shallow(<Voiting pair={['Bleach', 'Fairy Tail']} />).find('button');
    expect(buttons).toMatchSnapshot();
    expect(buttons.length).toEqual(2);
  });
});
