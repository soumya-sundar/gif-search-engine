import './App.css';
import React, { useState, useEffect} from 'react';
import Header from './Components/Header/Header';
import Page from './Page/Page';


function App() {
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, []);

  function onClick(pageNo) {
    setPage(pageNo);
  }

  return (
    <div className="App">
      <Header onClick={onClick}/>
      <Page page={page} />
      <footer>
        <p>Contact: soumya-sundar @GitHub.com</p>
      </footer>
    </div>
  );
}

export default App;
