
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RequestHistory() {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const savedRequests =
      JSON.parse(localStorage.getItem('requests')) || [];

    setRequests(savedRequests);
  }, []);

  return (
    <div className="page-container">
      <div className="page-card">
        <button className="back-button" onClick={() => navigate('/dashboard')}>
          ← Back to Dashboard
        </button>

        <h1>Request History</h1>
        <p>View your previously submitted registrar requests.</p>

        {requests.length === 0 ? (
          <p className="empty-message">No request history available.</p>
        ) : (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Request ID</th>
                  <th>Document</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {requests.map((request) => (
                  <tr key={request.id}>
                    <td>{request.id}</td>
                    <td>{request.document}</td>
                    <td>{request.date}</td>
                    <td>{request.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default RequestHistory;
