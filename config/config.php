<?php
  
class connector	
 {
  	private $connection;
    private $hostName;
    private $userName;
    private $password;
    private $database;
  	
  	public function __construct()
  	{
  		$this->hostName = "localhost";
  		$this->userName = "root";
  		$this->password = "";
  		$this->database = "hotels";
  	}

  	//this function is used to open the connection between php & sql server
  	public function openConnection()
  	{
  		$this->connection = mysqli_connect($this->hostName,$this->userName,$this->password);
  		mysqli_select_db($this->connection , $this->database);
  	}

  	//this function is used to close the opened connection 
  	public function closeConnection()
  	{
  		if (isset($this->connection)) 
  			mysqli_close($this->connection);
  	}

  	//this function is for executing sql queries
  	public function executeQuery ( $query )
  	{
  		$this->openConnection();
  		$result = mysqli_query($this->connection, $query);
  		$this->closeConnection();
  		return $result;
  	}

  }

  

  
?>