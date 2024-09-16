import React, { useState } from "react";

const Createpost = () => {
  const [title, setTitle] = useState("");
  const [author_name, setAuthor_name] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [user_id, setUser_id] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://backend-i9tl.onrender.com/api/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, author_name, email, content, user_id, category }),
        },
      );

      if (response.ok) {
        // Clear the form fields after successful submission
        setTitle("");
        setAuthor_name("");
        setEmail("");
        setContent("");
        setUser_id("");
        setCategory("");
        alert("Post successfull");
      } else {
        // Optionally handle non-OK responses here
        console.error("Failed to post.");
      }
    } catch (error) {
      // Optionally handle network or other errors here
      console.error("Failed to post.", error);
    }
  };

  return (
    <>
      <form className="bg-white p-3 border text-start" onSubmit={handleSubmit}>
        <label htmlFor="title" className="form-label">
          {" "}
          Title:*
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post Title"
          name="title"
          className="form-control bg-light mb-3"
          required
        />

        <label htmlFor="author" className="form-label">
          Author:*
        </label>
        <input
          type="text"
          value={author_name}
          onChange={(e) => setAuthor_name(e.target.value)}
          placeholder="Post Author name"
          className="form-control mb-3 bg-light"
          name="author"
          required
        />

        <label htmlFor="email" className="form-label">
          Email:*
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Author mail"
          className="form-control mb-3 bg-light"
          id={"email"}
          required
        />

        <label htmlFor="content" className="form-label">
          Content:*
        </label>
        <textarea id={"content"} onChange={(e) => setContent(e.target.value)} className="form-control bg-light mb-3" rows={5} placeholder="Post content here"
          style={{whiteSpace:"pre-wrap"}}required></textarea>
        {/* <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Post Description"
          className="form-control bg-light mb-3"
          name="content"
          required
        /> */}

        <label htmlFor="userid" className="form-label">
          User_id:*
        </label>
        <input
          type="password"
          value={user_id}
          onChange={(e) => setUser_id(e.target.value)}
          placeholder="Unique & Secret Number"
          name="userid"
          className="form-control bg-light mb-3"
          required
        />

        <label htmlFor="category" className="form-label">
          Category:*
        </label>
        <select id="category" className="form-control mb-3 bg-light"  required>
        <option>~~~</option>
          <option>Recipes & Cooking Tips</option>
          <option>Restaurant Reviews</option>
          <option>Healthy Eating</option>
          <option>Food Trends & News</option>
        </select>
        

        <div className="form-check">
          <label htmlFor="check" className="form-check-label mb-3">
            <input type="checkbox" className="form-check-input bg-light" />
            Remember Me
          </label>
        </div>

        <button className="mt-3 btn btn-danger" type="submit">
          Create
        </button>
      </form>
    </>
  );
};

export default Createpost;