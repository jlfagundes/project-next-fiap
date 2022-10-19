import TypeDb from '../../types/TypeDb'


const db: Array<TypeDb> = [
    {
        id: 1,
        type: 'pix',
        amount: 100,
        date: '2020-01-01',
        operation: 'credit',
        description: 'Pizza com a galera',
    },
    {
        id: 2,
        type: 'debit',
        amount: 160,
        date: '2020-01-01',
        operation: 'debit',
        description: 'Gasolina',
    },
];

export default db;