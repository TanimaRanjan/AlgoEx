function rev(n) {
	let rev = 0
	let num = Math.abs(n)
	while(num>0){
        rev = (rev*10) + (num%10) 
		num = Math.floor(num/10)
		
    }
    console.log(rev)
	return rev
}

rev(215)
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