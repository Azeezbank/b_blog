import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  const [name, setName] = useState(""); // To store name input
  const [comment, setComment] = useState(""); // To store comment input
  const [submittedData, setSubmittedData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("comments")) || [];
    setSubmittedData(storedData);
  }, []);

  useEffect(() => {
    if (submittedData.length > 0) {
      localStorage.setItem("comments", JSON.stringify(submittedData));
    }
  }, [submittedData]);

  useEffect(() => {
    fetch(`https://backend-i9tl.onrender.com/api/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error("Error fetching post:", error));
  }, [id]);

  if (!post) {
    return (
      <h1 className="text-danger text-center pt-5">
        <div className="spinner-border"></div>Loading...
      </h1>
    );
  }

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the page from refreshing on form submission

    if (name && comment) {
      // Add the new comment to the list of submitted data
      setSubmittedData([...submittedData, { name, comment }]);

      // Clear input fields
      setName("");
      setComment("");
    }
  };

  // Function to handle deleting a comment
  const handleDelete = (index) => {
    const updatedComments = submittedData.filter((_, i) => i !== index);
    setSubmittedData(updatedComments);
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
        <i class="bi bi-cup-hot"></i>    Bankky <small>Blog.</small>
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
                  <span href="." className="nav-link">
                    HOME
                  </span>
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

              <Link to={'/Contact'}>
              <button className="btn bg-light text-dark btn- rounded-pill">
                LET'S TALK
              </button>
              </Link>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid bg-light detail pb-5">
        <div className="card car p-5">
          <img
            className="thumbnail"
            src="https://www.anandnaturecure.in/wp-content/uploads/2019/01/natural-food.jpg"
            alt="img"
          />
          <h3 className="pt-4 text-dark">{post.title}</h3>
          <p className="text-danger">
            <i className="bi bi-person-fill bg-white text-danger p-2 rounded-circle"></i>
            By {post.author_name} <br /> {post.created_at}
          </p>
          <p className="pt-3" style={{whiteSpace:"pre-wrap"}}>{post.content}</p>
        </div>

        {/* Displaying the submitted data */}
        <h3 className="text-danger mt-5 ms-5">Submitted Comments:</h3>
        <ul>
          {submittedData.map((entry, index) => (
            <li
              className="border p-3 m-3 bg-white"
              style={{ listStyle: "none", whiteSpace:"pre" }}
              key={index}
            >
              <strong>Name: {entry.name}:</strong>{" "}
              <p>Comment: {entry.comment}</p>
              <button
                className="bg-danger text-white rounded border ms-3"
                onClick={() => handleDelete(index)}
              >
                Delete Comment
              </button>
            </li>
          ))}
        </ul>

        <div className="card car p-5 mt-5">
          <h6>Leave a Comment</h6>
          <p>
            Your email address will not be publish. The requied fields are
            marked *
          </p>
          <form onSubmit={handleSubmit}>
            <textarea
              className="form-control mt-4 bg-light"
              rows={5}
              value={comment}
              onChange={(e) => setComment(e.target.value)} style={{whiteSpace: 'pre'}}
              placeholder="Type here..."
            ></textarea>

            <div className="row">
              <div className="col-sm-4">
                <input
                  className="form-control mt-4 bg-light"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name*"
                  required
                />
              </div>
              <div className="col-sm-4">
                <input
                  className="form-control mt-4 bg-light"
                  type="email"
                  placeholder="Email*"
                  required
                />
              </div>
              <div className="col-sm-4">
                <input
                  className="form-control mt-4 bg-light"
                  type="text"
                  placeholder="Website"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="bg-danger border mt-5 p-3 text-white"
              >
                Post Comment<i className="bi bi-chevron-double-right"></i>
              </button>
            </div>
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
                  reviews and tip nourishes the soul just like a melody ot a
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
}

export default PostDetail;