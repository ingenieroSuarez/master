
function calculateSinOfProductSum(addendA, addendB, multiplier) {
    let sum = addendA + addendB;
    let product = sum * multiplier;
    let sinOfProduct = Math.sin(product);
    return sinOfProduct;
}