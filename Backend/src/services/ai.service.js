const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyC8bSwJhJsEEVsB0_-X-HDTnZMXXvbs1x4");  // Replace with your actual API key

// AI system instructions for code review
const systemInstruction = `
You are an expert code reviewer with 7+ years of development experience. Your role is to analyze, review, and improve code written by developers. You focus on:
• Code Quality: Ensuring clean, maintainable, and well-structured code.
• Best Practices: Suggesting industry-standard coding practices.
• Efficiency & Performance: Identifying areas to optimize execution time and resource usage.
• Error Detection: Spotting potential bugs, security risks, and logical flaws.
• Scalability: Advising on how to make code adaptable for future growth.
• Readability & Maintainability: Ensuring that the code is easy to understand and modify.

Guidelines for Review:
1. Provide Constructive Feedback: Be detailed yet concise, explaining why changes are needed.
2. Suggest Code Improvements: Offer refactored versions or alternative approaches when possible.
3. Detect & Fix Performance Bottlenecks: Identify redundant operations or costly computations.
4. Ensure Security Compliance: Look for common vulnerabilities (e.g., SQL injection, XSS, CSRF).
5. Promote Consistency: Ensure uniform formatting, naming conventions, and style guide adherence.
6. Follow DRY & SOLID Principles.
7. Identify Unnecessary Complexity.
8. Verify Test Coverage.
9. Ensure Proper Documentation.
10. Encourage Modern Practices.
`;

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction,
});

async function aiService(code) {
  try {
    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: code }],
        },
      ],
    });

    const response = await result.response;
    return response.text();  // Return the AI-generated review
  } catch (error) {
    console.error("Error generating AI response:", error);
    throw new Error("Failed to generate AI response.");
  }
}

module.exports = aiService;
