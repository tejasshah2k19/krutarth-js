 function logout(){
     localStorage.clear(); // remove all items from local storage 
     toastr.success("You Will redirect to Login page soon!!!","Logout done",3000);
    setTimeout(()=>{
        location.href="Login.html";
    },2000);
     
    //  localStorage.removeItem("authToken"); // remove only authToken from local storage 
    
}

 $(document).ready(function(){
    $("#logout").click(function(){
        logout();
    })
})