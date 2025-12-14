import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css";
import logo from "../assets/underline_6039838.png";

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;

    localStorage.setItem("registeredName", name);
    localStorage.setItem("registeredEmail", email);

       navigate("/login");
  };

  return (
    <section className="login-section">
      <div className="login-container">
        <div className="login-dashboard">

          {/* LEFT */}
          <div className="left-dashboard">
            <div className="login-logo">
              <img src={logo} alt="logo" width="46" height="44" />
              <h3>AdminPanel</h3>
            </div>

            <div className="dashboard-left-title">
              <h2>Create your account</h2>
              <p>Register to manage your dashboard easily.</p>
            </div>

            <p className="left-footer-text">
              © 2024 AdminPanel. All rights reserved.
            </p>
          </div>

          {/* RIGHT */}
          <div className="right-dashboard">
            <form className="dashboard-form" onSubmit={handleRegister}>
              <h1>Create account</h1>

              <div className="dashboard-form-inputs">
                <label>Full name</label>
                <input type="text" name="name" required placeholder="John snow" />
              </div>

              <div className="dashboard-form-inputs">
                <label>Email</label>
                <input type="email" name="email" required placeholder="Name@example.com" />
              </div>

              <div className="dashboard-form-inputs">
                <label>Password</label>
                <input type="password" minLength={6} required placeholder="*******"/>
              </div>

              <button type="submit">Sign up</button>

              <p className="signup">
                Already have an account? <Link to="/login">Sign in</Link>
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
