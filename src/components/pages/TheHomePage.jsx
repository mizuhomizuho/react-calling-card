import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/prism-light.js";
import dracula from "react-syntax-highlighter/dist/cjs/styles/prism/dracula.js";
import config from "../../config.jsx";

const TheHomePage = () => {

    const content = config.home;

    return (
        <SyntaxHighlighter language="javascript" style={dracula} showLineNumbers={true} wrapLines={true}>
            {`// ${config.comment}
            \n${JSON.stringify(content, null, 2)}`}
        </SyntaxHighlighter>
    );
};

export default TheHomePage;