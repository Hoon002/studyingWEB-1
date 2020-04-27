//for temp files

var pageControl = {
    "theme": function (mood) {
        var target, i;
        var pallet = [[, ], [, ], [, ]];
        pallet[0][0] = 'black';
        pallet[0][1] = 'yellow';
        pallet[1][0] = 'white';
        pallet[1][1] = 'tomato';
        pallet[2][0] = 'navy';
        pallet[2][1] = 'coral';

        if (mood === 'night'){
            colorPreSet = pallet[0];
        } else if (mood === 'day'){
            colorPreSet = pallet[1];
        } else{
            colorPreSet = pallet[2];
        }
        console.log(mood, pallet, colorPreSet);

        target = document.querySelectorAll(".name");

            for(i = 0; i < target.length; i++){
                target[i].style.color = colorPreSet[0];
                target[i].style.backgroundColor = colorPreSet[1];
            }

        alert("the mood is changed");
    },
    "queryTest": function queryTest(){
        var x, i;
        x = document.querySelectorAll(".temp");
        alert(typeof(x));
        for(i = 0; i < x.length; i++){
            x[i].style.backgroundColor = "aqua";
            alert('loop')
        }
    }
}

