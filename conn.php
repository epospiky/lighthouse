<?php
   $connect = mysqli_connect("localhost","root","","lighthouse");

   if(isset($_POST["email"]))
   {
   	$email = mysqli_real_escape_string($connect, $_POST["email"]);

   	$sql = "INSERT INTO users(email) VALUE('".$email."')";
   	if(mysqli_query($connect, $sql))
   	{
   		echo "Email Saved Successfully";
   	}else{
           echo "try agaian bro";
       }
   }


?>