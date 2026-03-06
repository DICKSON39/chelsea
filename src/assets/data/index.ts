

export interface Player {
    id: number;
    name: string;
    dateOfBirth: string;
    yearSigned: string;
    image: string;
    Goals: number;
    Assists: number;
    Saves: number;
    Position: 'Goalkeeper' | 'Defender' | 'Midfielder' | 'Forward';
    Appearances: number;
    shirtNumber: number;
    status: string;
    marketValue: string; 
    bio: string;
}

export interface Legend {
    id: number;
    name: string;
    yearsActive: string;
    role: string;
    appearances: number;
    goals: number;
    honours: string[];
    bio: string;
}

export interface Trophy {
    id: number;
    name: string;
    count: number;
    lastWon: string;
    description: string;
}

export const ChelseaPlayerData: Player[] = [
    // --- GOALKEEPERS ---
    {
        id: 1,
        name: "Robert Sanchez",
        dateOfBirth: "18-11-1997",
        yearSigned: "03-08-2023",
        image: "link",
        Goals: 0,
        Assists: 1,
        Saves: 219,
        Position: "Goalkeeper",
        Appearances: 98,
        shirtNumber: 1,
        status: "Currently not on loan",
        marketValue: "€25M",
        bio: "An agile shot-stopper with excellent distribution range, Sanchez remains a key part of the goalkeeping unit."
    },
    {
        id: 2,
        name: "Filip Jörgensen",
        dateOfBirth: "16-04-2002",
        yearSigned: "30-07-2024",
        image: "link",
        Goals: 0,
        Assists: 0,
        Saves: 34,
        Position: "Goalkeeper",
        Appearances: 33,
        shirtNumber: 12,
        status: "Currently not on loan",
        marketValue: "€20M",
        bio: "The young Danish keeper joined to provide high-level competition and has shown great command of his area."
    },
    {
        id: 3,
        name: "Teddy Sharman-Lowe",
        dateOfBirth: "30-03-2003",
        yearSigned: "01-07-2020",
        image: "link",
        Goals: 0,
        Assists: 0,
        Saves: 0,
        Position: "Goalkeeper",
        Appearances: 0,
        shirtNumber: 28,
        status: "Currently not on loan",
        marketValue: "€2M",
        bio: "A promising talent from the academy ranks, looking to make his mark on the senior stage."
    },
    {
        id: 4,
        name: "Gabriel Slonina",
        dateOfBirth: "15-05-2004",
        yearSigned: "02-08-2022",
        image: "link",
        Goals: 0,
        Assists: 0,
        Saves: 0,
        Position: "Goalkeeper",
        Appearances: 0,
        shirtNumber: 44,
        status: "Currently not on loan",
        marketValue: "€8M",
        bio: "The American standout possesses immense potential and physical presence between the sticks."
    },

    // --- DEFENDERS ---
    {
        id: 5,
        name: "Reece James",
        dateOfBirth: "08-12-1999",
        yearSigned: "01-07-2018",
        image: "link",
        Goals: 16,
        Assists: 22,
        Saves: 0,
        Position: "Defender",
        Appearances: 224,
        shirtNumber: 24,
        status: "Currently not on loan",
        marketValue: "€55M",
        bio: "The Club Captain. When fit, James is arguably the best right-back in world football, combining power with elite crossing."
    },
    {
        id: 6,
        name: "Levi Colwill",
        dateOfBirth: "26-02-2003",
        yearSigned: "01-07-2021",
        image: "link",
        Goals: 3,
        Assists: 2,
        Saves: 0,
        Position: "Defender",
        Appearances: 75,
        shirtNumber: 6,
        status: "Currently not on loan",
        marketValue: "€60M",
        bio: "A modern ball-playing center-back. His ability to break lines with his left foot is vital to the team's build-up."
    },
    {
        id: 7,
        name: "Marc Cucurella",
        dateOfBirth: "22-07-1998",
        yearSigned: "05-08-2022",
        image: "link",
        Goals: 9,
        Assists: 7,
        Saves: 0,
        Position: "Defender",
        Appearances: 149,
        shirtNumber: 3,
        status: "Currently not on loan",
        marketValue: "€30M",
        bio: "Tenacious and technically sound, Cucurella offers versatility on the left flank and relentless energy."
    },
    {
        id: 8,
        name: "Jorrel Hato",
        dateOfBirth: "07-03-2006",
        yearSigned: "03-08-2025",
        image: "link",
        Goals: 1,
        Assists: 2,
        Saves: 0,
        Position: "Defender",
        Appearances: 24,
        shirtNumber: 21,
        status: "Currently not on loan",
        marketValue: "€45M",
        bio: "One of Europe's most exciting defensive prospects, Hato arrived with a reputation for maturity beyond his years."
    },
    {
        id: 9,
        name: "Mamadou Sarr",
        dateOfBirth: "29-08-2005",
        yearSigned: "01-07-2025",
        image: "link",
        Goals: 0,
        Assists: 0,
        Saves: 0,
        Position: "Defender",
        Appearances: 4,
        shirtNumber: 19,
        status: "Currently not on loan",
        marketValue: "€15M",
        bio: "A tall, imposing presence in the heart of defense with a high ceiling for development."
    },
    {
        id: 10,
        name: "Wesley Fofana",
        dateOfBirth: "17-12-2000",
        yearSigned: "31-08-2022",
        image: "link",
        Goals: 2,
        Assists: 0,
        Saves: 0,
        Position: "Defender",
        Appearances: 61,
        shirtNumber: 29,
        status: "Currently not on loan",
        marketValue: "€40M",
        bio: "An elite athlete whose recovery pace and aerial dominance make him a nightmare for opposing strikers."
    },
    {
        id: 11,
        name: "Tosin Adarabioyo",
        dateOfBirth: "24-09-1997",
        yearSigned: "01-07-2024",
        image: "link",
        Goals: 6,
        Assists: 1,
        Saves: 0,
        Position: "Defender",
        Appearances: 64,
        shirtNumber: 4,
        status: "Currently not on loan",
        marketValue: "€25M",
        bio: "Provides veteran leadership and exceptional calmness on the ball within the defensive rotation."
    },
    {
        id: 12,
        name: "Benoit Badiashile",
        dateOfBirth: "26-03-2001",
        yearSigned: "05-01-2023",
        image: "link",
        Goals: 2,
        Assists: 1,
        Saves: 0,
        Position: "Defender",
        Appearances: 70,
        shirtNumber: 5,
        status: "Currently not on loan",
        marketValue: "€35M",
        bio: "A cultured defender whose height and passing range are key assets in the Premier League."
    },
    {
        id: 13,
        name: "Trevoh Chalobah",
        dateOfBirth: "05-07-1999",
        yearSigned: "01-07-2018",
        image: "link",
        Goals: 8,
        Assists: 2,
        Saves: 0,
        Position: "Defender",
        Appearances: 142,
        shirtNumber: 23,
        status: "Currently not on loan",
        marketValue: "€22M",
        bio: "A versatile Cobham graduate who has consistently performed across various defensive roles."
    },

    // --- MIDFIELDERS ---
    {
        id: 14,
        name: "Enzo Fernandez",
        dateOfBirth: "17-01-2001",
        yearSigned: "31-01-2023",
        image: "link",
        Goals: 27,
        Assists: 27,
        Saves: 0,
        Position: "Midfielder",
        Appearances: 157,
        shirtNumber: 8,
        status: "Currently not on loan",
        marketValue: "€75M",
        bio: "The metronome. Enzo’s vision and passing ability dictate the tempo of every match Chelsea plays."
    },
    {
        id: 15,
        name: "Cole Palmer",
        dateOfBirth: "06-05-2002",
        yearSigned: "01-09-2023",
        image: "link",
        Goals: 53,
        Assists: 31,
        Saves: 0,
        Position: "Midfielder",
        Appearances: 118,
        shirtNumber: 10,
        status: "Currently not on loan",
        marketValue: "€120M",
        bio: "Chelsea's talisman. A creative genius capable of deciding a game with a single touch of brilliance."
    },
    {
        id: 16,
        name: "Moises Caicedo",
        dateOfBirth: "02-11-2001",
        yearSigned: "14-08-2023",
        image: '',
        Goals: 8,
        Assists: 9,
        Saves: 0,
        Position: "Midfielder",
        Appearances: 135,
        shirtNumber: 25,
        status: "Currently not on loan",
        marketValue: "€90M",
        bio: "An elite ball-winner. Caicedo's engine and tackling ability provide the necessary steel in midfield."
    },
    {
        id: 17,
        name: "Andrey Santos",
        dateOfBirth: "03-05-2004",
        yearSigned: "06-01-2023",
        image: "link",
        Goals: 1,
        Assists: 0,
        Saves: 0,
        Position: "Midfielder",
        Appearances: 38,
        shirtNumber: 17,
        status: "Currently not on loan",
        marketValue: "€30M",
        bio: "A dynamic box-to-box midfielder with an eye for goal and great tactical awareness."
    },
    {
        id: 18,
        name: "Dario Essugo",
        dateOfBirth: "14-03-2005",
        yearSigned: "01-07-2025",
        image: "link",
        Goals: 0,
        Assists: 0,
        Saves: 0,
        Position: "Midfielder",
        Appearances: 3,
        shirtNumber: 14,
        status: "Currently not on loan",
        marketValue: "€18M",
        bio: "A powerful defensive midfielder known for his physical dominance and ball retention."
    },
    {
        id: 19,
        name: "Romeo Lavia",
        dateOfBirth: "06-01-2004",
        yearSigned: "18-08-2023",
        image: "link",
        Goals: 0,
        Assists: 0,
        Saves: 0,
        Position: "Midfielder",
        Appearances: 32,
        shirtNumber: 45,
        status: "Currently not on loan",
        marketValue: "€45M",
        bio: "A press-resistant deep-lying playmaker with exceptional composure under pressure."
    },

    // --- FORWARDS ---
    {
        id: 20,
        name: "João Pedro",
        dateOfBirth: "26-09-2001",
        yearSigned: "01-07-2025",
        image: "link",
        Goals: 20,
        Assists: 12,
        Saves: 0,
        Position: "Forward",
        Appearances: 41,
        shirtNumber: 20,
        status: "Currently not on loan",
        marketValue: "€50M",
        bio: "A versatile attacker who combines Brazilian flair with clinical finishing in the final third."
    },
    {
        id: 21,
        name: "Estêvão Willian",
        dateOfBirth: "24-04-2007",
        yearSigned: "01-07-2025",
        image: "link",
        Goals: 7,
        Assists: 5,
        Saves: 0,
        Position: "Forward",
        Appearances: 32,
        shirtNumber: 41,
        status: "Currently not on loan",
        marketValue: "€60M",
        bio: "Commonly known as 'Messinho', his dribbling and technical ability make him a generational talent."
    },
    {
        id: 22,
        name: "Alejandro Garnacho",
        dateOfBirth: "01-07-2004",
        yearSigned: "01-07-2025",
        image: "link",
        Goals: 4,
        Assists: 3,
        Saves: 0,
        Position: "Forward",
        Appearances: 22,
        shirtNumber: 49,
        status: "Currently not on loan",
        marketValue: "€55M",
        bio: "A direct and fearless winger who thrives in one-on-one situations and high-stakes moments."
    },
    {
        id: 23,
        name: "Pedro Neto",
        dateOfBirth: "09-03-2000",
        yearSigned: "11-08-2024",
        image: "link",
        Goals: 19,
        Assists: 14,
        Saves: 0,
        Position: "Forward",
        Appearances: 91,
        shirtNumber: 7,
        status: "Currently not on loan",
        marketValue: "€65M",
        bio: "Electric pace and crossing ability make Neto one of the league's most effective wingers."
    },
    {
        id: 24,
        name: "Jamie Gittens",
        dateOfBirth: "04-08-2004",
        yearSigned: "05-07-2025",
        image: "link",
        Goals: 1,
        Assists: 2,
        Saves: 0,
        Position: "Forward",
        Appearances: 28,
        shirtNumber: 11,
        status: "Currently not on loan",
        marketValue: "€40M",
        bio: "A dynamic winger with explosive speed and the ability to change direction instantly."
    },
    {
        id: 25,
        name: "Liam Delap",
        dateOfBirth: "08-02-2003",
        yearSigned: "01-07-2025",
        image: "link",
        Goals: 3,
        Assists: 1,
        Saves: 0,
        Position: "Forward",
        Appearances: 32,
        shirtNumber: 9,
        status: "Currently not on loan",
        marketValue: "€35M",
        bio: "A physical powerhouse of a striker with a natural instinct for goal-scoring."
    },
    {
        id: 26,
        name: "Marc Guiu",
        dateOfBirth: "04-01-2006",
        yearSigned: "01-07-2024",
        image: "link",
        Goals: 8,
        Assists: 2,
        Saves: 0,
        Position: "Forward",
        Appearances: 27,
        shirtNumber: 38,
        status: "Currently not on loan",
        marketValue: "€15M",
        bio: "A clinical finisher with great movement, representing the future of the Chelsea frontline."
    },

    // --- YOUTH SQUAD ---
    {
        id: 27,
        name: "Josh Acheampong",
        dateOfBirth: "05-05-2006",
        yearSigned: "01-07-2024",
        image: "link",
        Goals: 1,
        Assists: 1,
        Saves: 0,
        Position: "Defender",
        Appearances: 36,
        shirtNumber: 34,
        status: "Currently not on loan",
        marketValue: "€12M",
        bio: "A highly-rated academy defender who has seamlessly transitioned into first-team involvement."
    },
    {
        id: 28,
        name: "Reggie Walsh",
        dateOfBirth: "20-10-2008",
        yearSigned: "01-07-2025",
        image: "link",
        Goals: 0,
        Assists: 1,
        Saves: 0,
        Position: "Midfielder",
        Appearances: 4,
        shirtNumber: 46,
        status: "Currently not on loan",
        marketValue: "€5M",
        bio: "The youngest member of the squad, Walsh is a technical midfielder with high intelligence."
    },

    // --- LOANED OUT ---
    {
        id: 29,
        name: "Nicolas Jackson",
        dateOfBirth: "20-06-2001",
        yearSigned: "30-06-2023",
        image: "link",
        Goals: 31,
        Assists: 15,
        Saves: 0,
        Position: "Forward",
        Appearances: 88,
        shirtNumber: 15,
        status: "On loan Bayern Munich",
        marketValue: "€50M",
        bio: "Currently developing his game in the Bundesliga after showing great promise in West London."
    },
    {
        id: 30,
        name: "Kendry Paez",
        dateOfBirth: "04-05-2007",
        yearSigned: "01-07-2025",
        image: "link",
        Goals: 0,
        Assists: 0,
        Saves: 0,
        Position: "Midfielder",
        Appearances: 0,
        shirtNumber: 42,
        status: "On loan River Plate",
        marketValue: "€35M",
        bio: "Ecuador's wonderkid is gaining vital experience in South America before joining the main group."
    },
    {
        id: 31,
        name: "Aaron Anselmino",
        dateOfBirth: "29-04-2005",
        yearSigned: "08-08-2024",
        image: "link",
        Goals: 1,
        Assists: 0,
        Saves: 0,
        Position: "Defender",
        Appearances: 13,
        shirtNumber: 30,
        status: "On loan Strasbourg",
        marketValue: "€20M",
        bio: "A strong Argentine defender developing through the BlueCo partnership system."
    },
    {
        id: 32,
        name: "Axel Disasi",
        dateOfBirth: "11-03-1998",
        yearSigned: "04-08-2023",
        image: "link",
        Goals: 3,
        Assists: 0,
        Saves: 0,
        Position: "Defender",
        Appearances: 44,
        shirtNumber: 2,
        status: "On loan West Ham",
        marketValue: "€28M",
        bio: "An experienced international defender spending the season across the city to maintain match rhythm."
    },
    {
        id: 33,
        name: "Mike Penders",
        dateOfBirth: "31-07-2005",
        yearSigned: "27-08-2024",
        image: "link",
        Goals: 0,
        Assists: 0,
        Saves: 0,
        Position: "Goalkeeper",
        Appearances: 0,
        shirtNumber: 40,
        status: "On loan Strasbourg",
        marketValue: "€10M",
        bio: "The giant Belgian keeper is honing his skills in Ligue 1 to prepare for the future at Stamford Bridge."
    }
];

