import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkImages from "remark-images";
import { IBlog } from "../../articles";
import "../../markdown.css";


const Markdown = ({file}: { file: IBlog }) => {
	const [ sourceCode, setSourceCode ] = useState("");

	const readFile = (file: IBlog) => {
		fetch(file.data)
			.then(res => res.text())
			.then(text => setSourceCode(text));
	};

	// on page load
	useEffect(() => {
		readFile(file);
	}, []);

	// on file change
	useEffect(() => {
		readFile(file);
	}, [ file ]);

	return (
		<div id="markdown">
			<ReactMarkdown
				children={sourceCode}
				remarkPlugins={[ remarkImages, remarkGfm ]}
			/>
		</div>
	);
};

export default Markdown;
