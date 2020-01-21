const ABCProblem = (word) => {

    let characters = "BO XK DQ CP NA GT RE TG QD FS JW HU VI AN OB ER FS LY PC ZM";
    let blocks = characters.split(" ").map(pair => pair.split(""));


   let letters = [...word.toUpperCase()];
   let length = letters.length;
   let copy = new Set(blocks);


    for(let letter of letters) {
        for(let block of copy) {
            let index = block.indexOf(letter)
            if(index !== -1) {
                length--;
                copy.delete(block);
                break;
            }
        }
    }
    console.log(word, !length)
    return !length
}


ABCProblem("BARK")
ABCProblem("BOOK")
ABCProblem("TREAT")

