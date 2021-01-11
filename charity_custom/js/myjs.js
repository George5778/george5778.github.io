$(document).ready(function() {
			$( "#Datepicker1" ).datepicker({ dateFormat: 'dd-mm-yy' }).val(); 
		});

function myFunction() {
  var x = document.getElementById("mySelect").value;
	var d = $("#Datepicker1").val();
	if (x=="" || d=="") {
  				alert("please select event and date");}
		else {
		alert("You selected Event " + x +" on "+ d);}
};


