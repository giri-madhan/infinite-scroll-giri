import { useRef, useEffect } from 'react';
// custom components
import CollegeCard from '../components/CollegeCard';
// styles 
import '../styles/collegesList.css'
import { colleges } from "../data/colleges.json";

const CollegeList = () => {
    const collegeListRef = useRef();
    return (
        <div className='collegeFeedRow' ref={collegeListRef}>
            {colleges.map((college) => 
                <CollegeCard college={college}/> 
            )}
        </div>
    );
}

export default CollegeList;