/**
 * bit 0, 1
 * byte 0 00000000
 * byte 1 00000001
 * byte 2 00000010
 * byte 4 00000100
 * byte 5 00000101
 * byte 6 00000110
 * byte 3 00000011
 * byte 7 00000111
 * byte 8 00001000
 * byte 9 00001001
 * byte 10 00001010
 * byte 11 00001011
 * byte 12 00001100
 * byte 13 00001101
 * byte 14 00001110
 * byte 15 00001111
 * byte 16 00010000
 * 
 */

console.log(9|3); //00001011
console.log(15|3); //00001111
console.log(3|7); //000000111

console.log(9&3); //000000001
console.log(15&3); //00000011
console.log(3&7); //00000011