// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


// window.Tether = require('tether')
// window.Bootstrap = require('bootstrap')
const serialPort = require('serialport')
const net = require('net');
const Readline = serialPort.parsers.Readline
var dgram = require('dgram');
var s = dgram.createSocket('udp4')
//set hearbeat message with setinterval 20 secs, clear interval of function, 
//have seperate variable for counter that goes up with each message, every message function must add to counter, counter must reset once it's reached 255
let msgCounter = 0
let counterFormat = function(x){

return x.toLocaleString('en-US', {minimumIntegerDigits: 3, useGrouping:false})
}
let counterReset = function () { 
    if (msgCounter > 255){ 
    msgCounter = 0
}
}

// The port on which the server is listening.
const port = 5555;


// Use net.createServer() in your code. This is just for illustration purpose.
// Create a new TCP server.
const server = new net.createServer();
// The server listens to a socket for a client to make a connection request.
// Think of a socket as an end point.
server.listen(port, function() {
    console.log(`Server listening for connection requests on socket localhost:${port}.`);
});

// When a client requests a connection with the server, the server creates a new
// socket dedicated to that client.
server.on('connection', function(socket) {
    console.log('A new connection has been established.');

    // Now that a TCP connection has been established, the server can send data to
    // the client by writing to its socket.
    socket.write('Hello, client.');

    // The server can also receive data from the client by reading from its socket.
    socket.on('data', function(chunk) {
        console.log(`Data received from client: ${chunk.toString()}`);
    });

    // When the client requests to end the TCP connection with the server, the server
    // ends the connection.
    socket.on('end', function() {
        console.log('Closing connection with the client');
    });

    // Don't forget to catch error, for your own sake.
    socket.on('error', function(err) {
        console.log(`Error: ${err}`);
    });
});


//MAC address of the raspberry pi without dashes or colons  
let piMac = `787B8AD27DB6`

//heartbeat message function
function heartBeat() {
    s.send(Buffer.from(`ENTR${piMac}${counterFormat(msgCounter)}\x03`), /*5555*/8080, 'localhost'/*'172.17.5.217'*/)
    msgCounter+=50
    counterReset()

};
//heartbeat interval (every 20 seconds)
var hbInterval = setInterval(heartBeat, 1000)
var sp = new serialPort('/dev/tty.usbserial-AK08TZHG', {
            baudRate: 115200,
        })
function writeonSer(data){
            //Write the data to serial port.
            sp.write( data, function(err) {
                if (err) {
                    return console.log('Error on write: ', err.message)
                }
                console.log('message written')
            })
    
        }

document.getElementById("PJ_ON").addEventListener("click", function() {

    if (document.getElementById("PJ_ON").value=="OFF") {
        document.getElementById("PJ_ON").innerText = "Turn On Projector"
        document.getElementById("PJ_ON").value = "ON"
        document.getElementById("top-background").style.backgroundColor = "#cccccc"
        document.getElementById("PJ_ON").style.backgroundColor = "#7cb342"
        writeonSer("\x03")
        s.send(Buffer.from('abc'), 8080, 'localhost')
    }
    else if (document.getElementById("PJ_ON").value=="ON") {
       document.getElementById("PJ_ON").innerText = "Turn Off Projector"
       document.getElementById("PJ_ON").value = "OFF"
       document.getElementById("PJ_ON").style.backgroundColor = "#808080"
       document.getElementById("top-background").style.backgroundColor = "#7cb342"
       writeonSer("\x03")
       s.send(Buffer.from('abc'), 8080, 'localhost')
       }
   
} );
document.getElementById("volume_Icon").addEventListener("click", function() {

    if (document.getElementById("volume_Icon").value=="unmuted") {
        document.getElementById("volume_Icon").value = "muted"
        document.getElementById("volume_Icon").setAttribute('src',"images/Volume_Mute.svg")
        document.getElementById("volumeBar").classList.add("mute")
        writeonSer("\x03")
    }
    else if (document.getElementById("volume_Icon").value=="muted") {
        document.getElementById("volume_Icon").value = "unmuted"
        document.getElementById("volume_Icon").setAttribute('src',"images/Volume.svg")
        document.getElementById("volumeBar").classList.remove("mute")
        writeonSer("\x03")
    }
   
} );
document.getElementById("volumeBar").addEventListener("input", function() {
        if(this.value < 1) {
          writeonSer('\x03')  
        }
        else if(this.value <= 5) {
            writeonSer("\x03")
        }
        else if(this.value <= 10) {
            writeonSer("\x03")
        }
        else if(this.value <= 15) {
            writeonSer("\x03")
        }
        else if(this.value <= 20) {
            writeonSer("\x03")
        }
        else if(this.value <= 25) {
            writeonSer("\x03")
        }
        else if(this.value <= 30) {
            writeonSer("\x03")
        }
        else if(this.value <= 35) {
            writeonSer("\x03")
        }
        else if(this.value <= 40) {
            writeonSer("\x03")
        }
        else if(this.value <= 45) {
            writeonSer("\x03")
        }
        else if(this.value <= 50) {
            writeonSer("\x03")
        }
        else if(this.value <= 55) {
            writeonSer("\x03")
        }else if(this.value <= 60) {
            writeonSer("\x03")
        }else if(this.value <= 65) {
            writeonSer("\x03")
        }else if(this.value <= 70) {
            writeonSer("\x03")
        }else if(this.value <= 75) {
            writeonSer("\x03")
        }else if(this.value <= 80) {
            writeonSer("\x03")
        }else if(this.value <= 85) {
            writeonSer("\x03")
        }else if(this.value <= 90) {
            writeonSer("\x03")
        }
        else if(this.value <= 95) {
            writeonSer("\x03")
        }else if(this.value <= 100) {
            writeonSer("\x03")
        }

})
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
  var interval = setInterval(timestamphome, 1000);
  
  
  
  
   function timestamphome(){
   var date;
  date = new Date();
  
   
   var time = document.getElementById('clock'); 
   time.innerHTML = date.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', hour12: true});
  
  
    };
  