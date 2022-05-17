// 1. Create class Order having id (Number), and businessKey (String) as properties

class Order {
    constructor(id, businessKey) {
        this.id = id;
        this.businessKey = businessKey;
    }
}

class OrderService {
    constructor(initialState) {
        this.orders = initialState ? [...initialState] : [];
    }

    add(newOrder) {
        this.orders = [...this.orders, {...newOrder}]
    }

    update(orderToUpdate) {
        this.orders = this.orders.map(
            order => order.id === orderToUpdate.id ? {...orderToUpdate} : order);
    }

    delete(orderId) {
        this.orders = this.orders.filter(
            order => order.id !== orderId);
    }

    findById(orderId) {
        return this.orders.find(byOrderId(orderId));
    }

    get value() {
        return this.orders;
    }
}

function byOrderId(orderId) {
    return function (order) {
        return order.id === orderId;
    }
}

const orders = new OrderService();
orders.add(new Order(1, 'ABC1234'));
orders.update(new Order(1, '1234ABC'));
console.log(orders.findById(1));
console.log(orders.value);
orders.delete(1);

// 2. Create class OrderService which stores a list of Orders; it can be initialized in the constructor
// 3. Create CRUD (create read update delete) methods in the OrderService:
// OrderService.add(order: Order) => void
// OrderService.update(order: Order) => void
// OrderService.delete(orderId: number) => void
// OrderService.get() => Order[]
// OrderService.findById(orderId: number) => Order | undefined
