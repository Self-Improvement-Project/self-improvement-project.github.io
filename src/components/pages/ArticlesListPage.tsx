import { Container, Grid, TextField } from "@mui/material";
import { CSSProperties, useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Blogs, IBlog } from "../../articles";
import { shuffle } from "../../utils";
import { BlogStub, Title } from "../molecules";


const styles: Record<string, CSSProperties> = {
	Container: {
		// backgroundColor: '#f6f6f6'
		textAlign: "left"
	}
};

const SORT_OPTIONS = [
	"Chronologically",
	"Reverse-Chronologically",
	"Alphabetically",
	"Reverse-Alphabetically"
] as const;
type ISortOption = typeof SORT_OPTIONS[number];

const ArticlesListPage = () => {

	const [ filterText, setFilterText ] = useState("");
	const [ sortBy, setSortBy ] = useState<ISortOption | undefined>();

	const [ allArticles, setAllArticles ] = useState<IBlog[]>([]);

	// on page load
	useEffect(() => {
		const shuffledArticles = shuffle(Blogs);
		setAllArticles(shuffledArticles);
	}, []);

	const filtered = (articles: IBlog[]): IBlog[] =>
		articles.filter((article) =>
			article.title.toLowerCase().includes(filterText.toLowerCase()) ||
			article.excerpt.toLowerCase().includes(filterText.toLowerCase())
		);

	const sorted = (articles: IBlog[]): IBlog[] => {
		if (sortBy) {
			if (sortBy === "Chronologically") {
				return articles.sort((a, b) =>
					a.createdAt.getTime() - b.createdAt.getTime()
				);
			} else if (sortBy === "Reverse-Chronologically") {
				return articles.sort((a, b) =>
					b.createdAt.getTime() - a.createdAt.getTime()
				);
			} else if (sortBy === "Alphabetically") {
				return articles.sort((a, b) =>
					a.title < b.title ? -1 : 1
				);
			} else if (sortBy === "Reverse-Alphabetically") {
				return articles.sort((a, b) =>
					a.title < b.title ? 1 : -1
				);
			} else {
				return articles;
			}
		} else {
			return articles;
		}
	};

	return (
		<Container maxWidth="md" style={styles.Container}>
			<Title/>
			{/*<Logo size="sm"/>*/}
			<Grid container spacing={2} style={{marginBottom: 10}}>
				<Grid item xs={4}>
					<h3> Articles </h3>
				</Grid>
				<Grid item xs={5} style={{textAlign: "right"}}>
					<TextField
						id="outlined-basic"
						label="Filter"
						variant="standard"
						style={{height: 3}}
						value={filterText}
						onChange={(e) => setFilterText(e.target.value)}
					/>
				</Grid>
				<Grid item xs={1}>
					<DropdownButton title="Sort" menuVariant="dark" variant="secondary"
					                onSelect={e => setSortBy(e as unknown as ISortOption)}>
						{
							SORT_OPTIONS.map((option) => (
								<Dropdown.Item key={option} eventKey={option}>{option}</Dropdown.Item>
							))
						}
					</DropdownButton>
				</Grid>
			</Grid>
			{
				sorted(filtered(allArticles)).map((article) => (
					<BlogStub key={article.id} blog={article}/>
				))
			}
		</Container>
	);
};

export default ArticlesListPage;
