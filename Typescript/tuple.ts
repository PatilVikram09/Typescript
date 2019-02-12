var productDir = [{ prodId: 101, prodctName: "Pulsar 220", categoryName :"Vehicle",  manufacturer: "Bajaj", basePrice: 90000 },
                { prodId: 102, prodctName: "Insprion 14", categoryName :"Laptop", manufacturer: "Dell",  basePrice: 40000 },
                { prodId: 103, prodctName: "Hornet", categoryName :"Vehicle", manufacturer: "Honda",  basePrice: 85000 },
                { prodId: 104, prodctName: "Inspiria 5738", categoryName :"Laptop", manufacturer: "Acer",  basePrice: 22000 }];


let sortByProductNames = productDir.sort(function(a, b){
        if (a.prodctName < b.prodctName)
        return -1;
        if (a.prodctName > b.prodctName)
        return 1;
        return 0; 
});

console.log("---------------- Sort By Productname -----------------");
for(let p of sortByProductNames){
    console.log(p);
}
