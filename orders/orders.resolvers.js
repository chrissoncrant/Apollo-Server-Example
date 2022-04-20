const ordersModel = require('./orders.model');

module.exports = {
    Query: {
        orders: () => {
            return ordersModel.getAllOrders();
        },
        orderByDate: (_, args) => {
            return ordersModel.getOrderByDate(args.date);
        }
    }
}