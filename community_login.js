function user_adding()
{
    user = document.getElementById("user").value;
    localStorage.setItem("user", user);
    window.location = "community_room.html";
}

function main_page()
{
    window.location = "index.html"
}