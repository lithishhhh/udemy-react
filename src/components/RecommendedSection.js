 import adimage1 from "../assets/images/image7.jpg"
 import adimage2 from "../assets/images/image8.jpg"
 import adimage3 from "../assets/images/image9.jpg"
 import adimage4 from "../assets/images/image10.jpg"

 function RecommendedSection(){
 return(
 <div class="recommended">
        <h1 class="recommended__tittle"> Recommended for you</h1>
        <p>The one to be picked 🚀</p>
        <div class="recommended__container">

            <div class="course-card">
                <img src={adimage1} alt="adimage1"/>
                <h3>2025 Python Data visualisation Masterclass</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐<i class="fa-solid fa-star" style={{ color: 'rgb(255, 212, 59)' }}></i></p>
               <p>₹2999  <del> ₹7999  </del></p>
            </div>

            <div class="course-card">
                <img src={adimage2} alt="adimage2"/>
                <h3>Web Development Bootcamp 2023 | Advance </h3>
                <p>Col Steele</p>
                <p>3.2 ⭐⭐⭐</p>
                <p>₹2999  <del> ₹7999  </del></p>
            
            </div>
            <div class="course-card">
                <img src={adimage3} alt="adimage3"/>
                <h3>Master UI/UX Desiging with Figma</h3>
                <p>Col Steele</p>
                <p>4.8 ⭐⭐⭐</p>
                <p>₹2999  <del> ₹7999  </del></p>
            </div>
            <div class="course-card">
                <img src={adimage4} alt="adimage4"/>
                <h3>Basic to advance Java core Training</h3>
                <p>Col Steele</p>
                <p>4.8 ⭐⭐⭐⭐</p>
                <p>₹2999  <del> ₹7999  </del></p>
            
                
            </div>
        </div>
        </div>
        )
        }

        export default RecommendedSection