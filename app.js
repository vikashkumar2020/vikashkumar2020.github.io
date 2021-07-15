const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


// smooth scroll

var startPos=0;

var finishPos;

var navItemAttr = document.getElementsByClassName('nav-item');

console.log(navItemAttr);

for(let i of navItemAttr)
{
	i.addEventListener('click', function(e)
	{
		e.preventDefault();
		var targetName = this.getAttribute('data-after');

		var targetArea = document.getElementById(targetName);
		//console.log(targetArea);
		var cord = targetArea.getBoundingClientRect();
		var finalCord = cord.top;
		var interval = setInterval(function(){
			cord = targetArea.getBoundingClientRect();
			//console.log(cord.top);
			if(finalCord>0)
			{

			if(cord.top<=0)
			{
				clearInterval(interval)
				return;
			}
			window.scrollBy(0,150);
		}
		else
		{
			if(cord.top>=0)
			{
				clearInterval(interval)
				return;
			}
			window.scrollBy(0,-150);
		}
		},70);
	});
}
