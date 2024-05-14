import axios from "axios";
import Api from "../myApi/api";

async function slider() {
  var data = await axios.get("http://localhost:3004/slider").then((res) => res.data);
  var count = 0;
  // var time = 3000;
  // const filterData = data.filter(item => item.id == count)
  // console.log(data[0].src);
  function changeImage() {
    document.getElementById("slide").style.backgroundImage = `url(${data[count].src})`;

    if (count < data.length - 1) {
      count++;
      console.log(count);
    } else {
      count = data.length;
    }
    setTimeout(changeImage, 3000);
  }
  setTimeout(changeImage, 3000);
  window.onload = changeImage;
}

export default slider;
