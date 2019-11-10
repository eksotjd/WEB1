var SetColor = {   
    ul : function(color){
//        document.querySelector('ul').style.borderColor = color;
        $('ul').css('borderColor', color);
    },
    h1 : function(color){
//        document.querySelector('h1').style.borderColor = color;
        $('h1').css('borderColor', color);
    },
    aList : function(color){
//        var i = 0;
//        var Alist = document.querySelectorAll('a');
//        while(i < Alist.length){
//            Alist[i].style.color= color;
//            i++;
//        }
        $('a').css('color',color);
    }
    };

    var Body = {
        backgroundColor : function(color){
//            document.querySelector('body').style.backgroundColor = color;
            $('body').css('backgroundColor', color);
        },
        fontColor : function(color){
//            document.querySelector('body').style.color = Color;
            $('body').css('color', color);
        }
    };

    function NightMode(self){
        if(self.value === 'night'){
            Body.backgroundColor('black');
            Body.fontColor('white');
            SetColor.ul('white');
            SetColor.h1('white');
            self.value='day'
            SetColor.aList('powderblue');
        }else if(self.value === 'day'){
            Body.backgroundColor('white');
            Body.fontColor('black');
            SetColor.ul('black');
            SetColor.h1('black');
            self.value='night';
            SetColor.aList('blue');
        }
    }
        