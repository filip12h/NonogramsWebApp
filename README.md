# Nonograms, report 3, 7.týždeň, Filip Husár

## Plán:

    - kontrolór správnosti vylúštenia
    - ak by sa vyskytol čas, tak aj viacfarebné lúštenie


## Spravená práca:

    - Tento týždeň som mal veľmi produktívny a zároveň úspešný. Objektívne sa musím pochváliť :D
    - Okrem splnenia hlavného cieľa na tento týždeň som plnil veľa menších cieľov ktoré mi cestou prišli na um
        - automatické vykresľovanie vonkajších čísel.
        - použitie hooks - každá bunka vie svoj stav, avšak globálny stav o vylúštení celej krížovky potrebujeme držať v Appke
            - po každom stlačení sa overí či táto bunka je kliknutá tak ako má byť v riešení. Ak áno, počet správne kliknutých zväčšíme, inak zmenšíme o 1.
            - ak niekedy #buniek === #správnych, vyhlásime krížovku za správne vylúštenú
    - okrem toho som pridal možnosť prečiarknuť bunku
        - v prípade že si užívateľ zaznačiť ktorá bunka v riešení nebude
        - zrejme ešte v budúcnosti trochu upravím obrázok kríža, nech ho je aj lepšie vidno
    - dokonca som si z radosti naťukal jednu komplet krížovku nech je čo lúštiť (dokonca tématickú!) Aj keď na testovanie by sa hodilo niečo menšie.


### Dôvody "nedokonalosti" a.k.a nesplnenia cieľa do bodky:

    - Ako vravím, tento týždeň sa mi podarilo splniť všetko čo som plánoval, možno jedine tá viacfarebnosť, ale tú som plánoval ajtak iba spraviť v prípade že by som mal s overovaním správnosti problémy
    - Okrem toho mi príde viacfarebnosť krížovky ako ľahko implementovateľný problém, takže nerobím si z toho ťažkú hlavu

## Vynaložené úsilie:

    - 3 plnotučné večery, čistého času asi niečo cez 10 hodín


## Najbližší týždeň:

    - najbližší týždeň mám v pláne popracovať na registračnom prostredí
    - v prípade že by som s tým mal problémy keďže je to niečo úplne nové ako som robil doteraz, mám v zálohe popracovať na automatickom generovaní čísel do zadania krížovky na základe riešenia
        - tým by som mal skoro vybavený ďalší cieľ, a to prostredie na vytváranie krížovky
    - a opäť, ak by sa vyskytol čas, alebo nečakaná chuť zmeniť druh práce, tak umožniť viacfarebné farbenie


## Problémy:
    
    - Niektoré problémy mám ešte nevyriešené
        - ESLint mi nadáva že v 27.riadku Board.tsx hovorím o type eventu ako any. Žiaľ, skúšal som to spraviť inak, ale krajšie mi nevydalo
        - na oznámenie o vylúštení používam alert, tiež sa to ESLintu nepáči, zatiaľ som to ale neriešil
        - Z nejakého dôvodu mi sa mi každý 5.stĺpec zobrazuje divne. Chyba je to CSS-ková, avšak neprišiel som kde a prečo.
            - pri stlačení to vidno lepšie - na pravej strane bunky zostáva bledý pásik
    - ostatné problémy boli rýchlo vyriešené
        - napr.by som spomenul ako pre mňa zaujímavo som využil reduce na spočítanie počtu núl v celej krížovke (pozn: nuly znamenajú prázdne políčka)
   








