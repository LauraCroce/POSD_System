![image](https://github.com/user-attachments/assets/e6e5c43b-e34b-4a9e-ba51-a9c178fe0114)
Software Testing
In questo repository puoi trovare due moduli con classi di testing per metodi Java, utilizzando tre diverse metodologie di testing: Specification-based Testing, Structural Testing e Property-based Testing.

🔬 Specification-based Testing
Questa metodologia di testing esamina se gli input richiesti producono i risultati attesi. Il Specification-based Testing, quindi, non si concentra sull'implementazione e per questo motivo è anche chiamato black-box testing. Utilizzando un approccio a 7 fasi della metodologia Specification-based, abbiamo testato il metodo toCamelCase(), che formatta una stringa di input secondo la convenzione di denominazione camelCase.

🛡️ Structural Testing
Questo è un approccio di testing white-box che verifica la struttura del codice sorgente. È stato generato un report di code coverage utilizzando JaCoCo per identificare i segmenti di codice non coperti dal test suite. Il report ha indicato che il test suite copre il 100% delle righe e dei rami di codice da testare.

Esegui Code Coverage
Per generare il report di code coverage, esegui il seguente comando usando la CLI all'interno della cartella del progetto dove si trova il file pom.xml:

bash
Copia codice
mvn clean test
Il report sarà generato nella cartella al percorso: /target/site/jacoco/

Inoltre, è stato eseguito il Mutation Testing utilizzando lo strumento PIT Mutation Testing, che inserisce intenzionalmente bug nel codice esistente per verificare se il test suite è abbastanza robusto da rilevarli. Il report prodotto da PIT indica che il test suite ha eliminato tutte le 22 mutazioni generate.

Esegui PIT Mutation Testing
Per generare il report di Mutation Testing, esegui il seguente comando usando la CLI all'interno della cartella del progetto dove si trova il file pom.xml:

bash
Copia codice
mvn test-compile org.pitest:pitest-maven:mutationCoverage
Il report sarà generato nella cartella al percorso: /target/pit-reports/

📊 Property-based Testing
Questa metodologia di testing esprime la proprietà che vogliamo testare e lascia che il framework di test scelga diversi esempi. Utilizzando il motore di test jqwik, abbiamo testato il metodo findPrimeIndex(), che restituisce l'indice della prima (o ultima) occorrenza di un numero primo all'interno di una lista di interi. Per quanto riguarda questo tipo di test, le statistiche sugli input generati possono essere trovate nella documentazione.

🗂️ Struttura del Repository
Codice Sorgente
Codice sorgente di toCamelCase()
Codice sorgente di findPrimeIndex()
Codice di Testing
Codice di testing di toCamelCase()
Codice di testing di findPrimeIndex()
Report
Report di coverage di JaCoCo
Report di mutation testing di PIT
📚 Documentazione
Una documentazione completa in italiano può essere trovata qui:

Google Drive

La documentazione contiene dettagli sui test selezionati e grafici generati dai dati raccolti durante il Property-based Testing.

🗒️ Sheets
Sono stati utilizzati Google Sheets per organizzare i dati:

Pianificazione e Esecuzione dei Casi di Test
Include i casi di test per il Specification-based Testing per pianificazione ed esecuzione
Dati Statistici
Include i dati generati attraverso il Property-based Testing e successivamente visualizzati con statistiche
