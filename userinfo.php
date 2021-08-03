<?php

$con = mysqli_connect('localhost','root');

if ($con) {
    echo "Connection Successful";
} else {
    echo "No Connection";
}

mysqli_select_db($con, 'patelmetalindia');

$user = $_POST['user'];
$company = $_POST['company'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$query = "insert into userinfodata (user, company, email, phone, message)
values ('$user', '$company', '$email', '$phone', '$message')";

mysqli_query($con, $query);

header('location:index.php');

?>