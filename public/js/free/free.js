import axios from "axios";

async function free() {
      var data = await axios.get('http://localhost:3004/free').then((item)=> item.data);
      // var i = 6 ;
      // var j = 1;
            data.forEach((item) => {
                  const myDiv = document.getElementById("free_movies_container");
                  let newElm = document.createElement("div");
                  let newImgElm = document.createElement("img");
                  newImgElm.style.minWidth = "130px"
                  newImgElm.style.borderRadius = "10px"
                  newElm.style.marginLeft = "30px"
                  newElm.style.marginLeft = "30px"
                  newImgElm.src = item.src;
                  newElm.appendChild(newImgElm);
                  myDiv.appendChild(newElm);
                  // if(item.id <= i && item.id>=j){
                  //       newElm.style.display = 'block'
                  // }else{
                  //       newElm.style.display = 'none'
                  // }
            });
      // const leftBtn = document.getElementById("left__img")
      // leftBtn.addEventListener('click',abs)
      // function abs (){
      //       i++;
      //       j++;
      // alaki()
      //  }

      // window.onload = abs;
}

export default free;