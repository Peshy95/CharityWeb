import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="pic-section">
        <h1>Empowering Lives Through Community Support</h1>
        <p>Our mission is to uplift those in need by providing essential resources and support.</p>
        <div className="buttons">
          <button className="donate-button" onClick={() => navigate("/donate")}>
            Donate
          </button>
          <button className="learn-more-button">Learn More &gt;</button>
        </div>
      </div>

      {/* Donate Section */}
      
      <section className="donate-section">
        <div className="container">
          <div className="card">
            <div className="text-content">
              <h2>Join Us in Making a Difference Today</h2>
              <p>
                Your support can change lives and bring hope to those in need.
                Together, we can create a brighter future for our community.
              </p>
            </div>
            <div className="image-container">
              <img
                src="src/assets/donate.jpg"
                alt="Donations box"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
