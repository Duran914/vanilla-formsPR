// DropDown Menu

function dropdownMenu() {
  let resMenu = document.querySelector('#DropDownMenuClick');
    if (resMenu.className === "SiteMenu") {
      resMenu.className += " Responsive";
    } else{
      resMenu.className = "SiteMenu";
   }
}

//FaceBook component

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));


/**************************
 TEMPLATE FOR YELP AND BEER
***************************/

function showTemplate(){

  // closes dropDown menu if mobile
  document.querySelector('#DropDownMenuClick').className = "SiteMenu";

  document.querySelector('.Column.ContentColumn').innerHTML =
  `   <section class="yelp">
      <h2 id="yellowHeader" class="H HomepageTitle">Search For Breweries</h2>
      <div class="Column FormWrapper">
      <form action="" onsubmit="brewerySearch(event)" id="yelpForm">
      <div class="brewsError" id="error"></div>
      <label for="zip"><h3>Enter a city or zipcode</h3></label>
      <input type="text" class="InputBox BigInput" id='zipcode'><br>
      <h4 class="distance">Distance from</h4>
      <input type="radio" class="milesRad" name="mi" id="5mi" value=5 checked><span class="radioButtonText">5 miles</span>
      <input type="radio" class="milesRad" name="mi" id="10mi" value=10 ><span class="radioButtonText">10 miles</span>
      <input type="radio" class="milesRad" name="mi" id="15mi" value=15 ><span class="radioButtonText">15 miles</span><br><br>
      <input type="submit" id="yelp-search" class="brewsSearchbtn" value="Search">
      </form><br>
      <button onclick="clearBrewery()" class="brewsSearchbtn" id="clearBreeryBtn" disabled>Clear Search</button>
      </div>
      <div id="loading">
           <img src="themes/moonshine/design/beer.gif" alt="">
        </div>
      <div id="results"></div>
      </section>
  
      <section class="beerFinder">
      <h2 id="yellowHeader" class="H HomepageTitle">Search For Beers</h2>
      <div class="Column FormWrapper">
          <div class="brewsError" id="beerError"></div>
          <label for="beer"><h3 class="beerNameSearch">Enter a Beer Name: </h3></label>
          <input type="text" class="InputBox BigInput" id="beerName"><br><br>
          <button onclick="beerSearch(event)" class="brewsSearchbtn" id="findBeerBtn">Find Beer</button><br><br>
          <button onclick="clearBeerSearch()" class="brewsSearchbtn" id="clearBeerBtn" disabled>Clear Search</button>
          </div>
          <div id="beerInfo"></div>
      </section>
  `;
  }

/*****************
  YELP component
*****************/

//yelp api key
const yelpApiKey = "cxqq_LfoudeLABFed4eSu8S8i_YXEXt1tkOLlHyGgOrSTcb9zJRFwTlTwgPSjOcCiU-44mG0mmwIzz7RYjNZBCDd8styJWI5NaiVCnhJPfa3oWLBJHFIodHFPrnTWnYx";

// yelp zipcode search input
const searchZipBtn = document.querySelector('#yelpForm');

function brewerySearch(event){
  if (document.querySelector('#zipcode').value === '') {
   document.querySelector('#error').style.display = 'block';
    document.querySelector('#error').innerHTML = "Please enter a vaild city or zipcode";
  }else{
  document.querySelector('#error').style.display = "none";
   document.querySelector('#loading').style.display = 'block';
    document.querySelector('#results').innerHTML = '';
     queryBrewsResults();
  }
  event.preventDefault();
}

