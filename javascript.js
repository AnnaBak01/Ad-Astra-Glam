var opacity = 100;
document.body.style.overflow = "hidden"
var myVar = setInterval(loader, 10);

function loader() {
     console.log(opacity);
     opacity = opacity - 1
     document.getElementById("loader").style.opacity = opacity + "%";
     if (opacity == 0) {
          console.log("now you see");
          //showPage();
          clearInterval(myVar);
          document.body.style.overflow = "auto"
          document.getElementById("loader").remove();
     }
}

function dotacje() {
     document.getElementById("title").innerHTML = "Dotacje";
     document.getElementById("text").innerHTML = "Oferujemy przygotowanie wniosków o dotacje z Urzędu Pracy (dofinansowanie dla rozpoczynających działalność gospodarczą oraz dofinansowanie do nowo tworzonego miejsca pracy). Pomożemy przygotować  wniosek, zrobić Bilans oraz Rachunek zysków i strat.";
}

function KardyIPlace() {
     document.getElementById("title").innerHTML = "Kadry i płace";
     document.getElementById("text").innerHTML = "<strong>Obsługa kadrowa:</strong>" +
          "<li>prowadzenie teczek osobowych pracowników,</li> <li>prowadzenie kartotek wynagrodzeń,</li>" +
          "<li>prowadzenie kartotek urlopowych,</li> <li>sporządzenie świadectw pracy,</li> <li>sporządzanie umów o pracę,</li> " +
          "<li>sporządzanie umów cywilnoprawnych,</li> <li>ewidencja zaświadczeń lekarskich,</li>" +
          "<li>prowadzenie kartotek ewidencji czasu pracy.<div class='pt-2'><strong>Obsługa płacowa:</strong></div>" +
          "<li>rejestracja pracownika w ZUS,</li><li>sporządzanie list płac,</li><li>naliczanie wynagrodzeń chorobowych i zasiłków,</li>" +
          "<li>naliczanie premii, nagród,</li><li>naliczanie ekwiwalentów urlopowych,</li><li>sporządzanie pasków pracowniczych,</li>" +
          "<li>sporządzanie deklaracji rozliczeniowych do ZUS,</li><li>sporządzanie deklaracji do ZUS,</li>" +
          "<li>wyrejestrowujących pracownika z ZUS,</li><li>sporządzanie deklaracji rozliczeniowych do Urzędu Skarbowego – PIT-4R,</li>" +
          "<li>sporządzanie deklaracji rocznych PIT-11,</li><li>sporządzanie deklaracji rozliczeniowych PFRON,</li>" +
          "<li>reprezentacja przed ZUS i PIP.</li>"
}

function rozliczeniePIT() {
     document.getElementById("title").innerHTML = "Rozliczenie PIT";
     document.getElementById("text").innerHTML = "<div class='text-center'>Pomożemy w rozliczeniu rocznym zeznania podatkowego: PIT - 28, PIT37, PIT36, PIT36L, PIT38 wraz z załącznikami.</div><br>" +
          "<p>Rozliczenie odbywa się za pośrednictwem: drogi elektronicznej tj.poprzez wysyłkę elektroniczną bezpośrednią do Urzędu Skarbowego(wówczas niezbędne jest podanie kwota przychodu z rozliczenia PIT za rok ubiegły)</p>";
}

function ksiegiHandlowe() {
     document.getElementById("title").innerHTML = "Księgi handlowe";
     document.getElementById("text").innerHTML = "<li>prowadzenie Ksiąg rachunkowych i wyliczenie na tej podstawie miesięcznej / kwartalnej zaliczki na podatek dochodowy CIT lub PIT,</li>" +
          "<li> prowadzenie Ksiąg w systemie finansowo księgowym REWIZOR,</li>" +
          "<li> rozliczanie podatku VAT obejmujące prowadzenie właściwych rejestrów VAT, sporządzanie miesięcznych lub kwartalnych deklaracji VAT,</li>" +
          "<li> rozliczanie transakcji wewnątrzwspólnotowych oraz exportu / importu towarów i usług obejmujące wystawianie FV wewnętrznych, prowadzenie właściwych rejestrów VAT, sporządzanie miesięcznych lub kwartalnych informacji podsumowujących VAT-UE,</li>" +
          "<li>porządzenie ewidencji wyposażenia oraz ewidencji środków trwałych i wartości niematerialnych i prawnych, ustalenie planu rocznej amortyzacji oraz rozliczanie miesięcznych odpisów amortyzacyjnych,</li>" +
          "<li>sporządzanie okresowych sprawozdań finansowych obejmujących bilans, rachunek zysków i strat oraz informację dodatkową,</li><li>przygotowywanie innych zestawień według wcześniej zdefiniowanych kryteriów,</li>" +
          "<li>sporządzanie rocznego sprawozdania finansowego,</li>" +
          "<li>opracowywanie pozostałych raportów (raport kasowy, raport finansowy),</li>" +
          "<li>sporządzanie okresowych sprawozdań do GUS,</li>" +
          "<li>sporządzenie planu kont dostosowanego do indywidualnych potrzeb jednostki,</li>" +
          "<li>opracowanie polityki rachunkowości.</li>"
}

