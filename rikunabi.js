// https://job.rikunabi.com/2013/auth/topLoginform/?toplocationUrl=&topPattern=top&sslMode=1&menu=T
// https://sp.job.rikunabi.com/lnk000/=https://job.rikunabi.com/2013/auth/topLoginform/?topPattern=top&topLocationUrl=&sslMode=0&menu=T/
function simulateClick(obj) {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("click", true, true, window,
                       0, 0, 0, 0, 0, false, false, false, false, 0, null);
    obj.dispatchEvent(evt);
}
var f = document.forms[0];
f.rikunabiCd.value = "hoge";
f.password.value = "hoge";
f.auto.checked = true;
var btn;
if(document.location.toString().match(/https:\/\/sp.job.rikunabi.com/)){
    btn = document.getElementsByName("login")[0];
}else{
    btn = f.lastElementChild.firstChild;
}
simulateClick(btn);