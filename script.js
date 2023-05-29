const clock = setInterval(countDown, 1000);

function countDown(){
   const seconds = 1000;
   const minute = seconds * 60;
   const hour = minute * 60;
   const day = hour * 24;

   const nowDate = new Date();
   let nextLessonDate = new Date( nowDate.getTime() + day) ;

   if ( nextLessonDate.getDay() === 0 ) {
      nextLessonDate = new Date( nowDate.getTime() + (day*2));
   } else if ( nextLessonDate.getDay() === 6){
      nextLessonDate = new Date( nowDate.getTime() + (day*3));
   }

   nextLessonDate.setHours(9);
   nextLessonDate.setMinutes(30);
   nextLessonDate.setSeconds(0);
   nextLessonDate.setMilliseconds(0);

   const timeDifference = nextLessonDate.getTime() - nowDate;

   const missingSeconds = Math.floor((timeDifference % minute) / 1000);
   updateDigits('div#segnasecondi p.segnacifre', missingSeconds);

   const missingMinutes = Math.floor( (timeDifference % hour) / minute );
   updateDigits('div#segnaminuti p.segnacifre', missingMinutes);

   const missingHours = Math.floor( ( timeDifference % (hour * 24)) / hour );
   updateDigits('div#segnaore p.segnacifre', missingHours);

   const missingDays = Math.floor( ( timeDifference % (day * 24) ) / day);
   updateDigits('div#segnagiorni p.segnacifre', missingDays);


   if ( timeDifference <= 999){
      clearInterval(clock);
      alert("time's up")
   }
}

function updateDigits(querySelectorString, htmlContent){
   const element = document.querySelector(querySelectorString);
   element.innerHTML = htmlContent;
}