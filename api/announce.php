<?php
require_once("dbconnect.php");

$id = intval($_GET['id']);

$sql="SELECT namefirst,namelast FROM users, following WHERE following.followed = ".$id." AND users.userid=following.followid";
$result = mysqli_query($con,$sql);

header('Content-type:application/json');

while($row = mysqli_fetch_array($result)) {
    $the_data['follower'][] = $row;
}
echo json_encode($the_data);

mysqli_close($con);
?> 