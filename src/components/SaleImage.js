import heroimage from "../assets/images/heroimage.jpg";
function SaleImage() {
  return (
    <div class="sales-banner">
      <div class="banner-card">
        <img src={heroimage} alt="hero-image"/>
        <div class="banner-text">
          <h3>Save 30% on a year of learning.</h3>
          <p>
            Personal Plan is your career companion for AI and <br /> more cutting-edge skills.
          </p>
          <p>Sale ends June 14. Terms apply.</p>
        </div>
      </div>
    </div>
  );
}

export default SaleImage
    