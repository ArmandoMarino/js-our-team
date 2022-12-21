console.log("JS OK");


/* DOM ELEMENT */

const rowElement = document.getElementById('card-wrapper');


// ARRAY OBJ TEAM

const ourTeam = [
{
    //WAYNE 0
    name : 'Wayne',
    lastName : 'Barnett',
    role : 'Founder & CEO',
    imageLink : 'img/wayne-barnett-founder-ceo.jpg' 
},
{
    name : 'Angela',
    lastName : 'Caroll',
    role : 'Chied Editor',
    imageLink : 'img/angela-caroll-chief-editor.jpg' 
},
{
    name : 'Walter',
    lastName : 'Gordon',
    role : 'Office Manager',
    imageLink : 'img/walter-gordon-office-manager.jpg' 
},
{
    name : 'Angela',
    lastName : 'Lopez',
    role : 'Social Media Manager',
    imageLink : 'img/angela-lopez-social-media-manager.jpg' 
},
{
    name : 'Scott',
    lastName : 'Estrada',
    role : 'Developer',
    imageLink : 'img/scott-estrada-developer.jpg' 
},
{
    name : 'Barbara',
    lastName : 'Ramos',
    role : 'Graphic Designer',
    imageLink : 'img/barbara-ramos-graphic-designer.jpg' 
},
]

// CHECK
console.log(ourTeam[4].imageLink);


// VARIABILE D'APPOGGIO
let myList = "";

// CICLO FINCHE'
let i = 0;
while (i < ourTeam.length){
    console.table(ourTeam[i]);

    myList += `
    <div class="col-4 my-2">
    <div>
    <img class="img-fluid mb-3" src="${ourTeam[i].imageLink}" alt="">
    <h5>${ourTeam[i].name} ${ourTeam[i].lastName}</h5>
    <p>Founder & CEO</p>
    </div>
    </div>`;
    i++;
}

rowElement.innerHTML = myList;