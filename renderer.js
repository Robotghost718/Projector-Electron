// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// window.$ = window.jQuery = require('jquery')
// window.Tether = require('tether')
// window.Bootstrap = require('bootstrap')
const serialPort = require('serialport')
const Readline = serialPort.parsers.Readline
var sp = new serialPort('/dev/tty.usbserial-AK08TZHG', {
            baudRate: 115200,
        });
function writeonSer(data){
            //Write the data to serial port.
            sp.write( data, function(err) {
                if (err) {
                    return console.log('Error on write: ', err.message)
                }
                console.log('message written')
            })
    
        };

document.getElementById("PJ_ON").addEventListener("click", function() {

    if (document.getElementById("PJ_ON").value=="OFF") {
        document.getElementById("PJ_ON").innerText = "Turn On Projector"
        document.getElementById("PJ_ON").value = "ON"
        document.getElementById("top-background").style.backgroundColor = "#cccccc"
        document.getElementById("PJ_ON").style.backgroundColor = "#7cb342"
        writeonSer("\x03")
    }
    else if (document.getElementById("PJ_ON").value=="ON") {
       document.getElementById("PJ_ON").innerText = "Turn Off Projector"
       document.getElementById("PJ_ON").value = "OFF"
       document.getElementById("PJ_ON").style.backgroundColor = "#808080"
       document.getElementById("top-background").style.backgroundColor = "#7cb342"
       writeonSer("\x03")
       }
   
} );
document.getElementById("volume_Icon").addEventListener("click", function() {

    if (document.getElementById("volume_Icon").value=="unmuted") {
        document.getElementById("volume_Icon").value = "muted"
        document.getElementById("volume_Icon").setAttribute('src',"images/Volume_Mute.svg")
        writeonSer("\x03")
    }
    else if (document.getElementById("volume_Icon").value=="muted") {
        document.getElementById("volume_Icon").value = "unmuted"
        document.getElementById("volume_Icon").setAttribute('src',"images/Volume.svg")
        writeonSer("\x03")
    }
   
} );
// //1st input button
// $(document).ready(function(){
//     $(document).on('click', 'button:button[id^="Computer"]', function (event) {
//       $.getScript('scripts/inputs/input.js', function(jd) {
//                     // Call custom function defined in script
//                     writeonSer('\x03');
//                     CheckJS();
//                   });
//       $(this).addClass('selected');
//       $("#DocCam").removeClass('selected');
//       $("#BluRay").removeClass('selected');
//       $("#Laptop").removeClass('selected');
      
      
  
//   });
//   //2nd Input Button
//     $(document).on('click', 'button:button[id^="Laptop"]', function (event) {
//       $.get("scripts/Inputs/input_6.php");
//         $(this).addClass('selected');
//       $("#Computer").removeClass('selected');
//       $("#DocCam").removeClass('selected');
//       $("#BluRay").removeClass('selected');
      
//   });
//     //3rd Input Button
//     $(document).on('click', 'button:button[id^="DocCam"]', function (event) {
//       $.get("scripts/Inputs/input_7.php");
//         $(this).addClass('selected');
//       $("#Computer").removeClass('selected');
//       $("#BluRay").removeClass('selected');
//       $("#Laptop").removeClass('selected');
      
//   });
//     //4th Input Button
//     $(document).on('click', 'button:button[id^="BluRay"]', function (event) {
//       $.get("scripts/Inputs/input_5.php");
//         $(this).addClass('selected');
//       $("#Computer").removeClass('selected');
//       $("#DocCam").removeClass('selected');
//       $("#Laptop").removeClass('selected');
      
//   });
//   //Projector Power on and Off Button
//   $('#PJ_ON').on(function() {
//     var clicks = $(this).data('clicks');
//     if (clicks) {
//       $('#PJ_ON').text("Turn On Projector");
//       $(this).css('background-color', '#7cb342');
//       $('#top-background').css('background-color', '#cccccc');
//        $.get("scripts/power_off.php");
  
//     } else {
//         $('#PJ_ON').text("Turn Off Projector");
//         $(this).css('background-color', '#808080');
//         $('#top-background').css('background-color', '#7cb342');
  
//       $.get("scripts/power_on.php");
//     }
//     $(this).data("clicks", !clicks);
//   });
//   //Microphone Mute Button
//   $('#mic_Icon').click(function() {
//     var clicks = $(this).data('clicks');
//     if (clicks) {
//       $("#mic_Icon").attr('src',"images/Mic_Icon.svg");
//       $("#micBar").removeAttr('class',"mute");
//        $.get("scripts/Mic/Mic_unmute.php");
  
//     } else {
//      $("#mic_Icon").attr('src',"images/Mic_Mute.svg");
//       $("#micBar").attr('class',"mute");
//       $.get("scripts/Mic/Mic_mute.php");
//     }
//     $(this).data("clicks", !clicks);
//   });
//   //Volume Mute Button
//   $('#volume_Icon').click(function() {
//     var clicks = $(this).data('clicks');
//     if (clicks) {
//       $("#volume_Icon").attr('src',"images/Volume.svg");
//       $("#volumeBar").removeAttr('class',"mute");
//        $.get("scripts/Volume/Volume_unmute.php");
  
