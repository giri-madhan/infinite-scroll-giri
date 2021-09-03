import '../styles/collegeCard.css';
import Assets from '../utils/Assets';
import capitilizeFirstLetter from '../utils/functions';

const TagButton = ({ tagName }) => {
    return(
        <div className="whiteButton fw300">
            <span>{capitilizeFirstLetter(tagName)}</span>
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

const Offer = () => {
    return (
        <div className="offerView fw700"><span className="fw300">Flat</span> Rs<span className="green">2,000</span> off + upto Rs <span className="green">500</span> wallet! to avail... <span className="blue">LOGIN</span></div>
    );
}


const CollegeCard = ({ college }) => {
    return (
        <div className='cardContainer'>
            <div className="topContainer">
                <img className="collegeImage" src={Assets.college_02} alt='college_01' />
                {college.promoted && 
                    <div className="promotedBackground">
                        <span className="white fw700">PROMOTED</span>
                    </div>
                } 
                <Rating rating={3.9} totalrating={5} />
                <div className="tagsContainer">
                    <Tags tags={ college.tags }/>
                </div>
                <div className="rankingContainer white fw500">
                    #{college.ranking}
                </div>
            </div>
            <div className="bottomContainer">
                <div className="bottomLeftContainer">
                    <div className="collegeNameAndRating grey fw700">{college.college_name} ★★★★☆</div>
                    <div className="collegeAddress grey fw600">{college.nearest_place[0]} | <span className="distanceFrom">{college.nearest_place[1]}</span></div>
                    <div className="collegeMatch"><span className="matchNumber green fw800">93% Match: </span><span className="kilometers-text grey fw800">2.5kms </span><span>from GTB Nagar, 7 Kms from Rajiv Chowk</span></div>
                    <Offer />
                </div>
                <div className="bottomRightContainer">
                    <div className="originalPriceView">
                        <span className="orginalPrice grey"> ₹{college.original_fees}</span> <span className="offerPercentageView white"><span className="fw800">· </span>{college.discount}</span>
                    </div>
                    <div className="actualPrice red fw800">
                        ₹{college.discounted_fees}
                    </div>
                    <div className="priceDuration grey fw500">{college.amenties}</div>
                    <div className="collegePerks green fw600">{college.amenties.map(amenity => amenity+"   ")}</div>
                </div>
            </div>
        </div>
    );
}

export default CollegeCard;