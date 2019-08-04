# SystemImitation
Operational System Imitation (React)

Imitacja systemu operacyjnego wzorowanego na Windows napisana w React'cie.

Aplikacja składa się z:
1. komponent ładowania systemu (setInterval(), setTimeout(), renderowanie warunkowe/zmiana stanu lokalnego);
2. komponent logowania do systemu (event submit, obsługa błędu/renderowanie warunkowe, przekazywanie props (this.props.password="admin1"));
3. komponent imitujący pulpit:
- komponent ikonka foldera (event na dwuklik, renderowanie komponentu folder);
- komponent folder (event/przycisk wyłączania foldera);
- komponent ikona aplikacji pogodowej (event na dwuklik, renderowanie komponentu aplikacja);
- komponent aplikacja (pobieranie aktualnych danych pogodowych z API - openweathermap.org - dla Wrocławia, w systemie metrycznym, w języku polskim, event/przycisk wyłączania aplikacji);
- komponent pasek zadań (pobieranie aktualnej daty i godziny).

Stylowanie w SASSie.
