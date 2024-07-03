import s from './styles.module.scss'
import {HeroSection} from "./HeroSection/index.jsx";
import {HowItWorks} from "./HowItWorks/index.jsx";
import {FaqSmall} from "./FaqSmall/index.jsx";
import {NotSureSection} from "./NotSureSection/index.jsx";
import {FaqSection} from "./FaqSection/index.jsx";
import {QuestionBanner} from "./QuestionBanner/index.jsx";
import {LeadSection} from "./LeadSection/index.jsx";

export const Main = () => {
    return (
        <main className={s.main}>
            <HeroSection/>
            <HowItWorks/>
            <FaqSmall/>
            <NotSureSection/>
            <FaqSection/>
            <QuestionBanner/>
            <LeadSection/>
        </main>
    );
};

