import {AcademicCapIcon, ChatBubbleOvalLeftEllipsisIcon, CodeBracketIcon} from "@heroicons/react/24/outline/index.js";
import TheHomePage from "./components/pages/TheHomePage.jsx";
import TheSkillPage from "./components/pages/TheSkillPage.jsx";
import TheFeedbackPage from "./components/pages/TheFeedbackPage.jsx";

export const PAGE_HOME = 'home'
export const PAGE_SKILLS = 'skills'
export const PAGE_FEEDBACK = 'feedback'

export const NAV_ITEMS = [
    {
        page: PAGE_HOME,
        icon: () => <CodeBracketIcon className="w-6 h-6 mb-2"/>,
        text: 'Home',
        component: () => <TheHomePage/>,
    },
    {
        page: PAGE_SKILLS,
        icon: () => <AcademicCapIcon className="w-6 h-6 mb-2"/>,
        text: 'Skills',
        component: () => <TheSkillPage/>,
    },
    {
        page: PAGE_FEEDBACK,
        icon: () => <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6 mb-2"/>,
        text: 'Feedback',
        component: () => <TheFeedbackPage/>,
    },
]