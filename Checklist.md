# 🎓 CampusAi — Development Checklist

> **Project:** CampusAi — AI-Powered Student Chatbot  
> **University:** GSFC University  
> **Goal:** Build a university-focused AI assistant for academic and campus-related queries.

---

# 📌 How to Use This Checklist

### Not completed

```text
- [ ] Task
```

### Completed

```text
- [x] Task
```

### Priority

- 🔴 **MUST** — Required for the working prototype
- 🟡 **SHOULD** — Important for a strong demo
- 🟢 **NICE** — Optional enhancement

---

# 1. 🧠 PROJECT PLANNING

## 1.1 Basic Planning

- [x] 🔴 Define final project name
- [x] 🔴 Define university name
- [x] 🔴 Define supported academic subjects
- [x] 🔴 Define target student users
- [x] 🔴 Define the main problem we are solving
- [x] 🔴 Define the main features for the prototype
- [x] 🟡 Define future features
- [x] 🟡 Define team member responsibilities

---

# 2. 🛠️ DEVELOPMENT SETUP

## 2.1 Repository

- [ ] 🔴 Create GitHub repository
- [x] 🔴 Create project folder
- [x] 🔴 Create `README.md`
- [x] 🔴 Create `CHECKLIST.md`
- [ ] 🔴 Create `.gitignore`
- [ ] 🔴 Create `.env.example`

## 2.2 Frontend Setup

- [ ] 🔴 Create React application
- [ ] 🔴 Run frontend locally
- [ ] 🔴 Create basic routing
- [ ] 🟡 Install UI/component libraries if required

## 2.3 Backend Setup

- [ ] 🔴 Create Python backend
- [ ] 🔴 Install FastAPI
- [ ] 🔴 Create backend server
- [ ] 🔴 Create basic API endpoint
- [ ] 🔴 Connect frontend to backend

---

# 3. 🎨 UI / UX

## 3.1 Main Layout

- [ ] 🔴 Create application layout
- [ ] 🔴 Create sidebar/navigation
- [ ] 🔴 Create main content area
- [ ] 🔴 Create responsive layout
- [ ] 🟡 Add dark/light theme

## 3.2 Dashboard

- [ ] 🔴 Create student dashboard
- [ ] 🔴 Add student name
- [ ] 🔴 Add branch information
- [ ] 🔴 Add semester information
- [ ] 🔴 Add today's classes section
- [ ] 🔴 Add upcoming assignments section
- [ ] 🔴 Add upcoming exams section
- [ ] 🟡 Add study progress section
- [ ] 🟡 Add quick action buttons

## 3.3 Chat Interface

- [ ] 🔴 Create chat page
- [ ] 🔴 Create message input
- [ ] 🔴 Create send button
- [ ] 🔴 Display user messages
- [ ] 🔴 Display AI messages
- [ ] 🔴 Add loading/typing indicator
- [ ] 🟡 Add suggested questions
- [ ] 🟡 Add clear chat button
- [ ] 🟡 Add chat history

---

# 4. 👤 STUDENT PROFILE

- [ ] 🔴 Create student profile structure
- [ ] 🔴 Add student name
- [ ] 🔴 Add branch
- [ ] 🔴 Add semester
- [ ] 🔴 Add current subjects
- [ ] 🟡 Add student preferences
- [ ] 🟡 Add preferred language
- [ ] 🟢 Add profile picture

---

# 5. 🗄️ DATABASE

## 5.1 Database Setup

- [ ] 🔴 Select database
- [ ] 🔴 Create database connection
- [ ] 🔴 Test database connection

## 5.2 Student Data

- [ ] 🔴 Create students table
- [ ] 🔴 Store student name
- [ ] 🔴 Store branch
- [ ] 🔴 Store semester
- [ ] 🔴 Store subjects

## 5.3 Academic Data

- [ ] 🔴 Create subjects table
- [ ] 🔴 Create timetable table
- [ ] 🟡 Create assignments table
- [ ] 🟡 Create examination table

## 5.4 Campus Data

- [ ] 🟡 Create campus information table
- [ ] 🟡 Create facilities table
- [ ] 🟡 Create departments table
- [ ] 🟡 Create faculty information table