export const ChelseaLegends: Legend[] = [
    {
        id: 1,
        name: "Eden Hazard",
        yearsActive: "2012-2019",
        role: "Winger",
        appearances: 352,
        goals: 110,
        honours: ["2x Premier League", "2x Europa League", "FA Cup"],
        bio: "The ultimate entertainer. Hazard's dribbling and big-game impact defined an era at Stamford Bridge."
    },
    {
        id: 2,
        name: "Frank Lampard",
        yearsActive: "2001-2014",
        role: "Midfielder",
        appearances: 648,
        goals: 211,
        honours: ["3x Premier League", "Champions League", "4x FA Cup"],
        bio: "Chelsea's all-time leading goalscorer. A midfielder with a striker's instinct and unmatched work ethic."
    },
    {
        id: 3,
        name: "John Terry",
        yearsActive: "1998-2017",
        role: "Defender",
        appearances: 717,
        goals: 67,
        honours: ["5x Premier League", "Champions League", "5x FA Cup"],
        bio: "Captain, Leader, Legend. The heart of Chelsea's defense for nearly two decades."
    },
    {
        id: 4,
        name: "Didier Drogba",
        yearsActive: "2004-2012, 2014-2015",
        role: "Forward",
        appearances: 381,
        goals: 164,
        honours: ["4x Premier League", "Champions League", "4x FA Cup"],
        bio: "The king of finals. Known for his power and ability to score when it mattered most."
    }
];

export const ChelseaTrophies: Trophy[] = [
    {
        id: 1,
        name: "Champions League",
        count: 2,
        lastWon: "2021",
        description: "The ultimate prize in European club football."
    },
    {
        id: 2,
        name: "Premier League",
        count: 6,
        lastWon: "2017",
        description: "The pinnacle of English football dominance."
    },
    {
        id: 3,
        name: "Europa League",
        count: 2,
        lastWon: "2019",
        description: "European glory conquered twice in a decade."
    },
    {
        id: 4,
        name: "FA Cup",
        count: 8,
        lastWon: "2018",
        description: "The world's oldest and most prestigious cup."
    },
    {
        id: 5,
        name: "Club World Cup",
        count: 1,
        lastWon: "2022",
        description: "Champions of the world."
    }
]