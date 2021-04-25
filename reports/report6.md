# Nonograms, report 6, 10.týždeň, Filip Husár

## Plán:

    - pridať do databázy užívateľov progres spravených krížoviek
    - filtrovanie krížoviek
    - umožnenie iba tých farieb ktoré sú použité v krížovke
    - sekundárna priorita ak by vyšiel čas: nejaká základná interakcia užívateľov - vyhľadávanie kamošov možno

## Spravená práca:

    - podarilo sa:
        - pridať do databázy progres užívateľov. Každý si tak môže začať niečo lúštiť, prepnúť na inú časť appky alebo dokonca odhlásiť, vždy sa vráti k stavu kde bol
        - umožnenie farbenia iba tými farbami ktoré sú v krížovke
    - navyše
        - mimo plánu som pridal aj resetovací button. Pokiaľ chce užívateľ vylúštiť krížovku znova, môže kliknúť na reset.
        - zmena colorPickeru aby to bolo lepšie použiteľné
        - pridanie nejakých jednoduchých notifikácií namiesto čkaredých alertov
                - upload krížovky, vylúštenie, prihlásenie, odhlásenie, zmena nickname...
        - CSS - zlepšený vzhľad pre mobilné použitie

### Dôvody "nedokonalosti" a.k.a nesplnenia cieľa do bodky:

    - v zásade neboli nejaké závažné dôvody prečo sa mi nepodarilo spraviť filter krížoviek, iba som proste trochu pomenil plán týždňa a zaoberal sa viacerými inými vecami ktoré mi pohltili vyhradený čas.
    - Verím však že niečo ako filter nebude robiť problémy, keďže sme si niečo obdobné aj na cvikách ukázali

## Vynaložené úsilie:
    - okolo 11-12 hodín


## Najbližšie obdobie:
    - filtrovanie krížoviek
    - vyhľadávanie iných užívateľov, príp.aj označovanie ako Friendov
    


## Problémy:
    - trochu som sa zamotal pri zmene stavu progresu aby ho zobrazovalo užívateľovi správne
    - resetovací button mi nešiel spraviť tak aby som zostal v sekcii lúštenia, lebo krížovka sa nererendovala a nič to prakticky nespravilo. Efekt bolo vidno až keď sa z tadiaľ odišlo a následne vrátilo späť. Tak preventívne je reset spravený tak že to spraví sám.
    - nejaké vizuálne drobnosti ohľadom tých notifikácií, hlavne čo sa miesta zobrazenia týka a niekedy aj väčšieho počtu, ale tie som robil na poslednú chvíľu a narýchlo, takže tým ešte nejaký čas určite budem venovať








