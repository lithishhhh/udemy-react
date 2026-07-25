import React from "react"
import ReactDOM from "react-dom/client"
import "./style.css"
import Navbar from "./components/Navbar"
import Categories from "./components/Categories"
import SaleImage from "./components/SaleImage"
import heroimage from "./assets/images/heroimage.jpg"
import AdvertisingSection from "./components/AdvertisingSection"
import adimage1 from "./assets/images/image7.jpg"
import adimage2 from "./assets/images/image8.jpg"
import adimage3 from "./assets/images/image9.jpg"
import adimage4 from "./assets/images/image10.jpg"
import RecommendedSection from "./components/RecommendedSection"
import Topics from "./components/Topics"
import compimage from "./assets/images/compimage.jpeg"
import MarketingImage from "./MarketingImage"
import popimage1 from "./assets/images/image1.jpg"
import popimage2 from "./assets/images/image2.jpg"
import popimage3 from "./assets/images/image3.jpg"
import popimage4 from "./assets/images/image4.jpg"
import popimage5 from "./assets/images/image5.jpg"
import popimage6 from "./assets/images/image6.jpg"
import popimage7 from "./assets/images/image7.jpg"
import popimage8 from "./assets/images/image8.jpg"
import MostPopular from "./components/MostPopular"
import Footer from "./components/Footer"
const root = ReactDOM.createRoot(document.getElementById("root"))


root.render(
  <div>
    <Navbar></Navbar>
    <Categories></Categories>
    <SaleImage></SaleImage>
    <AdvertisingSection></AdvertisingSection>
    <RecommendedSection></RecommendedSection>
    <Topics></Topics>
    <MostPopular></MostPopular>
    <Footer></Footer>

  </div>
)