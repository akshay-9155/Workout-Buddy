import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import PasswordStrengthChecker from "../components/PasswordStrengthChecker";
const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPasswordConditions, setShowPasswordConditions] = useState(false);
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <label>Email address:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label>Password:</label>
      <input
        type="password"
        onFocus={() => setShowPasswordConditions(true)}
        // onBlur={() => setShowPasswordConditions(false)}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      {showPasswordConditions && (
        <PasswordStrengthChecker password={password} />
      )}

      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Signup;
