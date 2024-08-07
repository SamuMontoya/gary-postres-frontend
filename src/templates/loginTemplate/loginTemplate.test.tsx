import { beforeEach, describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LoginTemplate } from './loginTemplate'

describe('<LoginTemplate />', () => {
  beforeEach(() => {
    render(<LoginTemplate />)
  })

  it('should render the login template', () => {
    const template = screen.getByTestId('login-template')
    expect(template).toBeInTheDocument()
  })
})
