// Using spread operator instead of concat() to make a new array with old ones
const friends = ['Omur', 'Ashfak', 'Nafiz', 'Shamim'];
const seniors = ['Sazzad', 'Yasir', 'Fahim'];
const all = [...friends, ...seniors];

console.log(all);


// Using spread operator to unpack elements of an array
const nums = [12, 34, 56, 76, 13]

const res = Math.max(...nums);

console.log(res)