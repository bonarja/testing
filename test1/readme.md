-   Object.assign asigna a un objeto target las keys de un objeto source, por lo tanto rgb recibe también los valores de wb quedando rgb con: `red, green, blue, white y black`. wb permanece igual y el retorno de `Object.assign` sera el mismo elemento target con los valores agregados del source, por lo tanto aplica `colors === rgb`

-   `r2.js:` Para evitar mutar el objeto rgb se emplea un target vacío en `Object.assign` y los source serán los siguientes argumentos

-   `r3.js:` Funcion assing Polyfill version
