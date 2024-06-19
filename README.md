“App.js Description: The root component of the application. It sets up the navigation stack using react-navigation.
•	Initializes the navigation container.
•	Defines the stack navigator with Login and Home.


Login.js Description: The login screen where users input their name and email to log in.
•	Provides input fields for name and email.
•	Includes a "Log In" button that navigates to the Home with the entered name and email as parameters.


Home.js Description: The home screen that displays the user's name, email, and job recommendations.
•	It displays the user's name and email passed from Login.
•	It renders lists of featured and popular job cards using the JobCard component.


JobCard Description: A reusable component for displaying job details.
•	It takes job as a prop and displays its details.
•	It is used within the Home to render lists of featured and popular jobs.”

