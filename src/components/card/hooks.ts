// =========== Card Hooks
// import all packages
import { useNavigate } from 'react-router-dom'

type HandleDetail = <T>(event: React.MouseEvent<T>, to: string) => void

type UseCard = () => ({
  handleDetail: HandleDetail
})

export const useCard: UseCard = () => {
  const navigate = useNavigate()

  const handleDetail: HandleDetail = (event, to) => {
    event.preventDefault()
    navigate(to)
  }

  return {
    handleDetail
  }
}
