import { useNavigate } from 'react-router-dom'
import './header.css'

export const Header = () => {

  const navigate = useNavigate()
  const returnHome = () => navigate('/')

  return (
  <div className="header-container">
           <h1 className="glowing-text" onClick={returnHome}>Movies Store</h1>
           
  </div>
  )
}
