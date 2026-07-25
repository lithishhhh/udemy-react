import popimage1 from "../assets/images/image1.jpg"
import popimage2 from "../assets/images/image2.jpg"
import popimage3 from "../assets/images/image3.jpg"
import popimage4 from "../assets/images/image4.jpg"
import popimage5 from "../assets/images/image5.jpg"
import popimage6 from "../assets/images/image6.jpg"
import popimage7 from "../assets/images/image7.jpg"
import popimage8 from "../assets/images/image8.jpg"
function MostPopular() {
    return (
        <div class="popular-section">
            <h1 class="popular-section__tittle">Most popular Courses</h1>
            <p> Choose wisely. Pick the best ! ✅</p>
            <div class="popular-section__container">
                <div class="popular-section__card">
                    <img src={popimage1} alt="popimage1" />
                    <h3>Cloud Computting</h3>
                    <p>Brendon</p>
                    <p>4.9 ⭐⭐⭐⭐<i class="fa-solid fa-star" style={{color: "rgb(255, 212, 59)"}}></i></p>
                    <p>₹1999  <del>₹3999 </del> </p>
                </div>
                <div class="popular-section__card">
                    <img src={popimage2} alt="popimage2" />
                    <h3>SQL Tables and Queries Masterclass</h3>
                    <p>Jordan</p>
                    <p>3.2 ⭐⭐⭐</p>

                    <p>₹1999  <del>₹3999 </del> </p>
                </div>
                <div class="popular-section__card">
                    <img src={popimage3} alt="popimage3" />
                    <h3>Ethical Hacking</h3>
                    <p>Cyber Voyage</p>
                    <p>4.8 ⭐⭐⭐</p>
                    <p>₹1999  <del>₹3999 </del> </p>
                </div>
                <div class="popular-section__card">
                    <img src={popimage4} alt="popimage4" />
                    <h3> Networking basis to Pro</h3>
                    <p>Emilio</p>
                    <p>4.8 ⭐⭐⭐⭐</p>
                    <p>₹1999  <del>₹3999 </del> </p>
                </div>
                <div class="popular-section__card">
                    <img src={popimage5} alt="popimage5" />
                    <h3>Data Management</h3>
                    <p>Daren</p>
                    <p>3.9 ⭐⭐⭐<i class="fa-solid fa-star" style={{color: "rgb(255, 212, 59)"}}></i></p>
                    <p>₹1999  <del>₹3999 </del> </p>
                </div>
                <div class="popular-section__card">
                    <img src={popimage6} alt="popimage6" />
                    <h3>Product Management </h3>
                    <p>Edward konstas</p>
                    <p>3.2 ⭐⭐⭐</p>
                    <p>₹1999  <del>₹3999 </del> </p>
                </div>
                <div class="popular-section__card">
                    <img src={popimage7} alt="popimage7" />
                    <h3>Master React.Js</h3>
                    <p>Cristiana</p>
                    <p>4.8 ⭐⭐⭐</p>
                    <p>₹1999  <del>₹3999 </del> </p>
                </div>
                <div class="popular-section__card">
                    <img src={popimage8} alt="popimage8" />
                    <h3>Master Node.Js</h3>
                    <p>Nathon Smith</p>
                    <p>4.8 ⭐⭐⭐⭐</p>
                    <p>₹1999  <del>₹3999 </del> </p>
                </div>
            </div>
        </div>
    )
}

export default MostPopular