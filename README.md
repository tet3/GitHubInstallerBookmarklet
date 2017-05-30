GitHubInstallerBookmarklet
==========================

This is a Javascript Bookmarklet to run Apex/Visualforce repositories against [Andrew Fawcett's GitHubInstaller](https://github.com/afawcett/githubsfdeploy) tool. Many developers have made your life easier by including this cool button, with the appropriate link to Andy's tool:
![Button](https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/src/main/webapp/resources/img/deploy.png) 

But some repos of useful Salesforce platform context don't include the button, and this bookmarklet aims to fill the gap for them. 

Drag this link:

<a href="javascript: function(){for(var o=!1,t=document.getElementsByClassName("lang"),e=0;e<t.length;++e)"Apex"==t[e].innerHTML&&(o=!0);"github.com"!=location.hostname||0==o?alert("This is not a GitHub Apex repository!"):window.open("https://githubsfdeploy.herokuapp.com/app/githubdeploy"+location.pathname)}();">GitHub SF Deploy</a>

onto your bookmarks bar, or into a bookmark folder. Now, when you are on a GitHub repository that *doesn't* have the handy button on it, click the bookmark. The Javascript does a basic sanity check to make sure that you're a) on GitHub, and b) on a repo with Apex in it. Then it redirects you to the GitHub Salesforce Deploy Tool, passing in the repo's URL. 

Tested and working on:

| Browser | Windows 10 | macOS | Linux (Ubuntu) |
|---------|------------|-------|----------------|
| Chrome  |            |       |                |
| Firefox |            |       |                |
| Safari  |    n/a     |       |    n/a         |
| IE11    |            |  n/a  |                | 
| Edge    |            |  n/a  |                |

If you get it to work on some other combination, feel free to [tweet at me](https://twitter.com/tet3), log an issue here, or submit a pull request.  