# Check alpha version here: https://nononograms.web.app

# Nonograms, report 4, 8.týždeň, Filip Husár

## Plán:

    - spravená registrácia
    - doplnkové
        - viacfarebné krížovky
        - prostredie na vytváranie krížoviek

## Spravená práca:

    - opäť sa mi darilo, dostal som sa do dobrej programovacej fazóny, aj som mal chuť sa tomu povenovať viac času
    - na celú obsluhu registrácie užívateľa som použil autho0-react
    - okrem toho som nahodil appku na verejnú doménu: nononograms.web.app
        - s tým súvisí aj zmena názvu appky pridaním slabiky "no" do názvu. Dôvod: na nič originálnejšie som neprišiel.
    - spravil som aj prostredie na vývoj krížoviek ako aj viacfarebné maľovanie

### Dôvody "nedokonalosti" a.k.a nesplnenia cieľa do bodky:

    - idem zatiaľ podľa plánu, jediné čo ma trápi sú nedokonalosti v CSS
        - pri zmenšení rozlíšenia stránky sa občas objavujú malinké medzery medzi vo vyfarbených políčkach - t.j.obrázok nepokrýva celú plochu políčka
        - okrem toho som trochu smutný že na mobile tá stránka vyzerá hrozne, ale nakoľko sa toto v požiadavkách projektu nespomína, obrazovkám vo veľkosti mobilov sa povenujem asi až posledný týždeň, pokiaľ už nič iné nebude na práci

## Vynaložené úsilie:
    - 14-15 hodín
        - prakticky každý deň, možno až na jeden-dva, som mal chuť na stránke popracovať


## Najbližší týždeň:

    - konečne zapracovať SQL, bude to pre mňa premiéra tak neviem odhadnúť ako mi to pôjde, ale minimálne chcem pre každého užívateľa mať v databáze rozpracovaný stav tej jednej krížovky na hlavnej stránke
        - pridať na stránku viacej krížoviek a nech si užívateľ môže vyberať ktorú lúštiť
            - krížovku pred vylúštením zobrazovať tajnú, po vylúštení už bude vidno obrázok
        - umožniť užívateľovi svoju vytvorenú krížovku pridať do svojej databázy
    - drobnosti ak na ne vyjde čas
        - pri každej krížovke mať zaznačené iba farby v nej použité a iba tie dať užívateľovi na výber - teda aby nemohol vyfarbovať farbou ktorá v krížovke nie je
        - umožniť adminovi jednotlivé vyrobené krížovky zverejniť do verejnej databázy
            - pri krížovke by bolo meno autora, dátum a iné.


## Problémy:
    
    - Čo sa týka vytýčených cieľov, boli to iba klasické drobné problémy vyriešené do 5 minút
    - vyskytol sa jeden nečakaný problém čo sa overovania správnosti krížovky týka. Keď som skúšal lúštiť cez mobil a mal som slabšie pripojenie a niektoré moje kliknutia boli zaznamenané viackrát, počítadlo progresu sa posunulo o +-1 a oznámenie o vylúštení krížovky prišlo v nesprávnom čase
        - rozmýšľam ako daný problém vyriešiť a či vôbec ho riešiť
            - keďže predpokladám že nikto nebude chcieť riešiť krížovku cez mobil a u počítačov predpokladám stabilné pripojenie
            - taktiež nechcem ísť do druhého extrému a po každom kliknutí prechádzať celou krížovkou a kontrolovať či je každé políčko správne.
            - preto rozmýšľam nad kompromisom
                - stále mať počítadlo ktoré sa bude aktualizovať a v prípade že nadobudne požadovanú hodnotu, tak prebehne ešte jedna kontrola komplet krížovky - v prípade že počítadlo bolo skomprimované, tak sa aktualizuje
                    - a v prípade že užívateľ krížovku vylúštil, no kvôli zlému počítadlu nevyskočil oznam o vylúštení, pridať na stránku tlačidlo ktorým vie užívateľ šťuchnúť appku aby skontrolovala správnosť krížovky
            - no je to z môjho pohľadu neelegantné riešenie, takže možno ešte počkám kým ma k nemu donúti viacnásobny výskyt tohto problému
                    - tiež si viem predstaviť podobné riešenie bez tlačidla. Vždy pri ukončení krížovky sa stav rozpracovanej krížovky uloží - a v prípade že je vylúštená, systém to bude mať zapamätané.
   












