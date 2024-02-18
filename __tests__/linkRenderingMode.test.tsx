import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import LinkRenderingMode from '@/components/linkRenderingMode'

/* expects render text "Client Mode" */
describe('LinkRenderingMode', () => {
  it('renders LinkRenderingMode', () => {
    render(<LinkRenderingMode text="Client Mode" route="/client-mode" />)
    expect(screen.getByText('Client Mode')).toBeInTheDocument()
  })
})

/* Expects href to "/Client mode" */
describe('LinkRenderingMode', () => {
  it('renders LinkRenderingMode', () => {
    render(<LinkRenderingMode text="Client Mode" route="/client-mode" />)
    expect(screen.getByRole('link')).toHaveAttribute('href', '/client-mode')
  })
})
