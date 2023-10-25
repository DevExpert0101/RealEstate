import AuthHeader from "../components/authHeader/AuthHeader";
import LoginForm from "../components/login/LoginForm";
import { GoogleOAuthProvider } from '@react-oauth/google';

const Login = () => {
  return (
    <GoogleOAuthProvider>

    <div className="wrapper wrapper__bg bg__img">
      {/* auth header  */}
      <AuthHeader />

      {/* Login Form here  */}
      <LoginForm />
    </div>
    </GoogleOAuthProvider>
  );
};

export default Login;

Login.getLayout = function getLayout(page) {
  return <>{page}</>;
};
