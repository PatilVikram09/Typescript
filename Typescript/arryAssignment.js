var names;
names = [];
names.push("James Bond");
names.push("mahesh");
names.push("Vikram Patil");
names.push("sachin");
names.push("Om");
var sortBylength = names.sort(function (e1, e2) { return e1.length - e2.length; });
console.log("--------------------Sort By length------------------");
for (var _i = 0, sortBylength_1 = sortBylength; _i < sortBylength_1.length; _i++) {
    var l = sortBylength_1[_i];
    console.log(l);
}
console.log();
var sortByNames = names.sort(function (a, b) {
    var nameA = a.toLowerCase();
    var nameB = b.toLowerCase();
    if (nameA < nameB)
        return -1;
    if (nameA > nameB)
        return 1;
    return 0;
});
console.log("---------------- Sort By alphabetic order -----------------");
for (var _a = 0, sortByNames_1 = sortByNames; _a < sortByNames_1.length; _a++) {
    var n = sortByNames_1[_a];
    console.log(n);
}
console.log();
console.log("---------------- Names Start with uppercase character ------------");
for (var _b = 0, names_1 = names; _b < names_1.length; _b++) {
    var c = names_1[_b];
    var uc = c.charAt(0);
    if (uc === uc.toUpperCase()) {
        console.log(c);
    }
}
