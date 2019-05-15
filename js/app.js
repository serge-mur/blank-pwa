// $(document).ready(function () {
//     $('.sidenav').sidenav();
// });

M.AutoInit();

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, { edge: "left" });
});

var app = new Vue({
    el: '#app',
    data: {
      message: ''
    }
})