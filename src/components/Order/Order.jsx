import React, {useState} from 'react';
import Login from '../Login/Login';
import useToken from '../Login/useToken'

export default function Order() {
  const { token, setToken } = useToken();
  const [ mains, setMains ] = useState();
  // const [ desert, setDeserts ] = useState([]);
  // const [ sides, setSides ] = useState([]);

  if(!token) {
    return <Login setToken={setToken} />
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return(
    <div>
      <h2>Order</h2>

      <form onSubmit={handleSubmit}>
        <h3>Mains</h3>
        <button type="submit">Order now</button>
      </form>
    </div>
  );
}