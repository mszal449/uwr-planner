export const OIKP = {
  bachelor: {
    ects: 140,
  },
  engineer: {
    ects: 170
  },
  type: [
    "Informatyczny", 
    "Informatyczny 1", 
    "Informatyczny 2", 
    "Informatyczny 3", 
    "Informatyczny inż.",
    'Obowiązkowy 1', 
    'Obowiązkowy 2', 
    'Obowiązkowy 3',
    'Kurs',
    'K1 - kurs podstawowy',
    'K2 - kurs zaawansowany',
    'Kurs inżynierski',
    'Projekt'
  ]
}

export const requiredTags = {
  "ASK (Architektury systemów komputerowych)": "ASK",
  "RPiS (Rachunek prawdopodobieństwa i statystyka)": "RPiS",
  "IO (Inżynieria oprogramowania)": "IO",
  "PiPO (Projektowanie i programowanie obiektowe)": "PiPO",
  "SO (systemy operacyjne)": "SO",
  "SK (sieci komputerowe)": "SK",
  "BD (Bazy danych)": "BD",
}


export const educationEffects: { [key: string]: { shortName: string, backgroundColor: string } } = {
    "Podstawy informatyki i programowania": { shortName: "PI", backgroundColor: "#FFC1E1" },
    "Programowanie i projektowanie obiektowe": { shortName: "PO", backgroundColor: "#C1E1FF" },
    "Architektury systemów komputerowych": { shortName: "AS", backgroundColor: "#FFC1C1" },
    "Rachunek prawdopodobieństwa (L)": { shortName: "RP", backgroundColor: "#C1FFC1" },
    "Systemy operacyjne": { shortName: "SO", backgroundColor: "#F3C1FF" },
    "Bazy danych": { shortName: "BD", backgroundColor: "#FFD5C1" },
    "Podstawy inżynierii oprogramowania": { shortName: "IO", backgroundColor: "#C1C4FF" },
    "Inżynieria oprogramowania (L)": { shortName: "IL", backgroundColor: "#FFD1C1" },
    "Rachunek prawdopodobieństwa (I)": { shortName: "RI", backgroundColor: "#C1FFDD" },
    "Społeczno-ekonomiczne aspekty informatyki (I)": { shortName: "SE", backgroundColor: "#FFC1E1" },
    "SK (Sieci komputerowe)": { shortName: "SK", backgroundColor: "#F3C1FF" },
    "Praca zespołowa": { shortName: "PZ", backgroundColor: "#F3C1FF" },
    "default": { shortName: "N/A", backgroundColor: "#C1FFF3" },
  };
  
  export const CourseTags: { [key: string]: { shortName: string, backgroundColor: string } } = {
    "NG (metody numeryczne i grafika komputerowa)": { shortName: "NG", backgroundColor: "#E1FFC1" },
    "JP (języki programowania i logika)": { shortName: "JP", backgroundColor: "#C1FFD5" },
    "PD (przetwarzanie danych)": { shortName: "PD", backgroundColor: "#E1FFC1" },
    "DS (Data Science)": { shortName: "DS", backgroundColor: "#FFC1E1" },
    "Pz (Praca zespołowa)": { shortName: "PZ", backgroundColor: "#FFDBC1" },
    "BD (Bazy danych)": { shortName: "BD", backgroundColor: "#FFC1E1" },
    "E (Ekonomia)": { shortName: "E", backgroundColor: "#C1F3FF" },
    "IO (Inżynieria oprogramowania)": { shortName: "IO", backgroundColor: "#C1C4FF" },
    "PiPO (Projektowanie i programowanie obiektowe)": { shortName: "PiPO", backgroundColor: "#C1E1FF" },
    "ASK (Architektury systemów komputerowych)": { shortName: "ASK", backgroundColor: "#FFC1C1" },
    "SO (Systemy operacyjne)": { shortName: "SO", backgroundColor: "#F3C1FF" },
    "SK (Sieci komputerowe)": { shortName: "SK", backgroundColor: "#C1FFF3" },
    "OWI (ochrona własności intelektualnej)": { shortName: "OWI", backgroundColor: "#FFDDC1" },
    "RPiS (Rachunek prawdopodobieństwa i statystyka)": { shortName: "RPiS", backgroundColor: "#C1FFC1" },
    "SY (systemy sieciowe i komputerowe)" : { shortName: "SY", backgroundColor: "#FFC1E1" },
    "AZ (algorytmika i złożoność obliczeniowa)" : { shortName: "AZ", backgroundColor: "#FFC1E1" },
    "default": { shortName: "N/A", backgroundColor: "#C1FFF3" }
  };
