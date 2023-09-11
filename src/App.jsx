import { useEffect, useState } from 'react';
import Loading from './Loading';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [profiles, setProfiles] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProfiles(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  console.log(profiles);
  return <h2>Tabs Starter</h2>;
};
export default App;
