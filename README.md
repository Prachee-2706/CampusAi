# 🎓 CampusAi — AI-Powered Student Assistant for GSFC University

> **An AI-powered, university-focused student assistant for GSFC University that provides reliable academic and campus-related support using university-approved knowledge, student context, and Retrieval-Augmented Generation (RAG).**

---

## 📌 Problem Statement

### AI-Powered Student Chatbot

Develop an AI-powered chatbot to assist students with academic and campus-related queries.

---

# 💡 Our Solution

**CampusAi** is a closed-domain AI assistant designed specifically for students of GSFC University.

Unlike a general-purpose chatbot, CampusAi focuses only on:

- 🎓 University-related information
- 📚 Academic subjects
- 🏫 Campus facilities and services
- 📅 Timetables and academic schedules
- 📝 Assignments and examinations
- 📄 University-provided study material
- 🧠 Personalized learning assistance

The system uses an external Large Language Model (LLM) API combined with **Retrieval-Augmented Generation (RAG)** and a university-specific knowledge base.

The AI does **not need to be trained from scratch**.

Instead:

> **LLM + University Knowledge Base + RAG + Scope Control = CampusAi**

---

# 🎯 Project Goal

The primary goal of CampusAi is to create a **trusted, personalized, and university-specific AI assistant** that helps students obtain academic and campus information through a conversational interface.

The system should:

1. Answer questions related to supported academic subjects.
2. Answer university and campus-related questions.
3. Use university-approved information as its primary knowledge source.
4. Provide personalized responses based on student context.
5. Answer questions from uploaded academic documents.
6. Generate quizzes and study plans.
7. Refuse unrelated questions.
8. Avoid generating unsupported or fabricated university information.
9. Provide sources for knowledge-based answers whenever possible.

---

# ⭐ Core Principle

## No Source → No Answer

CampusAi is designed to minimize hallucination.

If reliable information is not available in the university knowledge base, the system should **not guess**.

Instead, it responds:

> "I couldn't find verified information about this in the university knowledge base."

For completely unrelated questions, it responds:

> "I'm CampusAi, designed specifically for university academic and campus-related questions. I can't answer questions outside this scope."

---

# 🚀 Key Features

## 1. 🤖 University AI Chatbot

The main interface allows students to communicate with the AI using natural language.

Example:

```text
Student:
Explain normalization in DBMS.

CampusAi:
Normalization is the process of organizing data
to reduce redundancy and improve data integrity.

The major normal forms include:
1NF
2NF
3NF
BCNF

Source:
DBMS Unit 2 Notes
```

---

# 2. 📚 Academic Subject Assistant

CampusAi supports the student's current academic subjects.

Example supported subjects:

- Database Management Systems
- Computer Networks
- Operating Systems
- Microprocessors
- Numerical Methods
- Artificial Intelligence / Machine Learning

The exact subjects can be configured according to the university curriculum.

Students can ask:

```text
Explain TCP three-way handshake.

What is normalization?

Explain deadlock.

Give me important DBMS topics.

Explain this concept in simple language.

Give me examples of 3NF.
```

---

# 3. 🏫 University & Campus Assistant

The chatbot can answer questions about university-specific information.

The knowledge base can contain:

- University information
- Departments
- Faculty
- Campus facilities
- Library
- Laboratories
- Hostel
- Canteen
- Examination cell
- Student section
- Academic regulations
- University rules
- Academic calendar
- Events
- Contact information

Example:

```text
Student:
Where is the examination cell?

CampusAi:
The examination cell is located in
the university's designated examination office.

Source:
University Campus Information
```

---

# 4. 🔒 Closed-Domain AI

One of the most important features is **scope restriction**.

CampusAi is not intended to behave like a general-purpose ChatGPT.

It should only answer questions related to:

```text
University
    +
Campus
    +
Academic Subjects
    +
Student Academic Information
    +
Approved Learning Resources
```

### Example

#### Allowed

```text
What is TCP?

Explain DBMS normalization.

Where is the university library?

What is my timetable tomorrow?

Explain deadlock.
```

#### Not Allowed

```text
Who won yesterday's cricket match?

Tell me a joke.

What is today's stock price?

What's the latest news?

Tell me about a random university.
```

The system should politely refuse unrelated questions.

---

# 5. 🧠 Scope Classifier

Before processing a question, the system determines whether it belongs to the supported domain.

```text
                 Student Question
                        │
                        ▼
                Scope Classifier
                        │
              ┌─────────┴─────────┐
              │                   │
          University/          Unrelated
          Academic              Question
              │                   │
              ▼                   ▼
             RAG                Reject
              │
              ▼
             LLM
              │
              ▼
            Answer
```

