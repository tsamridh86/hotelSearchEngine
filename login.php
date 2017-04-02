<?php
	require 'config/config.php';
	$conn = new Connector();
	if(isset($_GET['userName']) && isset($_GET['password']))
	{
		$query = "select * from users where userName ='".$_GET['userName']."' and password ='".$_GET['password']."'";
		$result = $conn->executeQuery($query);
		if(mysqli_num_rows($result) > 0)
		{
			$row = mysqli_fetch_assoc($result);
			echo json_encode($row);
		}
		else 
			echo "invalid login details.";
	}
	else if (isset($_POST['newUserName']) && isset($_POST['newPassword']))
	{
		$query = "select userName from users where userName ='".$_POST['newUserName']."'";
		$result = $conn->executeQuery($query);
		if(mysqli_num_rows($result) == 0)
		{
			$query = "insert into users (userName, password) values ('".$_POST['newUserName']."','".$_POST['newPassword']."')";
			$conn->executeQuery($query);
			echo "successfully signed Up!";
		}
		else 
			echo "the userName already exists";	
	}
	else 
		echo "did not get userName and password";

?>