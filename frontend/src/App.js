import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);
  const [newJob, setNewJob] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch all jobs from backend
  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/jobs");
      const data = await response.json();

      // ✅ Ensure jobs is always an array
      if (Array.isArray(data)) {
        setJobs(data);
      } else if (Array.isArray(data.jobs)) {
        setJobs(data.jobs);
      } else {
        setJobs([]);
      }
    } catch (err) {
      setError("Failed to fetch jobs");
    } finally {
      setLoading(false);
    }
  };

  // Add new job
  const addJob = async () => {
    if (!newJob.trim()) return alert("Enter a job title");
    try {
      const response = await fetch("http://localhost:5000/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newJob }),
      });
      if (response.ok) {
        setNewJob("");
        fetchJobs();
      }
    } catch (err) {
      setError("Failed to add job");
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="App">
      <h1>Job Tracker</h1>

      <div className="add-job">
        <input
          type="text"
          placeholder="Enter job title..."
          value={newJob}
          onChange={(e) => setNewJob(e.target.value)}
        />
        <button onClick={addJob}>Add Job</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {jobs.map((job) => (
          <li key={job._id || job.id || Math.random()}>{job.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
