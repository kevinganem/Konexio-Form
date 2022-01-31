// REACT
import React from "react";
// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      errorEmail: "",
      errorPassword: "",
    };
  }

  // VALIDATE EMAIL

  handleEmailChange = (e) => {
    console.log("handleEmailChange()");
    const target = e.target;
    this.setState({
      email: target.value,
      errorEmail: target.validationMessage,
    });
  };

  // VALIDATE PASSWORD

  handlePasswordChange = (e) => {
    console.log("handlePasswordChange()");
    const target = e.target;
    this.setState({
      password: target.value,
      errorPassword: target.validationMessage,
    });
  };

  // VALIDATE SUBMIT
  handleSubmit = (e) => {
    console.log("Submited :", this.state);
    console.log(this.state.errorEmail);
    if (!this.state.email || !this.state.email) {
      alert("No input");
    } else if (
      this.state.errorEmail !== "" ||
      this.state.errorPassword !== ""
    ) {
      alert("Invalid input");
    } else {
      alert("Registered");
    }
    e.preventDefault();
  };

  render() {
    return (
      <>
        {/* FORM */}

        <div className="container-fluid col-4">
          <h1 className="text-center p-3">Login</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            {/* EMAIL PART */}

            <div className="mb-3">
              <label for="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                onChange={this.handleEmailChange}
                id="email"
                placeholder="Enter email..."
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                required
              />
              <div className="invalid-feedback d-block">
                {this.state.errorEmail}
              </div>
            </div>

            {/* PASSWORD */}

            <div className="mb-3">
              <label for="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                onChange={this.handlePasswordChange}
                id="password"
                placeholder="Enter password..."
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$"
                required
              />
              <div className="invalid-feedback d-block">
                {this.state.errorPassword}
              </div>
            </div>

            {/* CHECKBOX */}

            <div className="mb-3 form-check">
              <input type="checkBox" className="form-check-input" id="check" />
              <label className="form-check-label" for="checkBox">
                Remember me
              </label>
            </div>

            {/* SUBMIT BUTTON */}

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default App;
