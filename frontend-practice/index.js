let fruits = ['banana', 'Apple','cashew', 'pawpaw']

const student = {
    name: 'Joshua',
    level: '300',
    department: 'MTE',
    sex: 'male'
}

window.alert('Learning Javascript');
console.log(student)

let x = 5;
let y =15;   
let z = x + y;

console.log('The sum of  and y is ' + z)

{
    "book"[
        {
            "id": "01",
            "name": "ATomic Habits",
            "author": "James Clear"
        },
        {
            "id": "02",
            "name": "Rich Dad Poor Dad",
            "author": "Robert Kiyosaki"
        }
    ]
}

const myObj = {
    name: "Joshua",
    skills: ["Programming", "Teaching", "Graphics Designing"],
    hello: function (){
        "Welcome to console"
    } 
}

console.log(myObj);
console.log(myObj.hello)

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);

receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);