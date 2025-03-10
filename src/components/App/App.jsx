import AppBar from '../AppBar/AppBar';
import PilotList from '../PilotList/PilotList';
import officers from '../../officers.json';
import css from './App.module.css';
import SunIcon from '../../assets/cloud-sun.svg';

// умова && jsx
// умова ? jsx1 : jsx2

// children
// const ProfileSection = ({ title, children }) => {
//   return (
//     <section>
//       <h2>{title}</h2>
//       {children}
//     </section>
//   );
// };

// const StudentProfile = () => {
//   return (
//     <div>
//       <p>Профіль студента</p>
//       <button>Кнопка шось зробити</button>
//     </div>
//   );
// };

const activeOfficers = officers.filter(officer => officer.active);
const youngOfficers = officers.filter(officer => officer.age < 40);

export default function App() {
  return (
    <>
      {/* children */}
      {/* <ProfileSection title="Рейтинг">
        <StudentProfile />
      </ProfileSection>

      <ProfileSection
        title="Що це за очки досвіду та рівні?"
      >
        <p>Список досвіду</p>
      </ProfileSection>

      <ProfileSection title="Як отримати більше очків досвіду?">
        <h3>Вказівки</h3>
      </ProfileSection> */}

      <h1 className={css.title}>Styling React Component</h1>
      <AppBar />
      <SunIcon width="80" height="80" />
      {/* <PilotList items={officers} /> */}
      <h2 className={css.subtitle}>Active Officers</h2>
      <PilotList items={activeOfficers} />
      <h2 className={css.subtitle}>Young Officers</h2>
      <PilotList items={youngOfficers} />
    </>
  );
}
