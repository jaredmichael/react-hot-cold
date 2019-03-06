import React from 'react';
import {shallow} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

    it('Should run the onMakeGuess callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = shallow(<GuessForm onMakeGuess={callback} />);
        const value = 81;
        wrapper.find('input[type="number"]').instance().value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value.toString());
    });

    it('Should reset the input when the form is submitted', () => {
        const wrapper = mount(<GuessForm />);
        const input = wrapper.find('input[type="number"]');
        input.instance().value = 81;
        wrapper.simulate('submit');
        expect(input.instance().value).toEqual('');
    });
});