function tickets(array, sortingCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];

    for (let ticketInfo of array) {
        let [destination, price, status] = ticketInfo.split('|');
        price = Number(price);
        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket);
    }

    if (sortingCriteria == 'destination') {
        let sorted = tickets.sort(
            (a, b) => a.destination.localeCompare(b.destination) || 0
        );

        return sorted;
    } else if (sortingCriteria == 'price') {
        let sorted = tickets.sort((a, b) => a.price - b.price || 0);
        return sorted;
    } else if (sortingCriteria == 'status') {
        let sorted = tickets.sort(
            (a, b) => a.status.localeCompare(b.status) || 0
        );
        return sorted;
    }
}

console.log(
    tickets(
        [
            'Philadelphia|94.20|available',
            'New York City|95.99|available',
            'New York City|95.99|sold',
            'Boston|126.20|departed',
        ],
        'destination'
    )
);
