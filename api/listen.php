<?php
require_once("dbconnect.php");

$id = $_GET['id'];

$sql="SELECT playlisturl FROM users WHERE userid = ".$id;
$result = mysqli_query($con,$sql);

$row = mysqli_fetch_array($result);
$the_data = $row;

header('Content-type:application/json');

echo json_encode($the_data);

mysqli_close($con);
?> 