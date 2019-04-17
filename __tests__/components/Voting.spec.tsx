import React, { Fragment } from 'react';
import {
  shallow, mount, render,
} from 'enzyme';
import { List } from 'immutable';

import Voting from 'components/Voting';


describe('Voting', () => {
  it('renders a pair of buttons', () => {
    let votedWith;
    // eslint-disable-next-line no-return-assign
    const vote = (entry: string) => votedWith = entry;
    const component = mount(
      <Voting
        pair={List(['Bleach', 'Fairy Tail'])}
        vote={vote}
      />,
    );
    const buttons = component.find('button');
    const [firstButton, secondButton] = buttons.getElements().map(el => shallow(el));

    expect(buttons).toHaveLength(2);
    expect(firstButton.find('h1').text()).toEqual('Bleach');
    expect(secondButton.find('h1').text()).toEqual('Fairy Tail');
    firstButton.simulate('click');
    expect(votedWith).toEqual('Bleach');
  });

  it('добавляет label к записи, за которую проголосовали', () => {
    const component = mount(
      <Voting
        pair={List(['Bleach', 'Fairy Tail'])}
        hasVoted='Bleach'
      />,
    );
    const buttons = component.find('button');
    const [firstButton, ...others] = buttons.getElements().map(el => shallow(el).find('div.label'));
    expect(firstButton.text()).toContain('Voted');
  });

  it('отрисовывает только победителя', () => {
    const component = mount(
      <Voting winner='Fairy Tail' />,
    );
    const buttons = component.find('button');
    expect(buttons).toHaveLength(0);

    const winner = component.find('div.winner');
    expect(winner).toBeTruthy();
    expect(winner.text()).toContain('Fairy Tail');
  });
});
