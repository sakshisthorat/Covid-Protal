
async function API() {

  const response = await fetch("https://covid-19-news.p.rapidapi.com/v1/covid?q=covid&lang=en&media=True", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "cfae83b856msh5f10000a22de3d6p1a2a8ejsn1350ae2a98d2",
      "x-rapidapi-host": "covid-19-news.p.rapidapi.com"
    }
  });
  const data = await response.json();
  return data;
}
function removeCSSClass() {
  var v = document.getElementById("btn1");
  v.classList.remove("currentbutton");
  var v2 = document.getElementById("btn2");
  v2.classList.remove("currentbutton");
  var v3 = document.getElementById("btn3");
  v3.classList.remove("currentbutton");
  var v4 = document.getElementById("btn4");
  v4.classList.remove("currentbutton");
  var v5 = document.getElementById("btn5");
  v5.classList.remove("currentbutton");
}
function news1() {
  console.log("hello-1")
  removeCSSClass();
  var v = document.getElementById("btn1");
  v.classList.add("currentbutton");

  API().then(data => {
    document.querySelector(".container").innerHTML = '';
    for (let index = 0; index < 10; index++) {
      document.querySelector(".container").innerHTML += `
        
                <div class="course">
                    <div class="preview">
                      <h6 id="date">Date:${data["articles"][index].published_date}</h6>
                      <h2>Covid-19 News</h2>
                      <h6 id="country">Country: ${data["articles"][index].country}</h6>
                    </div>
                    <div class="info">
                      <h2 id="title">${data["articles"][index].title}</h2>
                      <p id="summary">
                        ${data["articles"][index].summary}
                      </p>
                      <button class="btn">
                        <a href="${data["articles"][index].link}" id="link" target="_blank">Read More</a>
                      </button>
                    </div>
                  </div>
                `

    }
  })
  document.documentElement.scrollTop = 0;
}
function news2() {
  console.log("hello-2")
  removeCSSClass();
  API().then(data => {
    document.querySelector(".container").innerHTML = '';
    var v = document.getElementById("btn2");
    v.classList.add("currentbutton");
    for (let index = 10; index < 20; index++) {
      document.querySelector(".container").innerHTML += `
        
                <div class="course">
                    <div class="preview">
                      <h6 id="date">Date:${data["articles"][index].published_date}</h6>
                      <h2>Covid-19 News</h2>
                      <h6 id="country">Country: ${data["articles"][index].country}</h6>
                    </div>
                    <div class="info">
                      <h2 id="title">${data["articles"][index].title}</h2>
                      <p id="summary">
                        ${data["articles"][index].summary}
                      </p>
                      <button class="btn">
                        <a href="${data["articles"][index].link}" id="link" target="_blank">Read More</a>
                      </button>
                    </div>
                  </div>
                `

    }
  })
  document.documentElement.scrollTop = 0;
}
function news3() {
  console.log("hello-3")
  removeCSSClass();
  var v = document.getElementById("btn3");
  v.classList.add("currentbutton");
  API().then(data => {
    document.querySelector(".container").innerHTML = '';
    for (let index = 20; index < 30; index++) {
      document.querySelector(".container").innerHTML += `
        
                <div class="course">
                    <div class="preview">
                      <h6 id="date">Date:${data["articles"][index].published_date}</h6>
                      <h2>Covid-19 News</h2>
                      <h6 id="country">Country: ${data["articles"][index].country}</h6>
                    </div>
                    <div class="info">
                      <h2 id="title">${data["articles"][index].title}</h2>
                      <p id="summary">
                        ${data["articles"][index].summary}
                      </p>
                      <button class="btn">
                        <a href="${data["articles"][index].link}" id="link" target="_blank">Read More</a>
                      </button>
                    </div>
                  </div>
                `

    }
  })
  document.documentElement.scrollTop = 0;
}
function news4() {
  console.log("hello-4")
  removeCSSClass();
  var v = document.getElementById("btn4");
  v.classList.add("currentbutton");
  API().then(data => {
    document.querySelector(".container").innerHTML = '';
    for (let index = 30; index < 40; index++) {
      document.querySelector(".container").innerHTML += `
        
                <div class="course">
                    <div class="preview">
                      <h6 id="date">Date:${data["articles"][index].published_date}</h6>
                      <h2>Covid-19 News</h2>
                      <h6 id="country">Country: ${data["articles"][index].country}</h6>
                    </div>
                    <div class="info">
                      <h2 id="title">${data["articles"][index].title}</h2>
                      <p id="summary">
                        ${data["articles"][index].summary}
                      </p>
                      <button class="btn">
                        <a href="${data["articles"][index].link}" id="link" target="_blank">Read More</a>
                      </button>
                    </div>
                  </div>
                `

    }
  })
  document.documentElement.scrollTop = 0;
}
function news5() {
  console.log("hello-5")
  removeCSSClass();
  var v = document.getElementById("btn5");
  v.classList.add("currentbutton");
  API().then(data => {
    document.querySelector(".container").innerHTML = '';
    for (let index = 40; index < 50; index++) {
      document.querySelector(".container").innerHTML += `
        
                <div class="course">
                    <div class="preview">
                      <h6 id="date">Date:${data["articles"][index].published_date}</h6>
                      <h2>Covid-19 News</h2>
                      <h6 id="country">Country: ${data["articles"][index].country}</h6>
                    </div>
                    <div class="info">
                      <h2 id="title">${data["articles"][index].title}</h2>
                      <p id="summary">
                        ${data["articles"][index].summary}
                      </p>
                      <button class="btn">
                        <a href="${data["articles"][index].link}" id="link" target="_blank">Read More</a>
                      </button>
                    </div>
                  </div>
                `

    }
  })
  document.documentElement.scrollTop = 0;

}