This prevents the system from unnecessarily answering questions outside the platform's purpose.

---

# 6. 📄 Ask My Notes

Students can upload academic documents such as:

- Lecture notes
- PDFs
- Subject material
- Practical manuals
- Study material
- University-provided documents

The student can then ask questions about the uploaded material.

Example:

```text
Upload:
DBMS_Unit_3.pdf

Question:
Give me the five most important topics
from this document.
```

CampusAi retrieves the relevant content and generates the response.

---

# 7. 🔎 Retrieval-Augmented Generation (RAG)

CampusAi uses RAG to connect the LLM with university-specific information.

Instead of relying only on the LLM's pre-trained knowledge:

```text
Student Question
       ↓
Knowledge Retrieval
       ↓
Relevant University Information
       ↓
LLM
       ↓
Grounded Answer
```

This allows the system to answer using:

- University documents
- Subject notes
- Syllabus
- Academic regulations
- Campus information
- Uploaded documents

---

# 8. 📚 Source-Based Answers

Whenever possible, answers should show the information source.

Example:

```text
Answer:
Normalization is the process of organizing data...

📚 Source:
DBMS Unit 2
Page 14
```

Possible source types:

```text
University Handbook
DBMS Unit 2 Notes
Computer Networks Unit 3
Academic Regulations
Campus Guide
Uploaded Student Notes
```

This improves transparency and trust.

---

# 9. 👤 Student Personalization

The system can maintain basic student academic context.

Example:

```text
Student:
Om Panchal

Branch:
Computer Science & Engineering

Semester:
5

Subjects:
DBMS
Computer Networks
Operating Systems
Microprocessors
Numerical Methods
AIML
```

This context can be used to personalize responses.

Example:

```text
Student:
Give me important topics for my exam.

CampusAi:
Based on your current subjects, here are
the important topics...
```

---

# 10. 📅 Timetable Assistant

Students can access their timetable through the chatbot or dashboard.

Example:

```text
Student:
What classes do I have tomorrow?

CampusAi:

09:00 - 10:00
DBMS
Room 204

10:00 - 11:00
Computer Networks
Lab 2

02:00 - 03:00
Operating Systems
Room 301
```

---

# 11. 📝 Assignment Assistant

The platform can track assignments and deadlines.

Example:

```text
DBMS Assignment
Due: Tomorrow
Status: Pending

Computer Networks
Due: 15 October
Status: Submitted

Operating Systems
Due: 20 October
Status: Pending
```

Students can ask:

```text
What assignment should I complete first?

What assignments are due this week?

Help me plan my DBMS assignment.
```

---

# 12. 🧠 AI Quiz Generator

Students can generate quizzes from a subject or uploaded document.

Example:

```text
Student:
Quiz me on DBMS normalization.
```

CampusAi generates:

```text
Question 1

Which normal form removes partial dependency?

A. 1NF
B. 2NF
C. 3NF
D. BCNF
```

After completion:

```text
Score: 4/5

Performance: 80%

Recommended Revision:
2NF
```

---

# 13. 📅 Personalized Study Planner

Students can provide:

```text
Subject: DBMS
Exam: 5 days away
Available Time: 2 hours/day
Current Preparation: 40%
```

The AI generates a personalized study schedule.

Example:

```text
Day 1
✓ Relational Model
✓ SQL

Day 2
✓ Joins
✓ Normalization

Day 3
✓ Transactions
✓ ACID

Day 4
✓ Indexing
✓ Previous Questions

Day 5
✓ Revision
✓ Mock Test
```

---

# 14. 🌐 Multilingual Support

The system can support multiple languages.

Initial language options:

- English
- Hindi
- Gujarati

Example:

```text
Student:
Deadlock simple Gujarati ma samjavo.

CampusAi:
[Gujarati explanation]
```

The same university knowledge base is used regardless of the selected language.

---

# 15. 📊 Student Dashboard

The dashboard provides a quick overview of the student's academic activities.

Possible sections:

```text
Today's Classes
Upcoming Assignments
Upcoming Exams
Recent Activity
Study Progress
Quiz Scores
Quick AI Actions
```

Example:

```text
┌──────────────────────────────────────┐
│ 👋 Good Morning, Student             │
│ CSE • Semester 5                     │
├──────────────────────────────────────┤
│ Today's Classes                      │
│                                      │
│ DBMS              09:00 AM           │
│ Computer Networks 10:00 AM           │
│ OS                02:00 PM           │
├──────────────────────────────────────┤
│ Upcoming                            │
│                                      │
│ DBMS Assignment      Tomorrow        │
│ CN Exam              5 Days          │
└──────────────────────────────────────┘
```

