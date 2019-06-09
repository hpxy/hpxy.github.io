var width = document.body.clientWidth 
var height = 60

document.write('\
<ul class="navigationBar" style="height:'+height+  'px; width:'  +width+'px">\
    <li><a id="narrate" class="navigationLi" href="narrate.html" target="_parent"> \
        <i class="headerIcon fa fa-gg"></i><br />诉诸</a></li> \
 \
    <li><a id="experience" class="navigationLi" href="experience.html" target="_parent"> \
        <i class="headerIcon fa fa-star-o"></i><br />经历</a></li> \
 \
    <li><a id="mail" class="navigationLi" href="mail.html" target="_parent"> \
        <i class="headerIcon fa fa-envelope-o"></i><br />邮件</a></li> \
 \
    <li><a id="lovprattle" class="navigationLi" href="lovprattle.html" target="_parent"> \
        <i class="headerIcon fa fa-code"></i><br />情话</a></li> \
</ul> \
')


chooseColor = "#339393"
switch (window.getFilename(window.parent.location))
{
    case "narrate.html" : document.getElementById("narrate").style.color = chooseColor;break;
    case "experience.html": document.getElementById("experience").style.color = chooseColor;break;
    case "mail.html" : document.getElementById("mail").style.color = chooseColor;break;
    case "lovprattle.html": document.getElementById("lovprattle").style.color = chooseColor;break;
}