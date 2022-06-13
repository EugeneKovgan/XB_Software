# XB_Software

Тестовое задание
							
Нужно написать компонент для создания тегов, где у нас:
есть отдельный <input type='text' /> с возможностью добавлять новые теги в текстовом виде
кнопка add для добавления текста из инпута в теги
сам список тегов с иконкой-крестиком для возможности удаления тега из списка
							
Для работы на уровне JS нужно добавить следующий функционал:
геттер-сеттер состояния/списка тегов (нужно добавить методы для получения списка добавленных тегов, установка нового списка тегов вместо предыдущего, добавление одного тега через метод либо удаление одного тега через метод, метод для установки состояния readonly, когда мы не сможем через UI что-то менять etc)
запись/считывание списка тегов в localStorage
создание readonly mode, когда блокируется возможность изменять теги (добавлять и удалять), в первую очередь должен быть метод для изменения этого состояния readonly, можно добавить checkbox для отображения и/или изменения этого состояния
все данные изменения должны применяться без перезагрузки страницы, SPA	
					
Выполнение задания ожидается на чистом JS|HTML|CSS, без использования фреймворков.

Стилизация для данного компонента вторична, функционал первичен.

Уделите внимание стилю кода, переменным и архитектуре вашего решения.
