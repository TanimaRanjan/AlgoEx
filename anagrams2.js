  function anagrams2(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);
  
    console.log(aCharMap)
    console.log(bCharMap)
    
    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
      return false;
    }
  
    for (let char in aCharMap) {
      if (aCharMap[char] !== bCharMap[char]) {
        return false;
      }
    }
  
    return true;
  }
  
  function buildCharMap(str) {
    const charMap = {};
  
    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
      charMap[char] = charMap[char] + 1 || 1;
    }
  
    return charMap;
  }
  

  console.log(anagrams2('rail safety', 'fairy tales'));

  console.log(anagrams2('RAIL! SAFETY!', 'fairy tales'))

  console.log(anagrams2('Hi there', 'Bye there'))