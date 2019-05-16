<?php

session_start();

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

//if $_SESSION['sessionID'] is set, the values associated with that ID in the database are retrieved
if(isset($_SESSION['sessionID'])){
$sql = "SELECT rxnumber, message FROM rxnumbers WHERE session_ID = " . $_SESSION['sessionID'];
$stmt = $pdo->prepare($sql);
$stmt->execute([]);
$rxList = $stmt->fetchAll();

//Call to a function that makes the body of the email message with the values from $rxList
$refillBody = makeBody($rxList);

}
//In the event $_SESSION['message'] is not set, sends the user back to "refills.php" with message to add a number first
else{
    $_SESSION['message'] = "Please add a number before pressing send.";
    header("location: refills.php");
}

//SMTP needs accurate times, and the PHP time zone MUST be set
//This should be done in your php.ini, but this is how to do it if you don't have access to that
date_default_timezone_set('Etc/UTC');

require 'PHPMailer/PHPMailerAutoload.php';

//Create a new PHPMailer instance
$mail = new PHPMailer;

//Tell PHPMailer to use SMTP
$mail->isSMTP();

//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug = 2;

//Ask for HTML-friendly debug output
$mail->Debugoutput = 'html';

//Set the hostname of the mail server
$mail->Host = 'smtp.gmail.com';
// use
// $mail->Host = gethostbyname('smtp.gmail.com');
// if your network does not support SMTP over IPv6

//Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
$mail->Port = 587;

//Set the encryption system to use - ssl (deprecated) or tls
$mail->SMTPSecure = 'tls';

//Whether to use SMTP authentication
$mail->SMTPAuth = true;

//Username to use for SMTP authentication - use full email address for gmail
$mail->Username = "ajamesmiller35@gmail.com";

//Password to use for SMTP authentication
$mail->Password = "THADx93.";

//Set who the message is to be sent from
$mail->setFrom('no-reply@dixondrug.com', 'Refill Bot');

//Set an alternative reply-to address
$mail->addReplyTo('replyto@example.com', 'First Last');

//Set who the message is to be sent to
$mail->addAddress('ajamesmiller35@gmail.com', 'Andrew Miller');

//Set the subject line
$mail->Subject = 'PHPMailer GMail SMTP test';

//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
//$mail->msgHTML(file_get_contents('contents.html'), dirname(__FILE__));
$mail->Body = $refillBody;

//Replace the plain text body with one created manually
//$mail->AltBody = 'This is a plain-text message body';

//Attach an image file
//$mail->addAttachment('images/phpmailer_mini.png');

//send the message, check for errors
if (!$mail->send()) {
    $_SESSION['message'] = "Mailer Error: " . $mail->ErrorInfo;
} else {
    $_SESSION['message'] = "Request Sent Succefully!";
    $_SESSION['sessionID']= NULL;
    session_destroy();
}
//function to make the body of the message using values retrieved from database
function makeBody($input){

    $output = "";

    for($i = 0; $i < sizeof($input); $i++){
        $output = $output . $input[$i]['rxnumber'] . "\n";
        $output = $output . $input[$i]['message'] . "\n";
      }

      return $output;
}

header("location: refills.php");

?>