
import React, { useState, useEffect } from "react";
import './App.css'

import CardsList from "./components/CardsList";
import Header from "./components/Header";
import data from './data.json';
import useLocalStorage from './utils/useLocalStorage';

function App() {
  const [completedProblems, setCompletedProblems] = useLocalStorage('completedProblems');
  const [metrics, setMetrics] = useState({
    completedCount: 0,
    easyCount: 0,
    mediumCount: 0,
    hardCount: 0,
    totalCount: data.length
  });

  useEffect(() => {
    const easy = data.filter(problem => problem.Type === "Easy").length;
    const medium = data.filter(problem => problem.Type === "Medium").length;
    const hard = data.length - easy - medium;
    
    setMetrics({
      completedCount: completedProblems.length,
      easyCount: easy,
      mediumCount: medium,
      hardCount: hard,
      totalCount: data.length
    });
  }, [completedProblems]);

  return (
    <div>
      <Header 
        completedCount={metrics.completedCount}
        easyCount={metrics.easyCount}
        mediumCount={metrics.mediumCount}
        hardCount={metrics.hardCount}
        totalCount={metrics.totalCount}
      />
      <CardsList />
    </div>
  );
}

export default App;
