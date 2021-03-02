import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

const setUp = (props) => {
  const component = shallow(<App {...props} />)
  return component
}

describe('App Component render without error', () => {

  let wrapper = setUp()

  it('App method should return single page app', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it("should update gist data on click", () => {
    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse)
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    })
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    const onSearchSubmit = jest.fn()
    wrapper.instance().onSearchSubmit('sofian-sunny')
  })
})
