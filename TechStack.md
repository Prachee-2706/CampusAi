# TECH STACK — CampusAi (GSFC University)

## 1. Frontend

- React.js
- JavaScript
- Tailwind CSS
- HTML5
- CSS3
- Axios

### Frontend Responsibilities

- Chat interface
- Student dashboard
- Login/Register pages
- Timetable
- Assignments
- Quiz interface
- Study planner
- Notes/PDF upload
- Chat history
- Source/citation display
- Responsive design for desktop and mobile


## 2. Backend

- Python
- FastAPI
- Uvicorn
- REST API

### Backend Responsibilities

- User authentication
- Chat API
- AI request processing
- RAG pipeline
- Document processing
- Quiz generation
- Study-plan generation
- Timetable management
- Assignment management
- Student data management
- Chat history


## 3. AI / LLM

- External LLM API
- Prompt Engineering
- Large Language Model
- AI-based Question Answering
- AI Quiz Generation
- AI Study Plan Generation
- AI Summarization

### LLM Approach

We will NOT train an LLM from scratch.

Instead, the system will use an existing LLM API combined with RAG and a university knowledge base.

Possible LLM providers:

- Google Gemini API
- OpenAI API
- Other approved LLM APIs


## 4. RAG (Retrieval-Augmented Generation)

RAG will be used to provide accurate answers based on university and academic documents.

### RAG Pipeline

University Documents
        ↓
Document Processing
        ↓
Text Extraction
        ↓
Text Cleaning
        ↓
Text Chunking
        ↓
Embedding Generation
        ↓
Vector Database
        ↓
User Question
        ↓
Question Embedding
        ↓
Similarity Search
        ↓
Relevant Information
        ↓
LLM
        ↓
Grounded Answer
        ↓
Source Citation


## 5. Embedding Models

Embeddings will convert text into numerical vectors so that relevant information can be searched semantically.

Possible options:

- Google Gemini Embeddings
- OpenAI Embeddings
- Sentence Transformers

Primary approach:

- Use an embedding API/model compatible with the selected LLM and vector database.


## 6. Vector Database

### Primary

- FAISS

### Alternative

- ChromaDB

### Purpose

The vector database will store document embeddings and help retrieve the most relevant information for a student's question.


## 7. Structured Database

### Development Database

- SQLite

### Production Database

- PostgreSQL

### Database Information

The database will store structured information such as:

- Student profiles
- Login information
- Subjects
- Timetable
- Assignments
- Exams
- Chat history
- Quiz records
- Study plans


## 8. Document Processing

The system will support academic documents and student notes.

### Tools

- PyMuPDF
- PyPDF
- pdfplumber

### Supported Documents

- University documents
- Syllabus
- Academic rules
- Exam regulations
- Subject notes
- Student-uploaded PDFs
- Academic notices


## 9. Knowledge Base

The university knowledge base will contain verified information.

### University Information

- University details
- Departments
- Faculty
- Academic rules
- Examination rules
- Academic calendar
- Student services

### Campus Information

- Library
- Laboratories
- Hostel
- Canteen
- Administrative office
- Examination cell
- Student section
- Campus facilities

### Academic Information

- Subjects
- Syllabus
- Notes
- Assignments
- Exams
- Timetable
- Academic resources


## 10. AI Scope Control

The chatbot will be designed as a closed-domain university assistant.

### Allowed Questions

- University-related questions
- Campus-related questions
- Academic questions
- Subject questions
- Questions from uploaded notes
- Timetable questions
- Assignment questions
- Exam questions
- Study-related questions

### Rejected Questions

The chatbot should reject unrelated questions such as:

- Sports
- Entertainment
- General news
- Politics
- Random internet questions
- Unrelated universities
- General-purpose conversations


## 11. No-Source-No-Answer System

A major reliability feature of the chatbot will be:

"No Source → No Answer"

If the system cannot find reliable information from the university knowledge base or student's uploaded documents, it should not generate or invent an answer.

Example:

Student:
"What is the hostel fee for next semester?"

If the information is available:

"According to the university hostel document, the fee is ..."

If the information is unavailable:

"I could not find verified information about the hostel fee in the available university documents."


## 12. Student Personalization

The chatbot can use student-specific information to provide personalized responses.

### Student Information

- Name
- Branch
- Semester
- Subjects
- Timetable
- Assignments
- Exam schedule
- Academic progress

Example:

Student:

"What should I study today?"

The system can use:

- Student's subjects
- Upcoming exams
- Pending assignments
- Study plan

to generate a personalized recommendation.


## 13. Ask My Notes

Students will be able to upload their own academic PDF notes.

### Process

PDF Upload
        ↓
Text Extraction
        ↓
Text Chunking
        ↓
Embeddings
        ↓
Vector Database
        ↓
Student Question
        ↓
Relevant Notes Retrieved
        ↓
LLM
        ↓
Answer


### Features

- Ask questions from notes
- Summarize notes
- Generate questions
- Generate MCQs
- Generate quizzes
- Explain difficult topics
- Extract important points


## 14. Quiz Generation

The AI will generate quizzes using:

- University syllabus
- Subject material
- Uploaded notes
- Retrieved RAG context

