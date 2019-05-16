<?php
	//this file is used to delete a restaurant the user has selected for deletion
	$todelete = $_GET['rxID'];

	//database connection settings
	$host = '127.0.0.1';
	$dbname   = 'refills';
	$user = 'root';
	$pass = '';
	$charset = 'utf8';

	$dsn = 'mysql:host=' . $host . ';dbname=' . $dbname;
	$opt = [
		PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
		PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
		PDO::ATTR_EMULATE_PREPARES   => false,
		];
	$pdo = new PDO($dsn, $user, $pass, $opt);

	$sql = "DELETE FROM rxnumbers WHERE id = :todelete";
	$stmt = $pdo->prepare($sql);
	$stmt->execute(['todelete' => $todelete]);
	
	//redirects the user back to myrestaurants.php after the deletion has occured
	header("location: refills.php");

?>