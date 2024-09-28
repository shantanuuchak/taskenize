# App logic

This file encapsulates the input functionality

# Variables

TaskLi: A function that takes in a task object and returns the corresponding el
tasks = []
saveToLocal(): takes current tasks and saves them to local storage
renderTasks(): tasks tasks and renders each one of them by passing to TaskLi()

# User Actions

1. User types input and hit `Enter` or press +

   - currentInput = input.trim()
   - tasks.push(currentInput)
   - saveToLocal()
   - renderTasks()

2. User clicks on a list

   - Mark the task as completed (stike-through)

3. User click on list cross

   - Delete the task
