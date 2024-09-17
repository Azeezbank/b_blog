import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllPost() {
  const [posts, setPosts] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [filteredPosts, setFilteredPosts] = useState([]);

  const [wishlist, setWishlist] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://backend-i9tl.onrender.com/api/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setFilteredPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setFilteredPosts(filtered);
    }
  };

  // Retrieve the wishlist from localStorage when the component mounts
  useEffect(() => {
   const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist)); // Load wishlist from localStorage if available
    }
  }, []); // Load wishlist from localStorage if available

  // Save the wishlist to localStorage whenever it changes
  useEffect(() => {
    if (wishlist.length > 0) {
      localStorage.setItem("wishlist", JSON.stringify(wishlist)); // Save wishlist to localStorage
    }
  }, [wishlist]);



  const toggleWishlist = (post) => {
    const isItemInWishlist = wishlist.some((item) => item.id === post.id);

    if (isItemInWishlist) {
      // Remove item from wishlist
      const updatedWishlist = wishlist.filter((item) => item.id !== post.id);

      if (updatedWishlist.length === 0) {
        // Clear wishlist if empty
        setWishlist([]);
        localStorage.removeItem("wishlist");
      } else {
        // Update wishlist in state and localStorage
        setWishlist(updatedWishlist);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      }
    } else {
      // Add item to wishlist
      const updatedWishlist = [...wishlist, post];
      setWishlist(updatedWishlist);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    }
  };

  // Function to check if a post is wishlisted
  const isWishlisted = (post) => {
    return wishlist.some((item) => item.id === post.id);
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
           <i class="bi bi-cup-hot"></i> Bankky <small>Blog.</small>
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
                        <li className={"border-bottom"}><span className="dropdown-item"><i className="bi bi-key"></i> Login</span></li>
                      </Link>
                       <Link to={"/Register"} className={"link"}> <li><span className={"dropdown-item"}><i className="bi bi-person-add"></i> Register</span></li>
                       </Link>
                      </ul>
                    </div>
                  </li>

              <Link to="/Contact" className="link">
                <button className="btn bg-light text-dark btn- rounded-pill">
                  LET'S TALK
                </button>
              </Link>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid bg-light">
        <div className="row blog">
          <div className="col-sm-8">
            <div className="row">
              <div className="col-sm-6">
                <h1 className="text-danger pt-5 pb-4 fs-1 ps-5 mt-5">
                  BLOG POSTS
                </h1>
              </div>
              <div className="col-sm-6"></div>
            </div>

            <div>
              {loading ? (
                <>
                  <h1 className="text-danger text-center">
                    <div
                      className="spinner-border text-danger"
                      role="status"
                    ></div>{" "}
                    Loading...{" "}
                  </h1>
                </>
              ) : (
                <ul className="p-3 grid">
                  {filteredPosts.map((post, index) => (
                    <li
                      key={post.id || index}
                      className="card bg-white text-dark border rounded shadow-sm p-3"
                      style={{ listStyle: "none" }}
                    >
                      <img
                        className="thumbnail"
                        src="https://www.anandnaturecure.in/wp-content/uploads/2019/01/natural-food.jpg"
                        alt="img"
                      />
                      <h3 className="pt-4">{post.title}</h3>
                      <small>
                        {" "}
                        <i className="bi bi-person-fill bg-light text-danger p-2 rounded-circle"></i>
                        By {post.author_name} <br /> {post.created_at}
                      </small>{" "}
                      <p className="pt-3" style={{whiteSpace:"pre-wrap"}}>{post.content.substring(0, 300)}...</p>
                      <br />
                      <Link to={`/PostDetail/${post.id}`} className="no-line">
                        <p className="text-danger">
                          Read more{" "}
                          <i className="bi  bi-chevron-double-right"></i>{" "}
                        </p>{" "}
                      </Link>
                      <button
                        className="bg-danger text-white ms-5 me-5 border rounded"
                        onClick={() => toggleWishlist(post)}
                      >
                        {isWishlisted(post)
                          ? "Remove from Wishlist"
                          : "Add to Wishlist"}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Display the wishlist section */}
            <h2 className="text-danger ms-5 mt-5">Whishlist</h2>
            <ul className="grid">
              {wishlist.map((post, index) => (
                <li key={index}
                  
                  className="card bg-white text-dark border rounded shadow-sm p-3"
                  style={{ listStyle: "none" }}
                >
                  <img
                    className="thumbnail"
                    src="https://www.anandnaturecure.in/wp-content/uploads/2019/01/natural-food.jpg"
                    alt="img"
                  />

                  <h3 className="pt-4">{post.title}</h3>
                  <small>
                    {" "}
                    <i className="bi bi-person-fill bg-light text-danger p-2 rounded-circle"></i>
                    By {post.author_name} <br /> {post.created_at}
                  </small>
                  <p className="pt-3" style={{whiteSpace:"pre-wrap"}}>{post.content.substring(0, 300)}...</p>
                  <br />
                  <Link to={`/PostDetail/${post.id}`} className="no-line">
                    <p className="text-danger">
                      Read more <i className="bi  bi-chevron-double-right"></i>{" "}
                    </p>{" "}
                  </Link>
                  {/* Button to remove from wishlist */}
                  <button
                    className="bg-danger text-white ms-5 me-5 border rounded"
                    onClick={() => toggleWishlist(post)}
                  >
                    Remove from Wishlist
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-sm-4">
            <form className="form input-group bg-white mt-5 me-1">
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search Post..."
                className="form-control bg-light mt-5 mb-5 ms-3"
              />
              <button
                onClick={handleSearch}
                className="btn btn-outline-danger mt-5 mb-5 me-3"
              >
                <i className="bi bi-search"></i>
              </button>
            </form>

            <div className="bg-white mt-4 mb-4">
              <h3 className="pt-5 ms-4">CATEGORIES</h3>
              <p className="text-danger pt-3 ms-3">Recipes & Cooking Tips</p>
              <Link to={'/Restaurant'} className="link">
              <p className="text-danger pt-3 ms-3">Restaurant Reviews</p>
              </Link>
              <p className="text-danger pt-3 ms-3">Healthy Eating</p>
              <p className="text-danger pt-3 ms-3 pb-4">Food Trends & News</p>
            </div>
          </div>
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
}

export default AllPost;
