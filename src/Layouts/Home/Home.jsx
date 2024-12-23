import Banner from "./Banner";
import ContactSection from "./ContactSection";
import FaqSection from "./FaqSection";
import QueriesSection from "./QueriesSection";



const Home = () => {


    
    return (
        <div className="space-y-5 md:space-y-20">
            <Banner></Banner>
            <QueriesSection></QueriesSection>
            <FaqSection></FaqSection>
            <ContactSection></ContactSection>
        </div>
    );
};

export default Home;