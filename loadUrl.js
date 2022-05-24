/*

CloneUrl plugin to clone any website including it's files into your webpage for link

*made by Yashas Slk - MultiMentality

*original file loadUrl.js

*/

var loadUrl = {edi: {maint:null, load:function(texxt){loadUrl.edi.maint=texxt; document.getElementById("loadUrl_cont").srcdoc=texxt;}},clone: function(lik){var link = lik;if(link[(link.length)-1]!="/"){link+="/"} var link2 = link.split("/");var maint = "";

function urlEn(text){ var lk = link2[0]+"/"+link2[1]+"/"+link2[2]+"/"; if(text.indexOf("./")==0){ var k=""; for(let y=0;y<link2.length-1;y++){ k+=link2[y]+"/";} return k+text.replace("./","");} else if(text.indexOf("../")==0){var count=0;var textt = text.split("/");var jk = ""; for(let y=0;y<textt.length;y++){ if(textt[y]==".."){ count++;}} for(let o=3;o<(link2.length-1)-count;o++){ jk+=link2[o]+"/";} return lk+jk+text.replaceAll("../","");} else if(text.indexOf("/")==0){ return lk+text.replace("/","");} else if(text.indexOf(":")>1){ return text;} else if(text.indexOf("#")==0){ return text;} else{ var t = ""; for(let y=0;y<link2.length-1;y++){ t+=link2[y]+"/";} return t+text;}}

function srch_appl(str,searchStr){var lastMatch;result = [];if ((lastMatch = str.indexOf(searchStr)) >= 0) {result.push(lastMatch);while ((lastMatch = str.indexOf(searchStr, lastMatch + searchStr.length)) >= 0) {result.push(lastMatch);}} return result;}

function readTextFilehu789h(file){ var rawFile = new XMLHttpRequest();rawFile.open("GET", file, false);rawFile.onreadystatechange = function (){ if(rawFile.readyState === 4){ if(rawFile.status === 200 || rawFile.status == 0){ var allText = rawFile.responseText; maint = allText;}}} 

rawFile.send(null);}readTextFilehu789h(link);var mn = maint.split("");var srct = srch_appl(maint,"src");var hreft = srch_appl(maint,"href");var cont = 0;var hld = [];var vhld = [];

function tmp_f(val,val2){ var tmp_hld="";var tmp_cou=0;for(let j=val;j<val2;j++){ if (mn[j]=="'"){ if(tmp_cou==0){ tmp_hld="'";}if(tmp_cou<=1 && tmp_hld=="'"){ hld.push(j);tmp_cou++;}}if (mn[j]=='"'){if(tmp_cou==0){ tmp_hld='"';}if(tmp_cou<=1 && tmp_hld=='"'){hld.push(j);tmp_cou++;}}if(tmp_cou==2){return false;}}}

function tmp_k(varh,vart){ var hold = "";for(let b=varh+1;b<vart;b++){ hold+=mn[b];mn[b]="";}return hold;}

const regl = "(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})";function geta(){for(let k=0;k<srct.length;k++){ tmp_f(srct[k],srct[k+1]);}tmp_f(srct[srct.length-1],srct[srct.length-1]+1000);for(let k=0;k<hreft.length;k++){ tmp_f(hreft[k],hreft[k+1]);}tmp_f(hreft[hreft.length-1],hreft[hreft.length-1]+1000);for(let c=0;c<hld.length;c++){ if(c%2==0){vhld.push(tmp_k(hld[c],hld[c+1]))}}for(let x=0;x<vhld.length;x++){ if(vhld[x].match(regl)==null){ vhld[x] = urlEn(vhld[x]);}}for(let z=0;z<hld.length;z++){ if(z%2==0){ mn[hld[z]] = mn[hld[z]]+vhld[z/2];}} document.getElementById("loadUrl_cont").style="position:fixed;margin:0; padding:0;width:100%;height:100%;border:0;left:0;top:0;";document.getElementById("loadUrl_cont").setAttribute("srcdoc",mn.join(""));loadUrl.edi.maint=mn.join("");}geta();

}, editor: {load: function(){var sch = document.createElement("link");sch.setAttribute("href","https://cdn.jsdelivr.net/gh/Yashasmonkeycoder/material@v0.2/baseh.css");sch.setAttribute("rel","stylesheet");sch.setAttribute("onload","loadUrl.editor.run();");document.head.appendChild(sch);var sct = document.createElement("script");sct.setAttribute("src","https://cdn.jsdelivr.net/gh/Yashasmonkeycoder/material@v0.2/baseh.js");sct.setAttribute("async","");sct.setAttribute("onload","loadUrl.editor.run();");document.body.appendChild(sct);},count:0,run:function(){if(loadUrl.editor.count==1){Jna728ja.run();Jna728ja.update(loadUrl.edi.maint);}loadUrl.editor.count++;}}

}