function ksiegiHandlowe() {
     document.getElementById("title").innerHTML = "Księgi handlowe";
     document.getElementById("text").innerHTML = "<li>prowadzenie Ksiąg rachunkowych i wyliczenie na tej podstawie miesięcznej / kwartalnej zaliczki na podatek dochodowy CIT lub PIT,</li>" +
          "<li>prowadzenie Ksiąg w systemie finansowo księgowym REWIZOR,</li>" +
          "<li>rozliczanie podatku VAT obejmujące prowadzenie właściwych rejestrów VAT, sporządzanie miesięcznych lub kwartalnych deklaracji VAT,</li>" +
          "<li>rozliczanie transakcji wewnątrzwspólnotowych oraz exportu / importu towarów i usług obejmujące wystawianie FV wewnętrznych, prowadzenie właściwych rejestrów VAT, sporządzanie miesięcznych lub kwartalnych informacji podsumowujących VAT-UE,</li>" +
          "<li>porządzenie ewidencji wyposażenia oraz ewidencji środków trwałych i wartości niematerialnych i prawnych, ustalenie planu rocznej amortyzacji oraz rozliczanie miesięcznych odpisów amortyzacyjnych,</li>" +
          "<li>sporządzanie okresowych sprawozdań finansowych obejmujących bilans, rachunek zysków i strat oraz informację dodatkową,</li><li>przygotowywanie innych zestawień według wcześniej zdefiniowanych kryteriów,</li>" +
          "<li>sporządzanie rocznego sprawozdania finansowego,</li>" +
          "<li>opracowywanie pozostałych raportów (raport kasowy, raport finansowy),</li>" +
          "<li>sporządzanie okresowych sprawozdań do GUS,</li>" +
          "<li>sporządzenie planu kont dostosowanego do indywidualnych potrzeb jednostki,</li>" +
          "<li>opracowanie polityki rachunkowości.</li>"
}

function ryczalt() {
     document.getElementById("title").innerHTML = "Księgi handlowe";
     document.getElementById("text").innerHTML = "<li>prowadzenie ewidencji przychodów i wyliczenie na tej podstawie zaliczki na podatek dochodowy miesięcznie lub kwartalnie,</li>" +
          "<li>rozliczanie podatku VAT obejmujące prowadzenie właściwych rejestrów VAT, sporządzanie miesięcznych lub kwartalnych deklaracji VAT,</li>" +
          "<li>sporządzenie ewidencji wyposażenia oraz ewidencji środków trwałych i wartości niematerialnych i prawnych, ustalenie planu rocznej amortyzacji oraz rozliczanie miesięcznych odpisów amortyzacyjnych,</li>" +
          "<li>rozliczanie transakcji wewnątrzwspólnotowych oraz exportu / importu towarów i usług obejmujące  wystawianie FV wewnętrznych, prowadzenie właściwych rejestrów VAT, sporządzanie miesięcznych lub kwartalnych informacji podsumowujących VAT-UE, rozliczanie podatkowe dokumentów celnych,</li>" +
          "<li>roczne rozliczenie podatku, sporządzenie rocznych deklaracji podatkowych.</li>"
}

function podatkowaKsiega() {
     document.getElementById("title").innerHTML = "Księgi handlowe";
     document.getElementById("text").innerHTML = "<li>prowadzenie Księgi Przychodów i Rozchodów i wyliczenie na jej podstawie miesięcznej / kwartalnej zaliczki na podatek dochodowy PIT,</li>" +
          "<li>rozliczanie podatku VAT obejmujące prowadzenie właściwych rejestrów VAT, sporządzanie miesięcznych lub kwartalnych deklaracji VAT</li>" +
          "<li>rozliczanie transakcji wewnątrzwspólnotowych oraz exportu / importu towarów i usług obejmujące wystawianie FV wewnętrznych, prowadzenie właściwych rejestrów VAT, sporządzanie miesięcznych lub kwartalnych informacji podsumowujących VAT-UE,</li>" +
          "<li>sporządzenie ewidencji wyposażenia oraz ewidencji środków trwałych i wartości niematerialnych i prawnych, ustalenie planu rocznej amortyzacji oraz rozliczanie miesięcznych odpisów amortyzacyjnych,</li>" +
          "<li>roczne rozliczenie podatku, sporządzenie rocznych deklaracji podatkowych.</li>"
}

function rejestracjaDzialnosci() {
     document.getElementById("title").innerHTML = "Księgi handlowe";
     document.getElementById("text").innerHTML = "<p>Oferujemy pełne wsparcie przy zakładaniu własnej działalności gospodarczej. Jeśli masz pomysł na biznes – pomożemy Ci zaoszczędzić czas i nerwy. Przeprowadzimy Cię przez proces wszystkich formalności związanych z założeniem firmy.</p>" +
          "<p>Usługi pomocy przy zakładaniu działalności gospodarczej to przede wszystkim:</p>" +
          "<li>Pomoc w wyborze formy opodatkowania,</li>" +
          "<li>Sporządzenie dokumentów zgłoszeniowych dla nowych podmiotów,</li>" +
          "<li>Pomoc w rejestracji działalności,</li>" +
          "<li>Organizacja księgowości.</li>"
}

function uslugiDodatkowe() {
     document.getElementById("title").innerHTML = "Księgi handlowe";
     document.getElementById("text").innerHTML = "<li>organizacji systemu rachunkowości, w tym Polityki Rachunkowości,</li>" +
          "<li>zamknięcia okresów sprawozdawczych,</li>" +
          "<li>inwentaryzacja – instrukcje i dokumentacja,</li>" +
          "<li>reprezentowanie przed US i ZUS,</li>" +
          "<li>pełnienie roli Głównego Księgowego i/lub Dyrektora Finansowego,</li>" +
          "<li>Rozliczanie podatku od czynności cywilno-prawnych (PCC)</li>"
}