import Link from "next/link";
import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import userData from "../../data/userData";
import { useRouter } from "next/router";


const LoginForm = () => {

  

  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const router = useRouter();

  const clickLogin = () => {
    console.log(1)
    console.log(userData.pass)
    console.log(pass)
    
    if (email === userData.email && pass === userData.password) {
      console.log(2)
      localStorage.setItem("role", userData.role);
      router.push('/');
    } else {
      alert("Invalid Information...")
    }

  }

  const eamilInputChange = (value) => {
    setEmail(value);
  }

  const passInputChange = (value) => {
    setPass(value);
  }



  return (
    <section className="registration clear__top">
      <div className="container">
        <div className="registration__area">
          <h4 className="neutral-top">Log in</h4>
          <p>
            Don&#39;t have an account?{" "}
            <Link href="/registration">Register here.</Link>
          </p>
          <div
            action="#"
            method="post"
            name="login__form"
            className="form__login"
          >
            <div className="input input--secondary">
              <label htmlFor="loginMail">Email*</label>
              <input
                type="email"
                name="login__email"
                id="loginMail"
                placeholder="Enter your email"
                required="required"
                onChange={e=>eamilInputChange(e.target.value)}
              />
            </div>
            <div className="input input--secondary">
              <label htmlFor="loginPass">Password*</label>
              <input
                type="password"
                name="login__pass"
                id="loginPass"
                placeholder="Password"
                required="required"
                onChange={e => passInputChange(e.target.value)}
              />
            </div>
            <div className="checkbox login__checkbox">
              <label>
                <input
                  type="checkbox"
                  id="remeberPass"
                  name="remeber__pass"
                  value="remember"
                />
                <span className="checkmark"></span>
                Remember Me
              </label>
              <Link href="#">Forget Password</Link>
            </div>
            <div className="input__button">
              <button 
                // type="submit" 
                onClick={clickLogin}
                className="button button--effect">
                Login
              </button>
              <div style={{ marginTop: "20px" }} className="googlelogin">
                <GoogleLogin shape="re" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
