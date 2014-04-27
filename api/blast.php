<?php
require_once("dbconnect.php");

$url = $_GET['SpotifyURL'];

$sql="UPDATE users SET playlisturl='$url'";
$result = mysqli_query($con,$sql);

header('Content-type:application/json');

$the_data="success:true";
echo ($the_data);

mysqli_close($con);
?> 