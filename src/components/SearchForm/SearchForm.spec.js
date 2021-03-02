import React from 'react'
import { shallow } from 'enzyme'
import SearchForm from './index'

const setUp = (props) => {
  const component = shallow(<SearchForm {...props} />)

  return component
}

describe('SearchForm Component render without error', () => {
  const props = {
    title: 'greetings title'
  }
  const wrapper = setUp(props)

  it('SearchForm method should return list item with image', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it("should update gist data on click", () => {
    let submit = jest.fn();
    let wrapper = shallow(<SearchForm onSubmit={(e) => onSubmitForm(e)}/>);
    wrapper.simulate('onSubmit', { submit });
  })

  it("should update gist data on click", () => {
    const button = wrapper.find('#search');
    expect(button.length).toBe(1)
    button.simulate('submit')
  })
})
