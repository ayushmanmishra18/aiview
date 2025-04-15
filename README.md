🧠 AIview - Code Review Assistant
AIview is an AI-powered code review tool designed for developers. It allows you to write, paste, and analyze code right in the browser, and get instant feedback from an AI reviewer. Think of it like having your own personal code reviewer 24/7.

✨ Features
🔍 AI Code Review: Get constructive feedback on your code using AI.

🧑‍💻 Live Code Editor: Built using react-ace with a VS Code–like experience.

🎨 VS Code UI Feel: Replicates the look and feel of VS Code in the browser.

🌈 Dark Mode Theme: Clean and minimal developer-friendly interface.

🔧 Language Support: Supports multiple languages including JavaScript, Python, Java, C++, and more!

🚀 Built for Hackathons, Devs & Students

🛠️ Tech Stack
Frontend
React.js

React-Ace (Ace Editor)

Prism.js + Highlight.js

React Markdown

Backend
Node.js + Express (for /ai/get-review endpoint)

OpenAI / any LLM API integration (for actual code reviews)

📦 Installation
Clone the repository:
git clone https://github.com/ayushmanmishra18/aiview.git

Go to the frontend directory:
cd aiview/frontend

Install dependencies:
npm install

Start the frontend:
npm run dev

Make sure your backend is running on port 3000.

🧠 AI Integration
The backend /ai/get-review endpoint is responsible for handling code review requests. It sends the code to an LLM (like OpenAI) and returns suggestions and improvements.

Example Request:

bash
Copy
Edit
POST http://localhost:3000/ai/get-review
{
  "code": "function sum(a, b) { return a + b; }"
}
🚀 Coming Soon
Language support for Python, Java, C++, and more!

Export review as PDF

GitHub integration to fetch repos

Realtime collaborative editing

Dark/Light theme toggle

🤝 Contributing
Contributions are welcome! Open an issue or submit a pull request.

📄 License
MIT License - LICENSE

🙌 Made with ❤️ by Ayushman