---

# 6. 📚 UNIVERSITY KNOWLEDGE BASE

## 6.1 University Information

- [ ] 🔴 Collect university information
- [ ] 🔴 Collect university rules
- [ ] 🔴 Collect academic regulations
- [ ] 🟡 Collect examination rules
- [ ] 🟡 Collect academic calendar
- [ ] 🟡 Collect official contact information

## 6.2 Campus Information

- [ ] 🔴 Collect library information
- [ ] 🔴 Collect laboratory information
- [ ] 🟡 Collect hostel information
- [ ] 🟡 Collect canteen information
- [ ] 🟡 Collect examination cell information
- [ ] 🟡 Collect student section information
- [ ] 🟢 Collect campus event information

## 6.3 Faculty Information

- [ ] 🟡 Collect department information
- [ ] 🟡 Collect faculty information
- [ ] 🟢 Collect faculty contact information

---

# 7. 📖 SUBJECT KNOWLEDGE BASE

## 7.1 DBMS

- [ ] 🔴 Add DBMS syllabus
- [ ] 🔴 Add DBMS Unit 1
- [ ] 🔴 Add DBMS Unit 2
- [ ] 🔴 Add DBMS Unit 3
- [ ] 🟡 Add DBMS Unit 4
- [ ] 🟡 Add DBMS Unit 5
- [ ] 🟡 Add DBMS practical material
- [ ] 🟢 Add DBMS question papers

## 7.2 Computer Networks

- [ ] 🔴 Add CN syllabus
- [ ] 🔴 Add CN Unit 1
- [ ] 🔴 Add CN Unit 2
- [ ] 🔴 Add CN Unit 3
- [ ] 🟡 Add CN Unit 4
- [ ] 🟡 Add CN practical material

## 7.3 Operating Systems

- [ ] 🔴 Add OS syllabus
- [ ] 🔴 Add OS Unit 1
- [ ] 🔴 Add OS Unit 2
- [ ] 🟡 Add OS remaining units

## 7.4 Microprocessors

- [ ] 🔴 Add Microprocessors syllabus
- [ ] 🔴 Add important unit material
- [ ] 🟡 Add practical material

## 7.5 Numerical Methods

- [ ] 🔴 Add Numerical Methods syllabus
- [ ] 🔴 Add important topics
- [ ] 🟡 Add solved examples

## 7.6 AIML

- [ ] 🔴 Add AIML syllabus
- [ ] 🔴 Add important topics
- [ ] 🟡 Add practical material

---

# 8. 🤖 LLM INTEGRATION

- [ ] 🔴 Select LLM API
- [ ] 🔴 Create API key
- [ ] 🔴 Store API key in `.env`
- [ ] 🔴 Create LLM service
- [ ] 🔴 Send test question to LLM
- [ ] 🔴 Receive AI response
- [ ] 🔴 Display response in chatbot
- [ ] 🔴 Add token/response limits
- [ ] 🟡 Add error handling
- [ ] 🟡 Add retry handling

> ⚠️ Never commit API keys to GitHub.

---

# 9. 🔍 RAG SYSTEM

## 9.1 Document Processing

- [ ] 🔴 Select document format
- [ ] 🔴 Add PDF upload support
- [ ] 🔴 Extract text from PDF
- [ ] 🔴 Test text extraction
- [ ] 🔴 Split text into chunks

## 9.2 Embeddings

- [ ] 🔴 Select embedding model/API
- [ ] 🔴 Generate embeddings
- [ ] 🔴 Test embedding generation

## 9.3 Vector Database

- [ ] 🔴 Select vector database
- [ ] 🔴 Create vector store
- [ ] 🔴 Store document embeddings
- [ ] 🔴 Test vector search

## 9.4 Retrieval

- [ ] 🔴 Receive student question
- [ ] 🔴 Search relevant documents
- [ ] 🔴 Retrieve relevant chunks
- [ ] 🔴 Send retrieved context to LLM
- [ ] 🔴 Generate grounded answer

---

# 10. 🛡️ UNIVERSITY-ONLY SCOPE CONTROL

## 10.1 Scope Classification

