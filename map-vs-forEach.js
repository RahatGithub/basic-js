/*  The main difference between map and forEach is that the map method returns a new array 
    by applying the callback function on each element of an array, 
    while the forEach method doesn't return anything. */

const brothers = [
    {name: 'Yasir Ahmed', batch: 10, dept: 'CSE'},
    {name: 'MR Hridoy', batch: 11, dept: 'EEE'},
    {name: 'Enamul Haque', batch: 13, dept: 'CSE'},
    {name: 'Sazzad Joy', batch: 10, dept: 'CE'}
]

const names_foreach = brothers.forEach(br => console.log(br.name))

const names_map = brothers.map(br => br.name);
console.log(names_map)