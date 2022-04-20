const orders = [
    {
        date: "05-05-20",
        subtotal: 95.45,
        items: [
            {
                product: {
                    id: "bluejeans",
                    description: "Blue Jeans",
                    price: 50.45,
                },
                quantity: 1
            },
            {
                product: {
                    id: "redshoes",
                    description: "Red Shoes", 
                    price: 45.00
                },
                quantity: 1
            }
        ]
    }
]

function getAllOrders() {
    return orders;
}

function getOrderByDate(date) {
    const dateValueOfOrderToFind = new Date(date).valueOf();
    
    return orders.find(order => {
        const orderDateValue = new Date(order.date).valueOf();
        return orderDateValue === dateValueOfOrderToFind;
    });
}

module.exports = {
    getAllOrders,
    getOrderByDate
}