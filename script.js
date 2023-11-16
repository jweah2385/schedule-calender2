
$(function () {
  //Save the user input to the local storage
  $('.saveBtn').on('click', function () {

    let timeBlockId = $(this).closest('.time-block').attr('id');

   let userInput = $(this).siblings('.description').val();

  localStorage.setItem(timeBlockId, userInput);
  });

  //Putting the date on the page
  let hour = dayjs().format('H');

  const formattedDate = dayjs().format('dddd MMMM DD');

  console.log(formattedDate);
  
  $('#currentDay').text(formattedDate);

  //Determining the color of the block based on the time of the day.
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


  //Calls the function every second
  $(document).ready(function() {
    hourColor();
  })
   setInterval(hourColor, 1000);
 

  //Maintain data into the each block 
    $(document).ready(function () {
      $('.time-block').each(function () {
        let timeBlockId = $(this).attr('id');
        let storedInput = localStorage.getItem(timeBlockId);

        if (storedInput) {
          $(this).find('.description').val(storedInput);
        }
      });
      
      hourColor();
    });

});




