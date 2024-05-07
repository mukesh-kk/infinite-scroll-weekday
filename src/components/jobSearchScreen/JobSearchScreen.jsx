import CardSections from "../cardSection/CardSection";
import Filter from "../filter/Filter";

function JobSearchScreen() {
    return ( <div className="mt-4 sm:mx-12">
    <Filter/>
    <div className="mt-3"></div>
    <CardSections/>
    </div> );
}

export default JobSearchScreen;