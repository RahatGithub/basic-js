// ***** Ternary operator instead of if-else *****
const isActive = true;

// If isActive == true, then call showUser() and if false then call hideUser() 
const cssClass = isActive ? showUser() : hideUser()

const showUser = () => {
    console.log('User is active');
}

const showUser = () => {
    console.log('User is inactive');
}


// ***** Shortcut for only if condition; means, 'if so and so is true, then do that' ***** 
const legitimate = false;
const authenticate = legitimate && login() // this will go to the both parts of this statement


// ***** Shortcut for only if not condition; means, 'if so and so is false, then do that' ***** 
const remainingBalance = true;
const logout = remainingBalance || logout() // this will execute logout() only if remainingBalance is false