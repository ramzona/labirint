🧱 Структура
HTML (разметка):

Заголовок 🌀 Лабиринт

Блок выбора смайлика (😊, 🐱, 🐸, 🤖)

Скрытый блок с игрой (#maze), который появляется после выбора смайлика

CSS (стиль):

Светлый фон, мягкие цвета

Красивые кнопки со смайликами

Сетка лабиринта из 10x10 клеток

Цвета для стен, игрока, выхода

JavaScript (логика игры):

Ждёт, пока ты выберешь смайлик (персонажа)

Создаёт лабиринт (массив с нулями и единицами)

0 — путь

1 — стена

Рисует игрока и выход

Управляет движением по стрелкам клавиатуры:

Стрелка вверх/вниз/влево/вправо двигает игрока

Нельзя пройти сквозь стену

Если дошёл до выхода — появляется сообщение “🎉 Победа!”

🧠 Что происходит пошагово?
Тыкаешь на смайлик → сохраняется выбранный смайлик → начинается игра

Появляется лабиринт — с персонажем и выходом

Двигаешь стрелками → если путь открыт — персонаж перемещается

Дошёл до выхода — появляется сообщение 🎉

