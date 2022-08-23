<?
function utf8_char_code_at($str, $index)
{
    $char = mb_substr($str, $index, 1, 'UTF-8');

    if (mb_check_encoding($char, 'UTF-8')) {
        $ret = mb_convert_encoding($char, 'UTF-32BE', 'UTF-8');
        return hexdec(bin2hex($ret));
    } else {
        return null;
    }
}




function binToAscii($bin) {
    $text = [];
    $bin = str_split($bin, 8);

    for($i=0; count($bin)>$i; $i++)
        $text[] = chr(bindec($bin[$i]));

    return implode($text);
}
function stringToBinary($string)
{
    $characters = str_split($string);
 
    $binary = [];
    foreach ($characters as $character) {
        $data = unpack('H*', $character);
        $binary[] = base_convert($data[1], 16, 2);
    }
 
    return implode(' ', $binary);    
}






?>