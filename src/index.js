import React from "react"
import ReactDOM from "react-dom/client"
import "./style.css"
import Navbar from "./components/Navbar"
import Categories from "./components/Categories"
import SaleImage from "./components/SaleImage"
import AdvertisingSection from "./components/AdvertisingSection"
import RecommendedSection from "./components/RecommendedSection"
import Topics from "./components/Topics"
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