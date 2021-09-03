import { useRef, useEffect, useState } from 'react';
// custom components
import CollegeCard from '../components/CollegeCard';
// Custom Hooks
import useOnScreen from '../customHooks/useOnScreen';
// styles 
import '../styles/collegesList.css'
import { colleges } from "../data/colleges.json";

const CollegeList = () => {
    const messagesEndRef = useRef(null);
    const isVisible = useOnScreen(messagesEndRef);
    const [showColleges, setShowCollges] = useState([]);
    const [loadCount, setLoadCount] = useState(1);

    const loadMore = () => {
        setShowCollges(colleges.slice(0, loadCount * 10))
        setLoadCount(loadCount + 1);
    }

    useEffect(() => {
        loadMore();
    }, [isVisible])
    
    return (
        <div className='collegeFeedRow'>
            {showColleges.map((college) => 
                <CollegeCard college={college} /> 
            )}
            {/* to check if bottom reached */}
            <div ref={messagesEndRef} />
        </div>
    );
}

export default CollegeList;