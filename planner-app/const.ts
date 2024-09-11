interface ObjectId {
    $oid: string;
}

interface Course {
    _id: ObjectId;
    name: string;
    semester: string;
    type: string;
    ects: string;
    tags: string[] | null;
    effects: string[] | null;
}

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
        name: "Advanced Distributed Algorithms",
        semester: "Letni",
        type: "I2.T - teoria inf.",
        ects: "6",
        tags: ["SY (systemy sieciowe i komputerowe)", "AZ (algorytmika i złożoność obliczeniowa)"],
        effects: null
    },
    {
        _id: { $oid: "66705c6de22909bbc8b7c9c8" },
        name: "Algorytmy ewolucyjne",
        semester: "Zimowy",
        type: "I2.Z - zastosowania inf.",
        ects: "6",
        tags: ["PD (przetwarzanie danych)", "DS (Data Science)"],
        effects: null
    },
    {
        _id: { $oid: "66705c6de22909bbc8b7c9e5" },
        name: "Architektury systemów komputerowych",
        semester: "Letni",
        type: "Informatyczny 1",
        ects: "8",
        tags: ["ASK (Architektury systemów komputerowych)"],
        effects: ["Architektury systemów komputerowych"]
    },
    {
        _id: { $oid: "66705c6de22909bbc8b7c9f9" },
        name: "Combinatorial optimization",
        semester: "Letni",
        type: "I2.T - teoria inf.",
        ects: "6",
        tags: ["AZ (algorytmika i złożoność obliczeniowa)"],
        effects: null
    }
];