---

# 🏗️ System Architecture

```text
                         STUDENT
                            │
                            ▼
                   ┌────────────────┐
                   │   React UI     │
                   └───────┬────────┘
                           │
                           ▼
                   ┌────────────────┐
                   │ FastAPI Backend│
                   └───────┬────────┘
                           │
                  ┌────────┴─────────┐
                  │                  │
                  ▼                  ▼
          ┌──────────────┐   ┌──────────────┐
          │    Scope     │   │   Student    │
          │  Classifier  │   │   Context    │
          └──────┬───────┘   └──────────────┘
                 │
                 ▼
          ┌──────────────┐
          │ RAG Retrieval│
          └──────┬───────┘
                 │
          ┌──────┴──────────────┐
          │                     │
          ▼                     ▼
 ┌──────────────────┐   ┌─────────────────┐
 │ University       │   │ Academic       │
 │ Knowledge Base   │   │ Knowledge Base │
 └────────┬─────────┘   └────────┬────────┘
          │                      │
          └──────────┬───────────┘
                     ▼
              ┌─────────────┐
              │   LLM API   │
              └──────┬──────┘
                     │
                     ▼
              Grounded Answer
                     │
                     ▼
                  STUDENT
```

---

# 🧠 AI Architecture

CampusAi does **not require training a new Large Language Model from scratch**.

Instead, the platform uses:

```text
Existing LLM
     +
University Knowledge
     +
RAG
     +
Scope Control
     +
Student Context
```

This provides a faster, cheaper, and more practical solution for the hackathon.

---

# 📚 Knowledge Base

The university knowledge base can contain:

```text
knowledge_base/

├── university/
│   ├── university_information.pdf
│   ├── academic_rules.pdf
│   ├── examination_rules.pdf
│   ├── academic_calendar.pdf
│   └── contact_information.pdf
│
├── campus/
│   ├── library.pdf
│   ├── laboratories.pdf
│   ├── hostel.pdf
│   ├── departments.pdf
│   └── campus_facilities.pdf
│
└── subjects/
    ├── DBMS/
    ├── Computer_Networks/
    ├── Operating_Systems/
    ├── Microprocessors/
    ├── Numerical_Methods/
    └── AIML/
```

Only authorized/appropriate university and academic resources should be added.

---

# 🛠️ Technology Stack

## Frontend

- React.js
- JavaScript
- HTML5
- CSS / Tailwind CSS

## Backend

- Python
- FastAPI

## Database

- SQLite for structured student/university data

## Vector Search

Possible options:

- FAISS
- Chroma
- Other compatible vector databases

## AI

- External LLM API
- Embedding model/API for RAG

> The specific LLM provider can be configured according to the hackathon's available APIs and resources.

---

# 📁 Proposed Project Structure

```text
CampusAi/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Chat.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Timetable.jsx
│   │   │   ├── Quiz.jsx
│   │   │   └── StudyPlanner.jsx
│   │   │
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── main.py
│   │
│   ├── routes/
│   │   ├── chat.py
│   │   ├── quiz.py
│   │   ├── timetable.py
│   │   └── documents.py
│   │
│   ├── services/
│   │   ├── llm.py
│   │   ├── rag.py
│   │   ├── classifier.py
│   │   └── embeddings.py
│   │
│   ├── database/
│   │   └── database.py
│   │
│   └── requirements.txt
│
├── knowledge_base/
│   ├── university/
│   ├── campus/
│   └── subjects/
│
├── vector_store/
│
├── README.md
├── CHECKLIST.md
└── .env.example
```

---

# 🔄 Chat Processing Flow

When a student asks a question:

```text
1. Student enters question
              ↓
2. Backend receives question
              ↓
3. Scope classification
              ↓
4. Check university/academic relevance
              ↓
5. Retrieve relevant knowledge
              ↓
6. Check whether reliable information exists
              ↓
7. Send context + question to LLM
              ↓
8. Generate grounded answer
              ↓
9. Attach source information
              ↓
10. Return answer to student
```

---

# 🛡️ Safety & Reliability

CampusAi should follow these principles:

### 1. No hallucinated university information

The AI should not invent:

- Exam dates
- Faculty names
- Fees
- Rules
- Room numbers
- University policies

### 2. Knowledge-grounded answers

University-specific information should come from approved sources.

### 3. Scope restriction

Unrelated questions should be rejected.

### 4. Student privacy

Only necessary student information should be stored.

### 5. Secure API keys

