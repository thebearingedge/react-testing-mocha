import React from 'react'
import userEvent from '@testing-library/user-event'
import { render, cleanup, screen, waitFor } from '@testing-library/react'
import Counter from './counter'
import { expect } from './index.test'

describe('<Counter />', () => {

  beforeEach(() => render(<Counter />))
  afterEach(() => cleanup())

  it('renders a button', async () => {
    const $button = await screen.findByText('Click Me! 0')
    expect($button).not.to.equal(null)
  })

  it('counts when clicked', async () => {
    const $button = await screen.findByText('Click Me! 0')
    userEvent.click($button)
    userEvent.click($button)
    await waitFor(() => expect($button).to.have.text('Click Me! 2'))
  })

})
