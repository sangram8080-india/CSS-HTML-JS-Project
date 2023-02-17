function login(arg)
{
	if(arg==0)
    {
		document.getElementById("pop").style.display = "none";
    }
    if(arg==1)
    {
		document.getElementById("pop").style.display = "block";
	}
}

function Action()
{
    var name = document.getElementById("txtnme").value;
    var eml = document.getElementById("txteml").value;
    var phn = document.getElementById("txtphn").value;
    var msg = document.getElementById("txtmsg").value;
	if(name=='')
	{
	    document.getElementById("msgnme").innerHTML = "(Name must be required)";
	}
	if(eml=='')
	{
	    document.getElementById("msgeml").innerHTML = "(Email must be required)";
	}
	if(phn=='')
	{
	    document.getElementById("msgphn").innerHTML = "(number must be required)";
	}
	if(msg=='')
	{
		document.getElementById("message").innerHTML = "(Please Enter any message)"
	}
 }
function LogAction()
{
	var a = document.getElementById("txt1").value;
	var b = document.getElementById("txt2").value;
	if(a=='')
	{
	    document.getElementById("msg1").innerHTML ="(Name must be required)";
	}
	if(b=='')
	{
	   document.getElementById("msg2").innerHTML ="(Email must be required)";
	}
}
function slide(id)
	{
	    var img = ['images/pic1.jpg','images/pic7.jpg','images/img10.jpg'];
		var i = document.getElementById("image");
		i.src=img[id];
		id++;
		if( id > 2 )
		{
		    id = 0;
		}
		setTimeout("slide("+id+")",1500);
	}
function myload()
{
	closeall();
}
function closeall()
{
	var divarr = ['table','chair','sofa','bed','almirah'];
	for(var i=0;i<divarr.length;i++)
	{
		document.getElementById(divarr[i]).style.display="none";
	}
}
function multi(arg)
{
	closeall();
	var divarr = ['table','chair','sofa','bed','almirah'];
	document.getElementById(divarr[arg]).style.display="block";
}

function admin()
{
	var value1 = document.getElementById("inp_nm").value;
	var value2 = document.getElementById("inp_ps").value;
	if(value1=='akshama' && value2=='pundir')
	{
		 document.getElementById("log").style.display= 'none';
		 document.getElementById("wel").style.display = 'block';
	}
	else
	{
		alert("User name or Password incorrect");
	}
}

function slide_about(sl)
{
	var arr_ab = ['images/pic2.jpg','images/pic3.jpg','images/pic4.jpg','images/pic5.jpg'];
	var arr_ab1 = ['images/pic6.jpg','images/pic8.jpg','images/pic9.jpg','images/pic8.jpg'];
	var a = document.getElementById("ab_img");
	var b = document.getElementById("ab_img2");
	a.src=arr_ab[sl];
	b.src=arr_ab1[sl];
	sl++;
	if(sl > 3)
	{
	    sl = 0;
	}
	setTimeout("slide_about("+sl+")",1500);
}
function lgAction()
{
	var unme = document.getElementById("txt1").value;
	var ueml = document.getElementById("txt2").value;
	document.getElementById("pop").style.display = 'none';
	document.getElementById("lg").style.display = 'block';
}