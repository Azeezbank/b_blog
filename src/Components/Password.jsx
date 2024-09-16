import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Password() {
  // State to hold the username, password, and response message
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  // Function to handle form submission
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    setLoading(true);
    try {
      // Send POST request to the backend
      const response = await fetch('https://backend-i9tl.onrender.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }), // Send username and password
      });

      // Parse the JSON response
      const data = await response.json();

      if (response.ok) {
        // If login is successful
        setMessage(` ${data.username}`);
        setIsLogin(true);
        setLoading(false);
      } else {
        // If login failed
        setMessage(data.error);
      }
    } catch (error) {
      // If there's an error with the fetch request
      setMessage('An error occurred. Please try again.');
      setLoading(false);
      console.error('Error:', error);
    } finally {
      setLoading(false);
    };
  };

  return (
    <div>

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
                       <Link to={"/Register"} className={"link"}> <li><span className={"dropdown-item"}><i className="bi bi-person-add"></i> Register</span></li>
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


    
      <div className='bg-light container-fluid mt-5'>
      {!isLogin ? (
      <div className='container bg-light pb-5'>
      <form className='bg-white p-5 was-validated' onSubmit={handleLogin}>
        <h2 className='text-danger mb-5 mt-5 text-center'>Login to your account</h2>
        <div>
          <label className='form-label'>Username:*</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='form-control'
            placeholder='Input Username'
            required
          />
          <div className='valid-feedback mb-3'>Valid</div>
          <div className='invalid-feedback mb-3'>Username cannot be empty.</div>
        </div>
        <div>
          <label className='form-label'>Password:*</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='form-control' placeholder='Input Password'
            required
          />
          <div className='valid-feedback mb-3'>Valid</div>
          <div className='invalid-feedback mb-3'>Password cannot be empty.</div>
        </div>
        <button className='btn btn-danger' type="submit">Login</button>
        <p className={"text-center mt-4 mb-2"}>New to Bankky blog? <Link to={"/Register"}>Create Account</Link></p>
      </form> </div> ) : (
      <div className='p-4 pt-5 container'>
       <p className="mt-5">Welcome back, <strong>{message}!</strong> If this isn't you, please <Link to={"/"}><strong>log out</strong></Link> and log in again with the correct username.</p>
        <Link to={"/Login"}>
        <button className='btn btn-danger p-3 m-5'>Proceed</button>
        </Link>
      </div>
      )}

        {loading && ( <h2 className="text-danger text-center pb-5"><div className="spinner-grow"></div>Please wait...</h2> )}
      <div>
      {message && !isLogin && <p className='text-danger m-5 p-5 text-center'>{message}</p> }
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

      
    </div>
  );
}

export default Password;