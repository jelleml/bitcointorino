# Bitcoin Torino — sito

## Aggiornare il prossimo evento in home

Quando cambia l'evento mostrato in home (sezione "Prossimo evento"), aggiornare sempre **tutti** questi punti insieme, nello stesso commit:

1. **Testi in `messages/it.json` e `messages/en.json`**, namespace `NextEvent`: `eventName`, `type`, `description`, `date`, `time`, `locationName`, `address`, `participants`, `availability`, `registrationDeadline`. Entrambe le lingue.
2. **Costante `NEXT_EVENT` in `components/home/next-event.tsx`**: `url` (pagina Luma dell'evento), `poster` (locandina in `public/Event Posters/`), `startDate` ed `endDate` in ISO 8601 con fuso orario di Roma (`+02:00` con l'ora legale, `+01:00` con l'ora solare), `inLanguage`, `performer`, `streetAddress`, `postalCode`. Alimenta i dati strutturati `Event` per Google: date e luogo devono coincidere con i testi.
3. **Chip "Prossimo evento" nella hero della home (`components/home/hero.tsx`)**: verificare sempre che mostri il nuovo evento, con nome, data e link giusti. Usa i testi `NextEvent` e `NEXT_EVENT.url`, quindi di norma si aggiorna da solo, ma va controllato a ogni cambio evento, sia su mobile sia su desktop.

Dopo il cambio, controllare la home in entrambe le lingue: sezione evento, chip della hero, locandina e link di iscrizione.
