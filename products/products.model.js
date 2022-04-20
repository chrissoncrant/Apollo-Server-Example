const products = [
    {
        id: 'redshoes',
        description: 'Red Shoes',
        price: 69.95,
        reviews: []
    },
    {
        id: 'bluejeans',
        description: 'Blue Jeans',
        price: 55.49,
        reviews: []
    },
    {
        id: 'greenblouse',
        description: 'Green Blouse',
        price: 45.99,
        reviews: []
    },
    {
        id: 'orangeshirt',
        description: 'Orange Shirt',
        price: 35.99,
        reviews: []
    },
]

function getAllProducts() {
    return products;
}

function getProductById(id) {
    return products.find(product => product.id === id);
}

function filterByPrice(min, max) {
    return products.filter(product => product.price >= min && product.price <= max).sort((a, b) => b.price - a.price);
}

module.exports = {
    getAllProducts,
    getProductById,
    filterByPrice
}