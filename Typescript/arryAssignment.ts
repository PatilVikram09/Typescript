let names;
names = [];

names.push("James Bond");
names.push("mahesh");
names.push("Vikram Patil");
names.push("sachin");
names.push("Om");

var sortBylength = names.sort((e1, e2) => e1.length - e2.length);
console.log("--------------------Sort By length------------------");
for(let l of sortBylength){
    console.log(l);
}

console.log();

var sortByNames = names.sort(function(a, b){
        var nameA=a.toLowerCase();
        var nameB=b.toLowerCase();
        if (nameA < nameB)
        return -1;
        if (nameA > nameB)
        return 1;
        return 0; 
   });

console.log("---------------- Sort By alphabetic order -----------------");
for(let n of sortByNames){
    console.log(n);
}

console.log();

console.log("---------------- Names Start with uppercase character ------------");
for(let c of names){
    let uc = c.charAt(0);
    if(uc === uc.toUpperCase()){
        console.log(c);
    }
   
}