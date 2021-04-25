# Nonograms, report 6, doterajšia práca, Filip Husár

## Plán:

    - konečne zapracovať SQL, bude to pre mňa premiéra tak neviem odhadnúť ako mi to pôjde, ale minimálne chcem pre každého užívateľa mať v databáze rozpracovaný stav tej jednej krížovky na hlavnej stránke
        - pridať na stránku viacej krížoviek a nech si užívateľ môže vyberať ktorú lúštiť
            - krížovku pred vylúštením zobrazovať tajnú, po vylúštení už bude vidno obrázok
        - umožniť užívateľovi svoju vytvorenú krížovku pridať do svojej databázy
    - drobnosti ak na ne vyjde čas
        - pri každej krížovke mať zaznačené iba farby v nej použité a iba tie dať užívateľovi na výber - teda aby nemohol vyfarbovať farbou ktorá v krížovke nie je
        - umožniť adminovi jednotlivé vyrobené krížovky zverejniť do verejnej databázy
            - pri krížovke by bolo meno autora, dátum a iné.

## Spravená práca:

    - spojazdnil som si MySQL lokálne, avšak s nahodením na hosting som mal problémy, venoval som tomu pomerne dlhý čas, tak som nakoniec zmenil plán a databázu robím vo Firebase kde mám aj nahodený projekt
            - aj je to oveľa logickejšie, neviem prečo som si to nedal už do pôvodného plánu takto, asi preto že v tom robím prvýkrát a ešte som nevedel čo všetko to ponúka a ako sa v tom bude robiť
    - upravil som registráciu, nerobím ju cez Providera Auth0 ale pomocou autentifikácie priamo na firebase. Vďaka tomu bude narábanie s údajmi jednoduchšie
    - vytvorená databáza užívateľov ako aj krížoviek
    - zobraozvanie všetkých vytvorených krížoviek v kolekcii a vybratie krížovky ktorú bude možné vylúštiť
    - užívateľom som umožnil meniť si prezývku

### Dôvody "nedokonalosti" a.k.a nesplnenia cieľa do bodky:

    - nepodarilo sa mi ukladať progres vylúštenia - t.j.keď sa užívateľ odhlási počas lúštenia a opäť prihlási, tak môže pokračovať v práci
        - toto je čisto časový dôvod. Veľa času som strávil jednak s tým ako spojazdniť MySQL a potom tiež ako to nahodiť funkčné na hosting. Žiaľ, všetká táto snaha sa ukázala neskôr márna.
        - teraz keď už mám rozbehanú databázu tak by to malo byť v pohode, kde u každého užívateľa budem mať uložený zoznam vylúštených, podobne ako aj zoznam progresu - dvojica (krížovka, progres)
    - taktiež nie je spravené odtajnenie krížovky s obrázkom - tiež za tým hľadajme časové dôvody, no pri tomto som zmenil prioritu. Teraz sú dôležitejšie veci na práci

## Vynaložené úsilie:
    - opäť okolo 14-15 hodín
        - žiaľ, veľká časť z toho, cca 6 hodín, bolo venovaných MySQL. Ak by bolo treba, dám k dispozícii kód
    - celkovo okolo 55 hodín


## Najbližšie obdobie:
    - pridať do databázy užívateľov progres spravených krížoviek
    - filtrovanie krížoviek
    - umožnenie iba tých farieb ktoré sú použité v krížovke
    - sekundárna priorita ak by vyšiel čas: nejaká základná interakcia užívateľov - vyhľadávanie kamošov možno
    


## Problémy:
    - občas sa stane že mi pribudne viacero záznamov do databázy užívateľov pri registrácii/prvom prihlásení
        - v zásade z toho zatiaľ nevyplynuli ďalšie problémy keďže vždy je zapamätaná referencia na ten posledný záznam, avšak dobudúcna toto potrebujem fixnúť
    - niektoré farby sú zle rozoznateľné, hlavne pri večerných filtlroch obrazovky.
        - chcem vymyslieť ako tento problém odstrániť
            - buď dať label na každé jedno číslo akej je farby, alebo to vyriešiť tak, že po stlačení čísla sa vyberie daná farba.








