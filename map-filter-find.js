const brothers = ["Yasir", "Sazzad", "Saaqib", "Shafi", "Kamruzzaman", "Hasan Tarek", "Rahat"];

const lengths = brothers.map(name => name.length)

const shortNames = brothers.filter(name => name.length <= 5);

const longNames = brothers.filter(name => name.length > 5);

const firstShortName = brothers.find(name => name.length <= 5);

console.log(lengths);

console.log(shortNames);

console.log(longNames);

console.log(firstShortName);