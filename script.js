
// Open and close chatbot
function openChat() {
    document.getElementById('chat-container').classList.add('show-chatbot');
}

// Close chatbot
function closeChat() {
    document.getElementById('chat-container').classList.remove('show-chatbot');
}

// Handle user input and chatbot response
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        // Display user message
        const userMessageDiv = document.createElement('div');
        userMessageDiv.classList.add('message', 'user-message');
        userMessageDiv.innerHTML = `<p>${userInput}</p>`;
        document.getElementById('chat-box').appendChild(userMessageDiv);

        // Clear input field
        document.getElementById('user-input').value = '';

        // Chatbot response
        const botResponse = getBotResponse(userInput);
        const botMessageDiv = document.createElement('div');
        botMessageDiv.classList.add('message', 'bot-message');
        botMessageDiv.innerHTML = `<p>${botResponse}</p>`;
        document.getElementById('chat-box').appendChild(botMessageDiv);

        // Scroll to the latest message
        document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
    }
}

// Get predefined response from the bot
function getBotResponse(userInput) {
    const lowerCaseInput = userInput.toLowerCase();

    // 1. Admissions related queries
    if (lowerCaseInput.includes("admissions") || lowerCaseInput.includes("how to apply") || lowerCaseInput.includes("apply")) {
        return "For more information on college admissions, please visit the official website: <a href='http://gweca.ac.in/Admissionview' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>College Admissions</a>";
    }
    // 2. Application procedure
    else if (lowerCaseInput.includes("admission") || lowerCaseInput.includes("apply")) {
        return "For more information on college admissions, please visit the official website: <a href='http://gweca.ac.in/Admissionview' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>Application Procedure</a>";
    }
    // 3. Course list
    else if (lowerCaseInput.includes("courses") || lowerCaseInput.includes("programs") || lowerCaseInput.includes("departments")) {
        return "We offer a variety of courses including Artificial Intelligence and Machine Learning, Computer Science, Mechanical Engineering, Electrical Engineering, Humanities Science, Information Technology, Master of computer Applicatio and Electrical and Electronics Engineering.";
    }
    // 4. Fee structure
    else if (lowerCaseInput.includes("fees") || lowerCaseInput.includes("fee structure") || lowerCaseInput.includes("tuition fees")) {
        return "The fee structure varies based on the course and category. You can find detailed fee information in the Admissions section on our website: <a href='http://gweca.ac.in/Studentcorner' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>Fee Structure</a> .";
    }
    // 5. Scholarship information
    else if (lowerCaseInput.includes("scholarship") || lowerCaseInput.includes("financial aid")) {
        return "We offer scholarships based on merit and financial need. You can find more information on our Scholarships page: <a href='http://gweca.ac.in/Studentcorner' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>Scholarship Information</a> ."; 
    }
    // 6. Hostel facilities
    else if (lowerCaseInput.includes("hostel") || lowerCaseInput.includes("accommodation")) {
        return "Our college provides hostel accommodation for female students. Visit our Hostel page for more information: <a href='http://gweca.ac.in/Facilities' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>Hostel Facilities</a> .";
    }
    // 7. Library facilities
    else if (lowerCaseInput.includes("library") || lowerCaseInput.includes("books") || lowerCaseInput.includes("reading room")) {
        return "Our library has a vast collection of books, journals, and research papers. Visit the Library page for more information: <a href='http://gweca.ac.in/Facilities' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>Library facilities</a>.";
    }
    // 8. Placements
    else if (lowerCaseInput.includes("placements") || lowerCaseInput.includes("placement cell") || lowerCaseInput.includes("job opportunities")) {
        return "We have a dedicated placement cell that assists students with job placements. Visit our Placement page for more details: <a href='http://gweca.ac.in/PlacementController' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>Placements</a>.";
    }
    // 9. Internship opportunities
    else if (lowerCaseInput.includes("internships")) {
        return "Our college partners with various companies to offer internships. You can learn more about available internships on the Placement page: <a href='http://gweca.ac.in/PlacementController' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>Internship opportunities</a>.";
    }
    // 10. Contact information
    else if (lowerCaseInput.includes("contact") || lowerCaseInput.includes("reach us") || lowerCaseInput.includes("get in touch")) {
        return "You can contact us through the contact form on our website or reach us at the following email: principal@gweca.ac.in, registrar@gweca.ac.in.";
    }

    // 11. Faculty members
    else if (lowerCaseInput.includes("faculty") || lowerCaseInput.includes("professors")) {
        return "Our college has a dedicated team of highly qualified and experienced faculty members. For more details, check out the Faculty page: <a href='http://gweca.ac.in/Welcome/administration' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>Faculty members</a>.";
    }
    // 12. Research facilities
    else if (lowerCaseInput.includes("research") || lowerCaseInput.includes("projects") || lowerCaseInput.includes("research center")) {
        return "Our college supports student and faculty research projects with well-equipped labs and research centers. Learn more on the Research page: <a href='http://gweca.ac.in/ResearchController' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>Research facilities</a>.";
    }
    // 13. Extra-curricular activities
    else if (lowerCaseInput.includes("extra-curricular") || lowerCaseInput.includes("activities") || lowerCaseInput.includes("clubs")) {
        return "We offer a wide range of extra-curricular activities such as clubs, sports, and cultural events. Visit our Student Life page for more details: <a href='http://gweca.ac.in/Studentcorner' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>Extra-curricular activities</a>.";
    }
    // 14. Sports facilities
    else if (lowerCaseInput.includes("sports") || lowerCaseInput.includes("gym") || lowerCaseInput.includes("ground")) {
        return "We have excellent sports facilities, including a gym, playgrounds, and sports teams for various games. Check out the Sports page: <a href='http://gweca.ac.in/Facilities' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>Sports facilities</a>.";
    }
    // 15. Hostel fees
    else if (lowerCaseInput.includes("hostel fees")) {
        return "Hostel fees vary based on the type of accommodation. You can find more information about hostel fees on the Hostel page: <a href='http://gweca.ac.in/Facilities' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>Hostel fees</a>.";
    }
    // 16. Campus Life
    else if (lowerCaseInput.includes("campus life") || lowerCaseInput.includes("student life")) {
        return "Our campus offers vibrant student life with a variety of events, festivals, and activities throughout the year. Visit our Campus Life page: <a href='http://gweca.ac.in/Facilities' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>Campus Life</a>.";
    }
    // 17. Transport facilities
    else if (lowerCaseInput.includes("transport") || lowerCaseInput.includes("bus services") || lowerCaseInput.includes("shuttle")) {
        return "We provide transport services to help students commute. You can find more information about transport facilities on the Transport page: <a href='http://gweca.ac.in/Facilities' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>Transport facilities</a>.";
    }
    // 18. NBA
    else if (lowerCaseInput.includes("naac") || lowerCaseInput.includes("accreditation")) {
        return "Our college is accredited by NAAC with an A grade. You can find more details about our accreditation on the NAAC page: <a href='http://gweca.ac.in/Studentcorner' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>NBA</a>.";
    }
    // 19. Alumni network
    else if (lowerCaseInput.includes("alumni") || lowerCaseInput.includes("alumni network")) {
        return "Our alumni network is strong and actively involved in college events and mentoring. Visit our Alumni page: <a href='http://gweca.ac.in/Welcome/alumni_home' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>Alumni</a>.";
    }
    // 20. Course duration
    else if (lowerCaseInput.includes("course duration") || lowerCaseInput.includes("duration of course")) {
        return "The duration of undergraduate courses is typically 4 years. You can find specific details on the course pages: <a href='http://gweca.ac.in/Welcome' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>Course duration</a>.";
    }

    // 21. Placement salary
    else if (lowerCaseInput.includes("placement salary") || lowerCaseInput.includes("average salary")) {
        return "The average placement salary for our students varies by department and industry. Please visit our Placement page for detailed statistics: <a href='http://gweca.ac.in/PlacementController' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>Placement</a>.";
    }
    // 22. Admission requirements
    else if (lowerCaseInput.includes("admission requirements") || lowerCaseInput.includes("eligibility")) {
        return "The eligibility requirements for various courses are listed on the Admissions page. Visit <a href='http://gweca.ac.in/Welcome' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>Admission requirements</a> for more details.";
    }
    // 23. Contact us page
    else if (lowerCaseInput.includes("contact us") || lowerCaseInput.includes("address") || lowerCaseInput.includes("location")) {
        return "You can find our contact information and college address on the Contact Us page: principal@gweca.ac.in .";
    }
    // 24. Hostel availability
    else if (lowerCaseInput.includes("hostel availability") || lowerCaseInput.includes("room availability")) {
        return "Hostel rooms are available on a first-come, first-served basis. For more details, check the Hostel page: <a href='http://gweca.ac.in/Facilities' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>Hostel Facilities</a>.";
    }
    // 25. Fee payment method
    else if (lowerCaseInput.includes("fee payment") || lowerCaseInput.includes("how to pay fees")) {
        return "Fees can be paid online via our payment gateway. Please visit the Admissions page for payment details: <a href='http://gweca.ac.in/program/UG' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>Fee Structure</a>.";
    }

    // 26. Hostel rules
    else if (lowerCaseInput.includes("hostel rules") || lowerCaseInput.includes("hostel guidelines")) {
        return "Our hostel follows strict rules regarding curfew, cleanliness, and behavior. You can find the full set of guidelines on the Hostel page: <a href='http://gweca.ac.in/Facilities' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>Hostel Rules</a>.";
    }
    // 27. Faculty qualifications
    else if (lowerCaseInput.includes("faculty qualifications") || lowerCaseInput.includes("faculty details")) {
        return "Our faculty members are highly qualified with PhDs and industry experience. For more details, visit the Faculty page: <a href='http://gweca.ac.in/Welcome/administration' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>Faculty qualifications</a>.";
    }
    // 28. International students
    else if (lowerCaseInput.includes("international students") || lowerCaseInput.includes("foreign students")) {
        return "We welcome international students and offer support with visa processes and accommodations.";
    }
    // 29. Hostel food
    else if (lowerCaseInput.includes("hostel food") || lowerCaseInput.includes("meal facilities")) {
        return "The hostel provides nutritious meals to students. Visit the Hostel page for more details about meal options: <a href='http://gweca.ac.in/Facilities' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>Hostel food</a>.";
    }
    // 30. Events and festivals
    else if (lowerCaseInput.includes("events") || lowerCaseInput.includes("festivals") || lowerCaseInput.includes("cultural events")) {
        return "Our college hosts various cultural events and festivals throughout the year. Stay updated through our Events page: <a href='http://gweca.ac.in/Facilities' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>Events and Facilities</a>.";
    }
    // 31. Campus security
    else if (lowerCaseInput.includes("security") || lowerCaseInput.includes("safety")) {
        return "We have 24/7 security on campus to ensure the safety of students and staff. Visit the Security page: <a href='http://gweca.ac.in/Facilities' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>Campus/a>.";
    }
    // 32. Courses in Computer Science
    else if (lowerCaseInput.includes("computer science") || lowerCaseInput.includes("cs courses")) {
        return "We offer various courses in Computer Science including Data Structures, Algorithms, and Machine Learning. Visit the Computer Science page: <a href='http://gweca.ac.in/Welcome/view_department/1' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>CS Courses</a>.";
    }
    // 33. Courses in Mechanical Engineering
    else if (lowerCaseInput.includes("mechanical engineering") || lowerCaseInput.includes("me courses")) {
        return "We offer specialized courses in Mechanical Engineering including Thermodynamics, Fluid Mechanics, and Robotics. Check out the Mechanical Engineering page: <a href='http://gweca.ac.in/Welcome/view_department/10' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>ME Courses</a>.";
    }
    // 34. Exam schedules
    else if (lowerCaseInput.includes("exam schedule") || lowerCaseInput.includes("exam dates")) {
        return "You can find the exam schedule on our Exams page: <a href='http://gweca.ac.in/Studentcorner' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>Exam schedules</a>.";
    }
    // 35. Admission cutoff
    else if (lowerCaseInput.includes("admission cutoff") || lowerCaseInput.includes("cutoff marks")) {
        return "The admission cutoff varies each year depending on the number of applicants. Visit the Admissions page for more details: <a href='http://gweca.ac.in/Studentcorner' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>Admission cutoff</a>.";
    }
    // 36. Online classes
    else if (lowerCaseInput.includes("online classes") || lowerCaseInput.includes("virtual classes")) {
        return "We offer only offline classes for various courses.";
    }
    // 37. Course syllabus
    else if (lowerCaseInput.includes("syllabus") || lowerCaseInput.includes("course curriculum")) {
        return "You can find the detailed syllabus for each course on our Syllabus page: <a href='http://gweca.ac.in/Studentcorner' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>Course syllabus</a>.";
    }
    // 38. Hostel application
    else if (lowerCaseInput.includes("hostel application") || lowerCaseInput.includes("apply for hostel")) {
        return "To apply for hostel accommodation, visit the Hostel page and fill out the application form: <a href='http://gweca.ac.in/Facilities' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>Hostel application</a>.";
    }
    // 39. Course accreditation
    else if (lowerCaseInput.includes("course accreditation") || lowerCaseInput.includes("course certification")) {
        return "Our courses are accredited by relevant educational bodies. Visit the Accreditation page for more details: <a href='http://gweca.ac.in/Studentcorner' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>Course</a>.";
    }
    // 42. Internship requirements
    else if (lowerCaseInput.includes("internship requirements") || lowerCaseInput.includes("internship eligibility")) {
        return "To be eligible for internships, you need to meet the department’s specific criteria. Check out the Internships page: <a href='http://gweca.ac.in/PlacementController' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>Internship requirements</a>.";
    }
    // 43. Placement companies
    else if (lowerCaseInput.includes("placement companies") || lowerCaseInput.includes("recruiters")) {
        return "We have tie-ups with top companies for placements. Visit the Placement page for a list of companies that have recruited from our college: <a href='http://gweca.ac.in/PlacementController' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>Placement companies</a>.";
    }
    // 45. Faculty recruitment
    else if (lowerCaseInput.includes("faculty recruitment") || lowerCaseInput.includes("job openings")) {
        return "Our college periodically posts faculty recruitment opportunities. Visit the Career Opportunities page for more details: <a href='http://gweca.ac.in/Welcome/administration' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>Faculty recruitment</a>.";
    }
    // 46. Semester exams
    else if (lowerCaseInput.includes("semester exams") || lowerCaseInput.includes("end term exams")) {
        return "You can find the semester exam schedule and guidelines on the Exams page: <a href='http://gweca.ac.in/Studentcorner' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>Semester exams</a>.";
    }
    // 47. Workshops and seminars
    else if (lowerCaseInput.includes("workshops") || lowerCaseInput.includes("seminars")) {
        return "We organize workshops and seminars to enhance your learning experience. Stay updated through our Events page: <a href='http://gweca.ac.in/Studentcorner' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>Workshops and seminars</a>.";
    }
    // 48. Alumni meet
    else if (lowerCaseInput.includes("alumni meet") || lowerCaseInput.includes("reunion")) {
        return "We organize an alumni meet every year to reconnect with former students. Visit the Alumni page for more details: <a href='http://gweca.ac.in/Welcome/alumni_home' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>Alumni meet</a>.";
    }
    // 49. College timings
    else if (lowerCaseInput.includes("college timings") || lowerCaseInput.includes("working hours")) {
        return "Our college timings are from 9 AM to 5 PM. Visit the College Timings page for more details: <a href='http://gweca.ac.in/Welcome' target='_blank' style='color: #0066cc; font-weight: bold; text-decoration: underline;'>College timings</a>.";
    }

    // Default response if no match found
    return "I'm sorry, I didn't understand that. Can you please rephrase your question?";
}

// Initialize chat window (could be triggered by a button)
document.addEventListener("DOMContentLoaded", function() {
    // Chatbox is hidden initially, only shown when the user clicks "Query??"
});
