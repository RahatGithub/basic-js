const brothers = [
    {name: 'Yasir Ahmed', batch: 10, dept: 'CSE'},
    {name: 'MR Hridoy', batch: 11, dept: 'EEE'},
    {name: 'Enamul Haque', batch: 13, dept: 'CSE'},
    {name: 'Sazzad Joy', batch: 10, dept: 'CE'}
]

// The difference between 'map' and 'forEach' is, map function returns something whereas forEach doesn't
const names = brothers.map(br => br.name);

console.log(names)