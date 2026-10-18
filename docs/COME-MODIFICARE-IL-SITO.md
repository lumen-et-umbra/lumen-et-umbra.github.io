# Modificare il sito di LeU sul proprio PC (Windows 10)

Questa guida serve per **aprire il sito, cambiarlo e provarlo** prima di proporre una modifica. Non serve la toolchain del MUD e **non serve WSL**.

## Cosa installare (una volta sola)

- [Node.js](https://nodejs.org/) **versione 22**, per avviare il sito (è quella usata anche dal deploy su GitHub).
- [GitHub Desktop](https://desktop.github.com/), per scaricare il repository e inviare modifiche.
- [Visual Studio Code](https://code.visualstudio.com/), per scrivere. Cerca e installa l'estensione **Astro** nella sezione Extensions di VS Code.

Se preferisci CLion o Rider, puoi comunque aprire e modificare i file. VS Code è consigliato perché riconosce bene i file `.astro`.

## 1. Scarica il sito

1. Apri [il repository del sito](https://github.com/lumen-et-umbra/lumen-et-umbra.github.io).
2. Premi **Code → Open with GitHub Desktop** e conferma **Clone**. Se non vedi l'opzione, apri GitHub Desktop → **File → Clone repository → URL** e incolla l'indirizzo del repository.
3. Apri la cartella appena scaricata in VS Code (**File → Open Folder**).

**Non serve creare un nuovo progetto Astro:** il progetto è già pronto nel repository.

## 2. Accendi il sito sul tuo PC

In VS Code apri **Terminal → New Terminal**. Nel terminale, dalla cartella del progetto, scrivi:

```powershell
npm install
npm run dev
```

Aspetta che compaia l'indirizzo e apri **http://localhost:4321/** nel browser.

Quello che vedi è **la tua copia locale** del sito. Non è il sito pubblico. Puoi sperimentare senza pubblicare niente.

- **Lascia il terminale aperto** mentre provi il sito.
- Per spegnere il sito, torna nel terminale e premi **Ctrl+C**.
- `npm install` serve solo la prima volta (e quando cambiano le dipendenze). `npm run dev` serve ogni volta che vuoi lavorarci.

Se `npm` non viene riconosciuto, controlla di aver installato Node.js e **riapri VS Code**.

## 3. Cambia qualcosa e guarda il risultato

Apri per esempio `src/pages/index.astro`, modifica una frase e salva con **Ctrl+S**.

Ritorna al browser: **la pagina si aggiorna da sola**. Non devi compilare o caricare file a mano.

Dove trovare le cose principali:

| Vuoi cambiare... | File o cartella |
| --- | --- |
| Testo della homepage | `src/pages/index.astro` |
| Pagina «Gioca» | `src/pages/gioca/index.astro` |
| Pagina «Storia» | `src/pages/storia/index.astro` |
| Colori e aspetto generale | `src/styles/global.css` |
| Immagini e icone | `public/` |
| Menu e intestazione comuni | `src/layouts/Base.astro` |

## 4. Controlla prima di proporre una modifica

Quando hai finito, interrompi `npm run dev` con **Ctrl+C** e scrivi:

```powershell
npm run build
```

Se termina senza errori, hai verificato che il sito si può generare. Il risultato viene messo in `dist/`, ma **non devi toccare quella cartella**.

## 5. Manda la modifica senza pubblicarla subito

1. In **GitHub Desktop**, prima di fare modifiche, seleziona **Current branch → New branch**. Dagli un nome semplice, per esempio `correggi-homepage`.
2. Torna in VS Code, modifica e prova il sito.
3. In GitHub Desktop vedrai i file cambiati. Scrivi una breve descrizione (es. `Corregge testo della homepage`) e premi **Commit**.
4. Premi **Publish branch**.
5. Premi **Create Pull Request** per proporre la modifica su GitHub.

La **pull request** è una richiesta di incorporare le tue modifiche nel sito ufficiale: si possono rivedere prima di pubblicarle. **Non lavorare direttamente sul branch `main`**: quando una modifica arriva lì, GitHub pubblica automaticamente una nuova versione del sito.

Se GitHub non ti permette di pubblicare la branch, chiedi a un amministratore dell'organization di abilitarti alla collaborazione (oppure di farti usare una fork).

**Riassunto:** apri il progetto → `npm run dev` → modifica e salva → controlla nel browser → `npm run build` → pull request.
