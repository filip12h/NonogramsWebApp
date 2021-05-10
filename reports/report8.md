# Nonograms, (final) report 8, 12.týždeň, Filip Husár

## Plán:
    - filtrovanie krížoviek
    - vyhľadávanie iných užívateľov, príp.aj označovanie ako Friendov
    - zabezpečiť aby sa ukladali do progresu aj preškrtnuté políčka

## Spravená práca za posledný týždeň:
    - filtrovanie krížoviek, zoraďovanie podľa kritérií (veľkosť alebo dátum pridania)
    - vyhľadávanie iných užívateľov, ich vytvorených krížoviek, koľko z verejných krížoviek doposiaľ vylúštili
    - v zozname krížoviek ukazovanie nelúštenýc, rozlúštených a vylúštených krížoviek
    - špeciálne pre administrátorský účet - schvaľovanie krížovky, automatické vyplnenie krížovky

### Dôvody "nedokonalosti" a.k.a nesplnenia týždenného cieľa do bodky:

    - to že sa mi nepodarilo spraviť ukladanie preškrtnutých políčok pripisujem sčasti časovej tiesni a sčasti aj značnému množstvu už naimplementovanej časti práce, v ktorej som na tejto problém nemyslel. Totiž pre potreby kontroly správnosti považujem hodnoty preškrtnutého políčka a navyplneného za rovnaké. Preto by bolo treba jednak vymyslieť spôsob ako toto zmeniť aby sa napokazili iné veci a koniec-koncov si aj dozaista prejsť viacerými problémami pri implenetácii

## Features v celkovej práci
    - aplikáciu je možné navštíviť ako anonym, kde je možné lúštiť krížovky aj ich vytvárať, avšak nie je možné vytvorené zverejňovať, podobne ani lúštenie sa neukladá.
    - Preto je možné sa aj prihlásiť. Prihlásený užívateľ si môže krížovky vytvárať a zverejňovať (avšak verejné kvôli etickým dôvodom sa stanú až po odsúhlasení administrátorom), takisto sa užívateľovi bude ukladať všetok jeho doterajší progres na každej z krížoviek.
    - vo verejnej kolekcii možno krížovky filtrovať podľa toho či chce užívateľ vidieť iba tie ktoré má napr.rozlúštené, príp.iba tie ktoré ešte nelúštil. Ide ich tiež zoraďovať podľa veľkosti alebo dátumu pridania.
    - Okrem toho sa dá prehľadávať aj iných užívateľov, vidieť ich krížovky a tiež koľko krížoviek z verejnej kolekcie vylúštili.
    - V prípade že užívateľ zabudne heslo od svojho konta, môže požiadať o jeho obnovenie.
    - Jedno konto (moje) je administrátorské a to poskytuje určité rozšírenia v niektorých častiach aplikácie.
        - v zozname krížoviek sa tu zobrazujú všetky krížovky, aj tie neverejné. Tie sú označené červenou vlajočkou aby boli ľahko rozpoznateľné. Po ich zobrazení je možné ich buď klasicky vylúštiť, avšak v prípade (pravdepodobnej) lenivosti admina má k dispozícii tlačidlo vďaka ktorému sa mu krížovka automaticky vyplní. Po tejto vizuálnej kontrole môže admin jednoducho krížovku označiť za verejnú, keď zhodnotí že je toho hodná. V prípade missclicku príp.zmene nárokov je možné verejné krížovku opäť skryť.

## Neimplementované features ktoré som mal v pláne
    - krížovku po vylúštení nemožno ohodnotiť, podobne ani iných užívateľov, nemožno krížovku označiť ako obľúbenú.
    - nemožno označiť iného užívateľa za frienda. Avšak od tohto som upustil kvôli tomu že charakter tejto stránky to nakoniec tak ani nepotrebuje.
    - nie je vytvorený zoznam vylúštených krížoviek, avšak to som nahradil filtrovaním krížoviek podľa stavu vylúštenia.
    - počítanie času lúštenia - od toho som upustil preto, lebo je to vlastne dosť nerelevantný údaj. Keďže po vylúštení ide krížovku lúštiť znovu, preto by sa to ľahko mohlo zvrhnúť na 1.vylúštenie 2.zapísanie si výsledku 3.rýchle klikanie aby mal druhý pokus lúštenia najlepší čas
    - admin nevie zablokovať konto z appky, iba z prostredia firebase
    - neexistuje listina najlepších lúštiteľov napriek tomu že je možné si po jednom užívateľovi pozrieť kto koľko vylúštil (čisto časové dôvody)
    - nemožno si krížovku stiahnuť

## Nedokonalosti ktoré nie sú spomenuté v pláne, ale som smutný že som ich nedotiahol lepšie
    - pri reštarte krížovky sa prepneme na zoznam vylúštených krížoviek. Žiaľ, vyčistiť krížovku mi nešlo s tým aby som zostal v lúštiacom prostredí (pozn: nechcel som to robiť škaredo že prejdem všetkými htmlElementmi - bunkami a kliknem ich tak aby boli čisté)
        - to isté pri administrátorovom buttone "complete nonogram" - tiež by bolo krajšie aby admin videl iba náhľad, nie tú krížovku aj reálne vylúštil
    - v adminovom prostredí vlajočky spôsobia škaredý posun textu (z časových dôvodov som to už nechal tak)
    - pri vytváraní krížovky keď meníme veľkosť apod. tak to občas tak škaredo skáče.
    - farby použité v krížovke som chcel mať farebne aby nebolo nutné použiť vysvetlivky dole
    - je možné aby dvaja užívatelia mali tú istú prezývku

## Vynaložené úsilie za posledný týždeň:
    - približne 15 hodín

# Vynaložené úsilie celkovo
    - približne 87 hodín 

## S čím som mal problémy:
    - práca s firebase - jednoduché zápisy alebo čítania dát. Nakoniec som sa prelúskal cez viaceré ťažkosti a ide to, ale zabralo mi najviac času
    - práca s objektami v js - (key: value)
    - strašné nervy som mal na typescript a niektoré veci som musel spraviť škaredo (napríklad niečomu nastaviť typ any) aby to fungovalo

## čo by som robil inak:
    - ja som prekvapený že napriek tomu aký som mal plán a ako som sa ho v skutočnosti nedržal, tak tempo práce a aj poradie implementácie bolo veľmi dobré. Možno by som teraz zvážil použitie niektorých tém o ktorých sme mali prednášky ku koncu semestra.
    - tiež nemôžem nespomenúť absolútne zbytočne strávené hodiny s Auth0 resp.MySQL ktoré som nakoniec vo výsledku vôbec nepotreboval, tie by som investoval do implementácie nesplnených cieľov.

# na čo som najviac hrdý
    - spôsob filtrovania a zoraďovania krížoviek
    - prostredie pre vytváranie krížovky a tiež pre lúštenie - páči sa mi aký úsporný spôsob kontroly správnosti som vymyslel, kedy stačí iba jeden counter ktorý sa zväčšuje alebo zmenšuje
    

# čo by som chcel spraviť v budúcnosti
    - v provm rade všetky neimplementované veci ktoré som spomenul vyššie
    - okrem toho si viem predstaviť pridať väčšiu interakciu medzi užívateľmi - napr.pridať chatovacie okno pre všetkých alebo diskusie k jednotlivým krížovkám
    - tiež by bolo veľmi praktické zabezpečiť aby bolo možné krížovky vypĺňať aj podržaním myši a jej ťahaním
    - tiež by bolo pekné stmaviť tie políčka riadkov zvonka krížovky ktoré sú spravené 



