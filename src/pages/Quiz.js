import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Questions from '../components/Questions';


const Quiz = ({name,score,questions,setQuestions,setScore}) => {
 const [options,setOptions] = useState('');
 const [currQuest,setCurrQuest] = useState (0);
 const [loading,setLoading] = useState(false)
const navigate=useNavigate();
 
 useEffect(() => {
  if (questions==''){
     setTimeout(() => {
      navigate('/')
    }, 1000);
  }else{

  setOptions(
    
      handleShuffle([
        questions[currQuest]?.correct_answer,
        ...questions[currQuest]?.incorrect_answers,
      ])
  );
}
}, [currQuest, questions]);

console.log(questions);

const handleShuffle = (optshu) => {
return optshu.sort(() => Math.random() - 0.5);
};

  return (
    <div className='quiz'>
       <span  className="subtitle">Hello, {name}!</span>
       {questions ? (
        <>
          <div className="quizInfo">
            <span style={{color:'white'}}>{questions[currQuest].category}</span>
            <span style={{color:'white'}}>
              Score : {score}
            </span>
          </div>
          <Questions
            currQues={currQuest}
            setCurrQues={setCurrQuest}
            questions={questions}
            options={options}
            correct={questions[currQuest]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="secondary"
          size={150}
          thickness={1}
        />
      )}
    </div>
  )
};

export default Quiz