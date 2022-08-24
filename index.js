
document.getElementById("surprise").style.display = "none";

document.getElementById("open").addEventListener("click",function() {
    document.getElementById("Gift1").style.display = "block";
    document.getElementById("surprise").style.display = "block";
})


document.getElementById("close").addEventListener("click",function() {
    document.getElementById("surprise").style.display = "none";
})
