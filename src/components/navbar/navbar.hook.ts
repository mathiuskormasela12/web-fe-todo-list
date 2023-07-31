// ========== Navbar Hook
// import all packages
import type React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

type HandleNavigate = <T>(event: React.MouseEvent<any>, to: string, data?: T) => void

type UseNavbar = () => ({
  handleNavigate: HandleNavigate
  pathname: string
})

export const useNavbar: UseNavbar = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleNavigate: HandleNavigate = (event, to, data) => {
    event.preventDefault()

    if (data !== undefined || data !== null) {
      navigate(to, {
        state: data
      })
    } else {
      navigate(to)
    }
  }

  return {
    handleNavigate,
    pathname
  }
}
