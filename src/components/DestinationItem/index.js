// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails

  return (
    <li className="list-item">
      <img src={imgUrl} alt={name} className="img1" />
      <p className="para1">{name}</p>
    </li>
  )
}

export default DestinationItem
