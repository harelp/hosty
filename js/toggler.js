 /* Set the width of the side navigation to 250px */
function openNav() 
{
    document.getElementById("mySidenav").style.width = "100%";
}

/* Set the width of the side navigation to 0 */
function closeNav() 
{
    document.getElementById("mySidenav").style.width = "0";
}


var element = document.getElementById("myHeader");
window.onscroll = function myHeader()
{
	var x = window.scrollY;
	if (x === 0){
		element.classList.remove("sticky");
	} 
	else
	{
		element.classList.add("sticky");
	}
}



// $(window).on('scroll' , function(){
// 	if ($(window).scrollTop())
// 	{
// 		$('#myHeader').addClass('sticky');
// 	}
// 	else
// 	{
// 		$('#myHeader').removeClass('sticky');
// 	}
// })
