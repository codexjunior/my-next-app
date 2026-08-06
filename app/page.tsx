"use client";

import React, { useState, useEffect } from 'react';

// --- TYPE DEFINITIONS ---
interface Exercise {
import React, { useState, useEffect } from 'react';

// --- TYPE DEFINITIONS ---
interface Exercise {
  question: string;
  options?: string[];
  answer: string;
  explanation: string;
}

interface VocabItem {
  french: string;
  english: string;
  example: string;
  pronunciation: string;
}

interface ActivitySchedule {
  time: string;
  activity: string;
  duration: string;
  resource: string;
  lessonName: string;
  instructions: string;
  howToPractice: string;
}

interface DayData {
  dayNumber: number;
  title: string;
  objective: string;
  estimatedTime: string;
  outcome: string;
  schedule: ActivitySchedule[];
  vocabulary: VocabItem[];
  exercises: Exercise[];
  writingPrompt: string;
  speakingPrompt: string;
  checklist: string[];
  selfAssessment: string[];
}

interface WeekGrammarSummary {
  week: number;
  title: string;
  keyRules: { topic: string; summary: string; examples: string[] }[];
  commonPitfalls: string[];
}

// --- CURRICULUM DATA: WEEK 1 (DAYS 1 TO 7) ---
const WEEK_1_DATA: DayData[] = [
  {
    dayNumber: 1,
    title: "The Alphabet, Accents & Basic Greetings",
    objective: "Master French letter sounds, key accent marks, and formal/informal greetings.",
    estimatedTime: "2 hours",
    outcome: "Confidently pronounce written French sounds and exchange basic hellos/goodbyes.",
    schedule: [
      {
        time: "0:00 - 0:20",
        activity: "Pronunciation & Warm-up",
        duration: "20 mins",
        resource: "Language Transfer French",
        lessonName: "Tracks 1 & 2 - Cognates & Vowel Foundations",
        instructions: "Listen to the audio. Pause before the student responds and utter the French phrase aloud.",
        howToPractice: "Focus on nasal vowels and non-aspirated 't' and 'd' sounds."
      },
      {
        time: "0:20 - 0:50",
        activity: "Grammar & Phonetics",
        duration: "30 mins",
        resource: "Learn French with Alexa (YouTube)",
        lessonName: "French Alphabet & Accent Marks (É, È, Ê, Ç)",
        instructions: "Watch the video, taking note of accented characters and silent terminal letters (e.g., 's', 't', 'd' at ends of words).",
        howToPractice: "Write out 10 French words with accents and pronounce them 3 times each."
      },
      {
        time: "0:50 - 1:10",
        activity: "Vocabulary",
        duration: "20 mins",
        resource: "Lawless French",
        lessonName: "Greetings & Polite Expressions",
        instructions: "Memorize formal (Bonjour, Au revoir) vs. informal (Salut, Coucou) greetings.",
        howToPractice: "Search each word on Forvo.com to verify native audio pronunciation."
      },
      {
        time: "1:10 - 1:20",
        activity: "Break",
        duration: "10 mins",
        resource: "Rest",
        lessonName: "Hydrate & Stretch",
        instructions: "Step away from screens, drink water, stretch shoulders.",
        howToPractice: "N/A"
      },
      {
        time: "1:20 - 1:40",
        activity: "Listening Practice",
        duration: "20 mins",
        resource: "Coffee Break French",
        lessonName: "Season 1, Episode 1 - Greetings & Introductions",
        instructions: "Listen twice. First pass: general comprehension. Second pass: note phonetic triggers.",
        howToPractice: "Repeat sentences aloud after host Mark."
      },
      {
        time: "1:40 - 2:00",
        activity: "Reading & Writing",
        duration: "20 mins",
        resource: "The French Experiment",
        lessonName: "Basic Dialogue Reading",
        instructions: "Read the comic dialogue aloud twice.",
        howToPractice: "Write a short 5-line dialogue between two people meeting at a café."
      }
    ],
    vocabulary: [
      { french: "Bonjour", english: "Hello / Good morning", example: "Bonjour, comment allez-vous ?", pronunciation: "bon-ZHOOR" },
      { french: "Bonsoir", english: "Good evening", example: "Bonsoir tout le monde.", pronunciation: "bon-SWAHR" },
      { french: "Salut", english: "Hi / Bye (informal)", example: "Salut Paul, ça va ?", pronunciation: "sah-LOO" },
      { french: "Au revoir", english: "Goodbye", example: "Au revoir et à bientôt !", pronunciation: "oh-reh-VWAHR" },
      { french: "S'il vous plaît", english: "Please (formal)", example: "Un café, s'il vous plaît.", pronunciation: "seel voo PLEH" },
      { french: "Merci beaucoup", english: "Thank you very much", example: "Merci beaucoup pour l'aide.", pronunciation: "mair-SEE boh-KOO" },
      { french: "Oui / Non", english: "Yes / No", example: "Oui, je comprends. Non, désolé.", pronunciation: "WEE / NOH" },
      { french: "Ça va ?", english: "How are you? / How's it going?", example: "Salut ! Ça va ?", pronunciation: "sah VAH" }
    ],
    exercises: [
      {
        question: "1. How do you formally say 'Good evening, how are you?' in French?",
        options: ["A) Salut, ça va ?", "B) Bonsoir, comment allez-vous ?", "C) Au revoir, merci."],
        answer: "B) Bonsoir, comment allez-vous ?",
        explanation: "'Bonsoir' is used for evening greetings, and 'comment allez-vous ?' is the formal 'how are you'."
      },
      {
        question: "2. Which letter accent changes the sound of 'e' to 'ay' (as in 'café')?",
        options: ["A) Accent grave (è)", "B) Accent aigu (é)", "C) Cédille (ç)"],
        answer: "B) Accent aigu (é)",
        explanation: "The accent aigu (é) produces an open 'ay' vowel sound."
      }
    ],
    writingPrompt: "Write a 5-sentence dialogue between two strangers (Monsieur Dupont and Madame Martin) meeting at 7:00 PM.",
    speakingPrompt: "Record yourself saying all 8 vocabulary words on Forvo or your phone voice recorder, checking for clean nasal vowels.",
    checklist: [
      "Completed Language Transfer tracks 1-2",
      "Watched Alexa's Alphabet video",
      "Added Day 1 Vocab to Anki / Notebook",
      "Completed Listening & Reading exercises",
      "Attempted Writing Prompt & Exercises"
    ],
    selfAssessment: [
      "Can I pronounce the French 'R' and nasal vowels without hesitation?",
      "Do I understand the difference between 'Tu' and 'Vous' contexts?"
    ]
  },
  {
    dayNumber: 2,
    title: "Subject Pronouns & The Verb ÊTRE (To Be)",
    objective: "Master subject pronouns (je, tu, il, elle, nous, vous, ils, elles) and present tense conjugation of ÊTRE.",
    estimatedTime: "2 hours",
    outcome: "State who you are, your profession, nationality, and current state.",
    schedule: [
      {
        time: "0:00 - 0:20",
        activity: "Pronunciation Warm-up",
        duration: "20 mins",
        resource: "Language Transfer",
        lessonName: "Track 3 - Subject Pronoun Phonetics",
        instructions: "Practice pronouncing subject pronouns with smooth liaison (e.g., 'vous_êtes').",
        howToPractice: "Focus on the silent 's' in 'nous', 'vous', 'ils'."
      },
      {
        time: "0:20 - 0:50",
        activity: "Grammar Core",
        duration: "30 mins",
        resource: "Learn French with Alexa",
        lessonName: "Le verbe ÊTRE au présent",
        instructions: "Memorize: Je suis, Tu es, Il/Elle/On est, Nous sommes, Vous êtes, Ils/Elles sont.",
        howToPractice: "Write the full conjugation table 5 times from memory."
      },
      {
        time: "0:50 - 1:10",
        activity: "Vocabulary Focus",
        duration: "20 mins",
        resource: "Lawless French",
        lessonName: "Nationalities & Common Professions",
        instructions: "Learn gender agreement rules for professions (e.g., étudiant vs. étudiante).",
        howToPractice: "Match each nationality/profession with correct ÊTRE form."
      },
      {
        time: "1:10 - 1:20",
        activity: "Break",
        duration: "10 mins",
        resource: "Rest",
        lessonName: "Short Walk",
        instructions: "Hydrate, step away from study desk.",
        howToPractice: "N/A"
      },
      {
        time: "1:20 - 1:40",
        activity: "Listening Practice",
        duration: "20 mins",
        resource: "French Comprehensible Input",
        lessonName: "A1 Level - Qui suis-je ?",
        instructions: "Listen to speaker describe different people using ÊTRE.",
        howToPractice: "Transcribe 3 full sentences heard in the video."
      },
      {
        time: "1:40 - 2:00",
        activity: "Reading & Writing",
        duration: "20 mins",
        resource: "Bonjour de France",
        lessonName: "A1 Grammar Quiz - Le verbe Être",
        instructions: "Read short biography snippets and fill in missing ÊTRE forms.",
        howToPractice: "Draft 5 personal statements about yourself using 'Je suis'."
      }
    ],
    vocabulary: [
      { french: "Je suis", english: "I am", example: "Je suis américain.", pronunciation: "zhuh SWEE" },
      { french: "Tu es", english: "You are (singular informal)", example: "Tu es étudiant ?", pronunciation: "too EH" },
      { french: "Il / Elle est", english: "He / She is", example: "Elle est professeure.", pronunciation: "eel / el EH" },
      { french: "Nous sommes", english: "We are", example: "Nous sommes à Paris.", pronunciation: "noo SOM" },
      { french: "Vous êtes", english: "You are (plural / formal)", example: "Vous êtes très gentil.", pronunciation: "voo ZET" },
      { french: "Ils / Elles sont", english: "They are", example: "Ils sont fatigués.", pronunciation: "eel / el SOH" },
      { french: "Étudiant(e)", english: "Student", example: "Je suis étudiante.", pronunciation: "ay-too-DYAHN / ay-too-DYAHNT" },
      { french: "Fatigué(e)", english: "Tired", example: "Il est fatigué.", pronunciation: "fah-tee-GAY" }
    ],
    exercises: [
      {
        question: "1. Fill in the blank: 'Nous ____ très heureux aujourd'hui.'",
        options: ["A) êtes", "B) sommes", "C) sont"],
        answer: "B) sommes",
        explanation: "'Nous' always conjugates with 'sommes' for the verb ÊTRE."
      },
      {
        question: "2. How do you say 'They (feminine) are tired'?",
        options: ["A) Ils sont fatigués.", "B) Elles sont fatiguées.", "C) Elle est fatiguée."],
        answer: "B) Elles sont fatiguées.",
        explanation: "Feminine plural requires 'Elles' and the adjective agreement 'fatiguées'."
      }
    ],
    writingPrompt: "Write a short paragraph (5-6 sentences) introducing yourself: name, nationality, profession, state of mind, and current location using ÊTRE.",
    speakingPrompt: "Say the full ÊTRE conjugation aloud along with adjectives: 'Je suis grand, tu es grand...'",
    checklist: [
      "Language Transfer track 3 finished",
      "ÊTRE conjugation written out 5x",
      "Completed Bonjour de France quiz",
      "Self-introduction paragraph drafted"
    ],
    selfAssessment: [
      "Can I recite ÊTRE without looking at notes?",
      "Do I make the liaison in 'Vous êtes' (voo-ZET)?"
    ]
  },
  {
    dayNumber: 3,
    title: "Definite & Indefinite Articles + Gender of Nouns",
    objective: "Understand grammatical gender (masculine/feminine) and master articles (le, la, l', les / un, une, des).",
    estimatedTime: "2 hours",
    outcome: "Correctly pair French nouns with their corresponding definite and indefinite articles.",
    schedule: [
      {
        time: "0:00 - 0:20",
        activity: "Warm-up & Review",
        duration: "20 mins",
        resource: "Lawless French",
        lessonName: "ÊTRE & Greetings Quiz Review",
        instructions: "Quick self-quiz on Day 1 & 2 vocabulary and ÊTRE conjugations.",
        howToPractice: "Recite ÊTRE backwards: ils sont, vous êtes, nous sommes..."
      },
      {
        time: "0:20 - 0:50",
        activity: "Grammar Core",
        duration: "30 mins",
        resource: "Learn French with Alexa",
        lessonName: "Definite & Indefinite Articles in French",
        instructions: "Study Le/La/L'/Les (the) vs Un/Une/Des (a/an/some). Note noun ending clues (-tion is feminine, -ment is masculine).",
        howToPractice: "Categorize 20 vocabulary nouns into Masculine vs Feminine columns."
      },
      {
        time: "0:50 - 1:10",
        activity: "Vocabulary Focus",
        duration: "20 mins",
        resource: "Duolingo / Lawless French",
        lessonName: "Common Everyday Objects & Classroom Items",
        instructions: "Always memorize nouns WITH their article (e.g., 'un livre', not just 'livre').",
        howToPractice: "Label 10 items in your room using sticky notes in French."
      },
      {
        time: "1:10 - 1:20",
        activity: "Break",
        duration: "10 mins",
        resource: "Rest",
        lessonName: "Hydration Break",
        instructions: "Rest eyes, walk around room.",
        howToPractice: "N/A"
      },
      {
        time: "1:20 - 1:40",
        activity: "Listening Practice",
        duration: "20 mins",
        resource: "Coffee Break French",
        lessonName: "Season 1, Episode 2 - Everyday Nouns",
        instructions: "Listen for articles precedes nouns in natural dialogue speed.",
        howToPractice: "Write down every article-noun pair you identify."
      },
      {
        time: "1:40 - 2:00",
        activity: "Reading & Writing",
        duration: "20 mins",
        resource: "TV5MONDE Apprendre",
        lessonName: "A1 - Identification des objets",
        instructions: "Complete article selection exercises on TV5MONDE.",
        howToPractice: "Write 6 sentences: 3 with definite articles, 3 with indefinite articles."
      }
    ],
    vocabulary: [
      { french: "Le livre / Un livre", english: "The book / A book", example: "C'est un livre intéressant.", pronunciation: "leh LEEVR / uh LEEVR" },
      { french: "La table / Une table", english: "The table / A table", example: "Le stylo est sur la table.", pronunciation: "lah TABL / oon TABL" },
      { french: "L'ami / Un ami", english: "The friend / A friend (m)", example: "C'est l'ami de Marc.", pronunciation: "lah-MEE / uh-nah-MEE" },
      { french: "Les voitures / Des voitures", english: "The cars / Some cars", example: "Il y a des voitures rapides.", pronunciation: "lay vwah-TOOR / day vwah-TOOR" },
      { french: "Le stylo", english: "The pen", example: "J'ai un stylo bleu.", pronunciation: "leh stee-LOH" },
      { french: "La maison", english: "The house", example: "La maison est grande.", pronunciation: "lah may-ZOH" },
      { french: "L'eau (f)", english: "The water", example: "Je veux de l'eau, s'il vous plaît.", pronunciation: "LOH" },
      { french: "Un homme / Une femme", english: "A man / A woman", example: "Un homme et une femme marchent.", pronunciation: "uh NOM / oon FAM" }
    ],
    exercises: [
      {
        question: "1. Choose the correct definite article for '___ université' (feminine, starts with vowel):",
        options: ["A) Le", "B) La", "C) L'"],
        answer: "C) L'",
        explanation: "Before any singular noun starting with a vowel or silent 'h', 'le' or 'la' contracts to 'l''."
      },
      {
        question: "2. Which of the following is the plural indefinite article ('some')?",
        options: ["A) Les", "B) Des", "C) Un"],
        answer: "B) Des",
        explanation: "'Des' is the plural of 'un' or 'une'."
      }
    ],
    writingPrompt: "List 8 items around your house using correct indefinite articles (un / une / des) and write a sentence for each stating where it is.",
    speakingPrompt: "Read your 8 house-item sentences aloud rapidly, emphasizing clear distinction between 'un' (nasal) and 'une' (distinct 'n' sound).",
    checklist: [
      "Learned rules for le/la/l'/les and un/une/des",
      "Labeled 10 household objects in French",
      "Completed TV5MONDE article identification exercise",
      "Mastered vowel contraction rule (l' "
    ],
    selfAssessment: [
      "Do I automatically memorize nouns paired with 'un' or 'une'?",
      "Can I pronounce 'un' vs 'une' correctly?"
    ]
  },
  {
    dayNumber: 4,
    title: "The Verb AVOIR (To Have) & Age Expressions",
    objective: "Master conjugation of AVOIR and learn key idiom uses (age, hunger, thirst, need).",
    estimatedTime: "2 hours",
    outcome: "Express possession, state your age, and express physical sensations like hunger or thirst.",
    schedule: [
      {
        time: "0:00 - 0:20",
        activity: "Warm-up & Drill",
        duration: "20 mins",
        resource: "Language Transfer",
        lessonName: "Track 4 - Auxiliary Verbs Concept",
        instructions: "Listen to Language Transfer track 4, focusing on possessive structures.",
        howToPractice: "Contrast 'Je suis' (ÊTRE) vs 'J'ai' (AVOIR)."
      },
      {
        time: "0:20 - 0:50",
        activity: "Grammar Core",
        duration: "30 mins",
        resource: "Learn French with Alexa",
        lessonName: "Le verbe AVOIR au présent",
        instructions: "Conjugate: J'ai, Tu as, Il/Elle/On a, Nous avons, Vous avez, Ils/Elles ont.",
        howToPractice: "Pay strict attention to pronunciation: 'Ils ont' (z-sound) vs 'Ils sont' (s-sound)."
      },
      {
        time: "0:50 - 1:10",
        activity: "Vocabulary & Idioms",
        duration: "20 mins",
        resource: "Lawless French",
        lessonName: "Expressions with Avoir (faim, soif, peur, besoin)",
        instructions: "Note that in French you 'have' hunger/age, you don't 'be' hungry/aged.",
        howToPractice: "Create flashcards for 6 essential 'avoir' expressions."
      },
      {
        time: "1:10 - 1:20",
        activity: "Break",
        duration: "10 mins",
        resource: "Rest",
        lessonName: "Stretch & Water",
        instructions: "Get up, move, drink water.",
        howToPractice: "N/A"
      },
      {
        time: "1:20 - 1:40",
        activity: "Listening Practice",
        duration: "20 mins",
        resource: "French Comprehensible Input",
        lessonName: "A1 - Mon Âge et ma Famille",
        instructions: "Listen to speaker describe family members' ages using AVOIR.",
        howToPractice: "Write down all numbers and ages heard."
      },
      {
        time: "1:40 - 2:00",
        activity: "Reading & Exercises",
        duration: "20 mins",
        resource: "Bonjour de France",
        lessonName: "A1 Exercises - Avoir au présent",
        instructions: "Complete 15 fill-in-the-blank sentences using AVOIR.",
        howToPractice: "Write 5 sentences about what you have in your bag."
      }
    ],
    vocabulary: [
      { french: "J'ai", english: "I have", example: "J'ai un chien.", pronunciation: "ZHAY" },
      { french: "Tu as", english: "You have (informal)", example: "Tu as quel âge ?", pronunciation: "too AH" },
      { french: "Il / Elle a", english: "He / She has", example: "Elle a 25 ans.", pronunciation: "eel / el AH" },
      { french: "Nous avons", english: "We have", example: "Nous avons faim.", pronunciation: "noo-zah-VOH" },
      { french: "Vous avez", english: "You have (plural/formal)", example: "Vous avez une voiture ?", pronunciation: "voo-zah-VAY" },
      { french: "Ils / Elles ont", english: "They have", example: "Ils ont deux chats.", pronunciation: "eel-ZOH" },
      { french: "Avoir faim / soif", english: "To be hungry / thirsty", example: "J'ai très faim.", pronunciation: "ah-VWAHR FAH / SWAHF" },
      { french: "Avoir besoin de", english: "To need", example: "J'ai besoin d'eau.", pronunciation: "ah-VWAHR beh-ZWAHN deh" }
    ],
    exercises: [
      {
        question: "1. How do you say 'I am 20 years old' in French?",
        options: ["A) Je suis 20 ans.", "B) J'ai 20 ans.", "C) Je fais 20 ans."],
        answer: "B) J'ai 20 ans.",
        explanation: "French uses the verb AVOIR (to have) for age, not ÊTRE."
      },
      {
        question: "2. Choose the sentence that means 'They have a house':",
        options: ["A) Ils ont une maison.", "B) Ils sont une maison.", "C) Ils avez une maison."],
        answer: "A) Ils ont une maison.",
        explanation: "'Ils' takes the conjugation 'ont' for the verb AVOIR."
      }
    ],
    writingPrompt: "Write a short paragraph detailing your age, 3 things you own, and 2 physical feelings (e.g., J'ai faim, j'ai soif).",
    speakingPrompt: "Practice saying 'Ils sont' (they are) vs 'Ils ont' (they have) 10 times each to distinguish the 'S' sound from the 'Z' liaison sound.",
    checklist: [
      "Conjugated AVOIR 5x from memory",
      "Learned age formula (J'ai X ans)",
      "Mastered 4 core Avoir idioms (faim, soif, peur, besoin)",
      "Completed Bonjour de France AVOIR drill"
    ],
    selfAssessment: [
      "Do I clearly distinguish 'Ils sont' (eel-SOH) from 'Ils ont' (eel-ZOH)?",
      "Do I remember to say 'ans' when stating age?"
    ]
  },
  {
    dayNumber: 5,
    title: "Regular -ER Verbs in the Present Tense",
    objective: "Learn the largest verb group in French (-ER verbs) and master present tense endings (-e, -es, -e, -ons, -ez, -ent).",
    estimatedTime: "2 hours",
    outcome: "Conjugate hundreds of regular -ER verbs instantly in the present tense.",
    schedule: [
      {
        time: "0:00 - 0:20",
        activity: "Pronunciation & Rule Overview",
        duration: "20 mins",
        resource: "Language Transfer",
        lessonName: "Track 5 - Verb Stems & Endings",
        instructions: "Understand how to drop the -ER infinitive stem and attach subject endings.",
        howToPractice: "Practice silent endings: -e, -es, -ent all sound identical!"
      },
      {
        time: "0:20 - 0:50",
        activity: "Grammar Core",
        duration: "30 mins",
        resource: "Learn French with Alexa",
        lessonName: "Regular -ER Verbs Present Tense",
        instructions: "Study rule for Parler: je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent.",
        howToPractice: "Conjugate HABITER, AIMER, and MANGER on paper."
      },
      {
        time: "0:50 - 1:10",
        activity: "Vocabulary Focus",
        duration: "20 mins",
        resource: "Lawless French",
        lessonName: "Top 15 Most Common -ER Verbs",
        instructions: "Memorize key action verbs: Parler, Habiter, Aimer, Travailler, Écouter, Regarder.",
        howToPractice: "Create sentence stems: 'J'aime...', 'Je travaille à...'"
      },
      {
        time: "1:10 - 1:20",
        activity: "Break",
        duration: "10 mins",
        resource: "Rest",
        lessonName: "Screen Break",
        instructions: "Step outside or look out window.",
        howToPractice: "N/A"
      },
      {
        time: "1:20 - 1:40",
        activity: "Listening Practice",
        duration: "20 mins",
        resource: "Coffee Break French",
        lessonName: "Season 1, Episode 3 - Talking about hobbies",
        instructions: "Identify -ER verbs spoken by native speakers.",
        howToPractice: "Write down every -ER verb form you hear."
      },
      {
        time: "1:40 - 2:00",
        activity: "Reading & Writing",
        duration: "20 mins",
        resource: "TV5MONDE Apprendre",
        lessonName: "A1 - Parler de ses goûts",
        instructions: "Read short blurbs about people's likes and jobs.",
        howToPractice: "Write 6 sentences about what you like and don't like using 'J'aime' and 'Je n'aime pas'."
      }
    ],
    vocabulary: [
      { french: "Parler", english: "To speak / talk", example: "Je parle français et anglais.", pronunciation: "par-LAY" },
      { french: "Habiter", english: "To live (reside)", example: "J'habite à Paris.", pronunciation: "ah-bee-TAY" },
      { french: "Aimer", english: "To like / love", example: "J'aime le chocolat.", pronunciation: "ay-MAY" },
      { french: "Travailler", english: "To work", example: "Nous travaillons ici.", pronunciation: "trah-vy-YAY" },
      { french: "Écouter", english: "To listen to", example: "Tu écoutes la musique ?", pronunciation: "ay-koo-TAY" },
      { french: "Regarder", english: "To watch / look at", example: "Ils regardent la télévision.", pronunciation: "reh-gar-DAY" },
      { french: "Étudier", english: "To study", example: "Vous étudiez le français.", pronunciation: "ay-too-DYAY" },
      { french: "Manger", english: "To eat", example: "Elle mange une pomme.", pronunciation: "mahn-ZHAY" }
    ],
    exercises: [
      {
        question: "1. What is the 'nous' ending for regular -ER verbs in the present tense?",
        options: ["A) -ez", "B) -ons", "C) -ent"],
        answer: "B) -ons",
        explanation: "'Nous' always takes the '-ons' ending (e.g., nous parlons)."
      },
      {
        question: "2. Which three subject pronouns share the EXACT same pronunciation for -ER verb endings?",
        options: ["A) Je, Tu, Il / Elle", "B) Nous, Vous, Ils", "C) Je, Nous, Vous"],
        answer: "A) Je, Tu, Il / Elle",
        explanation: "The endings -e (je), -es (tu), and -e (il/elle) are all silent, making the spoken verb sound identical."
      }
    ],
    writingPrompt: "Write a paragraph (6-8 sentences) detailing your daily activities using at least 5 different -ER verbs (where you live, where you work, what you watch/listen to).",
    speakingPrompt: "Conjugate TRAVAILLER aloud across all subject pronouns, keeping 'je travaille, tu travailles, il travaille, ils travaillent' phonetically identical at the ending.",
    checklist: [
      "Memorized -ER verb ending chart (-e, -es, -e, -ons, -ez, -ent)",
      "Conjugated 3 -ER verbs on paper",
      "Completed TV5MONDE exercise",
      "Drafted daily activity paragraph"
    ],
    selfAssessment: [
      "Do I remember that '-ent' in 'ils parlent' is completely SILENT?",
      "Can I correctly drop the -ER stem before adding endings?"
    ]
  },
  {
    dayNumber: 6,
    title: "Numbers 0–100, Days of the Week & Months",
    objective: "Master French counting from 0 to 100, days of the week, months, and basic calendar dates.",
    estimatedTime: "2 hours",
    outcome: "Understand prices, state phone numbers, give your date of birth, and schedule days.",
    schedule: [
      {
        time: "0:00 - 0:20",
        activity: "Numbers Warm-up (0-20)",
        duration: "20 mins",
        resource: "Learn French with Alexa",
        lessonName: "French Numbers 0 to 20",
        instructions: "Focus on tricky sounds: un, deux, trois, six (seess), dix (deess).",
        howToPractice: "Count backward from 20 to 0 aloud."
      },
      {
        time: "0:20 - 0:50",
        activity: "Numbers 20-100 & Math Logic",
        duration: "30 mins",
        resource: "Lawless French",
        lessonName: "French Numbers 20-100 Mechanics",
        instructions: "Learn the vigesimal base-80 system: 70 = 60+10 (soixante-dix), 80 = 4x20 (quatre-vingts), 90 = 4x20+10 (quatre-vingt-dix).",
        howToPractice: "Write out 10 random numbers between 50 and 99 in French words."
      },
      {
        time: "0:50 - 1:10",
        activity: "Days, Months & Dates",
        duration: "20 mins",
        resource: "The French Experiment",
        lessonName: "Days of the week and Months in French",
        instructions: "Note: Days and months are NOT capitalized in French (e.g., lundi, mai).",
        howToPractice: "Write today's full date in French: 'Aujourd'hui, c'est [jour] [nombre] [mois]'."
      },
      {
        time: "1:10 - 1:20",
        activity: "Break",
        duration: "10 mins",
        resource: "Rest",
        lessonName: "Hydrate & Move",
        instructions: "Walk around, stretch legs.",
        howToPractice: "N/A"
      },
      {
        time: "1:20 - 1:40",
        activity: "Listening Drills",
        duration: "20 mins",
        resource: "French Comprehensible Input",
        lessonName: "A1 - Ecouter les Nombres et Prix",
        instructions: "Listen to prices and phone numbers being read aloud.",
        howToPractice: "Write down the exact numbers you hear, then verify with transcript."
      },
      {
        time: "1:40 - 2:00",
        activity: "Reading & Writing Practice",
        duration: "20 mins",
        resource: "Bonjour de France",
        lessonName: "A1 Vocabulaire - Les jours et les mois",
        instructions: "Complete date-matching worksheets.",
        howToPractice: "Write down the birthdays of 5 family members in full French sentences."
      }
    ],
    vocabulary: [
      { french: "Lundi, Mardi, Mercredi", english: "Monday, Tuesday, Wednesday", example: "Lundi, je travaille.", pronunciation: "luhn-DEE, mar-DEE, mair-kreh-DEE" },
      { french: "Jeudi, Vendredi, Samedi, Dimanche", english: "Thursday, Friday, Saturday, Sunday", example: "Le weekend, c'est samedi et dimanche.", pronunciation: "zhuh-DEE, vahn-dreh-DEE, sah-mdee, dee-MAHNSH" },
      { french: "Janvier / Juillet / Décembre", english: "January / July / December", example: "Mon anniversaire est en juillet.", pronunciation: "zhahn-VYAY / zhwee-YEH / day-SAHMBR" },
      { french: "Soixante-dix (70)", english: "Seventy (60+10)", example: "Il a soixante-dix ans.", pronunciation: "swah-SAHNT-DEESS" },
      { french: "Quatre-vingts (80)", english: "Eighty (4x20)", example: "Chambre numéro quatre-vingts.", pronunciation: "katr-VAHN" },
      { french: "Quatre-vingt-dix (90)", english: "Ninety (4x20+10)", example: "Page quatre-vingt-dix.", pronunciation: "katr-vahn-DEESS" },
      { french: "Cent (100)", english: "One hundred", example: "Ça coûte cent euros.", pronunciation: "SAHN" },
      { french: "Quelle est la date ?", english: "What is the date?", example: "Quelle est la date aujourd'hui ?", pronunciation: "kel ay lah DAT" }
    ],
    exercises: [
      {
        question: "1. How do you say '85' in French?",
        options: ["A) Soixante-quinze", "B) Quatre-vingt-cinq", "C) Sept-vingt-cinq"],
        answer: "B) Quatre-vingt-cinq",
        explanation: "85 is expressed as 4x20 + 5 (quatre-vingt-cinq)."
      },
      {
        question: "2. Are days of the week and months capitalized in French prose?",
        options: ["A) Yes, always", "B) No, never capitalized unless at sentence start", "C) Only months are capitalized"],
        answer: "B) No, never capitalized unless at sentence start",
        explanation: "Unlike English, French calendar terms remain lowercase in regular text."
      }
    ],
    writingPrompt: "Write down 5 pretend transaction receipts in sentence form: 'The book costs 74 euros' -> 'Le livre coûte soixante-quatorze euros.'",
    speakingPrompt: "Count by tens aloud from 10 to 100: dix, vingt, trente, quarante, cinquante, soixante, soixante-dix, quatre-vingts, quatre-vingt-dix, cent.",
    checklist: [
      "Mastered 70s, 80s, and 90s math logic",
      "Learned all 7 days and 12 months",
      "Completed French numbers listening test",
      "Wrote 5 complete date/price sentences"
    ],
    selfAssessment: [
      "Can I calculate 70, 80, 90 in French without hesitation?",
      "Do I remember NOT to capitalize days and months?"
    ]
  },
  {
    dayNumber: 7,
    title: "Week 1 Comprehensive Review & Integration",
    objective: "Consolidate all Week 1 foundations: Greetings, ÊTRE, AVOIR, Articles, -ER Verbs, Numbers & Dates.",
    estimatedTime: "2.5 hours",
    outcome: "Verify A1 foundation strength, complete Week 1 self-assessment, and execute a 2-minute spoken introduction.",
    schedule: [
      {
        time: "0:00 - 0:30",
        activity: "Grammar & Conjugation Review",
        duration: "30 mins",
        resource: "Lawless French",
        lessonName: "A1 Grammar Diagnostic Test",
        instructions: "Take the A1 practice test covering ÊTRE, AVOIR, -ER verbs, and articles.",
        howToPractice: "Review every question missed and re-read core rules."
      },
      {
        time: "0:30 - 1:00",
        activity: "Vocabulary Speed Drill",
        duration: "30 mins",
        resource: "Anki / Custom Log",
        lessonName: "Week 1 Vocabulary Deck (50+ words)",
        instructions: "Run through all vocabulary cards learned from Days 1 through 6.",
        howToPractice: "Separate cards into 'Mastered' vs 'Needs Review'."
      },
      {
        time: "1:00 - 1:10",
        activity: "Break",
        duration: "10 mins",
        resource: "Rest",
        lessonName: "Brain Rest",
        instructions: "Disconnect completely for 10 minutes.",
        howToPractice: "N/A"
      },
      {
        time: "1:10 - 1:40",
        activity: "Listening Comprehensive Review",
        duration: "30 mins",
        resource: "Coffee Break French",
        lessonName: "Season 1 Review Episode / Quiz",
        instructions: "Listen to the review episode synthesising dialogues from Week 1.",
        howToPractice: "Write a summary of the dialogue in English."
      },
      {
        time: "1:40 - 2:30",
        activity: "Final Project & Assessment",
        duration: "50 mins",
        resource: "Self-Project",
        lessonName: "The Week 1 Milestone Deliverable",
        instructions: "Execute both writing and speaking challenges without looking at notes.",
        howToPractice: "Record audio on phone and evaluate against rubrics."
      }
    ],
    vocabulary: [
      { french: "Tout le monde", english: "Everyone / Everybody", example: "Bonjour tout le monde !", pronunciation: "too leh MOHND" },
      { french: "Aujourd'hui", english: "Today", example: "Aujourd'hui, c'est lundi.", pronunciation: "oh-zhoor-DWEE" },
      { french: "Maintenant", english: "Now", example: "Maintenant, nous parlons français.", pronunciation: "mahnt-NAHN" },
      { french: "Comprendre", english: "To understand", example: "Je comprends le français.", pronunciation: "kohm-PRAHNDR" },
      { french: "Enchanté(e)", english: "Nice to meet you", example: "Enchanté, je m'appelle Paul.", pronunciation: "ahn-shahn-TAY" }
    ],
    exercises: [
      {
        question: "1. Conjugate: 'Nous (avoir) ____ un livre et vous (être) ____ étudiants.'",
        options: ["A) avons / êtes", "B) sommes / avez", "C) ont / sont"],
        answer: "A) avons / êtes",
        explanation: "'Nous avons' (we have) and 'vous êtes' (you are)."
      },
      {
        question: "2. Translate: 'She lives in Paris and speaks French.'",
        options: ["A) Elle habite à Paris et parle français.", "B) Elle être à Paris et parler français.", "C) Elle a Paris et habite français."],
        answer: "A) Elle habite à Paris et parle français.",
        explanation: "Correct present tense conjugation of regular -ER verbs 'habiter' and 'parler'."
      }
    ],
    writingPrompt: "WEEK 1 MILESTONE WRITING TASK: Write a 10-12 sentence personal essay including: Greetings, name, age, nationality, profession, where you live, what languages you speak, 3 things you own, 2 things you like to do, and today's date.",
    speakingPrompt: "WEEK 1 MILESTONE SPEAKING TASK: Without reading from your paper, record a 90-second video/audio introducing yourself using all Week 1 concepts.",
    checklist: [
      "Completed A1 Grammar Diagnostic Test",
      "Reviewed all 50+ Week 1 Vocab words",
      "Finished Week 1 Milestone Writing Essay",
      "Recorded 90-second Spoken Milestone Audio"
    ],
    selfAssessment: [
      "Can I introduce myself fluently for 1-2 minutes without relying on English?",
      "Have I eliminated confusion between ÊTRE and AVOIR?"
    ]
  }
];

const WEEK_1_GRAMMAR_SUMMARY: WeekGrammarSummary = {
  week: 1,
  title: "Week 1 Grammar Essentials Cheat-Sheet",
  keyRules: [
    {
      topic: "1. Auxiliary Verbs: ÊTRE vs AVOIR",
      summary: "ÊTRE denotes states of being, identity, and professions. AVOIR denotes possession, age (J'ai 25 ans), and physical states (J'ai faim/soif).",
      examples: [
        "Je suis américain (I am American - identity)",
        "J'ai 30 ans (I am 30 years old - age requires AVOIR)"
      ]
    },
    {
      topic: "2. Regular -ER Verb Present Tense Endings",
      summary: "Drop the -ER infinitive ending and add: Je -e, Tu -es, Il/Elle -e, Nous -ons, Vous -ez, Ils/Elles -ent.",
      examples: [
        "Parler -> Je parle, Tu parles, Il parle, Nous parlons, Vous parlez, Ils parlent",
        "Note: -e, -es, and -ent are phonetically SILENT."
      ]
    },
    {
      topic: "3. Definite vs Indefinite Articles",
      summary: "Definite (The): Le (m), La (f), L' (vowel/silent h), Les (plural). Indefinite (A/Some): Un (m), Une (f), Des (plural).",
      examples: [
        "Le livre (The book) -> Un livre (A book)",
        "L'eau (The water) -> Une eau (A water)"
      ]
    }
  ],
  commonPitfalls: [
    "DONT SAY: 'Je suis 25 years old' -> SAY: 'J'ai 25 ans' (Always use AVOIR for age).",
    "DONT SAY: 'Ils parlent' pronouncing the 'ent' sound -> The 'ent' ending on verbs is ALWAYS silent!",
    "DONT SAY: 'Je suis un professeur' -> Omit articles when stating professions after ÊTRE (e.g., 'Je suis professeur').",
    "DONT SAY: 'Ils ont' (eel-SOH) vs 'Ils sont' (eel-ZOH) -> Maintain strict 'Z' liaison for AVOIR ('Ils ont' = eel-ZOH)."
  ]
};

// --- MAIN APPLICATION COMPONENT ---
export default function FrenchLearningApp() {
  const [currentDayNumber, setCurrentDayNumber] = useState<number>(1);
  const [completedActivities, setCompletedActivities] = useState<Record<string, boolean>>({});
  const [showAnswerKeys, setShowAnswerKeys] = useState<Record<string, boolean>>({});
  const [activeTab, setActiveTab] = useState<'daily' | 'vocab' | 'grammar'>('daily');

  // Load progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('french_app_progress');
    if (savedProgress) {
      try {
        setCompletedActivities(JSON.parse(savedProgress));
      } catch (e) {
        console.error("Failed to load progress", e);
      }
    }
  }, []);

  // Save progress to localStorage
  const toggleActivity = (activityKey: string) => {
    const updated = { ...completedActivities, [activityKey]: !completedActivities[activityKey] };
    setCompletedActivities(updated);
    localStorage.setItem('french_app_progress', JSON.stringify(updated));
  };

  const toggleAnswerKey = (exerciseKey: string) => {
    setShowAnswerKeys(prev => ({ ...prev, [exerciseKey]: !prev[exerciseKey] }));
  };

  const currentDay = WEEK_1_DATA.find(d => d.dayNumber === currentDayNumber) || WEEK_1_DATA[0];

  // Calculate Overall Progress
  const totalChecklistItems = WEEK_1_DATA.reduce((acc, day) => acc + day.checklist.length, 0);
  const completedChecklistItems = Object.keys(completedActivities).filter(key => completedActivities[key]).length;
  const progressPercentage = Math.round((completedChecklistItems / totalChecklistItems) * 100) || 0;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* HEADER NAVBAR */}
      <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">🇫🇷</span>
            <div>
              <h1 className="font-bold text-lg leading-none">French 30-Day Master</h1>
              <span className="text-xs text-slate-400">A0 → A2 Intensive Self-Study Portal</span>
            </div>
          </div>
          
          {/* Global Progress Bar */}
          <div className="hidden md:flex items-center space-x-4 w-1/3">
            <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
              <div 
                className="bg-blue-500 h-2.5 rounded-full transition-all duration-500 ease-out" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <span className="text-xs text-slate-300 font-mono font-semibold whitespace-nowrap">
              {progressPercentage}% Complete
            </span>
          </div>
        </div>
      </header>

      {/* NAVIGATION TABS */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-8">
          <button
            onClick={() => setActiveTab('daily')}
            className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
              activeTab === 'daily'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <span>📅 Daily Schedule & Curriculum</span>
          </button>

          <button
            onClick={() => setActiveTab('vocab')}
            className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
              activeTab === 'vocab'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <span>📖 Master Vocabulary Log</span>
          </button>

          <button
            onClick={() => setActiveTab('grammar')}
            className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
              activeTab === 'grammar'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <span>📝 Week 1 Grammar Cheat-Sheet</span>
          </button>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* --- TAB 1: DAILY SCHEDULE --- */}
        {activeTab === 'daily' && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* LEFT SIDEBAR: Table of Contents / Day Selector */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 sticky top-24">
                <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  Week 1: French Foundations
                </h2>
                <div className="space-y-2">
                  {WEEK_1_DATA.map((d) => {
                    const dayChecklistKeys = d.checklist.map((_, idx) => `day_${d.dayNumber}_check_${idx}`);
                    const isDayComplete = dayChecklistKeys.length > 0 && dayChecklistKeys.every(k => completedActivities[k]);
                    
                    return (
                      <button
                        key={d.dayNumber}
                        onClick={() => setCurrentDayNumber(d.dayNumber)}
                        className={`w-full text-left p-3 rounded-lg border transition-all flex items-center justify-between ${
                          currentDayNumber === d.dayNumber
                            ? 'bg-blue-50 border-blue-500 text-blue-900 font-semibold shadow-xs'
                            : 'border-slate-100 hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center space-x-3 truncate">
                          <span className={`w-6 h-6 rounded-full text-xs flex items-center justify-center font-bold ${
                            currentDayNumber === d.dayNumber ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                          }`}>
                            {d.dayNumber}
                          </span>
                          <span className="text-xs truncate">{d.title}</span>
                        </div>
                        {isDayComplete && (
                          <span className="text-emerald-600 text-sm font-bold">✓</span>
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <div className="text-xs text-slate-500 mb-2">Week 1 Target Progress:</div>
                  <div className="w-full bg-slate-100 rounded-full h-2 mb-1">
                    <div 
                      className="bg-emerald-500 h-2 rounded-full transition-all" 
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-xs font-mono text-slate-500">{completedChecklistItems} / {totalChecklistItems} tasks done</div>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT: Day Curriculum & Timetable */}
            <div className="lg:col-span-3 space-y-8">
              
              {/* DAY HEADER CARD */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold tracking-wide uppercase">
                      Day {currentDay.dayNumber} Curriculum
                    </span>
                    <h2 className="text-2xl font-bold text-slate-900 mt-2">{currentDay.title}</h2>
                  </div>
                  <div className="bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 text-right">
                    <span className="text-xs text-slate-500 block">Est. Duration</span>
                    <span className="text-sm font-bold text-slate-800">{currentDay.estimatedTime}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-100">
                  <div>
                    <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Daily Objective</h4>
                    <p className="text-sm text-slate-700 mt-1">{currentDay.objective}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Expected Learning Outcome</h4>
                    <p className="text-sm text-slate-700 mt-1">{currentDay.outcome}</p>
                  </div>
                </div>
              </div>

              {/* TIMETABLE & EXACT SCHEDULE */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center space-x-2">
                  <span>⏱️ Exact Timetable & Activity Schedule</span>
                </h3>

                <div className="space-y-4">
                  {currentDay.schedule.map((item, idx) => (
                    <div key={idx} className="border border-slate-100 rounded-lg p-4 hover:border-blue-200 transition-colors bg-slate-50/50">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="bg-slate-800 text-white font-mono text-xs font-bold px-2.5 py-1 rounded">
                            {item.time}
                          </span>
                          <span className="font-bold text-slate-800 text-sm">{item.activity}</span>
                        </div>
                        <span className="text-xs font-semibold px-2 py-0.5 bg-blue-50 text-blue-700 rounded border border-blue-100">
                          {item.duration}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs mt-3 bg-white p-3 rounded border border-slate-100">
                        <div>
                          <span className="font-bold text-slate-500">Resource & Lesson:</span>
                          <p className="text-slate-800 font-medium">{item.resource} — <span className="italic">{item.lessonName}</span></p>
                        </div>
                        <div>
                          <span className="font-bold text-slate-500">How to Practise:</span>
                          <p className="text-slate-700">{item.howToPractice}</p>
                        </div>
                        <div className="md:col-span-2 pt-2 border-t border-slate-50">
                          <span className="font-bold text-slate-500">Instructions:</span>
                          <p className="text-slate-700">{item.instructions}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* DAY VOCABULARY QUICK LOG */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  📚 Day {currentDay.dayNumber} Vocabulary Focus
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-700">
                    <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-semibold border-b">
                      <tr>
                        <th className="p-3">French Word</th>
                        <th className="p-3">English Meaning</th>
                        <th className="p-3">Example Sentence</th>
                        <th className="p-3">Pronunciation Note</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {currentDay.vocabulary.map((v, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/80">
                          <td className="p-3 font-bold text-blue-900">{v.french}</td>
                          <td className="p-3">{v.english}</td>
                          <td className="p-3 italic text-slate-600">{v.example}</td>
                          <td className="p-3 font-mono text-slate-500">{v.pronunciation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* PRACTICE EXERCISES & ANSWER KEYS */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  ✍️ Interactive Practice Exercises
                </h3>
                <div className="space-y-6">
                  {currentDay.exercises.map((ex, idx) => {
                    const exerciseKey = `day_${currentDay.dayNumber}_ex_${idx}`;
                    const isAnswerVisible = !!showAnswerKeys[exerciseKey];

                    return (
                      <div key={idx} className="border border-slate-200 rounded-lg p-4 bg-slate-50/30">
                        <p className="font-medium text-slate-800 text-sm mb-3">{ex.question}</p>
                        
                        {ex.options && (
                          <div className="space-y-2 mb-4">
                            {ex.options.map((opt, oIdx) => (
                              <div key={oIdx} className="text-xs bg-white p-2 rounded border border-slate-100 text-slate-700">
                                {opt}
                              </div>
                            ))}
                          </div>
                        )}

                        <button
                          onClick={() => toggleAnswerKey(exerciseKey)}
                          className="text-xs bg-slate-800 text-white font-semibold px-3 py-1.5 rounded hover:bg-slate-700 transition-colors"
                        >
                          {isAnswerVisible ? 'Hide Answer' : 'Show Answer Key'}
                        </button>

                        {isAnswerVisible && (
                          <div className="mt-3 p-3 bg-emerald-50 border border-emerald-200 rounded text-xs">
                            <span className="font-bold text-emerald-800">Correct Answer: {ex.answer}</span>
                            <p className="text-emerald-700 mt-1">{ex.explanation}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* WRITING & SPEAKING PROMPTS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                  <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center space-x-2">
                    <span>✏️ Writing Exercise</span>
                  </h4>
                  <p className="text-xs text-slate-700 bg-slate-50 p-3 rounded border border-slate-100 leading-relaxed">
                    {currentDay.writingPrompt}
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                  <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center space-x-2">
                    <span>🗣️ Speaking Drill</span>
                  </h4>
                  <p className="text-xs text-slate-700 bg-slate-50 p-3 rounded border border-slate-100 leading-relaxed">
                    {currentDay.speakingPrompt}
                  </p>
                </div>
              </div>

              {/* CHECKLIST & SELF EVALUATION */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  ✅ Daily Progress Checklist & Self-Assessment
                </h3>

                <div className="space-y-3">
                  {currentDay.checklist.map((item, idx) => {
                    const activityKey = `day_${currentDay.dayNumber}_check_${idx}`;
                    const isChecked = !!completedActivities[activityKey];

                    return (
                      <label 
                        key={idx} 
                        className={`flex items-center space-x-3 p-3 rounded-lg border text-xs cursor-pointer transition-colors ${
                          isChecked ? 'bg-emerald-50 border-emerald-200 text-emerald-900 font-medium' : 'bg-white border-slate-200 text-slate-700'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleActivity(activityKey)}
                          className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span>{item}</span>
                      </label>
                    );
                  })}
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">Self-Assessment Check</h4>
                  <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1">
                    {currentDay.selfAssessment.map((q, idx) => (
                      <li key={idx}>{q}</li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* --- TAB 2: MASTER VOCABULARY LOG --- */}
        {activeTab === 'vocab' && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Week 1 Master Vocabulary Log</h2>
                <p className="text-xs text-slate-500 mt-1">Consolidated list of all 50+ words introduced across Days 1 through 7.</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-900 text-white uppercase tracking-wider font-semibold">
                  <tr>
                    <th className="p-3">Day</th>
                    <th className="p-3">French Word / Phrase</th>
                    <th className="p-3">English Translation</th>
                    <th className="p-3">Contextual Example Sentence</th>
                    <th className="p-3">Phonetic / Pronunciation Note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {WEEK_1_DATA.flatMap(day => 
                    day.vocabulary.map((v, idx) => (
                      <tr key={`${day.dayNumber}-${idx}`} className="hover:bg-slate-50">
                        <td className="p-3 font-bold text-slate-400">Day {day.dayNumber}</td>
                        <td className="p-3 font-bold text-blue-900">{v.french}</td>
                        <td className="p-3 font-medium">{v.english}</td>
                        <td className="p-3 italic text-slate-600">{v.example}</td>
                        <td className="p-3 font-mono text-slate-500">{v.pronunciation}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* --- TAB 3: WEEK 1 GRAMMAR CHEAT-SHEET --- */}
        {activeTab === 'grammar' && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">{WEEK_1_GRAMMAR_SUMMARY.title}</h2>
              <p className="text-xs text-slate-500 mt-1">Essential grammar rules, conjugation patterns, and traps to avoid.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {WEEK_1_GRAMMAR_SUMMARY.keyRules.map((rule, idx) => (
                <div key={idx} className="border border-slate-200 rounded-lg p-4 bg-slate-50/50">
                  <h3 className="font-bold text-sm text-blue-900 mb-2">{rule.topic}</h3>
                  <p className="text-xs text-slate-700 mb-3 leading-relaxed">{rule.summary}</p>
                  <div className="bg-white p-3 rounded border border-slate-100 text-xs">
                    <span className="font-bold text-slate-500 block mb-1">Examples:</span>
                    <ul className="list-disc pl-4 space-y-1 text-slate-600">
                      {rule.examples.map((ex, eIdx) => (
                        <li key={eIdx}>{ex}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h3 className="font-bold text-amber-900 text-sm mb-3 flex items-center space-x-2">
                <span>⚠️ Top Beginner Pitfalls & Common Errors</span>
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-amber-800">
                {WEEK_1_GRAMMAR_SUMMARY.commonPitfalls.map((pitfall, idx) => (
                  <li key={idx} className="bg-white/80 p-3 rounded border border-amber-200">
                    {pitfall}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
