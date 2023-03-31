import { render, screen } from '@testing-library/react';
import LoginForm from '.';

test('renders sign in page', () => {
  render(<LoginForm />);
  const signInText = screen.getByText("Sign in");
  expect(signInText).toBeInTheDocument();
});

// Add more unit test here

test('validate email and password', () => {
  const validateForm = () => {
    const email = 'test@example.com';
    const password = 'Test@123';

    // Add validation code here

    var validator = require("email-validator");

    const passwordRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{8,}$"
    );

    if (validator.validate(email) && passwordRegex.test(password)) {
      return true;
    } else {
      return false;
    }
  };
  expect(validateForm).toBe(true);
})