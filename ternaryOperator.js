const isActive = true;

// If isActive == true, then call showUser() and if false then call hideUser() 
const cssClass = isActive ? showUser() : hideUser()

const showUser = () => {
    console.log('User is active');
}

const showUser = () => {
    console.log('User is inactive');
}