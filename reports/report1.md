# report 1

Filip Husár

Názov projektu: Nonograms

5.týždeň (15.3.-21.3.)

Plán:
    
    - vytvorenie prostredia na maľovanie krížoviek

Spravená práca:
    
    - oprášil som HTML a CSS a vytvoril som vizuál stránky
    
    - s krížovkou je viacero nedotiahnutých záležitostí
        
        - nedá sa zatiaľ ani len lúšťiť čo bolo doposiaľ hlavným cieľom
        
        - niektoré aspekty na stránke ako položky width/height sú dočasné, čisto iba
            na pochopenie fungovania Javascript/jQuery

Dôvody:
    
    - so správaním javascriptu ktorý je pre mňa nový som sa ešte dostatočne nezoznámil.
    
    - okrem toho s Reactom som mal nečakané problémy - oproti cviku kde sa ukazovalo
        ako sa v ňom pracuje viacero vecí nefungovalo u mňa tak ako u prednášajúceho
        M.Pintera. Prettier mi problémy, avšak nie v prehliadači, ale až pri kompilovaní
        
        - takisto sa mi stránka nerefreshovala automaticky po tom čo som uložil zmeny v súbore
        
        - z toho dôvodu som ako dočasné riešenie spravil mimo React

Vynaložené úsilie:
    
    - 3 dni, čistého času odhadom 12 hodín - väčšina z toho samozrejme študovanie čo
        ako funguje (väčšinou nefunguje)

Najbližší týždeň:
    
    - základný cieľ je skompilovať súčasný stav stránky v Reacte a súčasne
        sfunkčniť lúštenie krížovky.
        
        - spolu s tým by malo byť v pohode implementovať overovanie správnosti
    
    - nakoľko som videl moje tempo doterajší týždeň, vytvorenie registračného prostredia
         by bol iba bonus

Problémy:
    
    - okrem spomínaného reactu kde som mal problémy od inštalácie nvp, npm...atď
        až po samotnú prácu v ňom, mám nevyriešené problémy čo sa týka vyfarbovania
        políčok
        
        - rozhodol som sa to riešiť onclick udalosťami, skúšal som veľa rôznych spôsobov,
        avšak žiaden zatiaľ, žiaľ, nezafungoval.
            
            - nejde však o samotný "click" - pretože v danej funkcii som bol schopný
                napr.zmeniť pozadie stránky. Avšak pozadie bunky nešlo a nevedno prečo...
                
                - neviem teraz povedať či mi React v tomto pomôže.
