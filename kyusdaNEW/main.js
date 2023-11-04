// Set the target date and time for your event
const targetDate = new Date('Nov 11, 2023 23:59:59').getTime();

function updateCountdown() {
  const currentDate = new Date().getTime();
  const timeRemaining = targetDate - currentDate;

  if (timeRemaining <= 0) {
    // If the target date has passed, you can display a message or take some action here.
    document.getElementById('countdown').textContent = 'Event has started!';
    return;
  }

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById('days').innerHTML = days + " <br> Days";
  document.getElementById('hours').innerHTML = hours + " <br> Hours";
  document.getElementById('mins').innerHTML = minutes + " <br> Mins";
  document.getElementById('secs').innerHTML = seconds + " <br> Secs";
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to set the countdown when the page loads
updateCountdown();