var customerName = 'bob'
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase(); //re-defines the variable 'customerName' *return customerName.toUpperCase()* returns 'BOB but does not redefine customerName. 
}

function setBestCustomer () {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer () {
    bestCustomer = 'maybe bob'
}
const leastFavoriteCustomer = 'karen'; 
function changeLeastFavoriteCustomer () {
    leastFavoriteCustomer = 'melody';
}