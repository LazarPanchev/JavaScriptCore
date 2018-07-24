function ticketsStore(arr, sortMethod) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let currTicketTokens = arr[i];
        let [destinationName, price, status] = currTicketTokens.split('|');
        price = Number(price);
        let currTicket = new Ticket(destinationName, price, status);
        result.push(currTicket);
    }

    switch (sortMethod) {
        case 'destination':
            result.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case 'price':
            result.sort((a, b) => a.destination - (b.destination));
            break;
        case 'status':
            result.sort((a, b) => a.status.localeCompare(b.status));
            break;
    }
    //return result.sort((a, b) => a[sortMethod] > b[sortMethod]);
}


console.log(ticketsStore([
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'destination'));
console.log(ticketsStore([
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'status'));