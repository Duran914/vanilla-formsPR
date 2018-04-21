<!DOCTYPE html>
<html lang="{$CurrentLocale.Lang}">
<head>
    {asset name="Head"}
  <link rel="stylesheet" type="text/css" href="custom.css">
  <link rel="shortcut icon" href="http://www.clker.com/cliparts/d/C/V/s/q/D/oktoberfest-beer-mug.svg">
  <meta name="viewport" content="width=device-width">
  <script src="https://use.fontawesome.com/c5b9554837.js"></script>
</head>
<body id="{$BodyID}" class="{$BodyClass}">

<div id="Frame">
    <div class="Head" id="Head">
        <div class="row">
            <img id="logo" src="http://www.clker.com/cliparts/d/C/V/s/q/D/oktoberfest-beer-mug.svg" alt="">
            <strong class="SiteTitle"><a href="{link path="/"}">{logo}</a></strong>
            <a href="javascript:void(0);" class="hamburgerMenu"
            onclick="dropdownMenu()">&#9776;</a>

            <ul class="SiteMenu" id="DropDownMenuClick">
                <li>{home_link}</li>
                <!-- <li>{inbox_link}</li> -->
                <li>{profile_link}</li>
                <li><a class="yelpSearchLink" id="yelp">Brews & Breweries</a></li>
               <li>{signinout_link}</li>
            </ul>
        </div>
    </div>
    <div id="Body">
        <div class="Row">
          <div class="col-12">
            <div class="BreadcrumbsWrapper">{breadcrumbs}</div>
          </div>
        </div>
        <div class="Row">
          <div class="col-2">
            <div class="Column PanelColumn" id="Panel">
                {module name="MeModule"}
                {asset name="Panel"}
                <br>
                <div class="fb-page">
                <div class="fb-page" data-height="300px" data-width="200px" data-href="https://www.facebook.com/Beercules.party/" data-tabs="timeline" data-small-header="false" data-hide-cover="false" data-show-facepile="true"
                style="box-shadow: 0 0 10px; border-radius: 5px;">
                  <blockquote cite="https://www.facebook.com/Beercules.party/" class="fb-xfbml-parse-ignore">
              <!-- <a href="https://www.facebook.com/Beercules.party/">Beercules</a> -->
                  </blockquote>
                  </div>
                </div>
                </div>
              </div>
              <div class="col-10">
            <div class="Column ContentColumn" id="Content">{asset name="Content"}</div>
           </div>
         </div>
         </div>

        </div>
{event name="AfterBody"}
<footer class="foot">
  <span class="footerText">MoonShine Systems Inc. Copyright &copy 2017. All Rights Reserved</span>
    <span class="socialMedia">
     <i class="fa fa-facebook-official" aria-hidden="true"></i>
      <i class="fa fa-instagram" aria-hidden="true"></i>
      <i class="fa fa-twitter" aria-hidden="true"></i>
     <i class="fa fa-google-plus" aria-hidden="true"></i>
    </span>
</footer>

<script type="text/javascript">

{literal}

document.querySelector('#yelp').addEventListener('click', () => {
document.querySelector('.Column.ContentColumn').innerHTML =
`    <section class="yelp">
    <h2 class="H HomepageTitle">Search For Breweries</h2>
    <div class="Column FormWrapper">
    <form action="" id="yelpForm">
    <div class="brewsError" id="error"></div>
    <label for="zip"><h3>Enter a city or zipcode</h3></label>
    <input type="text" class="InputBox BigInput" id='zipcode'><br>
    <h4 class="distance">Distance from</h4>
    <input type="radio" class="milesRad" name="mi" id="5mi" value=5 checked><span class="radioButtonText">5 miles</span>
    <input type="radio" class="milesRad" name="mi" id="10mi" value=10 ><span class="radioButtonText">10 miles</span>
    <input type="radio" class="milesRad" name="mi" id="15mi" value=15 ><span class="radioButtonText">15 miles</span><br><br>
    <input type="submit" id="yelp-search" class="Button brewsSearchbtn" value="Search">
    </form>
    </div>
    <div id="loading">
        <img src="img/beer.gif" alt="">
      </div>
    <div id="results"></div>
    </section>

    <section class="beerFinder">
    <h2 id="yellowHeader" class="H HomepageTitle">Search For Beers</h2>
    <div class="Column FormWrapper">
        <div class="brewsError" id="beerError"></div>
        <label for="beer"><h3 class="beerNameSearch">Enter a Beer Name: </h3></label>
        <input type="text" class="InputBox BigInput" id="beerName"><br><br>
        <button class="Button brewsSearchbtn" id="findBeerBtn">Find Beer</button>
        </div>
        <div id="beerInfo"></div>
    </section>
`;

})
    {/literal}
</script>
<script src="themes/moonshine/views/script.js"></script>
</body>
</html>
