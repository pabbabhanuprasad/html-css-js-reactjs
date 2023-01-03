import React from 'react'

const Sweets = () => {
    var fooditems = [];
      function getData() {
        return new Promise((resolve, reject) => {
          var data = new XMLHttpRequest();
          data.onreadystatechange = function () {
            if (data.readyState == 4 && data.status == 200) {
              fooditems = JSON.parse(data.response);
              display(fooditems);
              console.log(fooditems);
              resolve(fooditems);
            }
          };
          data.open("GET", "http://localhost:3005/fooditems");
          data.send();
        });
      }
      getData();
      async function allData() {
        try {
            
          var Data = await getdata();
          display();
          console.log("connected");
        } catch {
          console.log("not connected");
        }
      }

      function display(fooditems) {
        fooditems.forEach((ele) => {
          var div = document.createElement("div");
          div.setAttribute("class", "card m-3");
          div.style.width = "5rem";
          var img = document.createElement("img");
          img.setAttribute("class", "card-img-top");
          div.append(img);
          var div2 = document.createElement("div");
          div2.setAttribute("class", "card-body");
          div.appendChild(div2);
          var h5 = document.createElement("h5");
          div2.prepend(h5);
          var radio=document.createElement("input");
          radio.setAttribute("type","radio");
          var lable=document.createElement("lable");
          lable.innerHTML="200grm-600grm";
          div2.prepend(lable);
          div2.prepend(radio);
          var a = document.createElement("a");
          a.setAttribute("class", "btn btn-primary");
          a.innerHTML = "View More";
          div.appendChild(a);
          document.querySelector("#container").appendChild(div);

            var i=ele;
          for (i in ele) {
            console.log(ele[i]);
            if (i == "image") {
              img.setAttribute("src", ele[i]);
              div.appendChild(img);
            } else if (i == "name") {
              h5.innerHTML = ele[i];
              div2.appendChild(h5);
            }
          }
        });
      }
  return (
    <div>
        <div id="container" ></div>
   
    </div>
  )
}

export default Sweets;