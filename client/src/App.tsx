import React from 'react';
import { useEffect, useState } from 'react';

interface User {
  name: string
}

const backendBaseUri = process.env.REACT_APP_BACKEND_BASE_URI;

const App = () => {
  const [user, setUser] = useState<User>({name: ''});

  useEffect(() => {
    const loadUser = async () => {
      // TODO
      const result = await fetch(`${backendBaseUri}/me`);
  
      setUser(await result.json());
    };
    
    loadUser();
    console.log('Loaded User');
  }, []);
  
  return <div>
    {user.name}
  </div>;
}

export default App;
