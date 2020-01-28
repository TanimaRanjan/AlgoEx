function rev(num) {
	let rev = 0
	//let num = Math.abs(n)
	let i=0
	while(num!==0 && i < 10){
		i++
		rev = (rev*10) + (num%10) 
		num = num < 0 ? Math.ceil(num/10) : Math.floor(num/10)
	
    }
    console.log(rev)
	return rev
}

rev(1534236469)
9646324351
1534236469
/*

Test.assertEquals(rev(215), "512")
Test.assertEquals(rev(122225), "522221")
Test.assertEquals(rev(215), "512")
Test.assertEquals(rev(-215), "512", "Should work with negative numbers.")
Test.assertEquals(rev(-2152), "2512", "Should work with negative numbers.")
Test.assertEquals(rev(-122157), "751221", "Should work with negative numbers.")
Test.assertEquals(rev(666), "666", "Should work if all digits are the same.")
Test.assertEquals(rev(999), "999", "Should work if all digits are the same.")
215
Create a function that takes an integer n and reverses it.
Examples
rev(5121) ➞ "1215"
rev(69) ➞ "96"
rev(-122157) ➞ "751221"
Notes
This challenge is about using two operators 
that are releated to division.
If the number is negative, treat it like it's positive.*/