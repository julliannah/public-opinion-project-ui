import 'survey-react/survey.css';
import './App.css';
import { StylesManager } from "survey-core";

import SurveyPage from './pages/SurveyPage';

StylesManager.applyTheme("defaultV2");
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SurveyPage />
      </header>
    </div>
  );
}

export default App;
