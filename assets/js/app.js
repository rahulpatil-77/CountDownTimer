const cl = console.log;


	
	
function createCountDown(){
	const countDown = document.getElementById("countDown");
	
	let futureDate = new Date(2023, 0, 25)
	// cl(futureDate);
	let currentDate = new Date();
	// cl(currentDate);
	let diff = futureDate.getTime() - currentDate.getTime();
	
	// cl(diff);
	
	let days = Math.floor(diff/(1000*60*60*24));
	
	// cl(days);
	
	let hr = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
	
	// cl(hr);
	
	let min = Math.floor ((diff % (1000*60*60)) / (1000*60))
	
	// cl(min);
	
	let sec = Math.floor((diff % (1000*60)) / 1000);
	
	// cl(sec);
	
	let result = " ";
	
		result = `
			<div class="counter">
				<p>Days</p>
				<p>${setZero(days)}</p>
			</div>
			<div class="counter">
				<p>Hours</p>
				<p>${setZero(hr)}</p>
			</div>
			<div class="counter">
				<p>Min</p>
				<p>${setZero(min)}</p>
			</div>
			<div class="counter">
				<p>Sec</p>
				<p>${setZero(sec)}</p>
			</div>
		`
			
		countDown.innerHTML = result;
		
		setTimeout(createCountDown, 1000);
		
		}
		
		
		
		function setZero(num){
			return(num < 10)? "0" + num : num;
		}
		
		createCountDown();