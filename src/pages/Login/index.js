import { useState } from 'react'
import { Link } from 'react-router-dom';
import Base from '../../components/Base';
import { useUserContext } from '../../context/UserContext';
import Input from '../../components/Input';
import Button from '../../components/Button';
import classes from './index.module.css';
import { MdEmail } from 'react-icons/md';
import { MdLock } from 'react-icons/md';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useUserContext();
 
  return (
    <Base>
      <div className={classes.container}>
        <h1>Login</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            login(email, password)
          }}
        >
          <Input
            type="email"
            placeholder="Email"
            Icon={MdEmail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            Icon={MdLock}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={classes.buttons}>
            <Link to="/register">
              <Button>Register</Button>
            </Link>
            <Button>Login</Button>
          </div>
        </form>
      </div>
    </Base>
  )
}

export default Login;
