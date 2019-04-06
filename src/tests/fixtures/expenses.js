import moment from 'moment';

export default [{
    id:'1',
    description: 'Gum',
    note:'',
    amount:195,
    createdAt:0
},
{
    id:'2',
    description: 'Rent',
    note:'',
    amount:18934,
    createdAt:moment(0).subtract(4,'day').valueOf()
},
{
    id:'3',
    description: 'Debit card',
    note:'',
    amount:9800,
    createdAt:moment(0).add(4,'day').valueOf()
}]