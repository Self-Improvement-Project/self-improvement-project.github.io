import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkImages from "remark-images";
// import rehypeKatex from "rehype-katex";
import { IBlog } from "../../articles";
import "../../markdown.css";


const Markdown = ({file}: { file: IBlog }) => {
	const [ sourceCode, setSourceCode ] = useState("");

	useEffect(() => {
		fetch(file.data)
			.then(res => res.text())
			.then(text => setSourceCode(text));
	}, []);

	return (
		<div id="markdown">
			<ReactMarkdown
				children={sourceCode}
				remarkPlugins={[ remarkImages, remarkGfm ]}
				// rehypePlugins={[ rehypeKatex ]}
			/>
		</div>
	);
};

export default Markdown;
