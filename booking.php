<?php
	require 'config/config.php';
	$conn = new Connector();
	if( isset($_POST['userId']) && isset($_POST['hotelId']))
	{
		$query = "insert into bookings (userId, hotelId) values (".$_POST['userId']." , ".$_POST['hotelId'].")";
		$conn->executeQuery($query);
		echo "Successfully Booked Your Hotel!";
	}
	else 
		echo "UserId or HotelId not found!";
?>