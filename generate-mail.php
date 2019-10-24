<?php

$mailBody = '';

foreach($_POST as $post => $post_value){

    $mailBody = $mailBody . "\n" . $post . ': ' . $post_value;

}

//database connection settings

//SMTP needs accurate times, and the PHP time zone MUST be set
//This should be done in your php.ini, but this is how to do it if you don't have access to that

require 'PHPMailer/PHPMailerAutoload.php';

//Create a new PHPMailer instance
$mail = new PHPMailer;

$mail->isSMTP();
$mail->SMTPDebug = 0;
$mail->Debugoutput = 'html';
$mail->Host = 'afterthestork-newborncare.com';
$mail->Port = 25;
$mail->SMTPSecure = 'tls';
$mail->SMTPAuth = true;
$mail->Username = "noreply@afterthestork-newborncare.com";
$mail->Password = "XZP,*G-Ur]Ox";
$mail->setFrom('noreply@afterthestork-newborncare.com', 'ATS Web Form');

//Set an alternative reply-to address
//$mail->addReplyTo('replyto@example.com', 'First Last');

//Set who the message is to be sent to
$mail->addAddress('ajamesmiller35@gmail.com', 'Andrew Miller');
//$mail->addAddress('afterthestork@q.com', 'Mike Brown');

//Set the subject line
$mail->Subject = 'New Web Form Submission';

//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
//$mail->msgHTML(file_get_contents('contents.html'), dirname(__FILE__));
$mail->Body = $mailBody;

//Replace the plain text body with one created manually
//$mail->AltBody = 'This is a plain-text message body';

//Attach an image file
//$mail->addAttachment('images/phpmailer_mini.png');

//send the message, check for errors
if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    //echo "Request Sent Succefully!";
    
}

header("location: index.html");

?>