import './App.css';
import authService from './service/auth'
import { useEffect, useState } from 'react';
import CreateMabarForm from './components/CreateMabar';
import Login from './components/Login';

function App() {
  const [profile, setProfile] = useState({})

  const fetchProfile = async () => {
    try {
      const profile = await authService.getProfile();
      setProfile(profile);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [])


  const isLoggedIn = Object.keys(profile).length > 0;

  return (
    <div className="container w-max">
      <Login profile={profile} />

      {isLoggedIn && (
        <CreateMabarForm />
      )}
    </div>
  );
}

export default App;
