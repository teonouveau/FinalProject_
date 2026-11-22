
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DocumentRequest() {
  const navigate = useNavigate();

  const [document, setDocument] = useState('');
  const [purpose, setPurpose] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!document || !purpose.trim()) {
      alert('Please complete all required fields.');
      return;
    }

    const newRequest = {
      id: 'REQ-' + Date.now(),
      document,
      purpose,
      file: file ? file.name : 'No file uploaded',
      date: new Date().toLocaleDateString(),
      status: 'Submitted'
    };

    const savedRequests =
      JSON.parse(localStorage.getItem('requests')) || [];

    savedRequests.push(newRequest);
    localStorage.setItem('requests', JSON.stringify(savedRequests));

    alert('Your request has been submitted!');
    navigate('/track-request');
  };

  return (
    <div className="page-container">
      <div className="page-card">
        <button className="back-button" onClick={() => navigate('/dashboard')}>
          ← Back to Dashboard
        </button>

        <h1>New Document Request</h1>
        <p>Fill out the form to request a registrar document.</p>

        <form onSubmit={handleSubmit} className="request-form">
          <label>Document Type *</label>
          <select
            value={document}
            onChange={(e) => setDocument(e.target.value)}
          >
            <option value="">Select a document</option>
            <option>Certificate of Enrollment</option>
            <option>Copy of Grades</option>
            <option>Certificate of Good Moral</option>
            <option>Transcript of Records</option>
            <option>Certificate of Graduation</option>
          </select>

          <label>Purpose of Request *</label>
          <textarea
            rows="4"
            placeholder="Enter the reason for your request..."
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
          />

          <label>Upload Supporting Document (Optional)</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <button type="submit" className="submit-button">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}

export default DocumentRequest;
