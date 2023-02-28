## Структура Проекта

src/

* api/ - Это если нужно если нужно писать подключение к стороннему апи 
* assets/ - Тут храним логотип проекта, фавиконки, index.html, шрифты
* components/ - Папка наших компонентов из которых собираем проект
  * Button/- Создания компонента
    * Button.jsx
    * Button.scss
    * index.js 
  * Form/ 
    * Input/
      * Input.jss
      * Input.scss
      * index.js 
    * CheckBox
      * ...
* config/ - Конфиги для проекта
* containers/ - Наши секции или страницы
* styles/ Общие стили для проекта


Button.jsx

```jsx
import React from "react";
import "./Button.scss";

const Button = (props) => {
   return (
      
   );
};

export default Button;
```

index.js 

```js
	export default from "./Button";
```