- [ ] 🔴 Define allowed question categories
- [ ] 🔴 Define university-related category
- [ ] 🔴 Define academic-related category
- [ ] 🔴 Define student-related category
- [ ] 🔴 Define unrelated category
- [ ] 🔴 Create scope classifier
- [ ] 🔴 Test scope classifier

## 10.2 Allowed Questions

- [ ] 🔴 Test academic question
- [ ] 🔴 Test university question
- [ ] 🔴 Test campus question
- [🔴] Test student question

## 10.3 Rejected Questions

- [ ] 🔴 Test general knowledge question
- [ ] 🔴 Test sports question
- [ ] 🔴 Test entertainment question
- [ ] 🔴 Test unrelated university question
- [ ] 🔴 Test random/general question

## 10.4 Refusal Response

- [ ] 🔴 Create standard out-of-scope response
- [ ] 🔴 Display refusal correctly
- [ ] 🔴 Prevent LLM from answering rejected questions

---

# 11. 🚫 HALLUCINATION CONTROL

- [ ] 🔴 Define "No Source → No Answer" rule
- [ ] 🔴 Check whether relevant knowledge exists
- [ ] 🔴 Prevent unsupported university information
- [ ] 🔴 Prevent invented exam dates
- [ ] 🔴 Prevent invented faculty information
- [ ] 🔴 Prevent invented fees
- [ ] 🔴 Prevent invented room numbers
- [ ] 🟡 Add confidence/relevance threshold
- [ ] 🟡 Test unknown questions

---

# 12. 📚 SOURCE CITATIONS

- [ ] 🔴 Store document name
- [ ] 🔴 Store source information
- [ ] 🔴 Return source with retrieved content
- [ ] 🔴 Display source below AI answer
- [ ] 🟡 Display page number
- [ ] 🟡 Add "View Source" button

Example:

```text
Answer...

📚 Source:
DBMS Unit 2 Notes — Page 14
```

---

# 13. 📄 ASK MY NOTES

- [ ] 🔴 Create PDF upload UI
- [ ] 🔴 Upload PDF to backend
- [ ] 🔴 Process uploaded PDF
- [ ] 🔴 Store document content
- [ ] 🔴 Generate embeddings
- [ ] 🔴 Search uploaded document
- [ ] 🔴 Ask question about uploaded document
- [🔴] Return answer from uploaded document
- [ ] 🟡 Show document source
- [ ] 🟡 Allow multiple documents

---

# 14. 🏫 CAMPUS ASSISTANT

- [ ] 🔴 Add library information
- [ ] 🔴 Add laboratory information
- [ ] 🟡 Add department information
- [ ] 🟡 Add examination cell information
- [ ] 🟡 Add hostel information
- [ ] 🟡 Add canteen information
- [ ] 🟢 Add campus events
- [ ] 🟢 Add campus navigation

---

# 15. 📅 TIMETABLE

- [ ] 🔴 Create timetable data
- [ ] 🔴 Display today's timetable
- [ ] 🔴 Display tomorrow's timetable
- [ ] 🔴 Ask timetable question through chatbot
- [ ] 🔴 Return subject name
- [ ] 🔴 Return class time
- [ ] 🔴 Return classroom
- [ ] 🟡 Add weekly timetable view

---

# 16. 📝 ASSIGNMENT MANAGEMENT

- [ ] 🟡 Create assignment data
- [ ] 🟡 Add assignment title
- [ ] 🟡 Add subject
- [ ] 🟡 Add deadline
- [ ] 🟡 Add assignment status
- [ ] 🟡 Display upcoming assignments
- [ ] 🟡 Ask AI about assignments
- [ ] 🟡 Prioritize assignments
- [ ] 🟢 Add assignment completion tracking

---

# 17. 🧠 QUIZ GENERATOR

- [ ] 🟡 Create quiz generation API
- [ ] 🟡 Generate MCQ questions
- [ ] 🟡 Generate answer options
- [ ] 🟡 Generate correct answers
- [ ] 🟡 Create quiz UI
- [ ] 🟡 Allow student to select answers
- [ ] 🟡 Calculate score
- [ ] 🟡 Display final score
- [ ] 🟡 Identify weak topics
- [ ] 🟢 Generate quiz from uploaded PDF

---

