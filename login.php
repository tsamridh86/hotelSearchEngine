<?php
	require 'config/config.php';
	$conn = new Connector();
	if(isset($_GET['userName']) && isset($_GET['password']))
	{
		$query = "select * from users where userName ='".$_GET['userName']."' and password ='".$_GET['password']"'";


	}
	else if (isset($_POST['newUserName']) && isset($_POST['newPassword']))
	{
		echo "got it";	
	}
	else 
		echo "did not get userName and password";

?>