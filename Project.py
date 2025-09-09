import tkinter as tk
from time import strftime
import random

# Create main window
root = tk.Tk()
root.title("Digital Clock with Body")
root.geometry("800x500")
root.configure(bg='black')

# Colors to change hourly
color_palette = [
    "#FF5733", "#33FF57", "#3357FF",
    "#F333FF", "#33FFF3", "#F3FF33"
]

last_hour = -1
current_color = random.choice(color_palette)

# Create the "Clock Body" frame
clock_body = tk.Frame(root, bg='#222222', bd=20, relief='ridge')
clock_body.pack(pady=50, ipadx=50, ipady=50)

# Time Label (inside body)
time_label = tk.Label(clock_body, font=('Orbitron', 60, 'bold'), bg='#222222')
time_label.pack(pady=10)

# Date Label (inside body)
date_label = tk.Label(clock_body, font=('Arial', 24), bg='#222222')
date_label.pack()

# Function to update time and color
def update_time():
    global last_hour, current_color

    current_time = strftime('%H:%M:%S %p')
    current_date = strftime('%A, %d %B %Y')
    current_hour = int(strftime('%H'))

    # Change color every hour
    if current_hour != last_hour:
        current_color = random.choice(color_palette)
        last_hour = current_hour

    time_label.config(text=current_time, fg=current_color)
    date_label.config(text=current_date, fg='white')

    time_label.after(1000, update_time)

# Start updating time
update_time()

# Run the GUI
root.mainloop()