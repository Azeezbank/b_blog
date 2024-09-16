import React from "react";
import { Link } from "react-router-dom";

// NavBar section component
const Home = () => {
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
              <li className="nav-item">
                <span className="nav-link">
                  <a href="#About" className="link">
                    ABOUT Us
                  </a>
                </span>
              </li>
              <Link to="/AllPost" className="link">
                <li className="nav-item">
                  <span className="nav-link">BLOG</span>
                </li>{" "}
              </Link>
              <li className="nav-item">
                <span className="nav-link">
                  <a href="#service" className="link">
                    {" "}
                    SERVICE{" "}
                  </a>
                </span>
              </li>

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

      <div
        className="container-fluid first text-center text-light p-5 bg-danger"
        style={{
          backgroundImage:
            "url('https://skytechgeek.com/wp-content/uploads/2019/03/become-food-blogger.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="topb">
          <div className="topt">
            <h6 className="top">Best Drinks and Delicacies By</h6>
            <h3 className="p-4">Bankky B</h3>
            <p className="paragraph">
              Food not only satisfies our hunger but also brings people
              together, creating shared experiences and memories. From the rich
              aroma of a freshly baked loaf to the vibrant colors of a fruit
              salad, each dish tells its own story.
            </p>
            <div className="pt-5 pb-5 me-2">
              <a href="https://www.facebook.com/bankole.azeez.940?mibextid=ZbWKwL"><i className="bi bi-facebook p-3 text-white"></i></a>{" "}
              <a href="https://x.com/BankoleAzeezBa2"><i className="bi bi-twitter p-3 text-white"></i></a>
              <a href="https://www.linkedin.com/in/bankole-azeez-babatunde-9a59772a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="bi bi-linkedin p-3 text-white"></i></a>{" "}
              <a href="https://wa.me/message/WAVWLMSBJZMNI1"><i className="bi bi-whatsapp p-3 text-white"></i></a>
            </div>
            <strong>
              Get regular update on latest trends in food and drinks
            </strong>{" "}
            <br />
            <Link to={"/Contact"}>
            <button className="btn btn-light mt-3">Contact Me</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-light p-5 text-center">
        <div className="car">
          <h3>Recognized by</h3>
          <div className="row mt-5 text-start">
            <div className="col-6">
              <div className="row ">
                <div className="col-2">
                  <h4>
                    <i className="bi bi-star-fill text-danger"></i>
                  </h4>
                </div>
                <div className="col-10">
                  <h5> Michelin Guide</h5>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-2">
                  <h4>
                    <i className="bi bi-award text-danger"></i>
                  </h4>
                </div>
                <div className="col-10">
                  <h5> Jame Beard foundation</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="row text-start mt-5">
            <div className="col-6">
              <div className="row">
                <div className="col-2">
                  <h4>
                    <i className="bi bi-chat-square-text text-danger"></i>
                  </h4>
                </div>
                <div className="col-10">
                  <h5> Zagat</h5>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-2">
                  <h4>
                    <i className="bi bi-trophy text-danger"></i>
                  </h4>
                </div>
                <div className="col-10">
                  <h5> Slow food movement</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5 text-light" id={"service"}>
            <div className="col-sm-6 bg-danger mt-2 p-5 rounded">
              <strong>OUR SERVICES</strong>
              <h4>We Will Help Your Health Growing</h4>
            </div>
            <div className="col-sm-6 bg-danger mt-2 p-5 rounded">
              <h3>
                <i className="bi bi-egg"></i>
              </h3>
              <h4>Recipe Development</h4>
              <p>
                Whether you're a home cook or a professional chef, our recipes
                are designed to inspire and delight.
              </p>
            </div>
          </div>

          <div className="row mt-2 text-light">
            <div className="col-sm-6 bg-danger mt-2 p-5 rounded">
              <h3>
                <i className="bi bi-gear"></i>
              </h3>
              <h4>Cooking Tips & Techniques</h4>
              <p>
                Master the art of cooking with our comprehensive tips and
                techniques. From kitchen hacks to advanced culinary skills
              </p>
            </div>
            <div className="col-sm-6 bg-danger mt-2 p-5 rounded">
              <h3>
                <i className="bi bi-clipboard"></i>
              </h3>
              <h4>Meal Planning & Prep</h4>
              <p>
                We offer easy-to-follow plans and pre-preparation tips to help
                you save time and enjoy nutritious, well-balanced meals every
                day of the week.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-white p-5 text-center">
        <div className="car">
          <div className="row mt-5 mb-3">
            <div className="col-sm-4">
              <h2>
                <i className="bi bi-people bg-light p-3 rounded-circle"></i>
              </h2>
              <h4 id={"About"}>About Our Company</h4>
            </div>
            <div className="col-sm-8"></div>
          </div>
          <strong className="mt-5 text-start">
            We are team of expert people with creativity ideas
          </strong>
          <p className="text-muted text-start pt-2">
            We are passionate about all things food. Our mission is to inspire
            culinary creativity and promote a healthy, balanced lifestyle
            through delicious recipes, expert food photography, and insightful
            nutritional advice.{" "}
          </p>

          <div className="row mt-4 text-start">
            <div className="col-sm-1">
              <h2>
                <i className="bi bi-egg-fried bg-danger p-2 rounded-circle text-white"></i>
              </h2>
            </div>
            <div className="col-sm-5">
              <h4>Recipe Development</h4>
              <p className="text-muted">
                Creating and testing new recipes, adjusting ingredients for
                flavor, texture, and presentation.
              </p>
            </div>
            <div className="col-sm-1">
              <h2>
                <i className="bi bi-camera bg-danger p-2 rounded-circle text-white"></i>
              </h2>
            </div>
            <div className="col-sm-5">
              <h4>Food photography</h4>
              <p className="text-muted">
                Capturing visually appealing images of food, showcasing dishes
                in a way that enhances their appeal.
              </p>
            </div>
          </div>

          <div className="row mt-4 text-start">
            <div className="col-sm-1">
              <h2>
                <i className="bi bi-graph-up bg-danger rounded-circle p-2 text-white"></i>
              </h2>
            </div>
            <div className="col-sm-5">
              <h4>Nutrition Analysis</h4>
              <p className="text-muted">
                Understanding and explaining the nutritional content of various
                foods and how they contribute to a balance diet
              </p>
            </div>
            <div className="col-1">
              <h2>
                <i className="bi bi-tools bg-danger rounded-circle text-dark p-2 text-white"></i>
              </h2>
            </div>
            <div className="col-sm-5">
              <h4>Culinary Techniques</h4>
              <p className="text-muted">
                Mastery of cooking methods such as baking, grilling, sautéing,
                and more, including tips and tricks for home cooks.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-light p-5 text-center">
        <div className="car">
          <div className="row mt-5 mb-3">
            <div className="col-sm-4 text-start ms-4 mb-3">
              <h1>
                <i className="bi bi-signpost bg-danger p-4 rounded-circle text-white"></i>
              </h1>
            </div>
            <div className="col-sm-8"></div>
          </div>

          <div className="row mt-3 text-start">
            <div className="col-sm-6">
              <h4>Our business process road</h4>
            </div>
            <div className="col-sm-6"></div>
          </div>

          <div className="row mt-5">
            <div className="col-sm-4 text-danger">
              <h1>01.</h1>
            </div>
            <div className="col-sm-8 text-start">
              <h5>Create an idea</h5>
              <p className="text-muted">
                What’s hard is to develop the habits that enable us to come up
                with great ideas.
              </p>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-sm-4 text-danger">
              <h1>02.</h1>
            </div>
            <div className="col-sm-8 text-start">
              <h5>Complete the project</h5>
              <p className="text-muted">
                You can organize yourself and your team in endless ways.
              </p>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-sm-4 text-danger">
              <h1>03.</h1>
            </div>
            <div className="col-sm-8 text-start">
              <h5>Execution</h5>
              <p className="text-muted">
                When it comes to motivating teams, awarding members for good
                performance.
              </p>
            </div>
          </div>

          <div className="card mt-5 mb-3 p-5">
            <h3>
              <span className="text-danger">Ready?</span> Embark on your
              culinary journey
            </h3>
            <p className="text-muted">
              Whether you're launching a new food venture or enhancing your
              existing one, we're here to help you start strong and bring your
              vision to life with delicious results.
            </p>
           <Link to={"/Contact"}>
            <h2 className="btn bg-danger shadow-lg pt-3 pb-3 rounded text-white">
              <i className="bi bi-telephone"></i> Contact Us Today
            </h2>
           </Link>
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
};

export default Home;