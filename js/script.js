document.addEventListener('DOMContentLoaded', function () {
  const showTimeBtn = document.getElementById('showTimeBtn');
  const hideTimeBtn = document.getElementById('hideTimeBtn');
  const clock = document.getElementById('clock');
  let clockInterval;

  showTimeBtn.addEventListener('click', function () {
    clock.textContent = new Date().toLocaleTimeString(); // Set time immediately

    clockInterval = setInterval(function () {
      // Update only the time part, keep existing date if shown
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
    // Toggle to show/hide date
    if (e.key === 'n' || e.key === 'N') {
      const currentTime = new Date().toLocaleTimeString();
      const currentDateString = '<br>' + new Date().toLocaleDateString();

      if (clock.innerHTML.includes('<br>')) {
        // Date is currently shown, so hide it by showing only time
        // Need to ensure the live time update continues correctly
        if (clock.style.display === 'block') { // Only update if clock is visible
            clock.textContent = new Date().toLocaleTimeString();
        }
      } else {
        // Date is not shown, so add it
        if (clock.style.display === 'block') { // Only update if clock is visible
          clock.innerHTML = currentTime + currentDateString;
        }
      }
    }
  });
});