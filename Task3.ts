function calculateDiscount(productPrice:number,discountPercentage:number)
{
    const discountAmount=productPrice*(discountPercentage/100);
    return discountAmount;
}
let productPrice=100;
let discountPercentage=20;
let discountAmount=calculateDiscount(productPrice,discountPercentage);
console.log(`discountAmount${discountAmount}`);