//     } else {
//      $("#volume_Icon").attr('src',"images/Volume_Mute.svg");
//       $("#volumeBar").attr('class',"mute");
//       $.get("scripts/Volume/Volume_mute.php");
//     }
//     $(this).data("clicks", !clicks);
//   });
//   //Sound Vollume
//   $('#volumeBar').on('input',function(){
//     var volumeValue = $(this).val();
   
      
//   if (volumeValue < 1) {
//     $.get("scripts/Volume/Volume_0.php")
//   } 
//   else if (volumeValue <= 5) {
//      $.get("scripts/Volume/Volume_5.php")
  
//    }
//   else if (volumeValue <= 10) {
//      $.get("scripts/Volume/Volume_10.php")
  
//   }
//   else if (volumeValue <= 15) {
//      $.get("scripts/Volume/Volume_15.php")
  
//    } 
//   else if (volumeValue <= 20)  {
//      $.get("scripts/Volume/Volume_20.php")
  
//   }
//   else if (volumeValue <= 25) {
//      $.get("scripts/Volume/Volume_25.php")
  
//    }
//   else if (volumeValue <= 30)  {
//      $.get("scripts/Volume/Volume_30.php")
  
//   }
//   else if (volumeValue <= 35) {
//      $.get("scripts/Volume/Volume_35.php")
  
//    }
//   else if (volumeValue <= 40) {
//      $.get("scripts/Volume/Volume_40.php")
  
//   }
//   else if (volumeValue <= 45) {
//      $.get("scripts/Volume/Volume_45.php")
  
//    }
//   else if (volumeValue <= 50 ) {
//      $.get("scripts/Volume/Volume_50.php")
  
//   }
//   else if (volumeValue <= 55) {
//      $.get("scripts/Volume/Volume_55.php")
  
//    }
//   else if (volumeValue <= 60) {
//        $.get("scripts/Volume/Volume_60.php")
//   }
//   else if (volumeValue <= 65) {
//      $.get("scripts/Volume/Volume_65.php")
  
//    }
//   else if (volumeValue <= 70) {
//      $.get("scripts/Volume/Volume_70.php")
  
//   }
//   else if (volumeValue <= 75) {
//      $.get("scripts/Volume/Volume_75.php")
  
//    }
//   else if (volumeValue <= 80){
//        $.get("scripts/Volume/Volume_80.php")
  
//   }
//   else if (volumeValue <= 85) {
//      $.get("scripts/Volume/Volume_85.php")
  
//    }
//   else if (volumeValue <= 90) {
//      $.get("scripts/Volume/Volume_90.php")
  
//    }
//    else if (volumeValue <= 95) {
//      $.get("scripts/Volume/Volume_95.php")
  
//    }
//   else {
//      $.get("scripts/Volume/Volume_100.php")
//   }
//   });
//   //Microphone Volume 
//   $('#micBar').on('input', function(){
//     var micValue = $(this).val();
   
      
//   if (micValue < 1) {
//     $.get("scripts/Mic/Mic_0.php")
//   } 
//   else if (micValue <= 5) {
//      $.get("scripts/Mic/Mic_5.php")
  
//   } 
//   else if (micValue <= 10) {
//      $.get("scripts/Mic/Mic_10.php")
  
//   } 
//   else if (micValue <= 15) {
//      $.get("scripts/Mic/Mic_15.php")
  
//   } 
//   else if (micValue <= 20)  {
//      $.get("scripts/Mic/Mic_20.php")
  
//   }
//   else if (micValue <= 25) {
//      $.get("scripts/Mic/Mic_25.php")
  
//   } 
//   else if (micValue <= 30)  {
//      $.get("scripts/Mic/Mic_30.php")
  
//   }
//   else if (micValue <= 35) {
//      $.get("scripts/Mic/Mic_35.php")
  
//   } 
//   else if (micValue <= 40) {
//      $.get("scripts/Mic/Mic_40.php")
  
//   }
//   else if (micValue <= 45) {
//      $.get("scripts/Mic/Mic_45.php")
  
//   } 
//   else if (micValue <= 50 ) {
//      $.get("scripts/Mic/Mic_50.php")
  
//   }
//   else if (micValue <= 55) {
//      $.get("scripts/Mic/Mic_55.php")
  
//   } 
//   else {
//      $.get("scripts/Mic/Mic_60.php")
//   }
//   });
//   //Clock
//   var interval = setInterval(timestamphome, 1000);
  
  
  
  
   function timestamphome(){
   var date;
  date = new Date();
  
   
   var time = document.getElementById('clock'); 
   time.innerHTML = date.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', hour12: true});
  
  
    };
  