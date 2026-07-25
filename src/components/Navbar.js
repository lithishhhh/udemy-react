function Navbar(){
  return(
     
    <div class="navbar">
        <div class="navbar__sec1">
            <h1 class="navbar__sec1__tittle">Udemy</h1>
            <span class="navbar__sec1__desc"><a href="https://www.udemy.com">Demand courses</a></span> 
         <div class="mylearning"><p>My learning</p>
         <div class="mylearning-popup"><p>You did not purchased anything yet</p></div></div>
            <span class="navbar__sec1__desc"><a href="https://www.udemy.com">Subscribe</a></span>
            
        </div>
        <div class="navbar__sec2">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input placeholder="Search for anything here, courses and certifications"/>


        </div>
        <div class="navbar__sec3">
            <button class="navbar__sec3__btn1">Log    in</button>
            <button class="navbar__sec3__btn2">Sign Up</button>
            <div class="navbar__sec3__icons">
            <i class="fa-solid fa-cart-shopping" style={{color: "rgb(30, 48, 80);"}}></i>
            <i class="fa-solid fa-bell" style={{color: "rgb(30, 48, 80);"}}></i>
            <i class="fa-solid fa-circle-user" style={{color: "rgb(30, 48, 80);"}}></i>

            </div>
            </div>
            <div class="navbar__sec4">
              <div class="buttons-nav4"> <button class="navbar__sec3__btn1">Log    in</button>
            <button class="navbar__sec3__btn2">Sign Up</button></div>
              <i id="menu" class="fa-solid fa-bars" style={{color: "rgb(30, 48, 80);"}}></i></div>

        
    </div>
  )
}

export default Navbar