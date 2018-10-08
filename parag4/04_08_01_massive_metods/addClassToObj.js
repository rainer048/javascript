var cls  = prompt('введите класс, который хотите добавить' , '');
var obj = {
    className: 'open menu'
};

function addClass(obj, cls) {
    var classes = obj.className ? obj.className.split(' ') : [];

    for (var i = 0; i < classes.length; i++) {
        if (classes[i] == cls) return;
    }

    classes.push(cls); 

    obj.className = classes.join(' '); 
}

