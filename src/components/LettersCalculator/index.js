// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputSearch: ''}

  calcLetters = event => {
    const {value} = event.target

    this.setState(() => ({
      inputSearch: value,
    }))
  }

  render() {
    const {inputSearch} = this.state
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
        <div className="calc-container">
          <h1>Calculate the Letters you enter</h1>
          <div className="input-box">
            <label htmlFor="input" className="lable">
              Enter the Phrase
            </label>
            <input
              type="text"
              id="input"
              placeholder="Enter the Phrase"
              value={inputSearch}
              onChange={this.calcLetters}
            />
          </div>
          <p type="button" className="para">
            No.of letters: {inputSearch.length}
          </p>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
