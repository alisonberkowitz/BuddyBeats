<?php

$con = mysqli_connect('localhost','sweatinsync','buddybeats','sweatinsync');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}
mysqli_select_db($con,"sweatinsync");

?>

