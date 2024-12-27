import tkinter as tk
from tkinter import scrolledtext


# Enhanced Chatbot Logic
def chatbot_response(user_input):
    user_input = user_input.lower()

    responses = {
        "courses": "We offer courses such as B.Tech, MBA, B.Sc, and M.Sc. For a detailed list, please visit our website.",
        "admission": "Admissions open every year from April to June. You can apply online via our official portal.",
        "fees": "Our fees range from $2000 to $5000 per semester, depending on the course. Visit our fee structure page for details.",
        "contact": "You can reach us at +1-800-123-4567 or email us at admissions@college.edu.",
        "location": "We are located at 123 University Street, Cityville, Country. Feel free to visit our campus!",
        "scholarship": "We offer merit-based and need-based scholarships. Visit the scholarship section on our website for more details.",
        "hostel": "We provide modern hostel facilities for both boys and girls, equipped with Wi-Fi, gym, and mess services.",
        "default": "I'm sorry, I didn't quite catch that. Could you rephrase or ask something specific?"
    }

    for key in responses:
        if key in user_input:
            return responses[key]

    return responses["default"]


# Function to display user query and response
def send_message(user_input):
    chat_window.configure(state="normal")
    chat_window.insert(tk.END, f"You: {user_input}\n", "user")
    response = chatbot_response(user_input)
    chat_window.insert(tk.END, f"Bot: {response}\n\n", "bot")
    chat_window.configure(state="disabled")
    chat_window.yview(tk.END)  # Scroll to the bottom


# Function for button-based responses
def handle_option(option):
    send_message(option)


# Create Modern GUI Window
root = tk.Tk()
root.title("College Enquiry Chatbot")
root.geometry("500x700")
root.configure(bg="#f5f5f5")

# Chat display area
chat_window = scrolledtext.ScrolledText(root, wrap=tk.WORD, font=("Arial", 12), state="disabled", width=55, height=25, bg="#ffffff", fg="#000000")
chat_window.pack(padx=10, pady=10)

# Style for chatbot and user text
chat_window.tag_config("bot", foreground="blue", font=("Arial", 12, "italic"))
chat_window.tag_config("user", foreground="green", font=("Arial", 12, "bold"))

# Option buttons
options_frame = tk.Frame(root, bg="#f5f5f5")
options_frame.pack(pady=10, fill=tk.X)

options = [
    "What courses are available?",
    "How do I apply for admission?",
    "What is the fee structure?",
    "How can I contact you?",
    "Where is the college located?",
    "Do you offer scholarships?",
    "Tell me about hostel facilities."
]

# Create buttons for predefined options
for option in options:
    button = tk.Button(
        options_frame, 
        text=option, 
        font=("Arial", 10), 
        bg="#007bff", 
        fg="white", 
        relief="flat", 
        command=lambda opt=option: handle_option(opt)
    )
    button.pack(fill=tk.X, padx=10, pady=5)

# Run the chatbot GUI
root.mainloop()