// function change color:

    
    var $button = document.querySelector('#button').style.backgroundColor;

    $button.addEventListener('click', function(){
        var arr = ['#7FFF00', '#FFF8DC', '#008B8B', '#FF8C00', '#FFD700', '#008000',  '#E6E6FA',
                    '#FFB6C1', '#FF00FF'];
            return arr[Math.floor(Math.random() * arr.length)]
    }, false);
