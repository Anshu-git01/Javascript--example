// define three variables: userrole (eg: "admin,"editor","guest"),isautheticated(boolean),and userage(number). Implement below logic:
//     if the user is not authenticted, print "please log in"
//     if they are auth and admin, print "Welcome to the dashboard"
//     if they are auth but not an admin, print "Access denied"

function access(a,b){
    if (!b){
        console.log("Please login");
    }
    if(a=="admin" && b){
        console.log("Welcome to the Dashboard");
    }
    if(b && a!="admin"){
        console.log("access denied");
    }
}
let userRole="editor";
let isautheticated=Boolean(0);
let userAge=18;
access(userRole,isautheticated);