import React from "react"

class App extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <div className="booking-container">
          <div className="tabs">
            <div className="tab">
              <span className="tab-icon">
                <i className="fas fa-ticket-alt" />
              </span>
              <span className="tab-label">Flyg</span>
            </div>
            <div className="tab">
              <span className="tab-icon">
                <i className="fas fa-h-square" />
              </span>
              <span className="tab-label">Flyg + Hotell</span>
            </div>
            <div className="tab">
              <span className="tab-icon">
                <i className="fas fa-car" />
              </span>
              <span className="tab-label">Hyrbil</span>
            </div>
            <div className="tab">
              <span className="tab-icon">
                <i className="fas fa-hotel" />
              </span>
              <span className="tab-label">Hotell</span>
            </div>
            <div className="tab">
              <span className="tab-icon">
                <i className="fas fa-medal" />
              </span>
              <span className="tab-label">Reward</span>
            </div>
          </div>
          <div className="form">
            <div className="airport-select-field">
              <div className="airport-select-wrapper">
                <label htmlFor="departure">
                  <span className="airport-select-label">Fly from</span>
                  <input type="text" id="departure" />
                  <span className="airport-select-icon">
                    <i className="fas fa-plane-departure" />
                  </span>
                  <span className="airport-select-border" />
                </label>
              </div>
              <div className="airport-select-wrapper">
                <label htmlFor="destination">
                  <span className="airport-select-label">Fly to</span>
                  <input type="text" id="destination" />
                  <span className="airport-select-border" />
                  <span className="airport-select-icon">
                    <i className="fas fa-plane-arrival" />
                  </span>
                </label>
              </div>
            </div>
            <p>
              <a href="#">
                Stockholm - Arlanda
              </a>
               ?
            </p>
            <button type="submit">Sök och beställ</button>
          </div>
        </div>
      </div>
    )
  }

}

export default App
