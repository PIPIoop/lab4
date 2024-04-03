let day

setInterval(() => { 
	day = new Date()
	let hour = day.getHours() 
	let min = day.getMinutes() 
	let sec = day.getSeconds() 
	
 	const button = document.getElementById('time')
 	if (sec<10)
 		sec = '0' + sec
 	if (min<10)
 		min = '0' + min
 	if (hour<10)
 		hour = '0' + hour
 	
 	button.textContent = `${hour}:${min}:${sec}`

 })
 	function  countDate(){
 	
	let today = day.getDate()
	let month = day.getMonth()
	++month
	let year = day.getFullYear()
	if (today<10)
 		today = '0' + today
 	if (month<10)
 		month = '0' + month
	 	const showDate = document.getElementById('date')
	 	showDate.textContent = `${today}.${month}.${year}`
	 	showDate.classList.add('show')
	 	setTimeout(clear,13000);

	 }
	 function clear(){
	 	const showDate = document.getElementById('date')
	 	showDate.textContent = ``
	 	 }

