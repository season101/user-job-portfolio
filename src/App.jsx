import { useEffect, useState } from 'react';
import BtnContainer from './BtnContainer';
import JobInfo from './JobInfo';
import Loading from './Loading';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [profiles, setProfiles] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        return;
      }
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

  const companies = [...new Set(profiles.map((job) => job.company))];
  return (
    <section className="jobs-center">
      <BtnContainer companies={companies} />
      <JobInfo {...profiles[0]} />
    </section>
  );
};
export default App;
