
import PropTypes from 'prop-types'; // Import PropTypes
import { TodoItemContext } from './store/todo-items-store'
import { useContext } from 'react';

const ErrorMessage = () => {
  const todoItems = useContext(TodoItemContext)
  return (
    todoItems.length === 0 &&
    <div className="alert alert-success" role="alert">
      <h6>Enjoy your day!!! You do not have anything to do</h6>
    </div>
  );
};

// Define PropTypes validation
ErrorMessage.propTypes = {
  todoItems: PropTypes.array.isRequired // Validate todoItems as an array and required
};

export default ErrorMessage;
