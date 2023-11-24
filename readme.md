# Aplikacja Kontaktów

Aplikacja Kontaktów to REST API umożliwiające zarządzanie listą kontaktów. Pozwala użytkownikom na dodawanie, aktualizowanie, przeglądanie i usuwanie informacji kontaktowych. Dodatkowo, aplikacja wspiera oznaczanie kontaktów jako ulubione oraz funkcje uwierzytelnienia i autoryzacji użytkowników, w tym weryfikację adresu email.


## Funkcjonalności

- **Lista kontaktów**: Pobierz listę wszystkich zapisanych kontaktów.
- **Szczegóły kontaktu**: Wyświetl szczegółowe informacje o konkretnym kontakcie.
- **Dodawanie kontaktu**: Umożliwia dodanie nowego kontaktu do listy.
- **Aktualizacja kontaktu**: Edytuj istniejące informacje kontaktowe.
- **Usuwanie kontaktu**: Usuń kontakt z listy.
- **Zarządzanie ulubionymi**: Oznacz kontakt jako ulubiony lub usuń oznaczenie.
- **Rejestracja użytkownika**: Umożliwia tworzenie nowego konta użytkownika.
- **Logowanie użytkownika**: Uwierzytelnienie i otrzymywanie tokena JWT dla dostępu do chronionych tras.
- **Autoryzacja dostępu**: Ograniczenie dostępu do pewnych funkcji aplikacji tylko dla zalogowanych użytkowników.
- **Pobieranie danych aktualnego użytkownika**: Wyświetlanie informacji o aktualnie zalogowanym użytkowniku.
- **Aktualizacja awatara użytkownika**: Możliwość zmiany awatara przez użytkownika. Awatar jest przetwarzany do jednolitego rozmiaru i zapisywany w systemie plików serwera.
- **Automatyczne generowanie awatara**: Dla nowo rejestrowanych użytkowników generowany jest awatar za pomocą Gravatara, na podstawie adresu email.
- **Weryfikacja Emaila**: Po rejestracji użytkownik otrzymuje email z linkiem do weryfikacji. Musi kliknąć w link, aby aktywować konto.
- **Ponowne Wysyłanie Emaila Weryfikacyjnego**: Jeśli użytkownik nie otrzymał emaila, może poprosić o jego ponowne wysłanie.

## Technologie

Aplikacja została zbudowana z wykorzystaniem:

- Node.js
- Express.js - framework serwera
- MongoDB - baza danych
- Mongoose - ODM dla MongoDB
- JWT (JSON Web Token): Standard do tworzenia tokenów dostępu, umożliwiający bezpieczne przesyłanie informacji między stronami.
- bcryptjs: Biblioteka do hashowania haseł, używana w procesie autoryzacji.
- Jimp - Biblioteka do przetwarzania obrazów w Node.js, używana do manipulacji awatarami użytkowników.
- Multer - Middleware dla Express.js do obsługi multipart/form-data, używany do przesyłania plików.
- SendGrid - Serwis do zarządzania i wysyłania emaili, wykorzystywany do funkcjonalności weryfikacji emaila i ponownego wysyłania wiadomości weryfikacyjnej