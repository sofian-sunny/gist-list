import React from 'react'
import { shallow } from 'enzyme'
import GistItem from './index'

const setUp = (props) => {
  const component = shallow(<GistItem {...props} />)

  return component
}

describe('GistItem Component render without error', () => {
  const props = {
    title: 'greetings title'
  }
  const wrapper = setUp(props)

  it('GistItem method should return list item with image', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