# 18. 📅 AI STUDY PLANNER

- [ ] 🟡 Create study planner UI
- [ ] 🟡 Add subject selection
- [ ] 🟡 Add exam date
- [ ] 🟡 Add available study hours
- [ ] 🟡 Add preparation percentage
- [ ] 🟡 Generate study plan
- [ ] 🟡 Display daily tasks
- [ ] 🟡 Display estimated study time
- [ ] 🟢 Track completed study tasks

---

# 19. 🌐 MULTILINGUAL SUPPORT

- [ ] 🟢 Add language selector
- [ ] 🟢 Add English support
- [ ] 🟢 Add Hindi support
- [ ] 🟢 Add Gujarati support
- [ ] 🟢 Test multilingual questions
- [ ] 🟢 Test multilingual answers

---

# 20. 🎯 PERSONALIZED AI

- [ ] 🟡 Send student profile to backend
- [ ] 🟡 Send current semester to AI context
- [ ] 🟡 Send current subjects to AI context
- [ ] 🟡 Personalize study recommendations
- [ ] 🟡 Personalize quiz topics
- [ ] 🟡 Personalize academic suggestions

---

# 21. 🔐 SECURITY

- [ ] 🔴 Add `.env` for secrets
- [ ] 🔴 Add `.env` to `.gitignore`
- [ ] 🔴 Remove API keys from source code
- [ ] 🔴 Validate uploaded files
- [ ] 🔴 Restrict allowed file types
- [ ] 🟡 Add file size limit
- [ ] 🟡 Sanitize user input
- [ ] 🟡 Protect API endpoints
- [ ] 🟢 Add authentication

---

# 22. 🧪 TESTING

## 22.1 Chat Testing

- [ ] 🔴 Test simple academic question
- [ ] 🔴 Test complex academic question
- [ ] 🔴 Test university question
- [ ] 🔴 Test campus question
- [ ] 🔴 Test unknown question
- [ ] 🔴 Test unrelated question
- [ ] 🔴 Test empty question
- [ ] 🟡 Test long question

## 22.2 RAG Testing

- [ ] 🔴 Test PDF upload
- [ ] 🔴 Test PDF text extraction
- [ ] 🔴 Test document retrieval
- [ ] 🔴 Test relevant question
- [ ] 🔴 Test irrelevant question
- [ ] 🔴 Test source citation
- [ ] 🟡 Test multiple documents

## 22.3 Scope Testing

- [ ] 🔴 Test university question
- [ ] 🔴 Test academic question
- [ ] 🔴 Test sports question
- [ ] 🔴 Test entertainment question
- [ ] 🔴 Test general knowledge question
- [ ] 🔴 Test unrelated university question

## 22.4 UI Testing

- [ ] 🔴 Test desktop layout
- [ ] 🔴 Test mobile layout
- [ ] 🔴 Test tablet layout
- [ ] 🔴 Test navigation
- [ ] 🔴 Test buttons
- [ ] 🔴 Test loading states
- [ ] 🔴 Test error states

---

# 23. ⚡ PERFORMANCE

- [ ] 🟡 Measure chatbot response time
- [ ] 🟡 Optimize document retrieval
- [ ] 🟡 Limit unnecessary LLM calls
- [ ] 🟡 Add loading indicator
- [ ] 🟡 Handle API timeout
- [ ] 🟡 Handle API rate limits
- [ ] 🟢 Add response caching

---

# 24. 🎨 UI POLISH

- [ ] 🟡 Improve chatbot design
- [ ] 🟡 Add AI avatar/icon
- [ ] 🟡 Add user avatar
- [ ] 🟡 Add message timestamps
- [ ] 🟡 Add typing animation
- [ ] 🟡 Add smooth transitions
- [ ] 🟡 Improve dashboard cards
- [ ] 🟡 Improve mobile UI
- [ ] 🟢 Add dark mode
- [ ] 🟢 Add animations

---

# 25. 🚀 DEPLOYMENT

- [ ] 🔴 Prepare production build
- [ ] 🔴 Test production build locally
- [ ] 🟡 Deploy frontend
- [ ] 🟡 Deploy backend
- [ ] 🟡 Configure environment variables
- [ ] 🟡 Connect production database
- [ ] 🟡 Configure CORS
- [ ] 🟡 Test deployed application
- [ ] 🟢 Add custom domain

