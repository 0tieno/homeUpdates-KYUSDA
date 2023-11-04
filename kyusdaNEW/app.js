function updateCountdown() {
    const targetDate = new Date('2023-11-11T23:59:59').getTime();
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;

    if (timeRemaining <= 0) {
      // If the target date has passed, you can display a message or take some action here.
      document.getElementById('countdown').textContent = 'Event has started!';
      return;
    }

    const days = String(Math.floor(timeRemaining / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'));
    const hours = String(Math.floor((timeRemaining % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)).toString().padStart(2, '0')));
    const minutes = String(Math.floor((timeRemaining % (1000 * 60 * 60) / (1000 * 60)).toString().padStart(2, '0')));
    const seconds = String(Math.floor((timeRemaining % (1000 * 60) / 1000).toString().padStart(2, '0')));

    document.getElementById('days').innerHTML = days + " <br> Days";
    document.getElementById('hours').innerHTML = hours + " <br> Hours";
    document.getElementById('mins').innerHTML = minutes + " <br> Mins";
    document.getElementById('secs').innerHTML = seconds + " <br> Secs";
  }

  // Update the countdown every second
  setInterval(updateCountdown, 1000);

  // Initial call to set the countdown when the page loads
  updateCountdown();