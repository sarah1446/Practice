
    function $(query){
        console.log(document.querySelectorAll(query).length)
    return (
        document.querySelectorAll(query).length > 1
        ? document.querySelectorAll(query)
        : document.querySelector(query)
        );
    }
    
    const minus = $('.minus');
    const plus = $('.plus');
    const result = $('.result');
    const zero = $('.zero');
    //const dom = $('li');
    //console.dir(dom);


    let num = 0;

    const text = () => {
        result.innerHTML = num;
    }

    const increment = () => { //함수는 한가지 일만
       num++;
       text();
    }
    
    const decrement = () => {
       num--;
       text();
    }

    const reset = () => {
        num = 0;
        text();
    }
     
    minus.addEventListener('click', decrement);
    plus.addEventListener('click', increment);
    zero.addEventListener('click', reset);

   