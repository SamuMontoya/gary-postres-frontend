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

  it('should render the gary postres logo', () => {
    const logo = screen.getByAltText('gary_postres_logo')
    expect(logo).toBeInTheDocument()
  })

  it('should render the welcome message', () => {
    const welcomeMessage = screen.getByText(/¡Bienvenido de nuevo!/i)
    expect(welcomeMessage).toBeInTheDocument()
  })

  it('should render the login message', () => {
    const loginMessage = screen.getByText(
      /Ingresa tu correo y contraseña para iniciar/i
    )
    expect(loginMessage).toBeInTheDocument()
  })

  it('should render the email input', () => {
    const emailInput = screen.getByTestId('email-input')
    expect(emailInput).toBeInTheDocument()
  })

  it('should render the password input', () => {
    const passwordInput = screen.getByTestId('password-input')
    expect(passwordInput).toBeInTheDocument()
  })

  it('should render the login button', () => {
    const loginButton = screen.getByTestId('login-button')
    expect(loginButton).toBeInTheDocument()
  })

  it('should render the alternative login message', () => {
    const alternativeLoginMessage = screen.getByText(/O continúa con:/i)
    expect(alternativeLoginMessage).toBeInTheDocument()
  })

  it('should render the google button', () => {
    const googleButton = screen.getByTestId('google-button')
    expect(googleButton).toBeInTheDocument()
  })

  it('should render the apple button', () => {
    const appleButton = screen.getByTestId('apple-button')
    expect(appleButton).toBeInTheDocument()
  })

  it('should render the facebook button', () => {
    const facebookButton = screen.getByTestId('facebook-button')
    expect(facebookButton).toBeInTheDocument()
  })

  it('should render the register message', () => {
    const registerMessage = screen.getByText(/No tengo una cuenta, ir a/i)
    expect(registerMessage).toBeInTheDocument()
  })

  it('should render the register link', () => {
    const registerLink = screen.getByText(/Registrarme/i)
    expect(registerLink).toBeInTheDocument()
  })
})
