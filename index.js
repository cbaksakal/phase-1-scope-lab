// Write your solution in this file!
var customerName = "bob";
const leastFavoriteCustomer = "Jane";

changeLeastFavoriteCustomer();

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "Mary";
}

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = "not bob";
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
}