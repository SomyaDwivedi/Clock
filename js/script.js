let clockInterval; 

function Clock() {
    const currentTime = new Date().toLocaleTimeString();
    document.getElementById("clock").textContent = currentTime;
}


document.getElementById("hideTimeBtn").style.display = "none";

document.getElementById("showTimeBtn").addEventListener("click", () => {
    Clock(); 
    clockInterval = setInterval(Clock, 1000); 

    document.getElementById("showTimeBtn").style.display = "none";
    document.getElementById("hideTimeBtn").style.display = "inline";
});

document.getElementById("hideTimeBtn").addEventListener("click", () => {
    clearInterval(clockInterval); 
    document.getElementById("clock").textContent = "";
    
    document.getElementById("hideTimeBtn").style.display = "none";
    document.getElementById("showTimeBtn").style.display = "inline";
});
