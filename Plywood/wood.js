function banner(id)
{
	var img = ['images/pic1.jpg','images/pic7.jpg','images/img10.jpg'];
	var i = document.getElementById("imag");
	i.src = img[id];
	id++;
	if(id >2)
	{
		id = 0;
	}
	setTimeout("banner("+id+")",1000)
}
function pic(arg)
{
	var img = ['images/img3.jpg','images/img6.jpg','images/img10.jpg'];
	document.getElementById("image1").src =img[arg];
}
function pic1(arg)
{
	var img = ['images/img2.jpg','images/img5.jpg','images/img10.jpg'];
	document.getElementById("image2").src =img[arg];
}
function pic2(arg)
{
	var img = ['images/img1.jpg','images/img4.jpg','images/img9.jpg'];
	document.getElementById("image3").src =img[arg];
}
function pics(arg)
{
	var img = ['images/img7.jpg','images/img10.jpg','images/img1.jpg'];
	document.getElementById("image4").src =img[arg];
}
function pic3(arg)
{
	var img = ['images/img4.jpg','images/img5.jpg','images/img11.jpg'];
	document.getElementById("image5").src =img[arg];
}
function pic4(arg)
{
	var img = ['images/img10.jpg','images/img5.jpg','images/img11.jpg'];
	document.getElementById("image6").src =img[arg];
}
function pic5(arg)
{
	var img = ['images/img4.jpg','images/img5.jpg','images/img1.jpg'];
	document.getElementById("image7").src =img[arg];
}
function pic6(arg)
{
	var img = ['images/img8.jpg','images/img4.jpg','images/img1.jpg'];
	document.getElementById("image8").src =img[arg];
}
function pic7(arg)
{
	var img = ['images/img3.jpg','images/img4.jpg','images/img1.jpg'];
	document.getElementById("image9").src =img[arg];
}
function pic8(arg)
{
	var img = ['images/img3.jpg','images/img4.jpg','images/img1.jpg'];
	document.getElementById("image10").src =img[arg];
}

function click()
{
	var nme = document.getElementById("tet").value;
	var eml = document.getElementById("tet1").value;
	var phn = document.getElementById("tet2").value;
	if(nme=='')
	{
		document.getElementById("msg").innerHTML="(Requried)";
	}
	if(eml=='')
	{
		document.getElementById("msg1").innerHTML="(Requried)";
	}
	if(phn=='')
	{
		document.getElementById("msg2").innerHTML="(Requried)";
	}
	
}