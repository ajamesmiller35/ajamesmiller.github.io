<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';
    require 'PHPMailer/src/SMTP.php';

    $name = $email = $phone = $message = $contactOption = '';

    if(isset($_POST['name'])){
        $name = $_POST['name'];
    }
    if(isset($_POST['email'])){
        $email = $_POST['email'];
    }
    if(isset($_POST['phone'])){
        $phone = $_POST['phone'];
    }
    if(isset($_POST['message'])){
        $message = $_POST['message'];
    }
    if(isset($_POST['inlineRadioOptions'])){
        $contactOption = $_POST['inlineRadioOptions'];
    }

    $mailBody = 'New Web Form Message: <br>' . 
    'Name: ' . $name . '<br>' .
    'Email: ' . $email . '<br>' .
    'Phone: ' . $phone . '<br>' .
    'Message: ' . $message . '<br>' .
    'Contact Preference: ' . $contactOption . '<br>';

    echo $mailBody;

    /*//Create a new PHPMailer instance
    $mail = new PHPMailer;

    $mail->isSMTP();
    $mail->SMTPDebug = 0;
    $mail->Debugoutput = 'html';
    $mail->Host = '???????????';
    $mail->Port = ?????????;
    $mail->SMTPSecure = 'tls';
    $mail->SMTPAuth = true;
    $mail->Username = "??????????????????";
    $mail->Password = "????????????????????";
    $mail->setFrom('?????????????', '?????????????');

    //Set an alternative reply-to address
    //$mail->addReplyTo('replyto@example.com', 'First Last');

    //Set who the message is to be sent to
    $mail->addAddress('????????????', '?????????????????');
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

    header("location: index.html");*/

?>