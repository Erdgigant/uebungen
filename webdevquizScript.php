<?php
	$x = $_GET['x'];
	$y = $_GET['y'];
	if ($x > 999 or $y > 999 or !is_numeric($x) or !is_numeric($y) or count($_GET) > 2) {
		header('HTTP/1.1 500 I don\'t like your input...');
		header('Content-Type: application/json');
		echo null;
	} else {
		if ($x > 99) {
			$rtrn1 = $x * 42;
		} else {
			$rtrn1 = $x * 21;
		}
		$summe = $y * (($y + 1) / 2);
		$rtrn2 = $summe * $summe - calcrtrn2($y);
		$data = [$rtrn1, $rtrn2, 'Roman', 'Schilter', 'roman.schilter10@gmail.com'];
		header('Content-Type: application/json');
		echo json_encode($data);
	}
	function calcrtrn2($inputy)
	{
		if ($inputy == 1) {
			return 1;
		}
		return $inputy * $inputy + calcrtrn2($inputy - 1);
	}