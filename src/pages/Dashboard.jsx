
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const requests = [
    {
      id: 'REQ-001',
      document: 'Certificate of Enrollment',
      date: 'November 20, 2026',
      status: 'Pending'
    },
    {
      id: 'REQ-002',
      document: 'Copy of Grades',
      date: 'November 18, 2026',
      status: 'Processing'
    },
    {
      id: 'REQ-003',
      document: 'Certificate of Good Moral',
      date: 'November 15, 2026',
      status: 'Completed'
    }
  ];

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="dashboard-container">

      {/* Sidebar */}
      <aside className="sidebar">

        <div className="sidebar-logo">
          <h2>Smart Registrar</h2>
        </div>

        <p className="menu-label">MAIN MENU</p>

        <nav>
          <a href="/dashboard" className="active">
            <span>▦</span> Dashboard
          </a>

          <a href="#requests">
            <span>＋</span> New Request
          </a>

          <a href="#tracking">
            <span>◷</span> Track Request
          </a>

          <a href="#history">
            <span>▤</span> Request History
          </a>
        </nav>

        <button className="logout-button" onClick={handleLogout}>
          ↪ Log Out
        </button>

      </aside>

      {/* Main Content */}
      <main className="dashboard-main">

        <header className="topbar">
          <div>
            <h2>Student Dashboard</h2>
            <p>Welcome to your Smart Registrar Portal.</p>
          </div>

          <div className="profile">
            <div className="profile-icon">S</div>
            <span>Student</span>
          </div>
        </header>

        <section className="welcome-section">
          <h1>Hello, Student!</h1>
          <p>
            Manage your document requests easily and monitor
            their progress here.
          </p>
        </section>

        {/* Summary Cards */}
        <section className="summary-cards">

          <div className="summary-card">
            <p>Total Requests</p>
            <h2>3</h2>
            <span>All submitted requests</span>
          </div>

          <div className="summary-card">
            <p>Pending Requests</p>
            <h2>1</h2>
            <span>Waiting for review</span>
          </div>

          <div className="summary-card">
            <p>Processing</p>
            <h2>1</h2>
            <span>Currently being processed</span>
          </div>

          <div className="summary-card">
            <p>Completed</p>
            <h2>1</h2>
            <span>Finished requests</span>
          </div>

        </section>

        {/* Recent Requests */}
        <section className="requests-section" id="requests">

          <div className="section-heading">
            <div>
              <h2>Recent Requests</h2>
              <p>Check the status of your submitted documents.</p>
            </div>

            <button
            className="new-request-button"
            onClick={() => navigate('/new-request')}
            >
            + New Request
            </button>
          </div>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Request ID</th>
                  <th>Document</th>
                  <th>Date Submitted</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {requests.map((request) => (
                  <tr key={request.id}>
                    <td>{request.id}</td>
                    <td>{request.document}</td>
                    <td>{request.date}</td>
                    <td>
                      <span className={`status ${request.status.toLowerCase()}`}>
                        {request.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </section>

      </main>
    </div>
  );
}

export default Dashboard;
