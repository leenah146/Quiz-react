import { Button, MenuItem, TextField } from '@mui/material'
import {useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Categories from '../components/Categories'

const Home = ({name,setName,fetchQuestions}) => {
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  // const [error,setError]=useState(false);
  const navigate = useNavigate();
const buttonHandler = () => {
  // if(!category||!mode||!name||!type){
  //   setError(true)
  //   return  <Errorespon>Ops! looks like you missed something!</Errorespon>;
  // }
  // else{
  // setError(false)
  fetchQuestions(category,difficulty)
  navigate('/quiz')
  // }

}
  return (
    <div className='content'>
   <div>
   <img className='cogs' src='./img/cogs-animation.gif' alt='cogs'/>
    <span className='quizset'>Set up your quiz!</span>
   <div className='set_select'>

    <TextField label='Tell us your name!'  color='secondary' variant='outlined' style={{marginTop:20}} onChange={(e) => setName(e.target.value)} value={name} />
    <TextField select label='select category'  color='secondary' variant='outlined' onChange={(e) => setCategory(e.target.value)} value={category}>
    {
    Categories.map((cat) => (
      <MenuItem key={cat.category} value={cat.value}>
        {cat.category}
      </MenuItem>
    ))
    }
      
    </TextField>
    <TextField
            select
            label="Select Difficulty"
            variant="outlined"
            style={{ margintop:25}}
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button variant='contained' color='secondary' onClick={buttonHandler}>Let's Start!</Button>
   </div>
   </div>
  
    </div>
  )
}

export default Home