### Quiz Features

- MCQs
- Multiple difficulty levels
- Automatic answer checking
- Score calculation
- Explanation of answers
- Topic-based quizzes


## 15. AI Study Planner

The system will generate personalized study plans.

The study planner can consider:

- Subjects
- Exam dates
- Pending assignments
- Student availability
- Difficult topics
- Previous quiz performance

### Example

Upcoming Exam:
DBMS

System Recommendation:

Day 1 → Normalization  
Day 2 → Transactions  
Day 3 → SQL Queries  
Day 4 → Indexing  
Day 5 → Revision + Quiz


## 16. Multilingual Support

The chatbot can support multiple languages.

Initial target languages:

- English
- Hindi
- Gujarati

The LLM will process the question and generate the response in the requested language.


## 17. Authentication

### Prototype

- Email and password authentication

### Future

- University email authentication
- Google authentication
- University ERP integration

Authentication will ensure that student-specific information is protected.


## 18. API Layer

FastAPI will be used to create REST APIs.

### Main APIs

POST /api/auth/register

POST /api/auth/login

POST /api/chat

POST /api/upload

POST /api/quiz

POST /api/study-plan

GET /api/student

GET /api/subjects

GET /api/timetable

GET /api/assignments

GET /api/exams

GET /api/campus

GET /api/announcements

GET /api/chat/history


## 19. Backend AI Services

The backend will be divided into separate services.

### LLM Service

Responsible for:

- Calling the LLM API
- Prompt management
- Generating responses

### RAG Service

Responsible for:

- Document retrieval
- Similarity search
- Context generation

### Embedding Service

Responsible for:

- Generating embeddings
- Processing document vectors
- Processing query vectors

### Classifier Service

Responsible for:

- Detecting whether a question is university-related
- Rejecting out-of-scope questions

### Document Processor

Responsible for:

- PDF processing
- Text extraction
- Cleaning
- Chunking

### Quiz Generator

Responsible for:

- Generating MCQs
- Generating quizzes
- Generating explanations


## 20. Security

The project will follow basic security practices.

- Store API keys in `.env`
- Never commit API keys to GitHub
- Use `.env.example`
- Validate user input
- Validate uploaded files
- Restrict file types
- Limit file size
- Protect student information
- Use authentication for private APIs


## 21. Testing

### Frontend Testing

- UI testing
- Form validation
- Chat interface testing
- Responsive testing

### Backend Testing

- API testing
- Authentication testing
- Database testing
- File upload testing

### AI Testing

- RAG accuracy
- Scope classification
- Hallucination testing
- Source verification
- Out-of-scope question testing

### API Testing Tool

- Postman
- FastAPI Swagger UI


## 22. Deployment

### Frontend

- Vercel

### Backend

- Render
- Railway

### Production Database

- PostgreSQL

### Production Vector Database

Possible options:

- Qdrant
- Pinecone
- Weaviate


## 23. Development Tools

- VS Code
- Git
- GitHub
- Postman
- FastAPI Swagger
- Python Virtual Environment
- npm


## 24. Project Architecture

Student
   ↓
React Frontend
   ↓
FastAPI Backend
   ↓
Scope Classifier
   ↓
Is Question Related?
   ├── NO → Reject Question
   │
   └── YES
         ↓
      RAG System
         ↓
      Query Embedding
         ↓
      Vector Database
         ↓
      Relevant Documents
         ↓
      Context Builder
         ↓
      LLM API
         ↓
      Grounded Answer
         ↓
      Source Citation
         ↓
      Student


## 25. Complete Technology Stack

Frontend:
React.js + JavaScript + Tailwind CSS + Axios

Backend:
Python + FastAPI + Uvicorn

AI:
External LLM API + Prompt Engineering

RAG:
Retrieval-Augmented Generation

Embeddings:
Embedding Model/API

Vector Database:
FAISS

Structured Database:
SQLite

Document Processing:
PyMuPDF / PyPDF / pdfplumber

Authentication:
Email + Password

Testing:
Postman + FastAPI Swagger

Version Control:
Git + GitHub

Frontend Deployment:
Vercel

Backend Deployment:
Render / Railway

Production Database:
PostgreSQL

Production Vector Database:
Qdrant / Pinecone / Weaviate


## 26. Recommended MVP Stack

For the hackathon prototype, the recommended stack is:

Frontend:
React.js + Tailwind CSS

Backend:
Python + FastAPI

LLM:
Google Gemini API or approved LLM API

RAG:
LangChain or custom RAG pipeline

Embeddings:
Gemini Embeddings / Sentence Transformers

Vector Database:
FAISS

Database:
SQLite

PDF Processing:
PyMuPDF

Authentication:
Basic Email + Password

Testing:
Postman

Version Control:
Git + GitHub

Deployment:
Vercel + Render


## 27. Main Principle

The main principle of the project is:

"An AI-powered university assistant that provides grounded, personalized and reliable academic and campus information using LLM + RAG + verified university data."

The system should prioritize:

1. Accuracy
2. Reliable university information
3. Source-based answers
4. Student personalization
5. Scope control
6. Privacy
7. Simple and fast user experience
8. No hallucinated university information