// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {statusFname: false, statusLname: false}

  onFname = () => {
    this.setState(prevState => ({statusFname: !prevState.statusFname}))
  }

  onLname = () => {
    this.setState(prevState => ({statusLname: !prevState.statusLname}))
  }

  render() {
    const {statusFname, statusLname} = this.state
    return (
      <div className="bg-cont">
        <div className="content-cont">
          <h1 className="main-head">Show/Hide</h1>
          <div className="btn-conts">
            <div className="content-cont">
              <button className="btn" type="button" onClick={this.onFname}>
                Show/Hide Firstname
              </button>
              {statusFname && <p className="name">Joe</p>}
            </div>
            <div className="content-cont">
              <button className="btn" type="button" onClick={this.onLname}>
                Show/Hide Lastname
              </button>
              {statusLname && <p className="name">Jonas</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
