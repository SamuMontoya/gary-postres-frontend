import { Route, Routes } from 'react-router-dom'
import { Login, Main, NotFound, Register } from '../pages'

export const RoutesElements = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
