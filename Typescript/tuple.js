var productDir = [{ prodId: 101, manufacturer: "Hero", prodctName: "sony 8377", basePrice: 30000 },
    { prodId: 102, manufacturer: "Acer", prodctName: "acer 5738", basePrice: 40000 },
    { prodId: 103, manufacturer: "Dell", prodctName: "dell 7288", basePrice: 25500 },
    { prodId: 104, manufacturer: "HP", prodctName: "hp hp001", basePrice: 28000 }];


var sortByProductNames = productDir.sort(function (a, b) {
    if (a.prodctName < b.prodctName)
        return -1;
    if (a.prodctName > b.prodctName)
        return 1;
    return 0;
});

console.log("---------------- Sort By Productname -----------------");
for (var _i = 0, sortByProductNames_1 = sortByProductNames; _i < sortByProductNames_1.length; _i++) {
    var p = sortByProductNames_1[_i];
    console.log(p);
}


