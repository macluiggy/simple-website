(function () {
    var elItems = document.getElementsByTagName('li');

    for (let i = 0; i < elItems.length; i++) {
        const el = elItems[i];
        el.addEventListener('click', function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        })
    }
}())