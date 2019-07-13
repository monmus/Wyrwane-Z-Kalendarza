document.addEventListener('DOMContentLoaded', function() {

    var hamburgerMenu = document.querySelector('#hamburger-menu');
    hamburgerMenu.addEventListener('click', function() {
      document.querySelector('header nav').classList.toggle('expanded');
      document.querySelector('header .main-nav').classList.toggle('wide');
    });


  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var img = scrollTop / 2 + 'px';
    $('header .main-nav').css('transform', 'translateY(' + img + ')');
});


$(function()
{
  $('input').glDatePicker(
    {
      cssName: 'flatwhite',
      showAlways: false,
      allowMonthSelect: true,
      allowYearSelect: true,
      todayDate: new Date(1990,05,18),
      dowOffset: 1,  
      selectableDateRange: [
        { from: new Date(1985, 01, 01), to: new Date (1993, 02, 01) }, 
      ],

            
        //  onClick: function(el, cell, date, data){
        //   el.val(date.toLocaleDateString());
          // var input = document.getElementById("mydate").value;
          // console.log(input)

          // var inputDay = input.substring(0,2);
          // console.log(inputDay)

          //   fuck = inputDay

          // var spanDay = document.querySelector('.day').innerText;
          // console.log(spanDay)

          // var spanDayString = spanDay.toString()
          // console.log(spanDayString)

          // inputDay = spanDayString
         
        //  }

    });
    

  $("input").on("click",function(){
    var selected = $('input').val();

    var selectedDay = selected.substring()
      if(selectedDay.length<=9){
          var selectedDay = selected.substring(-1,1)

          }else{
          var selectedDay = selected.substring(0,2)
        }
        
        console.log(selectedDay)
        $('.day').text(selectedDay);
        $('.daysm').text(selectedDay);
    
  });

  $("input").on("click",function(){
    var selected = $('input').val();

    var selectedYear = selected.substring()
      if(selectedYear.length<=9){
          var selectedYear = selected.substring(5,9)

        }else{
          var selectedYear = selected.substring(6,10)
        }

        console.log(selectedYear)
        $('.year').text(selectedYear);
        $('.year2').text(selectedYear);
        $('.yearsm').text(selectedYear);
        $('.yearsm2').text(selectedYear);
    });

  $("input").on("click",function(){
    var selected = $('input').val();

    var selectedMonth = selected.substring()
      if(selectedMonth.length<=9){
          var selectedMonth = selected.substring(2,4)

        }else{
          var selectedMonth = selected.substring(3,5)
        }

        console.log(selectedMonth)
        $('.month').text(selectedMonth);
        $('.monthsm').text(selectedMonth);

        if(selectedMonth==='01'){
          console.log('dziala')
          var January = 'Styczeń'
          $('.month').text(January);
          $('.monthsm').text(January);
        }else if(selectedMonth==='02'){
          var Feb = 'Luty'
          $('.month').text(Feb);
          $('.monthsm').text(Feb);
        }else if(selectedMonth==='03'){
          var March = 'Marzec'
          $('.month').text(March);
          $('.monthsm').text(March);
        }else if(selectedMonth==='04'){
          var Apr = 'Kwiecień'
          $('.month').text(Apr);
          $('.monthsm').text(Apr);
        }else if(selectedMonth==='05'){
          var May = 'Maj'
          $('.month').text(May);
          $('.monthsm').text(May);
        }else if(selectedMonth==='06'){
          var June = 'Czerwiec'
          $('.month').text(June);
          $('.monthsm').text(June);
        }else if(selectedMonth==='07'){
          var July = 'Lipiec'
          $('.month').text(July);
          $('.monthsm').text(July);
        }else if(selectedMonth==='08'){
          var August = 'Sierpień'
          $('.month').text(August);
          $('.monthsm').text(August);
        }else if(selectedMonth==='09'){
          var Sept = 'Wrzesień'
          $('.month').text(Sept);
           $('.monthsm').text(Sept);
        }else if(selectedMonth==='10'){
          var Oct = 'Październik'
          $('.month').text(Oct);
          $('.monthsm').text(Oct);
        }else if(selectedMonth==='11'){
          var Nov = 'Listopad'
          $('.month').text(Nov);
          $('.monthsm').text(Nov);
        }else if(selectedMonth==='12'){
          var Dec = 'Grudzień'
          $('.month').text(Dec);
          $('.monthsm').text(Dec);
        }
  });
});


  //   function myFunction()
  // {

  //   var input = document.getElementById("mydate").value;
  //   console.log(input);

  //   var inputDay = input.substring(0,2);
  //   console.log(inputDay)

  //   var inputYear = input.substring(6,10);
  //   console.log(inputYear)

  //   var spanDay = document.querySelector('.day');
  //   console.log(spanDay.innerText)

  //   inputDay= spanDay.innerText
  //   console.log(inputDay)


  //   var fuck = document.getElementById('fuck').innerText;
  //   console.log(fuck)

  //   inputDay === fuck

  // }

  // myFunction()
  // var inputAll = document.getElementById("mydate").onclick = function() {myFunction()};
  //   console.log(inputAll)
  

    // $('input').glDatePicker(
    //   {  onClick: (function(el, cell, date, data) {
    //     el.val(date.toLocaleDateString());
       
    //   }),

    // });

});