import '../styles/collegeCard.css';
import Assets from '../utils/Assets';

const TagButton = ({ tagName }) => {
    return(
        <div className="whiteButton">
            <span>{tagName}</span>
        </div>
    );
}

const Tags = ({ tags }) => {
    if(tags) {
        return (
            tags.map((tag) => {
                return (<TagButton tagName={tag} />)
            })
        );
    }
}

const Rating = ({ rating, totalrating }) => {
    return (
        <div className="ratingContainer white">
            <div>
                <span className="ratingText fw600">{rating}</span>/{totalrating}
            </div>
            <div className="fw700">Very Good</div>
        </div>
    );
}


const CollegeCard = () => {
    return (
        <div className='cardContainer'>
            <div className="topContainer">
                <img className="collegeImage" src={Assets.college_01} alt='college_01' />
                <div className="promotedBackground">
                    <span className="white fw700">PROMOTED</span>
                </div>
                <Rating rating={3.9} totalrating={5} />
                <div className="tagsContainer">
                    <Tags tags={ ["Best College 2018", "2Kms away"] }/>
                </div>
                <div className="rankingContainer white fw500">
                    #7 in 260 colleges in north campus
                </div>
            </div>
            <div className="bottomContainer">
                <div className="bottomLeftContainer">
                    <div className="collegeNameAndRating grey fw700">Hansraj College Delhi University - 1 ★★★★★</div>
                    <div className="collegeAddress grey fw600">Near Vishwavidyalya Metro Station | <span className="distanceFrom">2 Kms away from bus stand</span></div>
                    <div className="collegeMatch"><span className="matchNumber green fw800">93% Match: </span><span className="kilometers-text grey fw800">2.5kms </span><span>from GTB Nagar, </span></div>
                    <div className="offerView fw700"><span className="fw300">Flat</span> Rs<span className="green">2,000</span> off + upto Rs <span className="green">500</span> wallet! to avail... <span className="blue">LOGIN</span></div>
                </div>
                <div className="bottomRightContainer">
                    <div className="originalPriceView">
                        <span className="orginalPrice grey">₹6,300</span> <span className="offerPercentageView white"><span className="fw800">· </span>20</span>
                    </div>
                    <div className="actualPrice red fw800">
                        ₹5,768
                    </div>
                    <div className="priceDuration grey fw500">Per Semester (3 Months)</div>
                    <div className="collegePerks green fw600">Free Cancellation . Free Wifi</div>
                </div>
            </div>
        </div>
    );
}

export default CollegeCard;