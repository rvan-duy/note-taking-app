import Navbar from "../components/Navbar";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post("http://localhost:3000/api/notes", {
        title,
        content,
      });
      navigate("/");
    } catch (error) {
      console.error("Error creating note:", error);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto p-4 mt-6">
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Create a new note</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Title" 
                  className="input input-bordered" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Content</span>
                </label>
                <textarea 
                  placeholder="Content" 
                  className="textarea textarea-bordered" 
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Create Note</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;