import './App.css';
import authService from './service/auth'
import { useEffect, useState } from 'react';
import CreateMabarForm from './components/CreateMabar';
import Login from './components/Login';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGamingSessions } from './reducers/gamingSessionsReducer';
import MabarList from './components/MabarList';

function App() {
  const [profile, setProfile] = useState({})
  const gamingSessions = useSelector(state => state.gamingSessions)
  const dispatch = useDispatch()

  const fetchProfile = async () => {
    try {
      const profile = await authService.getProfile();
      setProfile(profile);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  useEffect(() => {
    dispatch(getAllGamingSessions())
    fetchProfile();
  }, [])

  return (
    <div className="container w-max">
      <Login profile={profile} />
      {profile.id && (
        <div>
          <CreateMabarForm profile={profile} />
          <div className="text-5xl font-semibold pb-1 text-left">Happening Now!</div>
          <div className="text-xl font-light pb-6 text-left">Find your fellow gamers</div>
          <div>
            {gamingSessions.map((session, index) => (
              <MabarList session={session} />
            ))}
          </div>
        </div>
      )}
    </div>

  );
}

export default App;
