let canSegmentString = (s, dictionary) => {

    for(let i=1;i<s.length;i++) {
        let first = s.substring(0,i)
        
        if(dictionary.has(first)) {
            
            let second = s.substring(i)
            console.log(`first ${first} second ${second} for ${s}`)

            if(second.length === 0) return false
            if(dictionary.has(second)) {
                console.log(`first ${first} second ${second} for ${s} found it`)
                return true
            }
            if(canSegmentString(second, dictionary)) {
                return true
            }
        }

    }
}

let s = 'hellonnow'
let dictionary = new Set(['hello', 'hell', 'on', 'now'])

canSegmentString(s,dictionary)