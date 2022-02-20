function example() {
    const insideVar = "zamiana stworzona w funkcji";
    const insideVar2 = "zmienna2 stworzona w funkcji";
    return [insideVar,insideVar2];
}

let outsideVar1 = example()[0];
let outsideVar2 = example()[1];
console.log(outsideVar1 + ","+outsideVar2);
//przyklad 2
const userAge = 23;

const userInfo = function() {
 const userName = "Adam";
    return "Imie: " + userName + ", Wiek: " + userAge;
}

const newUser = userInfo();
console.log(newUser);

//przyklad 3

function hello(name)
{
     return function(day)
     {
     console.log(`Czesc ${name}, jak tam ${day} u Ciebie?`)
     }
}

const user = hello("Ja");
console.log(user);
console.log(user("sroda"));

//przyklad 4

const dodaj = function(a)
{
 let b = 10;
    return function(c)
    {
        return a+b+c;
    }
}

const dodajDo20 = dodaj(10);
console.log(dodajDo20);
console.log(dodajDo20(10));

//przyklad 5

function licznik(start)
{
    let laiczbaWywolan = start;
    
    return function()
    {
    return ++laiczbaWywolan;
    }
}

const count = licznik(0);
count();
count();
console.log(count());