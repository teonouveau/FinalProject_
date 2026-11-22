
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TrackRequest() {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const savedRequests =
      JSON.parse(localStorage.getItem('requests')) || [];

    setRequests(savedRequests);
  }, []);

  const statuses = [
    'Submitted',
    'Under Review',
    'Needs Correction',
    'Ready for Release',
    'Released'
  ];

  return (
    <div className="page-container">
      <div className="page-card">
        <button className="back-button" onClick={() => navigate('/dashboard')}>
          ← Back to Dashboard
        </button>

        <h1>Track Your Requests</h1>
        <p>Monitor the current status of your document requests.</p>

        {requests.length === 0 ? (
          <p className="empty-message">You have no submitted requests yet.</p>
        ) : (
          requests.map((request) => (
            <div className="tracking-card" key={request.id}>
              <h3>{request.document}</h3>
              <p><strong>Request ID:</strong> {request.id}</p>
              <p><strong>Date Submitted:</strong> {request.date}</p>
              <p><strong>Current Status:</strong> {request.status}</p>

              <div className="timeline">
                {statuses.map((status, index) => {
                  const currentIndex = statuses.indexOf(request.status);

                  return (
                    <div
                      className={`timeline-step ${
                        index <= currentIndex ? 'active' : ''
                      }`}
                      key={status}
                    >
                      <div className="timeline-circle">
                        {index + 1}
                      </div>
                      <span>{status}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TrackRequest;
