import AppBar from './AppBar';
import PilotList from './PilotList';
import officers from '../officers.json';

// умова && jsx
// умова ? jsx1 : jsx2

const activeOfficers = officers.filter(officer => officer.active);
const youngOfficers = officers.filter(officer => officer.age < 40);

export default function App() {
  return (
    <>
      <AppBar />
      {/* <PilotList items={officers} /> */}
      <h2>Active Officers</h2>
      <PilotList items={activeOfficers} />
      <h2>Young Officers</h2>
      <PilotList items={youngOfficers} />
    </>
  );
}
