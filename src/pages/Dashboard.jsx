import "../styles/Dashboard.css";

import logo from "../assets/underline_6039838.png";

export default function Dashboard() {
  const userName = localStorage.getItem("userName") || "User";
  const userEmail = localStorage.getItem("userEmail") || "user@email.com";

  return (
    <div className="dashboard-layout">
  
      <aside className="sidebar">
        <div>
          <div className="sidebar-logo">
            <img src={logo} alt="logo" />
            <span>AdminPanel</span>
          </div>

          <button className="nav-btn active">Dashboard</button>
        </div>

        <button
          className="nav-btn logout"
          onClick={() => {
            localStorage.clear();
            window.location.href = "/login";
          }}
        >
          Sign out
        </button>
      </aside>

   
      <main className="main-area">
       
        <header className="topbar">
          <div className="user">
            <div className="avatar">
              {userName.charAt(0).toUpperCase()}
            </div>
            <span>{userName}</span>
          </div>
        </header>

             <section className="content">
          <h1>Welcome back, {userName}</h1>
          <p className="subtitle">Here's your task overview for today.</p>

                  <div className="stats">
            <div className="stat-card">
              <p>Total Tasks</p>
              <h2>2</h2>
            </div>
            <div className="stat-card success">
              <p>Completed</p>
              <h2>1</h2>
            </div>
            <div className="stat-card info">
              <p>In Progress</p>
              <h2>1</h2>
            </div>
          </div>

                <div className="card">
            <h3>Your Profile</h3>
            <p><strong>Username:</strong> {userName}</p>
            <p><strong>Email:</strong> {userEmail}</p>
          </div>

                   <div className="card">
            <div className="card-header">
              <h3>Tasks</h3>
             <button className="primary-btn add-task-btn">+ Add Task</button>

            </div>

            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Review project requirements</td>
                  <td>Go through the assignment specs</td>
                  <td><span className="status done">Completed</span></td>
                  <td>2024-01-15</td>
                </tr>
                <tr>
                  <td>Build authentication UI</td>
                  <td>Create login & register pages</td>
                  <td><span className="status progress">In Progress</span></td>
                  <td>2024-01-17</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
