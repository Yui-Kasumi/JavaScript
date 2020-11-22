
//<![CDATA[
function yuikasumiadsfilter(ipaddress){
  var buatnotifikasi=document.createElement("div");
  buatnotifikasi.innerHTML=`<div id="mencurigakan">
<span id="close" onclick="tutuppesan()">X</span>
<b>Iklan Dinonaktifkan Sementara</b>
<p>Mohon Maaf kami menduga adanya aktifitas mencurigakan di alamat IP kamu, Aktifitas mencurigakan yang berkaitan dengan iklan adsense bisa berdampak buruk bagi kami bahkan bisa sampai banned, mohon untuk tidak mengulanginya lagi dan sekarang IP kamu kami blokir untuk melihat iklan selama 24 jam.
Segala Aktifitas di website kami akan direkam termasuk alamat IP kamu.<br></p>
<a class="ipkamu" href="https://ads.sanime.me/info.php?ip=${ipaddress}">${ipaddress}</a>
</div>`;
  document.body.append(buatnotifikasi);

  var buatnotifikasiCSS=document.createElement("style");
  buatnotifikasiCSS.innerHTML=`
  #mencurigakan {
	font-family: arial;
    text-align: center;
    padding: 10px;
    background: #137faa;
    border-radius: 7px;
    color: white;
    position: fixed;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, -10px);
    margin: 0;
    z-index: 9999;
    width: calc(100% - 40px);
    font-size: 14px;
}
#mencurigakan #close{
	position: absolute;
    right: 10px;
    top: -10px;
    background: #000;
    padding: 4px 8px;
    border-radius: 7px;
    cursor: pointer;
}
#mencurigakan .ipkamu {
	text-decoration: none;
    color: white;
    font-weight: bold;
}
#mencurigakan p{
	text-align: left
}
  `;
  document.head.append(buatnotifikasiCSS);
		var cariiklan=document.querySelectorAll("ins");
		for(var i=0;i<cariiklan.length;i++){
			cariiklan[i].remove();
		};
};

function tutuppesan(){
	document.getElementById("mencurigakan").remove();
	}

var hitung = 0;
var caritag = document.getElementsByTagName('body');
for (var i = 0; i < caritag.length; i++) {
    caritag[i].addEventListener('click',counting);
}

function counting() {
  hitung = hitung +1;
  console.log("YuiKasumi(CLICK+1)");
  if (hitung > 5) {
  	window.location.reload();
  }

} 

var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};
	
getJSON('https://ads.sanime.me/cek.php',
function(err, data) {
  if (err !== null) {
    alert('Something went wrong: ' + err);
  } else {
    if (data.visit > 10){
	yuikasumiadsfilter(data.ip);
	console.log("YuiKasumi("+data.ip+"/"+data.visit+")");   
	 
	}
  }
});

//]]>
