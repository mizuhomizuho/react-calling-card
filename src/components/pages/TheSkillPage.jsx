import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/prism-light.js";
import dracula from "react-syntax-highlighter/dist/cjs/styles/prism/dracula.js";
import config from "../../config.jsx";

const TheSkillPage = () => {

    const content = config.skills;

    return (
        <SyntaxHighlighter language="javascript" style={dracula} showLineNumbers={true} wrapLines={true}>
            {JSON.stringify(content, null, 2)}
        </SyntaxHighlighter>
    );
};

export default TheSkillPage;