/**
 * UserWelcome component displays a personalized greeting.
 * Simple, friendly welcome message for the authenticated user.
 *
 * @param {Object} props - Component properties
 * @param {string} props.name - User's name to display in the greeting
 * @returns {JSX.Element} Welcome message with wave emoji
 */
export const UserWelcome = ({ name }) => <div>Hello, {name} 👋</div>;
