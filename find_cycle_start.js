class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

const find_cycle_start = function(head){
  
  let slow = head
  let fast = head
  let circum =0
  while(fast!= null && fast.next!=null) {
    slow= slow.next
    fast = fast.next.next
    if(fast == slow) {
       circum = get_length_cycle(slow)
       break
    }
  }

  console.log(circum)
  slow = head
  fast = head 
  let i = 0
  while(i< circum) {
    fast = fast.next
    i++
  }

  console.log(slow.value, fast.value)
  while(slow != fast) {
    slow = slow.next
    fast = fast.next
  }

  return slow;
};


const get_length_cycle = (slow) => {
  let current = slow 
  let circle_len = 0

  while(true) {
    current = current.next
    circle_len++
    if(current == slow) {
      break
    }
  }
  console.log('length ', circle_len)
  return circle_len
}

head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

head.next.next.next.next.next.next = head
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)
