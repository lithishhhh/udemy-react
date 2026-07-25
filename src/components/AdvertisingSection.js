function AdvertisingSection() {
  return (
    <div class="attractive-cards">
      <div className="ad-section"></div>

      <div class="ad-section__tittle">
        <h2>Limited time offer ⌛</h2>
      </div>

      <div class="ad-section__content">
        <h2>Special General Pricing & Offers Just Launched! 📢</h2>
        <p>
          Discover unbeatable value across our entire course catalog. Check out
          our best price matching and bulk enrollment deals before they expire.
        </p>
      </div>

      <div class="advertising__sec">
        <div class="advertising__sec1">
          <h2 class="section-heading">Courses Available:</h2>
          <p>Guiding minds. Shaping futures! 🚀</p>
          <h3>Best Sellers 🎯</h3>

          <ul class="course-list">
            <li>
              <a href="https://www.udemy.com" className="course-link">
                📍 Python Data Visualisation Masterclass
              </a>
            </li>
            <li>
              <a href="https://www.udemy.com" className="course-link">
                📍 Web Development Bootcamp 2023
              </a>
            </li>
            <li>
              <a href="https://www.udemy.com" className="course-link">
                📍 Master UI/UX Designing with Figma
              </a>
            </li>
            <li>
              <a href="https://www.udemy.com" className="course-link">
                📍 Basic to Advance Java Core Training
              </a>
            </li>
            <li>
              <a href="https://www.udemy.com" className="course-link">
                📍 Cloud Computing
              </a>
            </li>
            <li>
              <a href="https://www.udemy.com" className="course-link">
                📍 SQL Tables and Queries Masterclass
              </a>
            </li>
          </ul>

          <br />

          <div class="offer-courses">
            <div class="price-tag">
              <span>₹ 2999 ✅</span>
              <span>
                <del>7999</del>
                <span>❌</span>
              </span>
              <span>62% OFF</span>
            </div>

            <button class="explore-btn">
              <a href="https://www.udemy.com">Explore Courses</a>
            </button>
          </div>
        </div>

        <div class="advertising__sec2">
          <h3>High-Demand Courses 📈</h3>
          <p>Choose your path. Shape your destiny 🔨</p>

          <ul class="course-list">
            <li>
              <a href="https://www.udemy.com" className="course-link">
                📍 Ethical Hacking
              </a>
            </li>
            <li>
              <a href="https://www.udemy.com" className="course-link">
                📍 Networking Basics to Pro
              </a>
            </li>
            <li>
              <a href="https://www.udemy.com" className="course-link">
                📍 Data Management
              </a>
            </li>
            <li>
              <a href="https://www.udemy.com" className="course-link">
                📍 Product Management
              </a>
            </li>
            <li>
              <a href="https://www.udemy.com" className="course-link">
                📍 Master React.js
              </a>
            </li>
            <li>
              <a href="https://www.udemy.com" className="course-link">
                📍 Master Node.js
              </a>
            </li>
          </ul>

          <div class="offer-courses">
            <p>
              ⚠️ Full Bundle Offer -
              <span class="highlight">Save 55%</span>
            </p>
            <div class="offer-price">
              <span>₹5999</span>
              <del>₹11111</del>
              🏷️
            </div>
            <button class="explore-btn">
              <a href="https://www.udemy.com">Explore Courses</a>
            </button>
          </div>
        </div>

        <div class="advertising__sec3">
          <h3>Get Certified 🏅</h3>

          <p>
            ⭐ Amazon Web Services (AWS) Certifications -
            <a href="https://www.udemy.com/browse/certification/aws-certifications/">
              <i>Explore</i>
            </a>
          </p>
          <p>
            ⭐ Microsoft Certifications -
            <a href="https://www.udemy.com/browse/certification/microsoft-certifications/">
              <i>Explore</i>
            </a>
          </p>
          <p>
            ⭐ Cisco Certifications -
            <a href="https://www.udemy.com/browse/certification/cisco-certifications/">
              <i>Explore</i>
            </a>
          </p>
          <p>
            ⭐ CompTIA Certifications -
            <a href="https://www.udemy.com/browse/certification/comptia-certifications/">
              <i>Explore</i>
            </a>
          </p>
          <p>
            ⭐ Project Management Institute Certifications -
            <a href="https://www.udemy.com/browse/certification/project-management-institute-pmi-certifications/">
              <i>Explore</i>
            </a>
          </p>
          <p>
            ⭐ Google Cloud Certifications -
            <a href="https://www.udemy.com/browse/certification/google-cloud-certifications/">
              <i>Explore</i>
            </a>
          </p>
          <p>
            ⭐ Six Sigma Certifications -
            <a href="https://www.udemy.com/browse/certification/google-cloud-certifications/">
              <i>Explore</i>
            </a>
          </p>
          <p>
            ⭐ ISC Certifications -
            <a href="https://www.udemy.com/browse/certification/isc-certifications/">
              <i>Explore</i>
            </a>
          </p>

          <div class="advertising__sec3__desc">
            <span>Get 33% Offer 🏷️</span>
            <br />
            <button class="explore-btn">
              <a href="https://www.udemy.com">Explore Certifications</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvertisingSection;