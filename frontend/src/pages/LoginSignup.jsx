import "./Css/LoginSignup.css";

function LoginSignup() {
  return (
    <div className="loginSignup">
      <div className="loginSignupContainer">
        <h1>SignUp</h1>
        <div className="loginSignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginSignup-login">
          Already have an account <span>Login </span>
        </p>
        <div className="loginSignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
}
export default LoginSignup;
