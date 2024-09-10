# Task Manager Application

This Task Manager Application is a React-based project that allows users to add, delete, and view tasks. It leverages key React concepts such as state, props, forms, lifecycle hooks, controlled and uncontrolled components, event handling, code splitting, and Redux for global state management.

## Features

- Add new tasks to the task list
- Delete tasks from the task list
- Task state management using Redux
- Responsive design for mobile and desktop
- Lazy loading of task components using `React.lazy()` and `Suspense`
- Controlled and uncontrolled forms for handling user input
- Simple and clean UI with a sticky responsive navbar

## Technologies Used

- **React**: Frontend UI library
- **Redux**: For global state management
- **React-Redux**: Integrating Redux with React
- **React Router**: For page navigation (if added later)
- **CSS**: For styling and responsiveness

## Installation

To run this project locally, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/task-manager.git
   ```

2. Navigate to the project directory:

   ```bash
   cd task-manager
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000/`.


## How to Use

1. **Add Task**: Enter the task name and optional description in the input fields, then click the **Add Task** button.
2. **Delete Task**: Click the **Delete** button next to each task to remove it from the list.

## Styling

- The app includes basic styling to ensure a clean and user-friendly interface.
- The application is fully responsive, ensuring compatibility across all device sizes.
- The Navbar is styled to be sticky and remains visible at the top while scrolling.

## Code Splitting

- The task list component is loaded lazily using `React.lazy()` and `Suspense` for optimized performance.

## State Management

- Redux is used to handle global state, with actions for adding and deleting tasks.

## Contributions

Feel free to fork this project and make your own modifications! Pull requests are welcome for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.

