import React from 'react';
import {shallow} from 'enzyme';

import Game from './game';
import TopNav from './top-nav';

describe('<Game />', () => {
    it('Renders without crashing', () => {
        shallow(<Game />);
    });
});