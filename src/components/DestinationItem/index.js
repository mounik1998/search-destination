// Write your code here

import './index.css'
const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails
  return (
    <li>
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
