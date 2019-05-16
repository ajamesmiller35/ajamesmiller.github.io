<?php
  session_start();
  if(!isset($_SESSION['message'])){
    $_SESSION['message'] = "";
  }
?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="images/gnp.png">

    <title>Dixon Drug - True Value</title>

    <!-- Bootstrap core CSS -->
    <link href="reset.css" rel="stylesheet">
    <link href="bootstrap.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
    <link href="style.css" rel="stylesheet">

  </head>

  <body>
  <div class="push"></div>
      <div id="top-nav">
      <a class="top-logo" href="index.php"><img src="images/dixondrugglow.png" class="dd-top-logo"/></a>

    <nav class="navbar navbar-expand-lg navbar-dark navbar-fixed-top bg-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    <div class="nav-blue">
      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="services.php">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="locations.php">Locations</a>
          </li>
          <li class="nav-item">
            <a class="nav-link here" href="refills.php">Refills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about.php">About</a>
          </li>
        </ul>
      </div>
</div>
    </nav>
</div>
    <div class="sessionmessage">
    <?php
      if(isset($_SESSION['message'])){
      echo "<h2 class=\"center\">" . $_SESSION['message'] . "</h2>";
      }
      if($_SESSION['message'] == "Request Sent Succefully!"){
        session_destroy();
        session_start();
        $_SESSION['message'] = "";
      }
    ?>
    </div>
    <main role="main" class="container">
      <div class="row">
      <form action="addRxNum.php" method="post">
  <div class="form-group">
    <label for="rxNum">Prescription Number</label>
    <input type="text" class="form-control" id="rxNum" name="rxNum" aria-describedby="rxHelp" placeholder="Enter Rx Number">
    <small id="rxHelp" class="form-text text-muted">Locate the six digit prescription number on your bottle. For controlled drugs it is not necessary to include the "C" at the beginning of the number.</small>
    <br>
    <input type="text" class="form-control" id="rxMessage" name="rxMessage" aria-describedby="rxMessage" placeholder="Special Message">
    <small id="rxHelp" class="form-text text-muted">Enter any special requests or messages for the pharmacist here.</small>
    <br>
    <button type="submit" class="btn btn-dark">Add Number</button>
    <br><br>
    <?php
      $host = '127.0.0.1';
      $dbname   = 'refills';
      $user = 'root';
      $pass = '';
      $charset = 'utf8';
      
      $dsn = 'mysql:host=' . $host . ';dbname=' . $dbname;
      $opt = [
          PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
          PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
          PDO::ATTR_EMULATE_PREPARES   => false,
      ];
      $pdo = new PDO($dsn, $user, $pass, $opt);

      if(isset($_SESSION['sessionID'])){
      $sql = "SELECT * FROM rxnumbers WHERE session_ID = " . $_SESSION['sessionID'];
      $stmt = $pdo->prepare($sql);
      $stmt->execute([]);
      $rxList = $stmt->fetchAll();

      echo "<table class='table'>";
      echo "<thead>";
      echo "<tr>";
      echo "<th scope='col'>Rx Number</th>";
      echo "<th scope='col'>Special Message</th>";
      echo "</tr>";
      echo "</thead>";

      for($i = 0; $i < sizeof($rxList); $i++){
        echo "<tr>";
        echo "<td>" . $rxList[$i]['rxnumber'] . "</td>";
        echo "<td>" . $rxList[$i]['message']. "</td>";
        echo "<td><a href=\"delete.php?rxID=" .  $rxList[$i]['id'] . "\">Delete</a></td>";
        echo "</tr>";
      }

      echo "</table>";

    }

    ?>
  </div><!--/.row -->
</form>
  </div>
  <div class="row">
<form action="mail.php" method="post">
      <button type="submit" class="btn btn-dark">Send Refill Request</button>
  </form>
      </div><!--/.row -->
      <div class="row">
        <img src="images/division.png" class="division"/>
      </div><!--/.row -->
      <div class="row">
      <div class="header">
        <h1>Request refills on the go using our new app!</h1>
      </div><!--/.header -->
        </div><!--/.row -->
        <div class="row">
          <div class="col-lg-4">
            <img id="my-gnp-screenshot" src="images/mygnp.png" alt="My GNP app screenshot"/>
          </div>
          <div class="col-lg-8 feature-box">
            <h2 class="feature-head">Features:</h2>
            <ul class="features">
              <li>Easy refill requests</li>
              <li>View and manage your list of medications</li>
              <li>Designate a family member, friend, or caregiver to manage and refill your medications for you</li>
              <li>Health and wellness tools</li>
            </ul>
          </div>
        </div>
        <div class="row app-title">
          <h3>My GNP App:</h3>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <a href="https://play.google.com/store/apps/details?id=com.rx30.refillrx"><img src="images/googleplay.png" class="app-logo" id="google-play"/></a>
          </div><!--/.col -->
          <div class="col-sm-6">
          <a href="https://itunes.apple.com/us/app/refillrx/id1051322965?mt=8"><img src="images/appstore.png" class="app-logo" id="app-store"/></a>
          </div><!--/.col -->
      </div><!--/.row -->
      <div class="row">
        <img src="images/division.png" class="division"/>
      </div><!--/.row -->
      <div class="row">
      <div class="refillrx-head">
        <h2 class="feature-head">Looking for a more simple experience?</h2>
        <h3>Try refillRx, also availabe on Google Play and the App Store.</h3>
      </div><!--/.header -->
        </div><!--/.row -->
        <div class="row app-title">
          <h3>refillRx App:</h3>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <a href="https://play.google.com/store/apps/details?id=com.rx30.refillrx"><img src="images/googleplay.png" class="app-logo" id="google-play"/></a>
          </div><!--/.col -->
          <div class="col-sm-6">
          <a href="https://itunes.apple.com/us/app/refillrx/id1051322965?mt=8"><img src="images/appstore.png" class="app-logo" id="app-store"/></a>
          </div><!--/.col -->
      </div><!--/.row -->


    </main><!-- /.container -->

    <!--footer starts from here-->
<footer class="footer">

<div class="container" id="footer-container">
<ul class="foote_bottom_ul_amrc">
<li><a href="index.php">Home</a></li>
<li><a href="services.php">Services</a></li>
<li><a href="locations.php">Locations</a></li>
<li><a href="refills.php">Refills</a></li>
<li><a href="about.php">About</a></li>
</ul>
<!--foote_bottom_ul_amrc ends here-->
<p class="text-center">Copyright&#169; Great Plains Pharmacies Inc. 2018. All rights reserved.</p>

<ul class="social_footer_ul">
<li><a href="https://www.facebook.com/Dixon-Drug-True-Value-130540840316363/"><i class="fab fa-facebook-f"></i></a></li>
</ul>
<!--social_footer_ul ends here-->
</div>

</footer>

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script src="resize.js"></script>
    <script src="topheight.js"></script>
    <script src="changecolor.js"></script>
  </body>
</html>