import { useState } from 'react';
import './App.css';
import testData from './TestData.json';
import 'survey-react/survey.css';
import { Survey } from 'survey-react-ui';

function App() {
  
  const [isComplete, setComplete] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <p>Questions</p>
        <main>
          {
            !isComplete ? (
              <Survey 
                json={testData}
                showCompletePage={false}
                onComplete={setComplete}
              />
            ) : null
          }
        </main>
      </header>
    </div>
  );
}

export default App;
