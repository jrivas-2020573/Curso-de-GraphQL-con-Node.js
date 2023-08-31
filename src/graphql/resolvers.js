const {getProduct, getProducts, addProduct, updateProduct, deleteProduct, getProductsByCategory} = require('./product.resolvers');
const {login} = require('./auth.resolvers');
const {addCategory, getCategory} = require('./category.resolvers');
const {RegularExpression} = require('graphql-scalars');

const CategoryNameType = new RegularExpression('CategoryNameType', /^[a-zA-Z0-9]{3,8}$/);

const resolvers = {
    Query: {
        hello: () => 'Hola mundo!',
        getPerson: (_, args) => `Hola mi nombre es ${args.name}, y tengo ${args.age} años de edad`,
        getInt: (_, args) => args.age,
        getFloat: (_, args) => args.price,
        getString: () => 'rojos',
        getBoolean: () => true,
        getID: () => '2020573',
        getNumbers: (_, args) => args.numbers,
        //Products
        product: getProduct,
        products: getProducts,
        category: getCategory,
    },
    Mutation: {
        login,
        addProduct,
        updateProduct,
        deleteProduct,
        addCategory
    },
    CategoryNameType,
    Category: {
        products: getProductsByCategory
    }
}

module.exports = resolvers;