API keys should never be committed to GitHub.

Use:

```text
.env
```

and provide:

```text
.env.example
```

### 6. Uploaded document security

Uploaded documents should be handled securely and should not automatically become trusted instructions for the AI.

---

# 🚫 Out-of-Scope Example

### Student:

```text
Who won yesterday's cricket match?
```

### CampusAi:

```text
I'm CampusAi, designed specifically to help
with university, campus, and supported academic
questions.

I can't answer questions outside this scope.
```

---

# ⚠️ Information Not Found

### Student:

```text
What is the hostel fee for next year?
```

If the information is unavailable:

```text
I couldn't find verified information about this
in the university knowledge base.

Please contact the relevant university office
for the latest information.
```

The system should **not guess**.

---

# 🎬 Demonstration Flow

For the hackathon presentation, the recommended demo flow is:

### Step 1 — Student Dashboard

Show:

```text
Student Profile
Today's Classes
Upcoming Assignments
Upcoming Exams
```

### Step 2 — Academic Question

Ask:

> "Explain normalization in simple language."

Show the AI answer and source.

### Step 3 — University Question

Ask:

> "Where is the examination cell?"

Show university-specific information.

### Step 4 — Out-of-Scope Question

Ask:

> "Who won yesterday's cricket match?"

Show the scope restriction.

### Step 5 — Upload Notes

Upload:

```text
DBMS_Unit_3.pdf
```

Ask:

> "Give me the five most important topics from this document."

### Step 6 — Generate Quiz

Ask:

> "Create a quiz from DBMS Unit 3."

### Step 7 — Study Planner

Ask:

> "My DBMS exam is in five days. Create a study plan."

This demonstrates the complete concept in a short amount of time.

---

# 🌟 Why CampusAi Is Different

Traditional chatbot:

```text
Question
   ↓
General LLM
   ↓
Answer
```

CampusAi:

```text
Question
   ↓
Scope Check
   ↓
University Context
   ↓
Knowledge Retrieval
   ↓
Verified Information
   ↓
LLM
   ↓
Source-Based Answer
```

This makes CampusAi:

- 🎯 Focused
- 📚 Academic
- 🏫 University-specific
- 🔒 Controlled
- 🧠 Personalized
- 🔎 Source-aware
- 🚫 Less prone to hallucination

---

# 🔮 Future Enhancements

Future versions could include:

- Voice-based interaction
- Real-time university announcements
- Attendance tracking
- Calendar integration
- Smart notifications
- Faculty interaction
- Campus navigation
- University event recommendations
- Student performance analytics
- Advanced multilingual support
- Mobile application
- Personalized recommendation engine
- Integration with university ERP/LMS systems

---

# 📈 Future Vision

The long-term vision is to transform CampusAi from a chatbot into a **complete AI-powered student companion**.

```text
                 UNIVERSITYAI
                       │
       ┌───────────────┼────────────────┐
       │               │                │
    ACADEMIC        CAMPUS           PERSONAL
       │               │                │
       ▼               ▼                ▼
     AI Tutor        Campus FAQ       Dashboard
     Ask Notes       Facilities       Timetable
     Quiz            Events           Assignments
     Study Plan      Navigation       Progress
       │               │                │
       └───────────────┼────────────────┘
                       ▼
                 AI STUDENT
                  COMPANION
```

---

# 🏆 Hackathon Objective

The prototype demonstrates how an existing LLM can be transformed into a **controlled, university-specific AI assistant** by combining:

```text
LLM API
   +
RAG
   +
University Knowledge Base
   +
Scope Classification
   +
Student Context
   +
Academic Tools
```

The objective is not to build another general-purpose chatbot.

The objective is to build:

> **A trusted AI assistant that understands the student's university and helps the student learn, navigate, and manage academic activities.**

---

# 👥 Team

| Role | Responsibility |
|---|---|
| Frontend Developer | UI, dashboard, chat interface |
| Backend Developer | APIs, database, authentication |
| AI/ML Developer | LLM, RAG, embeddings, classification |
| Data/Knowledge Engineer | University data and document processing |
| Integration/Testing | Testing, deployment, presentation |

---

# 📌 Project Status

> 🚧 **Hackathon Prototype — In Development**

The initial prototype focuses on demonstrating:

- AI-powered university chat
- Academic subject assistance
- University knowledge retrieval
- RAG-based document Q&A
- Scope restriction
- Student personalization
- Campus assistance
- Quiz generation
- Study planning

---

# 📜 License

This project is developed as a prototype for an academic/hackathon demonstration.

University-specific data and documents should only be used with appropriate authorization.