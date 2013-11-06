javascript:(function(){ 
	var isApex = false;
	var sourceLangs = document.getElementsByClassName('lang');
		for (var i = 0; i < sourceLangs.length; ++i) {
			var l = sourceLangs[i]; 
			if(l.innerHTML == 'Apex') {
				isApex = true;
				// alert('This is an Apex repo');
			}
		}
    if(location.hostname != 'github.com' || isApex == false) {
		alert('This is not a GitHub Apex repository!');
	}
	else {
	window.open('https://githubsfdeploy.herokuapp.com/app/githubdeploy'+location.pathname);
	}

})();
