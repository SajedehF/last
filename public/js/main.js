import Swiper from "swiper";
import slider from "./slider/slider";
import popular from "./popular/popular";
import free from "./free/free";

function initSlider(){
      var swiper = new Swiper(".mySwiper",{
            spaceBetween : 30,
            pagination :{
                  el: ".swiper-pagination",
                  clickable :true,
            }
      })
}

async function allData (){
      await slider ();
      await popular();
      await free();
      initSlider();
}


allData();