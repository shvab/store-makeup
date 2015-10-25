<?php
require_once '../vendor/autoload.php';

// $loader = new Twig_Loader_Array(array(
//     'index' => 'Hello {{ name }}!',
// ));
if (isset($_GET['page'])){
	$page = $_GET['page'] . '.twig';
} else {
	$page = 'base.twig';
}

$loader = new Twig_Loader_Filesystem('../templates');

$twig = new Twig_Environment($loader);

echo $twig->render($page, array('name' => 'Fabien'));