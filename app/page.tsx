"use client";

import React, { useState, useEffect } from "react";

// --- TYPE DEFINITIONS ---
interface Activity {
  name: string;
  duration: string;
  details: string;
  resource: string;
  why: string;
  how: string;
}

interface DayData {
  day: number;
  title: string;
  objective: string;
  estimatedTime: string;
  activities: Activity[];
  grammarExercise: {
    question: string;
    options?: string[];
    answer: string;
    explanation: string;
  };
  homework: string;
  vocabList: { word: string; translation: string; pronunciation: string }[];
}

interface WeekData {
  weekNumber: number;
  theme: string;
  target: string;
  grammarSummary: string;
  days: DayData[];
}

// --- FULL 30-DAY CURRICULUM DATA GENERATOR ---
const generate30DayCourse = (): WeekData[] => {
  const weeks: WeekData[] = [];

  const weekThemes = [
    { num: 1, theme: "French Foundations (A0 → A1)", target: "Understand pronunciation, greetings, subject pronouns, être, avoir, articles, present tense -ER verbs, numbers, days, and months." },
    { num: 2, theme: "Daily Communication (A1)", target: "Talk about daily life, ask questions, tell time, describe people/places, use adjectives, negation, common verbs, and shopping." },
    { num: 3, theme: "Speaking with Confidence (Strong A1)", target: "Use Passé Composé, Futur Proche, travel vocabulary, hobbies, weather, transportation, and hold 3-5 minute conversations." },
    { num: 4, theme: "Connecting Ideas & Real Conversations (A2)", target: "Use direct/indirect object pronouns, imperfect tense introduction, conditional basics, connectors, and write 300-500 words." },
  ];

  const dailyTopics = [
    // Week 1
    "Alphabet, Nasal Sounds & Greetings", "Subject Pronouns & Verbs 'Être' / 'Avoir'", "Definite & Indefinite Articles", "Regular -ER Verbs in Present Tense", "Numbers 1-100, Days & Months", "Family Vocabulary & Possessive Adjectives", "Week 1 Review & Assessment",
    // Week 2
    "Telling Time & Daily Routines", "Forming Questions (Est-ce que, inversion)", "Adjective Agreement & Position (BANGS)", "Negation (Ne... pas, Ne... jamais)", "Common Irregular Verbs (Aller, Faire, Venir)", "Food & Ordering at a Cafe", "Week 2 Review & Assessment",
    // Week 3
    "Futur Proche (Aller + Infinitive)", "Passé Composé with Avoir", "Passé Composé with Être (Dr & Mrs Vandertramp)", "Weather & Seasons Vocabulary", "Transportation & Asking for Directions", "Hobbies & Free Time Activities", "Week 3 Review & Assessment",
    // Week 4
    "Direct Object Pronouns (Le, La, Les)", "Indirect Object Pronouns (Lui, Leur)", "Introduction to Imparfait", "Expressing Opinions & Logical Connectors", "Conditional Basics (Je voudrais...)", "Subjunctive Awareness & Complex Sentences", "Comprehensive Practice & Mock Exam", "Final Speaking & Writing Assessment", "30-Day Course Review & B1 Roadmap"
  ];

  let dayCounter = 1;

  for (let w = 0; w < 4; w++) {
    const weekDays: DayData[] = [];
    const isLastWeek = w === 3;
    const daysInWeek = isLastWeek ? 9 : 7; // Total 30 days (7 + 7 + 7 + 9)

    for (let d = 0; d < daysInWeek; d++) {
      const isSunday = d === 6 && !isLastWeek;
      const currentDayNumber = dayCounter;
      const topic = dailyTopics[currentDayNumber - 1] || `Advanced Topic Day ${currentDayNumber}`;

      if (isSunday) {
        weekDays.push({
          day: currentDayNumber,
          title: `Day ${currentDayNumber}: Sunday Review & Assessment`,
          objective: "Consolidate all grammar, vocabulary, and listening acquired this week.",
          estimatedTime: "120 mins",
          activities: [
            { name: "Vocabulary Spaced Repetition", duration: "25 mins", details: "Review all Anki cards or flashcards created Monday through Saturday.", resource: "Anki / Custom Vocab Log", why: "Prevents memory decay.", how: "Test yourself English to French." },
            { name: "Grammar Redo & Quiz", duration: "30 mins", details: "Redo all weekly grammar exercises and complete Lawless French chapter quizzes.", resource: "Lawless French Quizzes", why: "Identifies weak points before starting the next week.", how: "Aim for >85% accuracy." },
            { name: "Listening & Shadowing Practice", duration: "35 mins", details: "Re-listen to weekly podcast episodes while reading the transcript aloud.", resource: "Coffee Break French", why: "Improves pronunciation and fluid rhythm.", how: "Shadow speaker with 1 second delay." },
            { name: "Weekly Assessment", duration: "30 mins", details: "Write a 150-word synthesis incorporating all grammar patterns learned this week.", resource: "Self-Journaling", why: "Transforms passive knowledge into active production.", how: "Write without checking a translator." }
          ],
          grammarExercise: {
            question: `Review Question (Week ${w + 1}): Write a short paragraph using at least 3 main topics learned this week.`,
            answer: "Example: Bonjour, je suis étudiant. J'aime le français et j'ai deux frères.",
            explanation: "Review exercises verify mastery across all 6 preceding days."
          },
          homework: "Rest and reflect on your weekly progress chart.",
          vocabList: [
            { word: "La révision", translation: "Review / Revision", pronunciation: "lah ray-vee-zyohn" },
            { word: "L'évaluation (f)", translation: "Assessment", pronunciation: "leh-vah-loo-ah-syohn" }
          ]
        });
      } else {
        weekDays.push({
          day: currentDayNumber,
          title: `Day ${currentDayNumber}: ${topic}`,
          objective: `Master ${topic} with structured listening, grammar drills, and active practice.`,
          estimatedTime: "120 mins",
          activities: [
            { name: "Pronunciation & Warm-up", duration: "15 mins", details: `Focus on French phonetics and acoustic patterns relevant to ${topic}.`, resource: "Language Transfer French / Forvo", why: "Builds accent accuracy early.", how: "Repeat sounds aloud 5 times each." },
            { name: "Grammar Deep Dive", duration: "25 mins", details: `Study rules, syntax, and exceptions for ${topic}.`, resource: "Learn French with Alexa / Lawless French", why: "Provides structural framework.", how: "Take written notes and write 3 original examples." },
            { name: "Vocabulary Acquisition", duration: "20 mins", details: `Learn 15 targeted words related to ${topic}.`, resource: "Anki / Daily Vocab Log", why: "Expands mental dictionary.", how: "Create flashcards with audio on Forvo." },
            { name: "Listening Practice", duration: "20 mins", details: "Listen to beginner French audio at native/semi-native speed.", resource: "Coffee Break French (Season 1) / TV5MONDE", why: "Trains ear for liaison and native rhythm.", how: "Listen once without text, once with text." },
            { name: "Reading & Context", duration: "20 mins", details: "Read short stories or dialogue applying today's grammar.", resource: "The French Experiment / Bonjour de France", why: "Sees grammar in natural contexts.", how: "Underline unknown words and look them up." },
            { name: "Writing & Speaking Drill", duration: "20 mins", details: "Write 5-10 sentences and speak them aloud using voice recording.", resource: "ChatGPT Voice / Phone Recorder", why: "Encourages active output.", how: "Record yourself and re-listen to correct errors." }
          ],
          grammarExercise: {
            question: `Fill in the blank for ${topic}: Choose the correct form in "Je ___ (être/avoir) content."`,
            options: ["suis", "ai", "es", "a"],
            answer: "suis",
            explanation: "'Je suis' means 'I am' (from verb être)."
          },
          homework: `Write 5 original sentences in French using today's lesson on ${topic}.`,
          vocabList: [
            { word: "Bonjour", translation: "Hello / Good day", pronunciation: "bohn-zhoor" },
            { word: "Merci", translation: "Thank you", pronunciation: "mair-see" },
            { word: "S'il vous plaît", translation: "Please", pronunciation: "seel voo pleh" }
          ]
        });
      }
      dayCounter++;
    }

    weeks.push({
      weekNumber: w + 1,
      theme: weekThemes[w].theme,
      target: weekThemes[w].target,
      grammarSummary: `Week ${w + 1} Summary: Focused on ${weekThemes[w].theme}. Key topics covered: ${weekThemes[w].target}`,
      days: weekDays
    });
  }

  return weeks;
};

