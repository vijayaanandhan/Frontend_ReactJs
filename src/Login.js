import React, { useEffect } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

const logout = () => {
    navigate('/Home');
};

  useEffect(() => {
    const labels = document.querySelectorAll('.form-control label');

    labels.forEach((label) => {
      label.innerHTML = label.innerText
        .split('')
        .map(
          (letter, idx) =>
            `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
        )
        .join('');
    });

    const inputFields = document.querySelectorAll('.form-control input');

    inputFields.forEach((input) => {
      input.addEventListener('focus', () => {
        input.parentElement.classList.add('active');
      });

      input.addEventListener('blur', () => {
        if (input.value === '') {
          input.parentElement.classList.remove('active');
        }
      });
    });
  }, []);

  return (
    <div>
      <div class="login-form-bd">
        <div class="form-wrapper">
          <div class="form-container">
            <h1> Please Login</h1>
            <form>
              <div class="form-control">
                <label>Email</label>
                <br></br>
                <input type="text" required />
              </div>

              <div class="form-control">
                <label>Password</label>
                <br></br>
                <input type="password" required />
              </div>
              <button class="login-btn" onClick={logout}>Login</button>
              <p class="text">
                Don't have an account? <Link to="/signup">Register</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
