import { Course } from "./types";


export const sample_courses: Course[] = [
    {
        _id: { $oid: "66705c6de22909bbc8b7c9bb" },
        name: "Advanced LP-based algorithmic techniques",
        semester: "Letni",
        type: "Seminarium",
        ects: "6",
        tags: null,
        effects: null
    },
    {
        _id: { $oid: "66705c6de22909bbc8b7c9ba" },
        name: "Podstawy informatyki i programowania",
        semester: "Letni",
        type: "I2.T - teoria inf.",
        ects: "6",
        tags: ["Data Science"],
        effects: null
    },
    {
        _id: { $oid: "66705c6de22909bbc8b7c9c8" },
        name: "Algorytmy ewolucyjne",
        semester: "Zimowy",
        type: "I2.Z - zastosowania inf.",
        ects: "6",
        tags: null,
        effects: null
    },
    {
        _id: { $oid: "66705c6de22909bbc8b7c9e5" },
        name: "Architektury systemów komputerowych",
        semester: "Letni",
        type: "Informatyczny 1",
        ects: "8",
        tags: ["Systemy sieciowe i komputerowe"],
        effects: ["Architektury systemów komputerowych"]
    },
    {
        _id: { $oid: "66705c6de22909bbc8b7c9f9" },
        name: "Combinatorial optimization",
        semester: "Letni",
        type: "I2.T - teoria inf.",
        ects: "6",
        tags: ["Algorytmika i złożoność obliczeniowa"],
        effects: ["Podstawy inżynierii oprogramowania"]
    },
    {
        _id: { $oid: "66705c6de22909bbc8b7c9fd" },
        name: "Combinatorial optimization",
        semester: "Letni",
        type: "I2.T - teoria inf.",
        ects: "6",
        tags: ["Algorytmika i złożoność obliczeniowa"],
        effects: ["Rachunek prawdopodobieństwa (L)"]
    },
    {
        _id: { $oid: "66705c6de22909bbc8b7c9fe" },
        name: "Combinatorial optimization",
        semester: "Letni",
        type: "I2.T - teoria inf.",
        ects: "6",
        tags: ["Algorytmika i złożoność obliczeniowa"],
        effects: ["Podstawy inżynierii oprogramowania"]
    },
];


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
    "Społeczno-ekonomiczne aspekty informatyki (I)": { shortName: "SE", backgroundColor: "#FFC1E1" }
  };
  
  export const CourseTags: { [key: string]: { shortName: string, backgroundColor: string } } = {
    "Systemy sieciowe i komputerowe": { shortName: "SK", backgroundColor: "#C1FFF3" },
    "Algorytmika i złożoność obliczeniowa": { shortName: "AZ", backgroundColor: "#FFF5C1" },
    "Metody numeryczne i grafika komputerowa": { shortName: "MG", backgroundColor: "#E1FFC1" },
    "Języki programowania i logika": { shortName: "JP", backgroundColor: "#C1FFD5" },
    "Przetwarzanie danych": { shortName: "PD", backgroundColor: "#E1FFC1" },
    "Data Science": { shortName: "DS", backgroundColor: "#FFC1E1" },
    "Praca zespołowa": { shortName: "PZ", backgroundColor: "#FFDBC1" },
    "Bazy danych": { shortName: "BD", backgroundColor: "#FFC1E1" },
    "Ekonomia": { shortName: "EK", backgroundColor: "#C1F3FF" },
    "Inżynieria oprogramowania": { shortName: "IO", backgroundColor: "#C1C4FF" },
    "Projektowanie i programowanie obiektowe": { shortName: "PO", backgroundColor: "#C1E1FF" },
    "Architektury systemów komputerowych": { shortName: "AS", backgroundColor: "#FFC1C1" },
    "Systemy operacyjne": { shortName: "SO", backgroundColor: "#F3C1FF" },
    "Sieci komputerowe": { shortName: "SK", backgroundColor: "#C1FFF3" },
    "Ochrona własności intelektualnej": { shortName: "OI", backgroundColor: "#FFDDC1" },
    "Rachunek prawdopodobieństwa i statystyka": { shortName: "RP", backgroundColor: "#C1FFC1" }
  };
  