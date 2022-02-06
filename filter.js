const brothers = [
    {name: 'Yasir Ahmed', batch: 10, dept: 'CSE'},
    {name: 'MR Hridoy', batch: 11, dept: 'EEE'},
    {name: 'Enamul Haque', batch: 13, dept: 'CSE'},
    {name: 'Sazzad Joy', batch: 10, dept: 'CE'}
]

const brothers_of_CSE = brothers.filter(br => br.dept == 'CSE');

const names = brothers_of_CSE.map(br => br.name)

console.log(names)