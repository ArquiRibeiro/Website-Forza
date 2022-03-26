/*const birds = ['🐦', '🦅', '🦆', '🦉'];

birds.forEach((item, index) => {
  console.log(`${index} : ${item}`);
})*/

const options={root: null, threshold: 0.25, rootMargin: '0px'};

const observer = new IntersectionObserver(function(entries, observer){
		entries.forEach(function(entry){
			entry.isIntersecting ? entry.target.style.animationPlayState='running' : '';
		});
	}, options);
let array_OnView=['#about .container1', '.spanSpring','.spanSummer','.spanAutumn','.spanWinter', '#map .container1 .image', '.spring .image', '.summer .image', '.autumn .image', '.winter .image', '#icon-ticket'];
array_OnView.forEach(function(arrayElement){
	observer.observe(document.querySelector(arrayElement));
});


rellaxSlow=new Rellax('.rellaxSlow', {breakpoints:[359, 768, 1201]});
	
function collapsor(collapse){
	collapse=document.querySelector(collapse);
	maxHeight=window.getComputedStyle(collapse).maxHeight;
	minHeight=window.getComputedStyle(collapse).minHeight;
	console.log(maxHeight);
	console.log(window.getComputedStyle(collapse).height);
	if(window.getComputedStyle(collapse).height==maxHeight){
		collapse.style.height=minHeight;
	}
	else{
		collapse.style.height=maxHeight;
	}
}