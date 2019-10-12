function XO(str) {
    str = str.toLowerCase()
   let idx = str.indexOf('x')
   let ido = str.indexOf('o')
   let o=0, x = 0
   while(idx!=-1 || ido !=-1 ) {	
       if(idx !=-1) {
           x++
           idx = str.indexOf('x', idx+1)
       } else if(ido!=-1) {
           o++
           ido = str.indexOf('o', ido+1)
       }		
   }
   return o===x
}