window.onload = function(){
    var nav_div = document.getElementById('nav-div');
    var nav_div_sm = document.getElementById('nav-div-sm');
    nav_div_sm.onclick = function(){
        nav_div.style.display = 'none';
    }
}