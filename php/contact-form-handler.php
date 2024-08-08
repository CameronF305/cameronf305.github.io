<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $reasom = $_POST['reason'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $email_from = 'contact@cameronf305.com'; 

    $email_subject = 'New Email From Contact Page';

    $email_body = "User Name: $name.\n".
                    "User Email: $visitor_email.\n".
                        "User Reason: $reason.\n".
                            "User Subject: $subject.\n".
                                "User Message: $message.\n";
    $to = "contact@cameronf305.com";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: contact.html");
?>