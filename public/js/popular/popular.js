import axios from "axios";

async function popular() {
  var dataSerial = await axios.get("http://localhost:3004/serial").then((res) => res.data);

  var dataMovie = await axios.get("http://localhost:3004/movies").then((res) => res.data);


  function serialData() {
    dataSerial.forEach((item) => {
      const myDiv = document.getElementById("popular_movies");
      let newElm = document.createElement("div");
      let newImgElm = document.createElement("img");
      const oldDiv = document.getElementById("movie__div");
      document.getElementById("serial__btn").style.backgroundColor = "rgb(54,54,54)";
      document.getElementById("movie__btn").style.backgroundColor = "rgb(21 21 21)";
      newElm.id = "serial__div";
      newImgElm.src = item.src;
      newElm.appendChild(newImgElm);
      if (oldDiv) {
        myDiv.replaceChild(newElm, oldDiv);
      } else {
        myDiv.appendChild(newElm);
      }
    });
  }

  function movieData() {
    dataMovie.forEach((item) => {
      const myDiv = document.getElementById("popular_movies");
      let newElm = document.createElement("div");
      let newImgElm = document.createElement("img");
      const oldDiv = document.getElementById("serial__div");
      document.getElementById("movie__btn").style.backgroundColor = "rgb(54,54,54)";
      document.getElementById("serial__btn").style.backgroundColor = "rgb(21 21 21)";
      newElm.id = "movie__div";
      newImgElm.src = item.src;
      newElm.appendChild(newImgElm);
      myDiv.replaceChild(newElm, oldDiv);
    });
  }

  serialData();

  const movieBtn = document.getElementById("movie__btn");
  movieBtn.addEventListener("click", () => {
    movieData();
  });

  const serialBtn = document.getElementById("serial__btn");
  serialBtn.addEventListener("click", () => {
      serialData();
  });
}
export default popular;
