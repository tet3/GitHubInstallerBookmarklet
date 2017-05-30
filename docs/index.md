GitHubInstallerBookmarklet
==========================

This is a Javascript Bookmarklet to run Apex/Visualforce repositories against [Andrew Fawcett's GitHubInstaller](https://github.com/afawcett/githubsfdeploy) tool. Many developers have made your life easier by including this cool button, with the appropriate link to Andy's tool:

![Button](https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/src/main/webapp/resources/img/deploy.png) 

But some repos of useful Salesforce platform context don't include the button, and this bookmarklet aims to fill the gap for them. 

Drag this link:

<div markdown="0">
<a href="javascript:(function(){var o = 0;var s = document.getElementsByClassName(%27lang%27);for (var i = 0; i < s.length; ++i) {if(s[i].innerHTML == %27Apex%27) {o = 1;}}location.hostname != %27github.com%27 || !o ?alert(%27This is not a GitHub Apex repository!%27):window.open(%27https://githubsfdeploy.herokuapp.com/app/githubdeploy%27+location.pathname);})();">GitHub SF Deploy</a>
</div>

onto your bookmarks bar, or into a bookmark folder. Now, when you are on a GitHub repository that __doesn't__ have the handy button on it, click the bookmark. The Javascript does a basic sanity check to make sure that you're a) on GitHub, and b) on a repo with Apex in it. Then it redirects you to the GitHub Salesforce Deploy Tool, passing in the repo's URL. 

Tested and working on:

|         | Windows 10 | macOS | Linux (Ubuntu) |
|---------|------------|-------|----------------|
| Chrome 58 |            |  yes{: .highlight .sr} |                |
| Firefox  | [no](https://bugzilla.mozilla.org/show_bug.cgi?id=866522){: .highlight .gt }  |  [no](https://bugzilla.mozilla.org/show_bug.cgi?id=866522){: .highlight .gt } | [no](https://bugzilla.mozilla.org/show_bug.cgi?id=866522){: .highlight .gt } |
| Safari 10 |    n/a     |  yes{: .highlight .sr } |    n/a         |
| IE11    |            |  n/a  |                | 
| Edge    |            |  n/a  |                |

If you get it to work on some other combination, feel free to [tweet at me](https://twitter.com/tet3), log an issue here, or submit a pull request.  