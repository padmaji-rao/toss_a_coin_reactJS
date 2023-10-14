import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    activeFace: 0,
    headsCount: 0,
    tailsCount: 0,
  }

  onTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)

    this.setState({activeFace: tossResult})
    if (tossResult === 0) {
      this.setState(prevState => ({
        headsCount: prevState.headsCount + 1,
      }))
    } else {
      this.setState(prevState => ({
        tailsCount: prevState.tailsCount + 1,
      }))
    }
  }

  render() {
    const {activeFace, headsCount, tailsCount} = this.state
    console.log(activeFace, headsCount, tailsCount)
    let faceUrl = null
    if (activeFace === 0) {
      faceUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    } else {
      faceUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    }

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={faceUrl} alt="toss result" className="face-logo" />
          <button
            onClick={this.onTossCoin}
            className="toss-button"
            type="button"
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p>{`Total: ${headsCount + tailsCount}`}</p>
            <p>{`Heads: ${headsCount}`}</p>
            <p>{`Tails: ${tailsCount}`}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
