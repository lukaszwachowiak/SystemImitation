# SystemImitation
Operational System Imitation (React)

<h1>Imitacja systemu operacyjnego wzorowanego na Windows napisana w React'cie.<h1>

Aplikacja składa się z:
1. komponent ładowania systemu (setInterval(), setTimeout(), renderowanie warunkowe);
2. komponent logowania do systemu (event submit, obsługa błędu/renderowanie warunkowe);
3. komponent imitujący pulpit:
- komponent ikonka foldera (event na dwuklik, renderowanie komponentu folder);
- komponent folder (event/przycisk wyłączania foldera);
- komponent ikona aplikacji pogodowej (event na dwuklik, renderowanie komponentu aplikacja);
- komponent aplikacja (pobieranie aktualnych danych pogodowych z API - openweathermap.org - dla Wrocławia, event/przycisk wyłączania aplikacji).
Stylowanie w SASSie. 
