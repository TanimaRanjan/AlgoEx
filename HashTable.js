/* Hash Table 
    Lookup O(1)
    Insertion O(1)
*/

class HashNode {
    constructor(key, value, next) {
        this.key = key
        this.value = value
        this.next = next || null
    }
}

class HashTable {
    constructor(size) {
        this.buckets = Array(size)
        this.numBuckets = this.buckets.length
    }

    hash(key) {
        let total = 0
        key.split('').forEach(id => {
            total += id.charCodeAt()
        })
        return total % this.numBuckets;
    }

    insert(key, value) {
        const index = this.hash(key)
        let node = new HashNode(key, value, null)
        if(!this.buckets[index]) { 
            this.buckets[index] = node
        }  else if(this.buckets[index].key === key) {
            this.buckets[index].value = value
        } else {
            let current = this.buckets[index]
            while(current.next) {
                if(current.next.key === key) {
                    return current.next.value = value
                }
                current = current.next
            }
            current.next = node
        }
    }

    get(key) {
        const index = this.hash(key)
        if(index !== -1) {
            if(!this.buckets[index]) return null
            else {
                let current = this.buckets[index]
                while(current) {
                    if(current.key === key) {
                        return current.value
                    }
                    current = current.next
                }
            }
        }
        return null
    }

    retriveAll() {
        let result = []

        for(let i =0 ; i< this.numBuckets; i++) {
            let current = this.buckets[i] 
            while(current) {
                result.push(current.key)
                current = current.next
            }
        }
        return result
    }
}

const hash = new HashTable(30)


hash.insert('Tanima', 'asdfsada@gmail.com')
hash.insert('Anton', 'antonio@gmail.com')
hash.insert('Bmton', 'antonio@gmail.com')
hash.insert('Clton', 'antonio@gmail.com')
hash.insert('Antonio', 'anton@gmail.com')
hash.insert('Antno', 'anton@gmail.com')
hash.insert('Anotn', 'anton@gmail.com')
hash.insert('Taniam', 'anton@gmail.com')
hash.insert('Elise', 'anton@gmail.com')
hash.insert('Betty', 'anton@gmail.com')

console.log(hash.retriveAll())
