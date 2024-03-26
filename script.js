//Roadmap Day 5 Tasks
//1.0 Creating Own Resume in JSON

let Resume ={
    "Name" : "K.Santhosh",
    "Country" : "India",
    "State" : "Tamil Nadu",
    "City" : "Chennai",
    "Gender" : "Male",
    "Education Qualification" : ["SSLC","HSC","B.TECH"],
    "Nationality" : "INDIAN",
    "Languages Known" : ["Tamil","English","Telegu"],
    "Skills" : ["JAVASCRIPT","HTML","CSS","BOOTSTRAP"],
    "University Name" : "Dr.MGR University"
};

let Res1 = JSON.stringify(Resume); 
let Updated = JSON.parse(Res1); 

console.log("Creating My Own Resume in JSON", Updated);

//2 For Above JSON Iterating Over All The Loops 
//(for, for in, for of, forEach)

//2.1 FOR LOOP

let keys = Object.keys(Updated);
for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    console.log("FOR LOOP",key + ": " + Updated[key]);
}


//2.2 FOR IN

for (let key in Updated) {
    console.log("FOR IN",key + ": " + Updated[key]);
};


//2.3 FOR OF

let keyValueArray = Object.entries(Resume);
for (let [key, value] of keyValueArray) {
    console.log("FOR OF",key + ": " + value);
};


//2.4 FOREACH

keyValueArray.forEach(([key, value]) => {
    console.log("FOREACH",key + ": " + value);
});