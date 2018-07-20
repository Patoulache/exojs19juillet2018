<?php
  $var = $_POST['donnees'];
  $pouet = explode(",", strrev($var));

  $sortie=[];
  $sortie["formulaire"]= "<htmml><div></<div>";
  $sortie["nom"] = $pouet[3];
  $sortie["prenom"] = $pouet[2];
  echo json_encode($sortie);
?>