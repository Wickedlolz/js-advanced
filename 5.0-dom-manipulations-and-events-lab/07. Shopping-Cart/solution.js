function solve() {
    const addButtons = Array.from(document.querySelectorAll('.add-product'));
    addButtons.forEach((btn) => {
        btn.addEventListener('click', onAdd);
    });

    document.querySelector('.checkout').addEventListener('click', onCheckout);

    let products = [];

    function onCheckout(event) {
        addButtons.forEach((button) => {
            button.disabled = true;
        });

        let totalSum = 0;
        let productsList = [];

        products.forEach((product) => {
            if (!productsList.includes(product.name)) {
                productsList.push(product.name);
            }

            totalSum += Number(product.price);
        });

        document.querySelector(
            'textarea'
        ).value += `You bought ${productsList.join(
            ', '
        )} for ${totalSum.toFixed(2)}.\n`;

        products.length = 0;
        document.querySelector('.checkout').disabled = true;
    }

    function onAdd(event) {
        let productContainer = event.target.parentNode.parentNode;
        let title =
            productContainer.querySelector('.product-title').textContent;

        let price = Number(
            productContainer.querySelector('.product-line-price').textContent
        );

        document.querySelector(
            'textarea'
        ).value += `Added ${title} for ${price.toFixed(2)} to the cart.\n`;

        products.push({ name: title, price });
    }
}
