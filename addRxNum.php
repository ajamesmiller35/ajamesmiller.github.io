<?php
//Script used to accept form input from "refills.php" and add a number and message to the refills database
session_start();

//function to remove unsupported characters from input data
function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

//database connection settings
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

//checks if $_SESSION['rxID'] already has a value. If so $rxID is set to this value
if(isset($_SESSION['rxID'])){
    $rxID = $_SESSION['rxID'];
}

//if $_SESSION['sessionID'] is not set then the highest session_ID from the database is located. 
//The new sessionID is set to one greater than the highest value found
if(!isset($_SESSION['sessionID'])){
$sql = "SELECT MAX(session_ID) FROM rxnumbers";
$stmt = $pdo->prepare($sql);
$stmt->execute([]);
$session_ID = $stmt->fetchAll();

$_SESSION["sessionID"] = $session_ID[0]["MAX(session_ID)"] + 1;
}

$session_ID = $_SESSION["sessionID"];

//Loads the form values into variables used to insert them into refills database
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	if (empty($_POST["rxNum"])) {
	$statusMessage = "No Rx Number Entered. Please enter a number";
	} else {
    $rxNum = test_input($_POST["rxNum"]);
    $statusMessage = "Rx number added. Enter another number, or press send.";
    }
    if (empty($_POST["rxMessage"])) {
        $statusMessage = "No Rx Number Entered. Please enter a number";
        } else {
        $rxMessage = test_input($_POST["rxMessage"]);
        $statusMessage = "Rx number added. Enter another number, or press send.";
        }
    }
    
$_SESSION['message'] = $statusMessage;

//Inserts values into database
$sql = 'INSERT INTO rxnumbers(session_ID, rxnumber, message) VALUES(:session_ID, :rxnumber, :message)';
$stmt = $pdo->prepare($sql);
$stmt->execute(['session_ID' => $session_ID, 'rxnumber' => $rxNum, 'message' => $rxMessage]);

header("location: refills.php");

?>