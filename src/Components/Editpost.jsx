import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Editpost = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState({
    title: "",
    author_name: "",
    content: "",
    user_id: "",
    email: "",
    category: ""
  });
  
useEffect(() => {
  const handleUpdate = async () => {
    try {
      const response = await axios.get(`https://backend-i9tl.onrender.com/api/posts/${id}`);
     setPosts(response.data);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };
  handleUpdate();
}, [id]);

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`https://backend-i9tl.onrender.com/api/edit/${id}`, posts);
      console.log("Post updated successfully");
      if (response.status == 200) {alert("Post updated successfully");}else {alert('error')}
    } catch (error) {
      console.error("Failed to update post", error);
      alert("Failed to update post");
    }
  };

  return (
    <>
<nav className="navbar navbar-expand-md bg-danger bg-gradient fixed-top">
        <div className="container-fluid">
          <span
            href="#"
            className="navbar-brand"
            style={{ fontSize: "1.6rem", fontWeight: "bold" }}
          >
         <i class="bi bi-cup-hot"></i>   Bankky <small>Blog.</small>
          </span>
          <button
            className="navbar-toggler bg-light bg-gradient"
            type=" button"
            data-bs-toggle="collapse"
            data-bs-target="#navContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navContent">
            <ul className="navbar-nav">
              <hr />
              <Link to="/" className="link">
                <li className="nav-item">
                  <span className="nav-link">HOME</span>
                </li>
              </Link>
              <Link to="/" className="link">
                <li className="nav-item">
                  <span className="nav-link">
                    <span>ABOUT Us</span>
                  </span>
                </li>
              </Link>
              <Link to="/AllPost" className="link">
                <li className="nav-item">
                  <span className="nav-link">BLOG</span>
                </li>{" "}
              </Link>
              <Link to="/" className="link">
                <li className="nav-item">
                  <span className="nav-link">
                    <span> SERVICE </span>
                  </span>
                </li>
              </Link>

              <li className="nav-item">
                    <div className="dropdown">
                  <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="">
                  My Account
                  </span>
                      <ul className="dropdown-menu">
                      <Link to="/Password" className={"link"}>
                        <li><span className="dropdown-item"><i className="bi bi-power"></i> Logout</span></li>
                      </Link>
                       
                      </ul>
                    </div>
                  </li>

              <Link to="/Contact" className="link">
                <button className="btn bg-light text-dark rounded-pill ">
                  LET'S TALK
                </button>
              </Link>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid bg-light pt-5">
        <div className="container bg-white pt-5">
          <h2 className="text-center text-danger pt-3 mb-3">Edit your post</h2>
            
        <form className="bg-white p-4 was-validated" onSubmit={handleEdit}>
          <div>
            <label htmlFor={"title"} className="form-label"> Post tittl:*</label>
      <input
        type="text"
        id={"title"}
        value={posts.title}
        onChange={(e) => setPosts({ ...posts, title: e.target.value})}
        placeholder="Post Title"
        className="form-control"
        required
      />
            <div className="valid-feedback mb-3">Valid.</div>
            <div className="invalid-feedback mb-3">Field cannot be empty.</div>
            </div>

          <div>
            <label htmlFor={"author"} className="form-label"> Post author name:*</label>
      <input
        type="text"
        value={posts.author_name}
        id={"author"}
        onChange={(e) => setPost({ ...posts, author_name: e.target.value})}
        placeholder="Post Author"
        className="form-control"
        required 
      />
            <div className="valid-feedback mb-3">Valid.</div>
            <div className="invalid-feedback mb-3">Field cannot be empty.</div>
            </div>

          <div>
            <label htmlFor={"content"} className="form-label"> Post content:*</label>
      <textarea
        value={posts.content}
        onChange={(e) => setPosts({ ...posts, content: e.target.value})}
        placeholder="Post Content"
        className="form-control"
        id={"content"}
        rows={"5"}
        required
      ></textarea>
            <div className="valid-feedback mb-3">Valid.</div>
            <div className="invalid-feedback mb-3">Field cannot be empty.</div>
            </div>

          <div>
            <label htmlFor={"userid"} className="form-label"> User_id:*</label>
      <input
        type="password"
        id={"userid"}
        value={posts.user_id}
        onChange={(e) => setPosts({ ...posts, user_id: e.target.value})}
        placeholder="User ID"
        className="form-control"
        required
      />
            <div className="valid-feedback mb-3">Valid.</div>
            <div className="invalid-feedback mb-3">Field cannot be empty.</div>
            </div>

          <div>
            <label htmlFor={"email"} className="form-label"> Author email:*</label>
      <input
        type="email"
        id={"email"}
        value={posts.email}
        onChange={(e) => setPosts({ ...posts, user_id: e.target.value})}
        placeholder="Author Email"
        className="form-control"
        required
      />
            <div className="valid-feedback mb-3">Valid.</div>
            <div className="invalid-feedback mb-3">Field cannot be empty.</div>
            </div>

          <div>
     <label htmlFor="category" className="form-label">
          Category:*
        </label>
        <select id="category" className="form-control mb-3 bg-light" 
          value={posts.category} onChange={(e) => setPosts({...posts, category: e.target.value})}  required>
        <option>~~~</option>
          <option>Recipes & Cooking Tips</option>
          <option>Restaurant Reviews</option>
          <option>Healthy Eating</option>
          <option>Food Trends & News</option>
        </select>
            <div className="invalid-feedback mb-3">Field cannot be empty.</div>
            </div>
        
      <button type="submit" className="btn btn-danger mb-3 mt-2 rounded p-2">Update Post</button>
          </form>
          </div>
    </div>

      <div className="container-fluid bg-danger p-5 pt-3 text-center text-white">
        <div className="row mt-5 mb-5">
          <div className="col-sm-4">
            <div className="row">
              <div className="col-4 text-end pt-5">
                <h1>
                  <i className="bi bi-building"></i>
                </h1>
              </div>
              <div className="col-8 text-start pt-5">
                <h3>XTRA</h3>
                <p>BUSINESS</p>
              </div>
            </div>
            <p>
              A company is any entity that engages in business. Companies can be
              structured in different ways. For example, your company can be a
              sole proprietorship, a partnership, or a corporation.
            </p>
            <div className="row mt-4">
              <div className="col-2"></div>
              <div className="col-2">
                <h2>
                  <a href="https://www.facebook.com/bankole.azeez.940?mibextid=ZbWKwL"><i className="bi bi-facebook text-white"></i></a>
                </h2>
              </div>
              <div className="col-2">
                <h2>
                  <a href="https://x.com/BankoleAzeezBa2"><i className="bi bi-twitter text-white"></i></a>
                </h2>
              </div>
              <div className="col-2">
                <h2>
                  <a href="https://wa.me/message/WAVWLMSBJZMNI1"><i className="bi bi-whatsapp text-white"></i></a>
                </h2>
              </div>
              <div className="col-2">
                <h2>
                  <a href="https://www.linkedin.com/in/bankole-azeez-babatunde-9a59772a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="bi bi-linkedin text-white"></i></a>
                </h2>
              </div>
              <div className="col-2"></div>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="row">
              <div className="col-sm-8 pt-5">
                <h3>Join Our Community of 203,849 Food Lovers</h3>
                <p>
                  Experience the joy of culinary exploration, where each recipe,
                  reviews and tip nourishes the soul just like a melody at a
                  masterpiece. Let our content inspire your next meal.
                </p>
                <h3>Stay Connected</h3>
                <p>
                  I share delicious and thoughtfully curated content
                  occasionally-no spam, just the good stuff. Promise.
                </p>
              </div>
              <div className="col-sm-4 pt-5">
                <h3>ADDRESS</h3>
                <p>Secretariat, Iragbiji, Osun State, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid border-top border-light bg-danger text-center text-light p-5">
        <p>
          © Copyright 2024 Bankky Blogger || ® Alright Reserve. <br /> Subscribe for
          newsletter
        </p>
      </div>
    </>
  );
};

export default Editpost;