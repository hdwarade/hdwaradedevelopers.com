const buttons = document.querySelectorAll('a');
		buttons.forEach(btn => {
		btn.addEventListener('click', function(e) {

		let x = e.clientX - e.target.offsetLeft;
		let y = e.clientY - e.target.offsetTop;

		let ripples = document.createElement('span');
		ripples.style.left = x + 'px';
		ripples.style.top = y + 'px';
		this.appendChild(ripples);

		setTimeout(() => {
			ripples.remove()
		},1000);
	})
})

/*

Put this code to your CSS sheet 
........................................
span
{
	position: absolute;
	background: #fff;
	transform: translate(-50%,-50%);
	pointer-events: none;
	border-radius: 50%;
	animation: hd 1s linear infinite;
}
@keyframes hd
{
	0%
	{
		width: 0px;
		height: 0px;
		opacity: 0.5;
	}
	100%
	{
		width: 500px;
		opacity: 0;
		height: 500px;
	}
}
*/