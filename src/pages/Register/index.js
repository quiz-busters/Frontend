import { useState }from 'react';
import Base from '../../components/Base';
import classes from './index.module.css';
import Input from '../../components/Input';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { MdLock } from 'react-icons/md';
import Vector from '../../images/Vector (1).png'
import { useUserContext } from '../../context/UserContext';
import axios from 'axios';
import Button from '../../components/Button';

function Register() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register } = useUserContext();
  const [image, setImage] = useState(false);
//  const [file, setFile] = useState(null);

  async function uploadImage(e) {
    const file = e.target.files[0];
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "quiztime");
    const res = await axios.post("https://api.cloudinary.com/v1_1/dwlrocmqq/upload", data)
    console.log(res.data.secure_url)
    setImage(res.data.secure_url);
  }

  return (
    <>
    <div data-testid="regHead" id="register">
      <Base >
        <div className={classes.container}>
          <h1 >Register</h1>
          <form 
            onSubmit={(e) => {
              e.preventDefault()
              register(username, email, password, image);
            }}
          >
            <Input
              type="text"
              placeholder="Username"
              Icon={BsFillPersonFill}
              value={username}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="email"
              placeholder="Email"
              data-testid="email-input"
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
            <div className={classes.imageContainer}>
              <div>
                <img src={image ? image : Vector} />
              </div>
              <label htmlFor="image">+ Add Picture</label>
              <input id="image" hidden type="file" onChange={uploadImage} />
            </div>
            <Button>
              Create
              <br /> Account
            </Button>
          </form>
        </div>
      </Base>
      </div>
    </>
  )
}

export default Register;
