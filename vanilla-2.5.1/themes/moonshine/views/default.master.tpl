<!DOCTYPE html>
<html lang="{$CurrentLocale.Lang}">
<head>
    {asset name="Head"}
  <link rel="stylesheet" type="text/css" href="custom.css">
  <link rel="shortcut icon" href="http://www.clker.com/cliparts/d/C/V/s/q/D/oktoberfest-beer-mug.svg">
  <meta name="viewport" content="width=device-width">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" 
  integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossorigin="anonymous">
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
                <li><a class="yelpSearchLink" onclick="showTemplate()" id="yelp">Brews & Breweries</a></li>
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
     <i class="fab fa-facebook" aria-hidden="true"></i>
      <i class="fab fa-instagram" aria-hidden="true"></i>
      <i class="fab fa-twitter" aria-hidden="true"></i>
     <i class="fab fa-google-plus" aria-hidden="true"></i>
    </span>
</footer>
</body>
</html>
