class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function climbStairs($n) {

        if($n<3) return $n;

        $a=1;
        $b=2;

        for ($x = 3; $x <= $n; $x++) {
  
  $c=$a+$b;
  $a=$b;
  $b=$c;
}
return $b;
        
    }
}