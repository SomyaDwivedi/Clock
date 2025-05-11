document.addEventListener('DOMContentLoaded', function () {

  const showTimeBtn = document.getElementById('showTimeBtn');
  const hideTimeBtn = document.getElementById('hideTimeBtn');
  const clock = document.getElementById('clock');
  let clockInterval;

  showTimeBtn.addEventListener('click', function () {
    clock.textContent = new Date().toLocaleTimeString();

    clockInterval = setInterval(function () {
      
      const currentTime = new Date().toLocaleTimeString();
      const existingContent = clock.innerHTML;
      const timePart = existingContent.split('<br>')[0]; 
      if (existingContent.includes('<br>')) {
        clock.innerHTML = currentTime + existingContent.substring(existingContent.indexOf('<br>'));
      } else {
        clock.textContent = currentTime;
      }
    }, 1000);

    clock.style.display = 'block';
    showTimeBtn.style.display = 'none';
    hideTimeBtn.style.display = 'inline-flex';
  });

  hideTimeBtn.addEventListener('click', function () {

    clearInterval(clockInterval);

    clock.style.display = 'none';
    hideTimeBtn.style.display = 'none';
    showTimeBtn.style.display = 'inline-flex';
  });

  document.addEventListener('keydown', function (e) {

    if (e.key === 'n' || e.key === 'N') {
      const currentTime = new Date().toLocaleTimeString();
      const currentDateString = '<br>' + new Date().toLocaleDateString();

      if (clock.innerHTML.includes('<br>')) {
        if (clock.style.display === 'block') { 
          clock.textContent = new Date().toLocaleTimeString();
        }
      } else {
        if (clock.style.display === 'block') { 
          clock.innerHTML = currentTime + currentDateString;
        }
      }
    }
  });

  clock.addEventListener('mouseover', function () {
    clock.style.backgroundColor = 'rgb(255,250,0, 0.4)'; 
  });

  clock.addEventListener('mouseout', function () {
    clock.style.backgroundColor = ''; 
  });
});
