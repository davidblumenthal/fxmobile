//The rest of the data on the web site
var WEB_URL = "https://gateway.fundsxpress.com/files/fxAir2013/draft1/login.html";


//Wait for PhoneGap to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is loaded and it is now safe to make calls PhoneGap methods
//
function onDeviceReady() {
	//http://demos.jquerymobile.com/1.2.0/docs/pages/phonegap.html
	//Try to force jQuery to think that the browser supports 
	//Cross Origin Resource Sharing
	$.support.cors = true;
	
	//Not allowed to load a remote page unless this is true
	$.mobile.allowCrossDomainPages = true;
	
    checkConnection();
    console.log("here1");
    $( ":mobile-pagecontainer" ).pagecontainer( "change", WEB_URL );
    //window.location = "https://gateway.fundsxpress.com/files/fxAir2013/draft1/login.html";
    console.log("here2");
}//onDeviceReady


function checkConnection() {
    var networkState = navigator.network.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.NONE]     = 'No network connection';

    alert('Connection type: ' + states[networkState]);
}

</script>