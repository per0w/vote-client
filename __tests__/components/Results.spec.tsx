import React from 'react';
import {
  List, Map,
} from 'immutable';
import {
  shallow, mount,
} from 'enzyme';

import Results from 'components/Results';


describe('Rsults', () => {
  it('renders entries with vote counts or zero', () => {
    const pair = List.of('Bleach', 'Fairy Tail');
    const tally = Map({ Bleach: 5 });
    const component = mount(<Results pair={pair} tally={tally} />);

    const entries = component.find('div.entry');
    const [bleach, FairyTail] = entries.getElements().map(e => shallow(e).text());

    expect(entries).toHaveLength(2);
    expect(bleach).toContain('Bleach');
    expect(bleach).toContain('5');
    expect(FairyTail).toContain('Fairy Tail');
    expect(FairyTail).toContain('0');
  });

  it('вызывает callback при нажатие кнопки Next', () => {
    let nextInvoked = false;
    // eslint-disable-next-line no-return-assign
    const next = () => nextInvoked = true;

    const pair = List.of('Bleach', 'Fairy Tail');
    const component = shallow(
      <Results
        pair={pair}
        tally={Map()}
        next={next}
      />,
    );
    component.find('button.next').simulate('click');
    expect(nextInvoked).toBe(true);
  });

  it('отрисовывает финального победителя', () => {
    const pair = List.of('Bleach', 'Fairy Tail');
    const component = mount(
      <Results
        winner='Bleach'
        pair={pair}
        tally={Map()}
      />,
    );
    const winner = component.find('div.winner');
    expect(winner).toBeTruthy();
    expect(winner.text()).toContain('Bleach');
  });
});
