$(document).ready(function () {
  function randomStartTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  var lofiPlaylists = Array(
    "./sound/playlistOne.mp3",
    "./sound/playlistTwo.mp3",
    "./sound/playlistThree.mp3",
    "./sound/playlistFour.mp3",
    "./sound/playlistFive.mp3",
    "./sound/playlistSix.mp3"
  );

  var sound = new Audio("./sound/timerSound.wav");
  $("#glassLiveTimer").hide();
  $(".slidecontainer").hide();
  $("#glassBreakTimer").hide();

  $("#glass").click(function () {
    $("#glass").hide();
    $("#infoGlass").fadeOut(100);
    $(".slidecontainer").delay(300).fadeIn(300);
    $("#glassLiveTimer").show();
    $(".background").addClass("background-blur");

    var lofiPlaylist =
      lofiPlaylists[Math.floor(Math.random() * lofiPlaylists.length)];
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", lofiPlaylist);
    audioElement.loop = true;
    audioElement.currentTime = randomStartTime(1, 4500);

    $("#volumeSlider").mousemove(function () {
      audioElement.volume = parseFloat(this.value / 10);
    });

    audioElement.play();

    function startTimer(duration, display) {
      var timer = duration,
        minutes,
        seconds;
      var interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
          timer = duration;
          clearInterval(interval);
          audioElement.pause();
          audioElement.currentTime = 0;
          sound.play();

          $("#countdown").hide();
          $("#glassLiveTimer").hide();
          $("#glassBreakTimer").show();
        }
      }, 1000);
    }

    jQuery(function ($) {
      var fiveMinutes = 60 * 25,
        display = $("#countdown");
      startTimer(fiveMinutes, display);
    });
  });

  $("#glassBreakTimer").click(function () {
    $("#glassBreakTimer").hide();
    $("#infoGlass").hide();
    $(".slidecontainer").delay(1000).fadeIn(100);
    $("#glassLiveTimer").fadeIn(100);
    $("#countdown").delay(1000).fadeIn(100);
    var lofiPlaylist =
      lofiPlaylists[Math.floor(Math.random() * lofiPlaylists.length)];
    var audioElement = document.createElement("audio");

    audioElement.setAttribute("src", lofiPlaylist);
    audioElement.loop = true;
    audioElement.currentTime = randomStartTime(1, 9000);

    $("#volumeSlider").mousemove(function () {
      audioElement.volume = parseFloat(this.value / 10);
    });

    audioElement.play();

    function startTimer(duration, display) {
      var timer = duration,
        minutes,
        seconds;
      var interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
          timer = duration;
          clearInterval(interval);
          audioElement.pause();
          audioElement.currentTime = 0;
          sound.play();
          $("#countdown").hide();
          $("#glassLiveTimer").hide();
          $("#glassBreakTimer").show();
        }
      }, 1000);
    }

    jQuery(function ($) {
      var fiveMinutes = 60 * 25,
        display = $("#countdown");
      startTimer(fiveMinutes, display);
    });
  });
});
