<?php
  $name = $_POST['name'];
  $name = "=?utf-8?B?".base64_encode($name)."?=";
  $email = $_POST['email'];
  $message = $_POST['message'];
  $to = "email@kozart.net";
  $subject = "Request for a job";
  $subject = "=?utf-8?B?".base64_encode($subject)."?=";
  $headers = "From: \"{$name}\" <{$email}>\r\nReply-To: \"{$name}\" <{$email}>\r\nContent-type: text/plain; charset=UTF-8\r\n";
  mail($to, $subject, $message, $headers);
  $redir = $_SERVER['HTTP_REFERER'];
  if (strpos($redir, "mail=1") === false) $redir .= "?mail=1";
  header("Location: $redir");
?>