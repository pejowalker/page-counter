let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

const increment-btn = document.getElementById("increment-btn");
increment-btn.addEventListener("click", function() {
	 count += 1
     countEl.textContent = count
}, false);

const save-btn = document.getElementById("save-btn");
save-btn.addEventListener("click", function() {
	let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}, false);
