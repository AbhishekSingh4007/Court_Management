function validatePassword(password, confirmPassword) {
    // Check if passwords match
    if (password !== confirmPassword) {
      return "Passwords do not match.";
    }
  
    // Define regular expressions for password criteria
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
  
    // Check the length and criteria for the password
    if (password.length < 8) {
      return "Password must be at least 8 characters long.";
    }
  
    if (!uppercaseRegex.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }
  
    if (!lowercaseRegex.test(password)) {
      return "Password must contain at least one lowercase letter.";
    }
  
    if (!numberRegex.test(password)) {
      return "Password must contain at least one number.";
    }
  
    // Password and confirmation password are valid
    return "Passwords are valid.";
  }
  
  // Example usage:
  const password = "MyP@ssw0rd";
  const confirmPassword = "MyP@ssw0rd";
  const validationMessage = validatePassword(password, confirmPassword);
  console.log(validationMessage);
  