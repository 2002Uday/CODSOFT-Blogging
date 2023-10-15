import React, { useState } from "react";
import "./CreatePost.css";
import Editor from "./Editor";
import { Navigate } from "react-router-dom";
const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);


  async function createNewPost(ev) {
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0]);
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/post', {
      method: 'POST',
      body: data,
      credentials: 'include',
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  
  return (
    <div className="create-blog">
      <h1>Create New Blog</h1>
      <form
        className="blog-form"
        onSubmit={createNewPost}
      >
        <p>Add Your Blog Title</p>
        <input
          className="create-title"
          type="title"
          placeholder={"Title"}
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        <p>Add Your Blog Summary</p>
        <input
          className="create-summary"
          type="summary"
          placeholder={"Summary"}
          value={summary}
          onChange={(ev) => setSummary(ev.target.value)}
        />
        <p>Upload Your Blog image</p>
        <input
          className="create-file"
          type="file"
          onChange={ev => setFiles(ev.target.files)}
        />
        <p>Add Detailed Description of Your Blog</p>
        <Editor
          value={content}
          onChange={setContent}
        />
        <button style={{ marginTop: "1.5rem" }}>Create post</button>
      </form>
    </div>
  );
};

export default CreatePost;
