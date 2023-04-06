# Enquête Minor web design 
https://davi9898.github.io/browser-technologies-2223/

# Table of contents
1. [Inleiding](#introduction)
2. [Enhanced layer](#paragraph1)
3. [Usable layer](#paragraph2)
4. [Functional layer](#paragraph3)
5. [Flow schema](#paragraph4)
6. [Feature detection en PE](#paragraph5)
7. [Testverslag](#paragraph6)
8. [Conclusie](#pargraph7)
9. [Bronnen](#pargraph8)

## Inleiding <a name="introduction"></a>
Voor het vak Browsertechnologies ben ik aan de slag gegaan om een enquête te maken waar studenten een eindbeoordeling kunnen geven aan de minor. Dit hebben we moeten doen met Progressive Enhancement en feature detection.
### Enhanced layer <a name="paragraph1"></a>
![Headerimg](https://user-images.githubusercontent.com/76910947/230207526-948bc258-4d88-4d42-8072-9d8701835038.png)
### Usable layer <a name="paragraph2"></a>
![usablelayer](https://user-images.githubusercontent.com/76910947/230208130-39f0667a-cd99-4ae5-b90e-5ddd85787c56.png)
### Functional layer <a name="paragraph3"></a>
![functionallayer](https://user-images.githubusercontent.com/76910947/230208322-a676bb26-73a1-4fa4-9494-4bd970b7a2cf.png)
### Flow schema <a name="paragraph4"></a>
![Frame 1 (14)](https://user-images.githubusercontent.com/76910947/230213271-f0b59808-c572-42aa-9956-2f997412a522.png)

## Feature detection en Progressive Enhancement <a name="paragraph5"></a>
Zoals je kan zien is deze website opgebouwd met de design benadering van progressive Enhancement. Dermate komen er meer features te voorschijn maar de enquête blijft altijd te gebruiken. In elke layer is deze dus te gebruiken. Ook is er feature detection toe gepast met dank aan de @support en door een fallback font toe te passen. 

Feature detection is een techniek die wordt gebruikt in web development om te bepalen of een bepaalde functie of eigenschap beschikbaar is in de browser van de gebruiker. Dit is belangrijk omdat niet alle browsers alle functies ondersteunen, en het is daarom belangrijk om te weten of een bepaalde functie beschikbaar is voordat je die functie probeert te gebruiken.

# Testverslag <a name="paragraph6"></a>

## Link naar demo

## Features
* Light en dark mode
  * Ik heb gekozen om een prefer color-scheme toe te passen zodat de gebruiker altijd zijn gewenste Light/dark mode krijgt.
* Progress bar
  * Gekozen om met JS te kijken naar de active fieldset zodat we de progress bar kunnen updaten. Hierdoor weet onze gebruiker waar zij is in het proces.
* Js validation
  * Gekozen om met HTML CSS en JS validation beschikbaar te maken. Dit vergoot de gebruikerservaring van de gebruiker en zorgt er voor dat er geen fouten gemaakt worden.
* HTML validation
  * Zorgt er voor dat er geen fouten gemaakt kunnen worden.
* button om terug en naar voren te gaan.
  * Vergoot de gebruikerservaring van de gebruiker door een prettige layout aan te bieden en niet te veel informatie weer te geven.
* Input wordt opgeslagen in LocalStorage
  * Gebruiker kan later verder als dat nodig is, ook wanneer de browser perongeluk gesloten wordt.


## Lijst met browsers waarin ik heb getest
Desktop
* Google Chrome
* Firefox
* Edge
* Lynx
<br>
Mobile<br>
IOS:

* Safari

Android:
* Samsung Internet

## Google Chrome
Ik ben als allereerst gaan testen op Google Chrome om te kijken hoe mijn applicatie werkt. Ik heb mijn applicatie gebouwd in Google Chrome. Alles werkt dus er valt niet veel te testen hier.
* Validation ✔️
* enquete submitten ✔️
* progress bar ✔️
* localstorage ✔️

## Firefox
Op de Firefox browser ben ik gaan testen of mijn app werkt en gelukkig doet hij dat. Geen enkele functie gaat fout en de hele enquête werkt. Zelfs localstorage werkt, ik had verwacht dat dit niet zou werken. Ook wanneer ik JavaScript uitzet is de usable layer nog goed te gebruiken.
* Validation ✔️
* enquete submitten ✔️
* progress bar ✔️
* localstorage ✔️
![fire_fox_test_goede](https://user-images.githubusercontent.com/76910947/230218774-a739fb24-302f-482b-9a94-094c49674adf.png)

## Edge
Ook in Microsoft Edge werkt de enquête zonder enige problemen. Ook wanneer je JavaScript uitzet in de Microsoft Edge browser werkt de enquête nog zoals hij hoort te werken.
* Validation ✔️
* enquete submitten ✔️
* progress bar ✔️
![edge_browser](https://user-images.githubusercontent.com/76910947/230223231-194fc9b3-09ae-45e1-97b6-73d8a7d7d107.png)

### Mobile

## Safari
Op Safari is de spacing van mijn flexbox allemaal net een beetje lelijk geworden. Voor de rest kun je de app wel gewoon bedienen. Ook werkt de form validatie zoals hij zou te horen. Ook werkt de localstorage gewoon zoals hij zou moeten doen. Ook doet de height van mn fieldset een beetje vreemd. 
Features: 
* Validation ✔️
* enquete submitten ✔️
* progress bar ✔️
* localstorage ✔️
![safarigoede](https://user-images.githubusercontent.com/76910947/230223794-c74f3d8b-ae5d-44c3-a8d6-4e7c7e63e6c6.jpg)

## Samsung Internet
Op Samsung internet kreeg ik ook last van de spacing maar verder werkte de website wel tot behoren
* Validation ✔️
* enquete submitten ✔️
* progress bar ✔️
* localstorage ✔️
![safari](https://user-images.githubusercontent.com/76910947/230223469-ec162788-333e-4137-900f-6564fa5d99b0.jpg)

## Obscure browser Lynx
Ik heb gekozen om de terminal browser Lynx te testen voor mijn website om te kijken of de functionaliteiten nog werken.
![lynxfrontpage](https://user-images.githubusercontent.com/76910947/230227027-a3d43d53-a51a-465c-ae8c-8674c7c1f4cc.png)

Zoals je kan zien kan je hier kun je makkelijk door de website heen tabben en door middel van enter gebruik maken van de radio buttons
![lynxtest](https://user-images.githubusercontent.com/76910947/230225597-df044f7e-5340-4f62-9a1a-89aa666a638f.png)
Iets wat meteen opvalt is dat hier geen local storage aanwezig is. Ook is de progress bar nergens te bekennen en is er geen enkele form van validation. Wel geeft de terminal aan dat wanneer je teruggaat dat alle form data gewist wordt. Maar ik ga er van uit dat dit hardcoded is.
* Validation ❌
* enquete submitten ✔️
* progress bar ❌
* localstorage ❌

## Conclusie <a name="paragraph7"></a>
Mijn enquête werkt goed op alle browsers behalve als je deze in een obscure text browser gaat bezoeken. Zelfs dan kun je nog gewoon de enquête doorlopen en het formulier submitten. Echter werken alle andere leuke features niet meer. Houdt het dus gewoon bij een Chrome of een Firefox.

## Sources <a name="paragraph8"></a>
* https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection
* https://medium.com/data-breach/introduction-to-feature-detection-and-matching-65e27179885d
* https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
* https://www.tutorialspoint.com/javascript/javascript_form_validations.htm
* 
