import './App.css';
import CollegeList from './components/CollegeList';

function App() {
  return (
    <>
      <div className="heading gray fw300">Colleges in North India</div>
      <div className='collegeFeedView'>
        <CollegeList />
      </div>
    </>
  );
}

export default App;
