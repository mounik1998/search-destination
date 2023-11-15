// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }
  render() {
    const {searchInput} = this.state
    const {destinationList} = this.props
    const searchResults = destinationList.filter(item =>
      item.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div>
        <div>
          <h1>Destination Search</h1>
          <input type="search" value={searchInput} onChange={this.onSearch} />
        </div>
        <ul>
          {searchResults.map(item => (
            <DestinationItem key={item.id} destinationDetails={item} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
