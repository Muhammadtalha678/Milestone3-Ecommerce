export default {
    name: "users", // Collection name in Sanity
    type: "document", // This tells Sanity it’s a main schema
    title: "Users",
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
        },
        {
            name: 'email',
            type: 'email',
            title: 'Email',
        },
        {
            name: 'address',
            type: 'string',
            title: 'Address',
        },
        {
            name: 'city',
            type: 'string',
            title: 'City',
        },
        {
            name: 'country',
            type: 'string',
            title: 'Country',
        }
    ],
};