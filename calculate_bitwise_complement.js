function calculate_bitwise_complement(num) {
  // count number of total bits in 'num'
  let bit_count = 0;
  let n = num;
    while (n > 0) {
        bit_count++;
        n = n >> 1;
    }

    let all_bits_set = Math.pow(2, bit_count) - 1;

  // from the solution description: complement = number ^ all_bits_set
  return num ^ all_bits_set;
}

console.log(`Bitwise complement is: ${calculate_bitwise_complement(8)}`);
//console.log(`Bitwise complement is: ${calculate_bitwise_complement(10)}`);