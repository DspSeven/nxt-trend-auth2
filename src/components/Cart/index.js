// Write your JS code here
import Cookies from 'js-cookie'
import './index.css'

const Cart = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    const {history} = props
    history.replace('/login')
  }
  return (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
        alt="cart"
      />
    </div>
  )
}
export default Cart
