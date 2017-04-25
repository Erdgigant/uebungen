<?php
require_once '2FA.php';

$ga = new PHPGangsta_GoogleAuthenticator();
$secret = $ga->createSecret();

$qrCodeUrl = $ga->getQRCodeGoogleUrl('act212', $secret);
echo "<img src=".$qrCodeUrl.">";

$oneCode = $ga->getCode($secret);
echo "Checking Code '$oneCode' and Secret '$secret':\n";

$checkResult = $ga->verifyCode($secret, $oneCode, 2);    // 2 = 2*30sec clock tolerance
if ($checkResult) {
	echo 'OK';
} else {
	echo 'FAILED';
}