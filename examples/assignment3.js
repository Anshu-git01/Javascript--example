// create a fnxn called handleSignup that takes one object as an argument
// use destructuring to extract username and email into variables
// use the rest operator to capture all other fields(like password, city,zip)into a single object called metadata
// return a new object that contains the username, a new boolean property isAdmin:false, and the metadata(using the spread operator)


function handleSignup({ username, email, ...metadata }) {
  return {
    username,
    isAdmin: false,
    ...metadata
  };
}

const newUser = {
  username: "jdoe",
  email: "jane@example.com",
  password: "123",
  city: "New York",
  zip: "10001"
};

const User_final = handleSignup(newUser);
console.log(User_final);