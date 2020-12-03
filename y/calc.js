const form = document.querySelector('#fixer');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    var vaer = document.getElementById("money").value;
    document.getElementById("cash").innerHTML = "Shillings: " + vaer; 
})
// function Show(){
//     e.preventDefault();
    
//     const ged = document.getElementById("cash");
//     // const her = ged.length;
//     // if(her > 0){
        
// }
//     // }
//     // else{
    //     alert("You need to be logged in first");
    // }
    




function eight(){
    const ged = document.getElementById("two");
    const her = ged.length;
    // if(her > 0){
    const der = document.getElementById("money").value;
    var interest = (der * 0.60);
    document.getElementById("interest").innerHTML = "Shillings: " + interest;
    var hey = parseInt(interest, 10);
    var me = parseInt(der, 10);
    var final = me + hey;
    document.getElementById("final").innerHTML = "Shillings: " + final;
// }
// else{
//     alert("You need to be logged in first");
// }
};
function twelve(){
    const ged = document.getElementById("two");
    const her = ged.length;
    // if(her > 0){
    const der = document.getElementById("money").value;
    var interest = (der * 0.95);
    document.getElementById("interest").innerHTML = "Shillings: " + interest;
    var hey = parseInt(interest, 10);
    var me = parseInt(der, 10);
    var final = me + hey;
    document.getElementById("final").innerHTML = "Shillings: " + final;
// }
// else{
//     alert("You need to be logged in first");
// }
};
function park(){
    const ged = document.getElementById("two");
    const her = ged.length;
    // if(her > 0){
    const der = document.getElementById("money").value;
    var interest = (der * 0.30);
    document.getElementById("interest").innerHTML = "Shillings: " + interest;
    var hey = parseInt(interest, 10);
    var me = parseInt(der, 10);
    var final = me + hey;
    document.getElementById("final").innerHTML = "Shillings: " + final;
// }
// else{
//     alert("You need to be logged in first");
// }
};