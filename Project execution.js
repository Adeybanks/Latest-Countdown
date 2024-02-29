 // Function to update the giveaway end date
 function updateGiveawayEndDate() {
   
    var endDate = new Date('2024-03-09');

    // Get the end date in a readable format (e.g., "Saturday, 9 March 2024")
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var endDateFormatted = endDate.toLocaleDateString('en-US', options);

    
    document.getElementById('giveaway-end').textContent = "Giveaway ends on: " + endDateFormatted;
}


updateGiveawayEndDate();
function flyInText() {
 
    var flyInText = document.createElement('div');
    flyInText.textContent = "BENDE'S FOUNDATION";
    flyInText.classList.add("BENDE'S FOUNDATION");

    
    document.body.appendChild(flyInText);


    setTimeout(function() {
        flyInText.remove();
    }, 1000);
}

// Call the function every 3 seconds
setInterval(flyInText, 3000); // Every 3 seconds
document.addEventListener('DOMContentLoaded', function() {
    const countContainer = () => {
        const giveaway = document.querySelector('.giveaway');
        const countDate = new Date();
        countDate.setDate(countDate.getDate() + 10); // Set countdown to 10 days from now
        countDate.setHours(10, 0, 0, 0); // Set the time to 10:00:00 (if needed)

        const now = new Date().getTime();
        const gap = countDate - now;

        if (gap <= 0) {
            clearInterval(interval); // Stop the countdown when it reaches zero
            document.querySelector(".day").innerText = '0';
            document.querySelector(".hour").innerText = '0';
            document.querySelector(".minute").innerText = '0';
            document.querySelector(".second").innerText = '0';
            return;
        }

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);

        document.querySelector(".day").innerText = textDay;
        document.querySelector(".hour").innerText = textHour;
        document.querySelector(".minute").innerText = textMinute;
        document.querySelector(".second").innerText = textSecond;
    };

    // Call the function to start the countdown
    countContainer();

    // Update the countdown every second
    const interval = setInterval(countContainer, 1000);
});
