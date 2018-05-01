<?php
  // Setup: $ php composer.phar require facebook/webdriver

  require_once('vendor/autoload.php');
  use Facebook\WebDriver\Remote\RemoteWebDriver;
  use Facebook\WebDriver\WebDriverBy;

$chromeWin = array("platform"=>"Windows 10", "browserName"=>"chrome", "version"=>"65");
$firefoxWin = array("platform"=>"Windows 10", "browserName"=>"firefox", "version"=>"59");

// Web driver for google chrome 65
  $web_driver1 = RemoteWebDriver::create(
    "https://duran914:e1c00a93-0ce5-4f19-a754-24c0ce836492@ondemand.saucelabs.com:443/wd/hub",
    array(
      "platform"=>"Windows 10", 
        "browserName"=>"chrome", 
          "version"=>"65"
        ));

  $web_driver1->get("https://saucelabs.com/test/guinea-pig");

  $web_driver1->quit();

  // Web driver for firefox 59
  $web_driver2 = RemoteWebDriver::create(
    "https://duran914:e1c00a93-0ce5-4f19-a754-24c0ce836492@ondemand.saucelabs.com:443/wd/hub",
    array(
      "platform"=>"Windows 10", 
        "browserName"=>"firefox", 
          "version"=>"59"
        ));

        /* 
        
         Specific PHP unit tests would be written here 
     
        */

  $web_driver2->get("https://saucelabs.com/test/guinea-pig");

  $web_driver2->quit();
?>