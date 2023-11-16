
$(function () {
 
  $('.saveBtn').on('click', function () {

    let timeBlockId = $(this).closest('.time-block').attr('id');

   let userInput = $(this).siblings('.description').val();

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