const COURSE_DATA = generate30DayCourse();

export default function FrenchCourseApp() {
  const [selectedWeek, setSelectedWeek] = useState<number>(1);
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({});
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [userVocab, setUserVocab] = useState<{ word: string; translation: string; note: string }[]>([]);
  const [newWord, setNewWord] = useState("");
  const [newTranslation, setNewTranslation] = useState("");
  const [newNote, setNewNote] = useState("");

  // Load progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem("french_course_progress");
    if (savedProgress) {
      try {
        setCompletedTasks(JSON.parse(savedProgress));
      } catch (e) {
        console.error("Failed to load progress", e);
      }
    }

    const savedVocab = localStorage.getItem("french_course_vocab");
    if (savedVocab) {
      try {
        setUserVocab(JSON.parse(savedVocab));
      } catch (e) {
        console.error("Failed to load custom vocab", e);
      }
    }
  }, []);

  // Save progress
  const toggleTask = (taskId: string) => {
    const updated = { ...completedTasks, [taskId]: !completedTasks[taskId] };
    setCompletedTasks(updated);
    localStorage.setItem("french_course_progress", JSON.stringify(updated));
  };

  const addCustomVocab = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWord || !newTranslation) return;
    const updated = [...userVocab, { word: newWord, translation: newTranslation, note: newNote }];
    setUserVocab(updated);
    localStorage.setItem("french_course_vocab", JSON.stringify(updated));
    setNewWord("");
    setNewTranslation("");
    setNewNote("");
  };

  const deleteVocab = (index: number) => {
    const updated = userVocab.filter((_, i) => i !== index);
    setUserVocab(updated);
    localStorage.setItem("french_course_vocab", JSON.stringify(updated));
  };

  const activeWeekData = COURSE_DATA.find((w) => w.weekNumber === selectedWeek) || COURSE_DATA[0];
  const activeDayData = activeWeekData.days.find((d) => d.day === selectedDay) || activeWeekData.days[0];

  // Calculate overall progress percentage
  const totalTasks = 30 * 6; // 6 activities per day average
  const completedCount = Object.values(completedTasks).filter(Boolean).length;
  const progressPercent = Math.min(100, Math.round((completedCount / totalTasks) * 100));

  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", backgroundColor: "#f8fafc", color: "#0f172a", minHeight: "100vh" }}>
      {/* HEADER */}
      <header style={{ backgroundColor: "#1e293b", color: "#ffffff", padding: "1.5rem 2rem", borderBottom: "4px solid #3b82f6" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <h1 style={{ margin: 0, fontSize: "1.75rem", fontWeight: "700" }}>🇫🇷 30-Day French Intensive Course</h1>
            <p style={{ margin: "0.25rem 0 0 0", color: "#94a3b8", fontSize: "0.95rem" }}>From Absolute Beginner (A0) to Confident A2/B1</p>
          </div>
          <div style={{ minWidth: "220px", backgroundColor: "#334155", padding: "0.75rem 1rem", borderRadius: "8px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", fontWeight: "600", marginBottom: "0.4rem" }}>
              <span>Overall Progress</span>
              <span style={{ color: "#60a5fa" }}>{progressPercent}%</span>
            </div>
            <div style={{ width: "100%", backgroundColor: "#475569", height: "8px", borderRadius: "4px", overflow: "hidden" }}>
              <div style={{ width: `${progressPercent}%`, backgroundColor: "#3b82f6", height: "100%", transition: "width 0.3s ease" }}></div>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <div style={{ maxWidth: "1200px", margin: "2rem auto", padding: "0 1rem", display: "grid", gridTemplateColumns: "280px 1fr", gap: "2rem" }}>
        {/* SIDEBAR NAVIGATION */}
        <aside style={{ backgroundColor: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", padding: "1.25rem", height: "fit-content" }}>
          <h3 style={{ margin: "0 0 1rem 0", fontSize: "1.1rem", borderBottom: "2px solid #f1f5f9", paddingBottom: "0.5rem" }}>Navigation</h3>
          
          {COURSE_DATA.map((week) => (
            <div key={week.weekNumber} style={{ marginBottom: "1rem" }}>
              <button
                onClick={() => {
                  setSelectedWeek(week.weekNumber);
                  setSelectedDay(week.days[0].day);
                }}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "0.6rem 0.75rem",
                  borderRadius: "6px",
                  border: "none",
                  backgroundColor: selectedWeek === week.weekNumber ? "#eff6ff" : "transparent",
                  color: selectedWeek === week.weekNumber ? "#2563eb" : "#475569",
                  fontWeight: selectedWeek === week.weekNumber ? "700" : "500",
                  cursor: "pointer",
                  display: "flex",
                  justify: "space-between",
                  alignItems: "center"
                }}
              >
                <span>Week {week.weekNumber}</span>
                <span style={{ fontSize: "0.75rem", backgroundColor: "#cbd5e1", color: "#1e293b", padding: "2px 6px", borderRadius: "10px" }}>{week.days.length}d</span>
              </button>

              {selectedWeek === week.weekNumber && (
                <div style={{ marginTop: "0.4rem", paddingLeft: "0.75rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                  {week.days.map((d) => (
                    <button
                      key={d.day}
                      onClick={() => setSelectedDay(d.day)}
                      style={{
                        textAlign: "left",
                        padding: "0.4rem 0.6rem",
                        borderRadius: "4px",
                        border: "none",
                        backgroundColor: selectedDay === d.day ? "#3b82f6" : "transparent",
                        color: selectedDay === d.day ? "#ffffff" : "#64748b",
                        fontSize: "0.85rem",
                        cursor: "pointer"
                      }}
                    >
                      Day {d.day}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </aside>

        {/* MAIN CONTENT AREA */}
        <main>
          {/* DAY HEADER */}
          <div style={{ backgroundColor: "#ffffff", padding: "1.5rem", borderRadius: "12px", border: "1px solid #e2e8f0", marginBottom: "1.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap" }}>
              <div>
                <span style={{ fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", color: "#2563eb", letterSpacing: "0.05em" }}>
                  Week {selectedWeek} • {activeWeekData.theme}
                </span>
                <h2 style={{ margin: "0.25rem 0 0.5rem 0", fontSize: "1.5rem" }}>{activeDayData.title}</h2>
                <p style={{ margin: 0, color: "#64748b" }}>{activeDayData.objective}</p>
              </div>
              <span style={{ backgroundColor: "#f1f5f9", color: "#334155", padding: "0.4rem 0.8rem", borderRadius: "20px", fontSize: "0.85rem", fontWeight: "600" }}>
                ⏱️ {activeDayData.estimatedTime}
              </span>
            </div>
          </div>

          {/* DAILY TIMETABLE & PROGRESS CHECKLIST */}
          <section style={{ backgroundColor: "#ffffff", padding: "1.5rem", borderRadius: "12px", border: "1px solid #e2e8f0", marginBottom: "1.5rem" }}>
            <h3 style={{ margin: "0 0 1rem 0", fontSize: "1.2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              📋 Daily Timetable & Checklist
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {activeDayData.activities.map((act, idx) => {
                const taskId = `d${selectedDay}_act${idx}`;
                const isDone = !!completedTasks[taskId];

                return (
                  <div
                    key={idx}
                    style={{
                      border: "1px solid #e2e8f0",
                      borderRadius: "8px",
                      padding: "1rem",
                      backgroundColor: isDone ? "#f8fafc" : "#ffffff",
                      opacity: isDone ? 0.75 : 1,
                      transition: "all 0.2s ease"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                      <label style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontWeight: "600", fontSize: "1rem", cursor: "pointer" }}>
                        <input
                          type="checkbox"
                          checked={isDone}
                          onChange={() => toggleTask(taskId)}
                          style={{ width: "18px", height: "18px", cursor: "pointer" }}
                        />
                        <span style={{ textDecoration: isDone ? "line-through" : "none" }}>{act.name}</span>
                      </label>
                      <span style={{ fontSize: "0.8rem", backgroundColor: "#e2e8f0", color: "#475569", padding: "2px 8px", borderRadius: "12px" }}>
                        {act.duration}
                      </span>
                    </div>

                    <p style={{ margin: "0 0 0.5rem 1.8rem", fontSize: "0.9rem", color: "#334155" }}>{act.details}</p>
                    
                    <div style={{ margin: "0 0 0 1.8rem", fontSize: "0.825rem", color: "#64748b", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", backgroundColor: "#f1f5f9", padding: "0.5rem 0.75rem", borderRadius: "6px" }}>
                      <div><strong>Resource:</strong> {act.resource}</div>
                      <div><strong>Why:</strong> {act.why}</div>
                      <div style={{ gridColumn: "span 2" }}><strong>How to perform:</strong> {act.how}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* GRAMMAR EXERCISE & ANSWER KEY */}
          <section style={{ backgroundColor: "#ffffff", padding: "1.5rem", borderRadius: "12px", border: "1px solid #e2e8f0", marginBottom: "1.5rem" }}>
            <h3 style={{ margin: "0 0 1rem 0", fontSize: "1.2rem" }}>✍️ Daily Practice Exercise</h3>
            <p style={{ fontWeight: "500" }}>{activeDayData.grammarExercise.question}</p>

            {activeDayData.grammarExercise.options && (
              <ul style={{ listStyleType: "none", padding: 0, display: "flex", gap: "1rem", margin: "1rem 0" }}>
                {activeDayData.grammarExercise.options.map((opt, i) => (
                  <li key={i} style={{ backgroundColor: "#f1f5f9", padding: "0.5rem 1rem", borderRadius: "6px", fontSize: "0.9rem" }}>
                    {opt}
                  </li>
                ))}
              </ul>
            )}

            <div style={{ marginTop: "1rem" }}>
              <button
                onClick={() => setShowAnswer(!showAnswer)}
                style={{
                  backgroundColor: "#0f172a",
                  color: "#ffffff",
                  border: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "0.85rem"
                }}
              >
                {showAnswer ? "Hide Answer Key" : "Show Answer Key"}
              </button>

              {showAnswer && (
                <div style={{ marginTop: "0.75rem", backgroundColor: "#f0fdf4", border: "1px solid #bbf7d0", padding: "1rem", borderRadius: "8px" }}>
                  <p style={{ margin: 0, fontWeight: "700", color: "#166534" }}>
                    Answer: {activeDayData.grammarExercise.answer}
                  </p>
                  <p style={{ margin: "0.25rem 0 0 0", fontSize: "0.875rem", color: "#15803d" }}>
                    {activeDayData.grammarExercise.explanation}
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* VOCABULARY LOG */}
          <section style={{ backgroundColor: "#ffffff", padding: "1.5rem", borderRadius: "12px", border: "1px solid #e2e8f0", marginBottom: "1.5rem" }}>
            <h3 style={{ margin: "0 0 1rem 0", fontSize: "1.2rem" }}>📖 Daily Vocabulary & Personal Log</h3>
            
            <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1.5rem", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ backgroundColor: "#f8fafc", textAlign: "left", borderBottom: "2px solid #e2e8f0" }}>
                  <th style={{ padding: "0.6rem" }}>French Word</th>
                  <th style={{ padding: "0.6rem" }}>English Meaning</th>
                  <th style={{ padding: "0.6rem" }}>Pronunciation</th>
                </tr>
              </thead>
              <tbody>
                {activeDayData.vocabList.map((v, idx) => (
                  <tr key={idx} style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <td style={{ padding: "0.6rem", fontWeight: "600", color: "#2563eb" }}>{v.word}</td>
                    <td style={{ padding: "0.6rem" }}>{v.translation}</td>
                    <td style={{ padding: "0.6rem", color: "#64748b", fontStyle: "italic" }}>{v.pronunciation}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* ADD CUSTOM VOCAB */}
            <h4 style={{ margin: "1rem 0 0.5rem 0", fontSize: "1rem" }}>Add Custom Word to Storage</h4>
            <form onSubmit={addCustomVocab} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr auto", gap: "0.5rem", marginBottom: "1rem" }}>
              <input type="text" placeholder="French word" value={newWord} onChange={(e) => setNewWord(e.target.value)} style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #cbd5e1" }} />
              <input type="text" placeholder="Translation" value={newTranslation} onChange={(e) => setNewTranslation(e.target.value)} style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #cbd5e1" }} />
              <input type="text" placeholder="Note / Context" value={newNote} onChange={(e) => setNewNote(e.target.value)} style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #cbd5e1" }} />
              <button type="submit" style={{ backgroundColor: "#2563eb", color: "#ffffff", border: "none", borderRadius: "4px", padding: "0.5rem 1rem", cursor: "pointer" }}>Add</button>
            </form>

            {userVocab.length > 0 && (
              <div style={{ backgroundColor: "#f8fafc", padding: "0.75rem", borderRadius: "6px" }}>
                <h5 style={{ margin: "0 0 0.5rem 0" }}>Saved Personal Words ({userVocab.length}):</h5>
                <ul style={{ margin: 0, paddingLeft: "1.2rem", fontSize: "0.85rem" }}>
                  {userVocab.map((uv, i) => (
                    <li key={i} style={{ marginBottom: "0.25rem" }}>
                      <strong>{uv.word}</strong> = {uv.translation} <em>({uv.note})</em>{" "}
                      <button onClick={() => deleteVocab(i)} style={{ color: "#ef4444", border: "none", background: "none", cursor: "pointer", fontSize: "0.75rem" }}>[Delete]</button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          {/* HOMEWORK & WEEKLY GRAMMAR SUMMARY */}
          <section style={{ backgroundColor: "#ffffff", padding: "1.5rem", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.2rem" }}>📝 Homework Assignment</h3>
            <p style={{ margin: "0 0 1.5rem 0", color: "#334155" }}>{activeDayData.homework}</p>

            <div style={{ backgroundColor: "#f8fafc", borderLeft: "4px solid #3b82f6", padding: "1rem", borderRadius: "0 8px 8px 0" }}>
              <h4 style={{ margin: "0 0 0.4rem 0", fontSize: "0.95rem" }}>📌 Week {selectedWeek} Summary Overview</h4>
              <p style={{ margin: 0, fontSize: "0.875rem", color: "#475569" }}>{activeWeekData.grammarSummary}</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
