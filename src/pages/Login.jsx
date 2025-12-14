import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css";
import logo from "../assets/underline_6039838.png";

export default function Login() {
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const name = email.split("@")[0]; 

    localStorage.setItem("token", "test-token");
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);

    navigate("/dashboard"); 
  };

  return (
    <section className="login-section">
      <div className="login-container">
        <div className="login-dashboard">

          <div className="left-dashboard">
            <div className="login-logo">
              <img src={logo} alt="logo" style={{ width: "46px", height: "44px" }} />
              <h3>Dashboard</h3>
            </div>

            <div className="dashboard-left-title">
              <h2>Manage your business with confidence</h2>
              <p>A simple, clean admin dashboard to help you stay organized.</p>
            </div>

            <p className="left-footer-text">
              © 2024 AdminPanel. All rights reserved.
            </p>
          </div>

          <div className="right-dashboard">
            <form className="dashboard-form" onSubmit={handleLogin}>

              <h1>Welcome back</h1>
              <p>Enter your credentials to access your account</p>

              <div className="dashboard-form-inputs">
                <label>Email</label>
                <input type="email" name="email" required placeholder="name@example.com" />
              </div>

              <div className="dashboard-form-inputs">
                <label>Password</label>
                <input type="password" required minLength={6} placeholder="*******" />
              </div>

              <button type="submit">Sign in</button>

              <p className="signup">
                Don’t have an account? <Link to="/register">Create one</Link>
              </p>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
