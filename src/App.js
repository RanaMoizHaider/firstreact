import logo from './logo.svg';
import './App.css';
import Student from './components/Student';
import Teacher from './components/Teacher';
function App() {
  return (
    <div className="container">
      <h1>Helllo B section</h1>
      <Teacher />
      <Student name="Junaid" address="Shalamar"/>
      <Student name="Shahmir" address="PIA Road"/>
      {/* <Student /> */}
      {/* <Student /> */}
    </div>
  );
}

export default App;
