import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mismatch, setMismatch] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password != confirmPassword) {
      setMismatch(true);
      return;
    }

    setLoading(true);
    
    try {
      const response = await fetch("https://backend-i9tl.onrender.com/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, gmail, password }),
      });

      if (response.ok) {
        // Clear the form fields after successful submission
        setUsername("");
        setGmail("");
        setPassword("");
        setSuccess(true);
        setLoading(false);
      } else {
        // Optionally handle non-OK responses here
        console.error("Failed to add user.");
      }
    } catch (error) {
      // Optionally handle network or other errors here
      console.error("Failed to add user.", error);
    } finally {
      setLoading(false);
    };
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
           <i class="bi bi-cup-hot"></i>     Bankky <small>Blog.</small>
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
                    <span className="nav-link">
                      HOME
                    </span>
                  </li>
                </Link>
                  <Link to='/' className='link'>
                  <li className="nav-item">
                    <span className="nav-link">
                      <span>ABOUT Us</span>
                    </span>
                  </li>
                    </Link>
                  <Link to="/AllPost" className="link">
                    <li className="nav-item">
                      <span className="nav-link">
                        BLOG
                      </span>
                    </li>{" "}
                  </Link>
                  <Link to='/' className='link'>
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
                        <li className={"border-bottom"}><span className="dropdown-item"><i className="bi bi-person-add"></i> Login</span></li>
                      </Link>
                      </ul>
                    </div>
                  </li>

                  <Link to="/Contact">
                  <button className="btn bg-light text-dark btn- rounded-pill">
                    LET'S TALK
                  </button>
                  </Link>
                </ul>
              </div>
            </div>
          </nav>
      
    <div className="container-fluid bg-light pb-5">
      <div className="container">
      <form onSubmit={handleSubmit} className="bg-white p-4 mt-5 was-validated">
        <h2 className="text-danger text-center pt-5 pb-3">Create an account</h2>
        <div>
        <label htmlFor="username" className="form-label">Username:*</label>
        <input
          type="text"
          value={username}
          id={"username"}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Input username"
          className={"form-control"}
          required
        />
          <div className="valid-feedback mb-4">Valid.</div> <div className="invalid-feedback mb-3">Username must not empty.</div>
        </div>

        <div>
        <label htmlFor={"email"} className="form-label">Email:*</label>
        <input
          type="email"
          value={gmail}
          id={"email"}
          onChange={(e) => setGmail(e.target.value)}
          placeholder="Input valid email" className={"form-control"}
          required
        />
          <div className="valid-feedback mb-3">Valid.</div> <div className="invalid-feedback mb-3">Email must not empty.</div>
        </div>

        <div>
        <label htmlFor={"password "} className="form-label">Password:*</label>
        <input
          type="password"
          value={password}
          id={"password"}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Input password" className={"form-control"}
          required
        />
          <div className="valid-feedback mb-3">Valid.</div> <div className="invalid-feedback mb-3">Password must not empty.</div>
        </div>

        <label htmlFor={"confirmPasswors"} className="form-label">Confirm password:*</label>
        <input type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Input password again"
          className="form-control mb-1"
          required 
          />
        {mismatch && <p className="text-danger mb-3">Password do not match</p>}

        <button type="submit" className="btn btn-danger mt-4 mb-3">Register</button>
        <p className="text-center mt-4">Already a member? <Link to="/Password"> Sign in</Link></p>
      </form>
        {success && <p className="text-danger text-center pt-5">Registration successful, please <Link to={"/Password"}>login</Link></p>}
        {loading && <h3 className="text-danger text-center pt-5"> <div className="spinner-grow"></div>Processing..</h3>}
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
                  <i className="bi bi-facebook"></i>
                </h2>
              </div>
              <div className="col-2">
                <h2>
                  <i className="bi bi-twitter"></i>
                </h2>
              </div>
              <div className="col-2">
                <h2>
                  <i className="bi bi-telegram"></i>
                </h2>
              </div>
              <div className="col-2">
                <h2>
                  <i className="bi bi-linkedin"></i>
                </h2>
              </div>
              <div className="col-2"></div>
            </div>
          </div>
          <div className="col-sm-8">

            <div className="row">
              <div className="col-sm-8 pt-5">
                <h3>Join Our Community of 203,849 Food Lovers</h3>
                <p>Experience the joy of culinary exploration, where each recipe, reviews
                  and tip nourishes the soul just like a melody at a masterpiece. Let our content inspire
                  your next meal.
                </p>
                <h3>Stay Connected</h3>
                <p>I share delicious and thoughtfully curated content occasionally-no spam, just the good stuff. Promise.</p>
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
      <p>Copyright 2024 Bankky Blogger || Alright Reserve <br/> Subscribe for newsletter</p>
      </div>
    </>
  );
};

export default Register;