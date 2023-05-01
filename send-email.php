<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $to = 'abdelhadibenslim20@gmail.com';
  $subject = 'New contact form message';
  $headers = 'From: ' . $_POST['firstname'] . ' ' . $_POST['lastname'] . "\r\n" .
             'Reply-To: ' . $_POST['firstname'] . ' ' . $_POST['lastname'] . ' <' . $_POST['email'] . '>' . "\r\n" .
             'X-Mailer: PHP/' . phpversion();
  $message = $_POST['subject'];

  if (mail($to, $subject, $message, $headers)) {
    echo 'Message sent successfully.';
  } else {
    echo 'An error occurred. Please try again later.';
  }
}
?>
