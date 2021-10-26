// adding hovered active class to sidebar list item
let li = document.querySelectorAll('.sidebar ul li');
for(let i = 0;i < li.length;i++){
    li[i].onmouseover = function() {
        for(let j = 0;j < li.length;j++) {
            li[j].classList.remove('active');
        }
        li[i].classList.add('active');
    }
}
// adding sliding effect to the sidebar using toggle
let toggle = document.querySelector('nav .toggle-container');
let sidebar = document.querySelector('.sidebar');
let dashboard = document.querySelector('.dashboard');
toggle.onclick = function() {
    sidebar.classList.toggle('active');
    dashboard.classList.toggle('active');
}