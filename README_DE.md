# SPA-React-Komponente-ContactForm

### Übungsaufgabe

Erstellen Sie eine React-Komponente `ContactForm`, die ein Formular für die Eingabe von Name, E-Mail-Adresse und Nachricht enthält. Die Komponente sollte folgende Anforderungen erfüllen:

1.  Alle Eingabefelder müssen kontrollierte Komponenten sein und den Zustand der Komponente widerspiegeln. Die Label-Beschriftungen sind: "Name", "Email" und "Message".
2.  Wenn der Benutzer das Formular absendet, sollte eine Alert-Box angezeigt werden, die den eingegebenen Namen, die E-Mail-Adresse und die Nachricht enthält. Format: 
```
Name: xyz
Email: xyz
Message: xyz
```
Hinweis: Zeilenumbruch im Alert/String geht mit dem Sonderzeichen `\n`.

3.  Wenn der Benutzer das Formular absendet, sollten die Eingabefelder zurückgesetzt werden.
4.  Wenn der Benutzer das Formular öffnet, sollte das Eingabefeld für den Namen automatisch fokussiert sein.
5.  Wenn der Benutzer das Formular absendet, sollte eine API-Anfrage an `https://reqres.in/api/users` gesendet werden, um die Eingabe zu speichern. Verwenden Sie die `fetch`-Funktion, um die Anfrage zu senden.

### Hinweise

1.  Verwenden Sie den `useState`-Hook, um den Zustand der Komponente zu speichern.
2.  Verwenden Sie den `useRef`-Hook, um eine Referenz auf das Eingabefeld für den Namen zu erstellen.
3.  Verwenden Sie die `handleChange`-Funktion, um den Zustand der Komponente zu aktualisieren, wenn sich die Eingabefelder ändern.
4.  Verwenden Sie die `handleSubmit`-Funktion, um die Alert-Box anzuzeigen, die Eingabefelder zurückzusetzen und die API-Anfrage zu senden.
5.  Verwenden Sie `useEffect`, um das Eingabefeld für den Namen automatisch zu fokussieren.
