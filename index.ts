enum Months {
    January = 1,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}

interface PriceOptions {
    price: number;
    discount: number;
    isInstallment: boolean;
    months: Months;
}

const totalPrice = ({ price, discount, isInstallment, months } : PriceOptions) => {
    const priceWithDiscount = price - (price * (discount / 100));
    if (isInstallment) {
        return priceWithDiscount / months;
    }
    if (discount > 0) {
        return priceWithDiscount;
    }
    return price;
};

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price);