---

# 26. 📖 DOCUMENTATION

- [ ] 🔴 Complete README
- [ ] 🔴 Add project description
- [ ] 🔴 Add problem statement
- [ ] 🔴 Add feature list
- [ ] 🔴 Add architecture diagram
- [ ] 🔴 Add technology stack
- [ ] 🔴 Add installation instructions
- [ ] 🔴 Add environment variable instructions
- [ ] 🟡 Add screenshots
- [ ] 🟡 Add demo video
- [ ] 🟡 Add API documentation
- [ ] 🟢 Add contribution guidelines

---

# 27. 🎤 HACKATHON PRESENTATION

## Demo Preparation

- [ ] 🔴 Prepare demo student account
- [ ] 🔴 Prepare university knowledge data
- [ ] 🔴 Prepare subject data
- [ ] 🔴 Prepare sample PDF
- [ ] 🔴 Prepare sample timetable
- [ ] 🔴 Prepare sample assignments

## Demo Flow

- [ ] 🔴 Demonstrate dashboard
- [ ] 🔴 Demonstrate academic question
- [ ] 🔴 Demonstrate university question
- [ ] 🔴 Demonstrate campus question
- [ ] 🔴 Demonstrate out-of-scope rejection
- [ ] 🔴 Demonstrate PDF Q&A
- [ ] 🟡 Demonstrate quiz generation
- [ ] 🟡 Demonstrate study planner
- [ ] 🟡 Demonstrate source citation
- [ ] 🟢 Demonstrate multilingual support

---

# 28. 🏆 FINAL DEMO CHECK

Before presenting:

- [ ] 🔴 Application starts successfully
- [ ] 🔴 Frontend loads correctly
- [ ] 🔴 Backend is running
- [ ] 🔴 AI API is working
- [ ] 🔴 University knowledge is available
- [ ] 🔴 Academic knowledge is available
- [ ] 🔴 RAG is working
- [ ] 🔴 Scope restriction is working
- [ ] 🔴 Unknown information is handled correctly
- [ ] 🔴 Chat works without errors
- [ ] 🔴 Demo PDF is ready
- [ ] 🔴 Demo student account is ready
- [ ] 🔴 No API key is exposed
- [ ] 🔴 GitHub repository is updated
- [ ] 🔴 README is complete
- [ ] 🔴 Project can be demonstrated without internet/setup issues
- [ ] 🟡 Backup demo data is available
- [ ] 🟡 Backup screenshots/video are available

---

# 📊 FINAL FEATURE STATUS

| Feature | Status |
|---|---|
| Student Dashboard | ⬜ |
| AI Chat | ⬜ |
| University Knowledge Base | ⬜ |
| Academic Knowledge Base | ⬜ |
| RAG | ⬜ |
| Scope Classifier | ⬜ |
| Hallucination Control | ⬜ |
| Source Citations | ⬜ |
| Ask My Notes | ⬜ |
| Campus Assistant | ⬜ |
| Timetable | ⬜ |
| Assignment Assistant | ⬜ |
| Quiz Generator | ⬜ |
| Study Planner | ⬜ |
| Student Personalization | ⬜ |
| Multilingual Support | ⬜ |
| Mobile Responsive UI | ⬜ |
| Security | ⬜ |
| Testing | ⬜ |
| Deployment | ⬜ |
| Documentation | ⬜ |
| Hackathon Demo | ⬜ |

---

# 🎯 MVP DEFINITION

If time is limited, the **minimum working prototype** should contain:

- [ ] 🔴 React chat interface
- [ ] 🔴 Backend API
- [ ] 🔴 External LLM API
- [ ] 🔴 University knowledge base
- [ ] 🔴 At least one subject knowledge base
- [ ] 🔴 RAG retrieval working
- [ ] 🔴 Scope classifier rejecting out-of-scope questions
- [ ] 🔴 Source citations displayed
- [ ] 🔴 Student dashboard
- [ ] 🔴 Timetable display
- [ ] 🔴 PDF upload and Q&A
- [ ] 🔴 Demo data ready