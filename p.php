<?php
$content=file_get_contents('http://www.disegnocentell.com.ar/phillips/');
$pattern='/<html>(.*?)<\/html>/is';
preg_match_all($pattern,$content,$result);
?>
<?php
echo 'document.write(\''.preg_replace( "/\r|\n/", "",str_replace("'",'&quot;',$result[1][0])).'\')';
?>
