function addUser() {
    user_name = document.getElementById("user_name").ariaValueMax;
    
    localStorage.setItem("user_name", uer_name);

    window.location = "kwitter_room.html";
}