function Clock(){
    const currentTime = new Date().toLocaleTimeString();
    document.getElementById("clock").textContent = currentTime;
}

setInterval(Clock, 1000);
Clock();