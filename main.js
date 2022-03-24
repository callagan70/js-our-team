let list = [
{
    'name' : 'Angela Caroll',
    'role' : 'Chief editor',
    'img' : 'angela-caroll-chief-editor.jpg'
},
{
    'name' : 'Angela Lopez',
    'role': 'Social media manager',
    'img': 'angela-lopez-social-media-manager.jpg',
},
{
    'name' : 'Barbara Ramos',
    'role': 'Graphic designer',
    'img': 'barbara-ramos-graphic-designer.jpg',
},
{
    'name' : 'Scott Estrada',
    'role': 'developer',
    'img': 'scott-estrada-developer.jpg',
},
{
    'name' : 'Walter-Gordon',
    'role': 'Office Manager',
    'img': 'walter-gordon-office-manager.jpg',
},
{
    'name' : 'Wayne Barnett',
    'role': 'Founder & Ceo',
    'img': 'wayne-barnett-founder-ceo.jpg',
},
]

console.log(list)

for ( i=0; i < list.length; i++){
console.log(list[i])
console.log("Nome:", list[i]['name'])
console.log("Ruolo: ", list[i]['role'])
console.log("Immagine: ", list[i]['img'])


}