function queryBrewsResults() {
const zipCode = document.querySelector('#zipcode').value;
const radius = document.querySelector('input[name="mi"]:checked').value * 1609.344; //convert meters to miles
 let xhttp = new XMLHttpRequest;
  xhttp.open("GET", `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=breweries&limit=20&location=${zipCode}&distance=${radius}`, true)
   xhttp.setRequestHeader("Authorization", "Bearer " + yelpApiKey);
    xhttp.onreadystatechange = function(){
      if(this.readyState === 4 && this.status === 200){
       const data = JSON.parse(this.responseText);
        let brews = data.businesses;
         let output = '';
          for (let i = 0; i < brews.length; i++) {
            output += `<div class="searchedReturn">
            <div class="breweryReturnImg">
            <img class="yelpImg" src='${brews[i].image_url}'>
            </div>
            <div class="breweryReturnText">
            <strong><span class="breweryNameText">${brews[i].name} <i class="fas fa-beer"></i></span></strong><br>
            <strong class="breweryinfotext">Location:</strong> <a target="_blank" href="https://maps.google.com/?q=58250 ${brews[i].location.address1}, 
            ${brews[i].location.city} ${brews[i].location.state}">${brews[i].location.address1}, 
            ${brews[i].location.city} ${brews[i].location.state}</a> <i class="fas fa-map-marker"></i><br>
            <strong class="breweryinfotext">Phone Number:</strong> <a href="tel:${brews[i].phone}">${brews[i].phone}</a> <i class="fas fa-phone"></i> <br>
            <strong class="breweryinfotext">Price Range:</strong> <i>${brews[i].price}</i><br>
            <strong class="breweryinfotext">Rating:</strong> ${brews[i].rating}/5 <i class="fas fa-star"></i><br>
            <strong class="breweryinfotext">View on Yelp:</strong> <a class="yelpLink" target="_blank" href="${brews[i].url}">Click Me <i class="fab fa-yelp"></i></a><br>
            </div>
            </div><br>
            `;
          }
       document.querySelector('#error').style.display = 'none';
        document.querySelector('#loading').style.display = 'none';
         document.querySelector('#results').innerHTML = output;
          document.querySelector('#clearBreeryBtn').disabled = false;
            clearFields(zipCode);
       }
       else {
        document.querySelector('#error').style.display = "block";
         document.querySelector('#error').innerHTML = "No brewery found!";
          document.querySelector('#loading').style.display = 'none';
          document.querySelector('#clearBreeryBtn').disabled = true;
       }  
    }
    xhttp.send();
  }

  clearFields = (zipCode) => {
    zipCode = '';
  }

  function clearBrewery(){
    document.querySelector('#results').innerHTML = '';
     document.querySelector('#clearBreeryBtn').disabled = true;
  }

/*****************
  BEER component
*****************/  

  function beerSearch(event){
    if (document.querySelector('#beerName').value === '') {
      document.querySelector('#beerError').style.display = 'block';
       document.querySelector('#beerError').innerHTML = "Please enter a beer name";
     }else{
     document.querySelector('#beerError').style.display = "none";
       queryBeerResults();
     }
   event.preventDefault();
  }
  
  function queryBeerResults() {
    const beerName = document.querySelector('#beerName').value;
    // USING AJAX
      let xhttp = new XMLHttpRequest();
       xhttp.open("GET", `https://api.punkapi.com/v2/beers?beer_name=${beerName}`, true);
        xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
          const beerinfo = JSON.parse(this.responseText);
          let beerOutput = '';
          console.log(beerinfo);
          
           if (beerinfo.length === 0) {
            document.querySelector('#beerError').style.display = "block";
            document.querySelector('#beerError').innerHTML = "No beer found!";
            document.querySelector('#beerInfo').innerHTML = '';
            document.querySelector('#clearBeerBtn').disabled = true;
            } else{
            for (let i = 0; i < beerinfo.length; i++) {
              beerOutput += `<div class="searchedBeerReturn">
              <div class="beerReturnImg">
              <img class="beerImg" src='${beerinfo[i].image_url}'><br>
              </div>
              <div class="beerReturnText">
              <strong><span class="beerNameText">${beerinfo[i].name}</strong></span><br>
              <strong><span class="beerNameTextTag">"${beerinfo[i].tagline}"</strong></span><br>
              <strong class="beerinfotext">Description:</strong> ${beerinfo[i].description}<br>
              <strong class="beerinfotext">Alcohol by volume:</strong> ${beerinfo[i].abv}%<br>
              <strong class="beerinfotext">Food Pairing:</strong> 
              <div class="foodParing">
              <ul class="beerFoodPairingUl">
              <li>1. ${beerinfo[i].food_pairing[0]}.</li>
              <li>2. ${beerinfo[i].food_pairing[1]}.</li>
              <li>3. ${beerinfo[i].food_pairing[2]}.</li>
              </ul>
              </div>
              <strong class="beerinfotext">IBU level:</strong> ${beerinfo[i].ibu}<br>
              <strong class="beerinfotext">Hops:</strong> ${beerinfo[i].ingredients.hops[i].name}<br>
              </div>
              </div><br>
              `;
            }
          document.querySelector('#beerInfo').innerHTML = beerOutput;
           document.querySelector('#clearBeerBtn').disabled = false;
        }
      }
      }
      xhttp.send();
    }

function clearBeerSearch(){
  document.querySelector('#beerInfo').innerHTML = '';
   document.querySelector('#clearBeerBtn').disabled = true;
}