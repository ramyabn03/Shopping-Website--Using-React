import { Fragment } from "react";
import "./Home.css";
import Products from "./Products";

function Home() {
  return (
    <Fragment>
      <div className="hero">
        <div className="card text-bg-dark text-white border-0">
          <img src="/assets/bgi.jpg" className="card-img" alt="Background" />
          <div className="card-img-overlay">
            <div className="container content">
              <h5 className="hero-title">NEW SEASON COLLECTIONS</h5>
              <p className="hero-text">CHECK OUT ALL THE TRENDS.</p>
            </div>
          </div>
        </div>
      </div>
      <Products />
    </Fragment>
  );
}

export default Home;
