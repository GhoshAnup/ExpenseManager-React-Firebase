
// const person={
//     name:'Anup',
//     age:32,
//     location:{
//         'city':'sydney',
//         'temp':32
//     }
// };

// const {city,temp} =person.location
// console.log(`${person.name} is ${person.age}`);

// console.log(`${city} is ${temp}`);

const book={
    title:'Ego is enemy',
    author:'Annonymous Author',
    publisher:{
        'name':'penguin'
    }
};
const {name : publisherName='Self-published'} =book.publisher
console.log(`Publisher  is ${publisherName}`);

const item=['cofee','2.78','4.76']
const [type,cost,]= item
console.log(`medium ${type} costs ${cost} `);