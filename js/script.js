function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
      var t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  
  var deadline='2022-07-29';
  initializeClock('countdown', deadline);  
function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      } 
      else{
          change.target.classList.remove('element-show');
          change.target.classList.add('element-hide');
      }
    });
  }
  
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  
  let elements = document.querySelectorAll('.rec_pc');
  for (let elm of elements) {
    observer.observe(elm);
  }
  
  let pup1= document.querySelectorAll('.pup1');
  for (let elm of pup1) {
    observer.observe(elm);
  }
  
  let pup2= document.querySelectorAll('.pup2');
  for (let elm of pup2) {
    observer.observe(elm);
  }
  
  let pup3= document.querySelectorAll('.pup3');
  for (let elm of pup3) {
    observer.observe(elm);
  }
  
  let pup4= document.querySelectorAll('.pup4');
  for (let elm of pup4) {
    observer.observe(elm);
  }
  
  let prog_rec= document.querySelectorAll('.prog_rec');
  for (let elm of prog_rec) {
    observer.observe(elm);
  }
  
  let prog_rc1= document.querySelectorAll('.prog_rc1');
  for (let elm of prog_rc1) {
    observer.observe(elm);
  }
  
  let prog_rc2= document.querySelectorAll('.prog_rc2');
  for (let elm of prog_rc2) {
    observer.observe(elm);
  }
  
  let prog_rc3= document.querySelectorAll('.prog_rc3');
  for (let elm of prog_rc3) {
    observer.observe(elm);
  }
  
  let prog_rc4= document.querySelectorAll('.prog_rc4');
  for (let elm of prog_rc4) {
    observer.observe(elm);
  }
  
  let prog_rc5= document.querySelectorAll('.prog_rc5');
  for (let elm of prog_rc5) {
    observer.observe(elm);
  }
  
  let prog_rc6= document.querySelectorAll('.prog_rc6');
  for (let elm of prog_rc6) {
    observer.observe(elm);
  }
  
  let prog_rc7= document.querySelectorAll('.prog_rc7');
  for (let elm of prog_rc7) {
    observer.observe(elm);
  }
  
  let week1= document.querySelectorAll('.week1');
  for (let elm of week1) {
    observer.observe(elm);
  }
  
  let week2= document.querySelectorAll('.week2');
  for (let elm of week2) {
    observer.observe(elm);
  }
  
  let week3= document.querySelectorAll('.week3');
  for (let elm of week3) {
    observer.observe(elm);
  }
  
  let week4= document.querySelectorAll('.week4');
  for (let elm of week4) {
    observer.observe(elm);
  }
  
  let week5= document.querySelectorAll('.week5');
  for (let elm of week5) {
    observer.observe(elm);
  }
  
  let week6= document.querySelectorAll('.week6');
  for (let elm of week6) {
    observer.observe(elm);
  }
  
  let week7= document.querySelectorAll('.week7');
  for (let elm of week7) {
    observer.observe(elm);
  }
  
  let week_h1= document.querySelectorAll('.week_h1');
  for (let elm of week_h1) {
    observer.observe(elm);
  }
  
  
  let week_h2= document.querySelectorAll('.week_h2');
  for (let elm of week_h2) {
    observer.observe(elm);
  }
  
  
  let week_h3= document.querySelectorAll('.week_h3');
  for (let elm of week_h3) {
    observer.observe(elm);
  }
  
  
  let week_h4= document.querySelectorAll('.week_h4');
  for (let elm of week_h4) {
    observer.observe(elm);
  }
  
  
  let week_h5= document.querySelectorAll('.week_h5');
  for (let elm of week_h5) {
    observer.observe(elm);
  }
  
  
  let week_h6= document.querySelectorAll('.week_h6');
  for (let elm of week_h6) {
    observer.observe(elm);
  }
  
  
  let week_h7= document.querySelectorAll('.week_h7');
  for (let elm of week_h7) {
    observer.observe(elm);
  }
  
  
  let brands= document.querySelectorAll('.brands');
  for (let elm of brands) {
    observer.observe(elm);
  }
  window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 1500);
  }