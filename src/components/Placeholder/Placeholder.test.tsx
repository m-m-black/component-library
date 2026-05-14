import { render, screen } from '@testing-library/react'
import { Placeholder } from './Placeholder'

describe('Placeholder', () => {
  it('renders the label', () => {
    render(<Placeholder label="Hello" />)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })
})
