<?php
	$input="$p and $q";
	for($p=0;$p<=1;$p++){
		for($q=0;$q<=1;$q++){
			echo "$p, $q, ".eval($input);
		}
	}
	
?>
