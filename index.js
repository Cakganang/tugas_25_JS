var array1 = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

function panggilSort(){
    var hasil1 = array1.sort();
    return hasil1;
}

function panggilreserve(){
    var hasil2 = array1.reverse();
    return hasil2;
}

var found = array1.filter(function(element){
    return element > 10;
});

console.log('sebelumnya : ', array1);
console.log('ascending : ', panggilSort());
console.log('descending : ', panggilreserve());
console.log('filter > 10 : ', found);