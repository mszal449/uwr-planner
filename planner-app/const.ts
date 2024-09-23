
export const bachelorRequirements = {
  totalECTS: 180,
  OIKPECTS: 140,
  przedmiotyObowiazkowe: [
    "Analiza matematyczna",
    "Logika dla informatyków",
    "Algebra",
    "Metody programowania",
    "Analiza numeryczna L",
    "Matematyka dyskretna L",
    "Algorytmy i struktury danych L"
  ],
  przedmiotyInformatyczne: {
    requiredECTS: 54,
    courses: [
      "Informatyczny",
      "Informatyczny 1",
      "Informatyczny 2",
      "Informatyczny 3",
      "Informatyczny inż.",
    ]
  },
  tags: [
    "RPiS (Rachunek prawdopodobieństwa i statystyka)",
    "IO (Inżynieria oprogramowania)",
    "PiPO (Projektowanie i programowanie obiektowe)",
    "ASK (Architektury systemów komputerowych)",
    "SO (systemy operacyjne)",
    "SK (sieci komputerowe)",
    "BD (Bazy danych)",
  ],
  other: {
    curses: ["Ochrona własności intelektualnej"],
    type: ["Proseminarium", "Humanistyczno-społeczny"]
  }
}


export const przedmiotyInżynierskie = {
  requiredECTS: 10,
  courses: ["Kurs inżynierski"]
}


export const educationEffects: { [key: string]: { shortName: string, backgroundColor: string } } = {
    "Podstawy informatyki i programowania": { shortName: "PI", backgroundColor: "#FFC1E1" },
    "Programowanie i projektowanie obiektowe": { shortName: "PO", backgroundColor: "#C1E1FF" },
    "Architektury systemów komputerowych": { shortName: "AS", backgroundColor: "#FFC1C1" },
    "Rachunek prawdopodobieństwa (L)": { shortName: "RP", backgroundColor: "#C1FFC1" },
    "Systemy operacyjne": { shortName: "SO", backgroundColor: "#F3C1FF" },
    "Sieci komputerowe": { shortName: "SK", backgroundColor: "#C1FFF3" },
    "Bazy danych": { shortName: "BD", backgroundColor: "#FFD5C1" },
    "Podstawy inżynierii oprogramowania": { shortName: "IO", backgroundColor: "#C1C4FF" },
    "Inżynieria oprogramowania (L)": { shortName: "IL", backgroundColor: "#FFD1C1" },
    "Rachunek prawdopodobieństwa (I)": { shortName: "RI", backgroundColor: "#C1FFDD" },
    "Społeczno-ekonomiczne aspekty informatyki (I)": { shortName: "SE", backgroundColor: "#FFC1E1" },
    "default": { shortName: "N/A", backgroundColor: "#C1FFF3" }
  };
  
  export const CourseTags: { [key: string]: { shortName: string, backgroundColor: string } } = {
    "NG (metody numeryczne i grafika komputerowa)": { shortName: "NG", backgroundColor: "#E1FFC1" },
    "JP (języki programowania i logika)": { shortName: "JP", backgroundColor: "#C1FFD5" },
    "PD (przetwarzanie danych)": { shortName: "PD", backgroundColor: "#E1FFC1" },
    "DS (Data Science)": { shortName: "DS", backgroundColor: "#FFC1E1" },
    "Praca zespołowa": { shortName: "PZ", backgroundColor: "#FFDBC1" },
    "BD (Bazy danych)": { shortName: "BD", backgroundColor: "#FFC1E1" },
    "E (Ekonomia)": { shortName: "EK", backgroundColor: "#C1F3FF" },
    "IO (Inżynieria oprogramowania)": { shortName: "IO", backgroundColor: "#C1C4FF" },
    "PiPO (Projektowanie i programowanie obiektowe)": { shortName: "PO", backgroundColor: "#C1E1FF" },
    "ASK (Architektury systemów komputerowych)": { shortName: "AS", backgroundColor: "#FFC1C1" },
    "SO (systemy operacyjne)": { shortName: "SO", backgroundColor: "#F3C1FF" },
    "SK (sieci komputerowe)": { shortName: "SK", backgroundColor: "#C1FFF3" },
    "OWI (ochrona własności intelektualnej)": { shortName: "OI", backgroundColor: "#FFDDC1" },
    "RPiS (Rachunek prawdopodobieństwa i statystyka)": { shortName: "RP", backgroundColor: "#C1FFC1" },
    "SY (systemy sieciowe i komputerowe)" : { shortName: "SY", backgroundColor: "#FFC1E1" },
    "AZ (algorytmika i złożoność obliczeniowa)" : { shortName: "AZ", backgroundColor: "#FFC1E1" },
    "default": { shortName: "N/A", backgroundColor: "#C1FFF3" }
  };
