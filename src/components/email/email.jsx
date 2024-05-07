import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmailComponent = () => {
  const [name, setName] = useState("");
  const [emails, setEmails] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Replace with your actual API endpoint
      const apiUrl = "http://localhost:3000/email";

      const data = {name, emails}

      console.log("body ", data);

      axios.post(apiUrl, data)
      .then(res => {
        console.log("response", res);
        toast.success(res.data);
      })
      .catch(err => {
        console.log("error", err);
      });
    } catch (error) {
      console.error("Error:", error);
      // Show error message in a toast
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div style={{margin: "10%"}}>
        <h3 className="mb-5">Email form List</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Your Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter name"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Email lists</label>
          <input
            type="test"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter emails list"
            onChange={e => setEmails(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            Email list must be comma separated.
          </small>
        </div>
       
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default EmailComponent;
