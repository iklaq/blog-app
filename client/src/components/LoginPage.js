const LoginPage = () => {
  return (
    <div className="login-page">
      <h1>LOGIN</h1>
      <form className="form" action="">
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
