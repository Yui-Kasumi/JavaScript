/*<![CDATA[*/
var yuix=0,yuixa=8,numchars=0,titleinarticle=new Array,relurls=new Array,showpostbody=new Array,_featuredimage=new Array;function _featuredpost(t,e){for(var r=t.split("<"),i=0;i<r.length;i++)-1!=r[i].indexOf(">")&&(r[i]=r[i].substring(r[i].indexOf(">")+1,r[i].length));return(r=r.join("")).substring(0,e-1)}function yuikasumi(t,e){var r=/<yui .*?eps=[\'"]([^\'"]+?)[\'"].*? *\/?>/i.exec(t);return r?r[1]:e}function yuikasumi_ongoing(t){for(var e=0;e<t.feed.entry.length;e++){var r=t.feed.entry[e];titleinarticle[yuix]=r.title.$t,postcontent="","content"in r?postcontent=r.content.$t:"summary"in r&&(postcontent=r.summary.$t),showpostbody[yuix]=_featuredpost(postcontent,numchars),postimg="Eps "+yuikasumi(r.content.$t,"N/A"),_featuredimage[yuix]=postimg;for(var i=0;i<r.link.length;i++)if("alternate"==r.link[i].rel){relurls[yuix]=r.link[i].href;break}yuix++}}function contains(t,e){for(var r=0;r<t.length;r++)if(t[r]==e)return!0;return!1}function yuikasumiwidget(){for(var t=new Array(0),e=new Array(0),r=new Array(0),i=new Array(0),n=0;n<relurls.length;n++)contains(t,relurls[n])||(t.length+=1,t[t.length-1]=relurls[n],e.length+=1,e[e.length-1]=titleinarticle[n],r.length+=1,r[r.length-1]=showpostbody[n],i.length+=1,i[i.length-1]=_featuredimage[n]);titleinarticle=e,relurls=t,showpostbody=r,_featuredimage=i;for(n=0;n<titleinarticle.length;n++){var l=Math.floor((titleinarticle.length-1)*Math.random()),a=titleinarticle[n],o=relurls[n],s=showpostbody[n],u=_featuredimage[n];titleinarticle[n]=titleinarticle[l],relurls[n]=relurls[l],showpostbody[n]=showpostbody[l],_featuredimage[n]=_featuredimage[l],titleinarticle[l]=a,relurls[l]=o,showpostbody[l]=s,_featuredimage[l]=u}for(var c,f=0,g=Math.floor((titleinarticle.length-1)*Math.random()),h=g,y=document.URL;yuixa>f&&(relurls[g]==y||(c="<li class='_eps'>",c+="<a href='"+relurls[g]+"' rel='nofollow' title='"+titleinarticle[g]+"'>"+titleinarticle[g],c+="<span class='eps'>"+_featuredimage[g]+"</span></a>",c+="</li>",document.write(c),++f!=yuixa))&&(g<titleinarticle.length-1?g++:g=0,g!=h););}
/*]]>*/
