// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
 
  //Number 22
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  // End of Number 22

  $('.saveBtn').on('click', function () {
    // Get the id of the parent time-block
    let timeBlockId = $(this).closest('.time-block').attr('id');

    // Get the user input from the textarea within the clicked time-block
    let userInput = $(this).siblings('.description').val();

    // Save the user input in local storage with the time-block id as the key
    localStorage.setItem(timeBlockId, userInput);
  });
  let hour = dayjs().format('H');

  

  const formattedDate = dayjs().format('dddd MMMM DD');

  console.log(formattedDate);
  
  $('#currentDay').text(formattedDate);


  function hourColor() {
    $('.time-block').each(function () {
      let eachHour = parseInt(this.id.split('-')[1]); // Extract the hour and convert to integer
      let currentTime = parseInt(hour);

      if (eachHour === currentTime) {
        $(this).removeClass('past future').addClass('present');
      } else if (eachHour > currentTime) {
        $(this).removeClass('past present').addClass('future');
      } else if (eachHour < currentTime) {
        $(this).removeClass('present future').addClass('past');
      }
    });
  }



  $(document).ready(function() {
    hourColor();
  })
   setInterval(hourColor, 1000);
   // Import Day.js or include it in your HTML as previously shown
 

  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  //
  //Number 24
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //Ender of 24
  //
  
    $(document).ready(function () {
      // Number 24
      // Retrieve and set user input from local storage
      $('.time-block').each(function () {
        let timeBlockId = $(this).attr('id');
        let storedInput = localStorage.getItem(timeBlockId);

        if (storedInput) {
          $(this).find('.description').val(storedInput);
        }
      });
      // End of Number 24

      hourColor();
    });

  // Number 23
  // TODO: Add code to display the current date in the header of the page.
  // Ender of 23


});




