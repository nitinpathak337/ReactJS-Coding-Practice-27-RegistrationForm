// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {submitted: false, isStart: true, emptyFirst: '', emptyLast: ''}

  firstName = event => {
    if (event.target.value === '') {
      this.setState({emptyFirst: true, isStart: false})
    } else {
      this.setState({emptyFirst: false, isStart: false})
    }
  }

  lastName = event => {
    if (event.target.value === '') {
      this.setState({emptyLast: true, isStart: false})
    } else {
      this.setState({emptyLast: false, isStart: false})
    }
  }

  formDisplay = () => {
    const {emptyFirst, emptyLast} = this.state
    const emptyFir = emptyFirst ? 'empty' : ''
    const emptyLas = emptyLast ? 'empty' : ''

    return (
      <form className="form-container">
        <label htmlFor="firstName" className="label-el">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          className={`input-el ${emptyFir}`}
          onBlur={this.firstName}
        />
        {emptyFirst ? <p className="required">Required</p> : null}
        <label htmlFor="lastName" className="label-el">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          placeholder="Last Name"
          className={`input-el ${emptyLas}`}
          onBlur={this.lastName}
        />
        {emptyLast ? <p className="required">Required</p> : null}
        <button type="submit" className="button" onClick={this.submit}>
          Submit
        </button>
      </form>
    )
  }

  responseDisplay = () => (
    <form className="form-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p className="para-success">Submitted Successfully</p>
      <button
        type="submit"
        className="button success"
        onClick={this.anotherResponse}
      >
        Submit Another Response
      </button>
    </form>
  )

  anotherResponse = event => {
    event.preventDefault()
    this.setState({
      submitted: false,
      isStart: true,
      emptyFirst: '',
      emptyLast: '',
    })
  }

  submit = event => {
    event.preventDefault()
    const {isStart, emptyFirst, emptyLast} = this.state
    if (isStart) {
      this.setState({emptyFirst: true, emptyLast: true})
    } else if (emptyFirst === '') {
      this.setState({emptyFirst: true})
    } else if (emptyLast === '') {
      this.setState({emptyLast: true})
    } else if (
      isStart === false &&
      emptyFirst === false &&
      emptyLast === false
    ) {
      this.setState({submitted: true})
    }
  }

  render() {
    const {submitted} = this.state

    return (
      <div className="bg">
        <h1 className="heading">Registration</h1>
        {submitted ? this.responseDisplay() : this.formDisplay()}
      </div>
    )
  }
}

export default RegistrationForm
