import React from "react";

const PasswordStrengthChecker = ({ password }) => {
  const conditions = [
    { text: "At least 8 characters long", regex: /.{8,}/ },
    { text: "At least one uppercase letter", regex: /[A-Z]/ },
    { text: "At least one lowercase letter", regex: /[a-z]/ },
    { text: "At least one number", regex: /\d/ },
    { text: "At least one special character", regex: /[!@#$%^&*(),.?":{}|<>]/ }
  ];

  const strengthLevels = ["Weak", "Good", "Strong"];
  
  const calculateStrength = () => {
    const metConditions = conditions.filter(cond => cond.regex.test(password)).length;
    if (metConditions <= 1) return strengthLevels[0];
    if (metConditions === 2 || metConditions === 3) return strengthLevels[1];
    return strengthLevels[2];
  };

  return (
    <div className="password-conditions">
      <ul>
        {conditions.map((cond, index) => (
          <li 
            key={index} 
            style={{ color: cond.regex.test(password) ? "green" : "red" }}
          >
            {cond.text}
          </li>
        ))}
      </ul>
      <p>Password Strength: <strong>{calculateStrength()}</strong></p>
    </div>
  );
};

export default PasswordStrengthChecker;
