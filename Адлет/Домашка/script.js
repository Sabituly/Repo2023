
const doska = document.getElementById('doska'); // тут я создаю доску нахожу по id doska

const draw = (number) => { //тут я создаю функцию рисования

    let kvadrat; // тут я создаю переменную квадрат котрую буду создавать каждый раз

    
   for (let i = 0; i < number; i++) { // для того чтобы нарисовать квадрат у меня должны быть горизонт и вертикальные линии иными словами столбцы и строки поэтому два цикла соответсвенно i  и j 

       if (i % 2 === 0) { // если четные индексы то делай так это строки

           for (let j = 0; j < number; j++) { // а это столбцы в этой строке

               if (j % 2 === 0) { // я говорю если четные индексы (столбцы) то рисуй вставляй создавай элемент с новыми классами которые я создал ранее в css файле
                   kvadrat = document.createElement('div'); // тут признаюсь подсмотрел в интернете как это делается хотя ранее уже видел как создается новый элемент
                   kvadrat.className = 'kvadrat black'; // тут признаюсь подсмотрел в интернете как это делается, до этого не знал если честно, короче тут добавляю классы этому новому элементу
                   doska.appendChild(kvadrat); // тут признаюсь подсмотрел в интернете как это делается, до этого не знал если честно, короче тут добавляю новый элемент div в div doska
               } else { // тут говорю что если не четные индексы столбцов четной строки

                kvadrat = document.createElement('div');
                kvadrat.className = 'kvadrat white';
                doska.appendChild(kvadrat);

               }

           }       

       } else { // тут говорю что если не четные строки

        for (let j = 0; j < number; j++) {

            if (j % 2 !== 0) { // тут говорю что если не четные столбцы уже не четной строки
                kvadrat = document.createElement('div');
                kvadrat.className = 'kvadrat black';
                doska.appendChild(kvadrat);
            } else { // тут говорю что если четные столбцы уже не четной строки
                

                    kvadrat = document.createElement('div');
                    kvadrat.className = 'kvadrat white';
                    doska.appendChild(kvadrat);
    
            } // каждый раз необходимо добавлять новые элементы иначе они старые прилепяться друг к другу и получится одна черная полоска, а не шахматная доска

        }   

       }

   }
               
     


   
}

draw(8); // тут принимаем размер доски