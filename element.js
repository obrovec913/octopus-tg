document.addEventListener("DOMContentLoaded", hiddenCloseclick());
document.getElementById('buut').addEventListener("click", hiddenCloseclick);
function hiddenCloseclick() {
	let x = document.getElementById('dubuut');
      if (x.style.display == "none"){
	  x.style.display = "block";
	  } else {
	 x.style.display = "none"}
    };
	