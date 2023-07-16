import { render } from '@redwoodjs/testing/web'

import StylesPage from './StylesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('StylesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StylesPage />)
    }).not.toThrow()
  })
})
