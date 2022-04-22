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

function addNewProduct(id, description, price) {
    const newProduct = {
        id,
        description,
        price,
        reviews: []
    };
    products.push(newProduct);
    return newProduct;
}

function addNewProductReview(rating, comment, id) {
    const product = getProductById(id);
    if (!product) {
        console.error("Product does not exist");
        return;
    };
    let review = {}
    if (comment) {
        review = {rating, comment};
        product.reviews.push(review);
    } else {
        review = {rating};
        product.reviews.push(review)
    }
    return review;
}

module.exports = {
    getAllProducts,
    getProductById,
    filterByPrice,
    addNewProduct,
    addNewProductReview
}