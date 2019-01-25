function getText(id) {
	var s = document.getElementById(id).value;			
	s = s.replace(/\s+/g, ' ');
	s = s.trim();
	s = s.toLowerCase();
	var sum = 0;
	for (i=0; i<s.length; i++) {
		sum += s.charCodeAt(i); 
	}
	return sum;
}
function checkMiss(id) {
	var s = document.getElementById(id).value;

	if(s == '' || s == null) return false;
	else return true;
}
function calculator(){
	var result = (getText('input1') * getText('input2')) % 100;
	console.log(checkMiss('input1'));
	if(checkMiss('input1') == false) {
		$('.output').html ('<i> Cần nhập tên người nam </i>');
	}
	else if(checkMiss('input2') == false) {
		$('.output').html ('<i> Cần nhập tên người nữ</i>')
	}
	else
		$('.output').html('<h2><b>'+result+'%</b></h2>');
}

function reset() {
	document.getElementById('input1').value = "";
	document.getElementById('input2').value = "";
	$('.output').html("");
}