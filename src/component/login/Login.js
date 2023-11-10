import React from 'react'
import './login.css'
function Login() {
  return (
    <div className='bodylogin'>
    <div className="form-wrapper">
  <h1>Sign In</h1>
  <form>
    <div className="form-item">
      <label htmlFor="email" />
      <input
        type="email"
        name="email"
        required="required"
        placeholder="Email Address"
      />
    </div>
    <div className="form-item">
      <label htmlFor="password" />
      <input
        type="password"
        name="password"
        required="required"
        placeholder="Password"
      />
    </div>
    <div className="button-panel">
      <input
        type="submit"
        className="button"
        title="Sign In"
        defaultValue="Sign In"
      />
    </div>
  </form>
  <div className="form-footer">
    <p>
      <a href="#">Create an account</a>
    </p>
    <p>
      <a href="#">Forgot password?</a>
    </p>
  </div>
</div>

  </div>
  )
}

export default Login
