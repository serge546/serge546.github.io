function check(id,trueAnswer){
	var answer = document.getElementById(id).value;
	if(answer.toLowerCase() == trueAnswer)
		alert('Правильно!');
	else
		alert('Подумайте...');
}

function guess(){
	var answer = Math.floor(Math.random()*100) + 1;
	var tryCount = 0;
	while (true){
		tryCount++;
		var userAnswer = prompt('Введите число от 1 до 100','');
		if (userAnswer == null || userAnswer == '') break;
		
		userAnswer = parseInt(userAnswer);
		
		if ( !((userAnswer >= 1)&&(userAnswer <= 100)) ){
			alert('Только числа от 1 до 100!');
		}
		
		if (answer == userAnswer){
			alert ('Вы угадали! Затрачено попыток: '+tryCount);
			break;
		} else if (answer < userAnswer) {
			alert('Ваше число больше');
		} else {
			alert ('Ваше число меньше');
		}
		
	}
}

function guessMP(){
	var answer = Math.floor(Math.random()*100) + 1; //случайное число
	var userAnswer; //ответ пользователя
	var tryCount = 0; //число попыток, общих ходов
	var currentPlayer = 0; //счетчик текущего игрока
	var breaker = false; 
	var gameOver = false; 
	
	var players = parseInt(prompt('Число игроков:','2'));
	
	while ((players>=2) && (players<=4)){ //Если игроков 2-4
		tryCount++; //Текущий ход
		currentPlayer = 0; //Обнуление счетчика текущего игрока
		
		while (currentPlayer < players) { //ход каждого игрока
			currentPlayer++;
			while (!breaker) {
				userAnswer = prompt('Попытка '+tryCount+'. Ход игрока '+currentPlayer+'.\nВведите число от 1 до 100',''); //ввод ответа
				breaker = true; //чтобы выйти из цикла
				if (userAnswer == null || userAnswer == '') { //если отмена или пустая строка
					gameOver = confirm('Выйти?'); //подтверждаем выход
					if (gameOver) break; //если ок, то выходим
					else breaker = false; //если нет, то начинаем с ввода ответа
				}
			}
			if (gameOver) break; //если выбрали выход, то выходим из цикла
			userAnswer = parseInt(userAnswer); //преобразуем в число
			
			if ( (userAnswer >= 1)&&(userAnswer <= 100) ){ //если введена правильная цифра
				if (answer == userAnswer){ //если совпало
					alert ('Игрок '+currentPlayer+' угадал. Это было число '+answer+'. Затрачено попыток: '+tryCount);
					gameOver = true;
					break;
				} else if (answer < userAnswer) { //если ввели больше
					alert('Ваше число больше');
				} else { //если ввели меньше
					alert ('Ваше число меньше');
				}
			} else alert('Только числа от 1 до 100!'); //если ввели хрень
			
			breaker = false; //возращаем для захода в цикл 
		}
		if (gameOver) break;
	}
}



$(document).ready(function(){
	$('input[type=submit]').click(function(event){
		event.preventDefault();
	});
	$('#top-panel a').click(function(event){
		event.preventDefault();
		$('#top-panel a').removeClass('active');
		$(this).addClass('active');
		var link = $(this).attr('href');
		$('.content').removeClass('active');
		$(link).addClass('active');
	});
});