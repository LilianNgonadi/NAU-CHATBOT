// chatbot.js
function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    const chatBox = document.getElementById("chat-box");

    // Add user's message to the chat box
    const userMessageDiv = document.createElement("div");
    userMessageDiv.className = "message user-message";
    userMessageDiv.textContent = userInput;
    chatBox.appendChild(userMessageDiv);

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear input field
    document.getElementById("user-input").value = "";

    // Generate chatbot's response
    const botMessageDiv = document.createElement("div");
    botMessageDiv.className = "message bot-message";
    botMessageDiv.textContent = getChatbotResponse(userInput);
    chatBox.appendChild(botMessageDiv);

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

// Simple predefined responses for demo purposes
function getChatbotResponse(userInput) {
    const responses = {
        "what is the university's name?": "The university's name is Nnamdi Azikiwe University, also known as UNIZIK.",
        "where is the university located?": "Nnamdi Azikiwe University is located in Awka, Anambra State, Nigeria.",
        "how many faculties does the university have?": "The university has 14 faculties, offering various courses and programs.",
        "what are the university's departments?": "The university has departments such as Computer Science, Law, Medicine, Engineering, Arts, and many more.",
        "how can I apply for admission?": "You can apply for admission by visiting the university's website and checking the admission guidelines.",
        "what courses are offered?": "The university offers courses in Science, Arts, Engineering, Law, Medicine, and more.",
        "tell me about nnamdi azikiwe university": "Nnamdi Azikiwe University (UNIZIK) is a federal university located in Awka, Nigeria. Established in 1991, it aims to provide a high-quality education that fosters intellectual developmentresearch, and community service. UNIZIK offers a diverse range of undergraduate and postgraduate programs",
        "what is the history of unizik": "UNIZIK was founded to promote academic excellence and research, with a vision to produce competent graduates who can meet the challenges of the 21st century. It started with a few faculties and has grown to encompass several colleges, institutes, and specialized centers for advanced studies.",
        " do the university offer scholarships": "UNIZIK offers various scholarship opportunities to support deserving students. These scholarships include merit-based scholarships, need-based financial aid, and scholarships for students from underprivileged backgrounds. Students are encouraged to apply for scholarships at the beginning of each academic session. For specific scholarship details and eligibility requirements, please visit the official UNIZIK website or contact the scholarship office.",
         "what type of programs is offered by the university?": "UNIZIK offers various undergraduate and postgraduate programs across multiple disciplines, including Arts, Sciences, Engineering, Health Sciences, Management Sciences, and Social Sciences.",
          "how do you apply to unizik?": "To apply to UNIZIK, candidates must go through the Joint Admissions and Matriculation Board (JAMB) for undergraduate programs. For postgraduate programs, applicants can check the university's official website for detailed application procedures and requirements.",
          "what is the tution fee like?": "Tution fees vary depending on the program and level of study. Generally, undergraduate school fees range from N50,000 to N100,000 per session. Postgraduate fees vary by program. For the latest information, please visit the official UNIZIK website.",
          "where is the university located?": "Nnamdi Azikiwe University is located in Awka, the capital city of Anambra State, Nigeria. The campus is easily accessible and features a conducive learning environment.",
        "what is the admission requirements":"For undergraduate programs, candidates must have at least five O'Level credits in relevant subjects, including Mathematics and English. For postgraduate programs, candidates typically need a first degree in a related field, as well as meeting any specific departmental requirements.", 
            "what initiatives does unizik have for research and innovation?":"UNIZIK is committed to research and innovation. The university has established several research centers that focus on various fields, encouraging faculty and students to engage in research activities and collaborate with industry partners."


    };

    const cleanedInput = userInput.toLowerCase();
    return responses[cleanedInput] || "I'm sorry, I don't have an answer for that question.";
}

