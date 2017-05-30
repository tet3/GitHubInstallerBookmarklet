javascript:(function(){ 
	var isApex = 0;
	var sourceLangs = document.getElementsByClassName('lang');
		for (var i = 0; i < sourceLangs.length; ++i) {
			if(sourceLangs[i].innerHTML == 'Apex') {
				isApex = 1;
			}
		}
    if(location.hostname != 'github.com' || !isApex ) {
		alert('This is not a GitHub Apex repository!');
	}
	else {
	window.open('https://githubsfdeploy.herokuapp.com/app/githubdeploy'+location.pathname);
	}

})();
