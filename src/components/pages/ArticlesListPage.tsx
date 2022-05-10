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
	const [ filteredArticles, setFilteredArticles ] = useState<IBlog[]>([]);

	// on page load
	useEffect(() => {
		const shuffledArticles = shuffle(Blogs);
		setAllArticles(shuffledArticles);
		setFilteredArticles(shuffledArticles);
	}, []);

	// on filter or sort
	useEffect(() => {
		// console.log({sortBy});
		if (filterText !== "") {
			setFilteredArticles(
				allArticles.filter((article) => {
					return article.title.toLowerCase().includes(filterText) ||
						article.excerpt.toLowerCase().includes(filterText);
				})
			);
		}
		if (sortBy) {
			if (sortBy === "Chronologically") {
				console.log("chron");
				setFilteredArticles(
					allArticles.sort((a, b) => {
						return a.createdAt.getTime() - b.createdAt.getTime();
					})
				);
			} else if (sortBy === "Reverse-Chronologically") {
				setFilteredArticles(
					allArticles.sort((a, b) => {
						return b.createdAt.getTime() - a.createdAt.getTime();
					})
				);
			} else if (sortBy === "Alphabetically") {
				setFilteredArticles(
					allArticles.sort((a, b) => {
						return a.title < b.title ? 1 : -1;
					})
				);
			} else if (sortBy === "Reverse-Alphabetically") {
				setFilteredArticles(
					allArticles.sort((a, b) => {
						return a.title < b.title ? -1 : 1;
					})
				);
			}
		}
	}, [ filterText, sortBy ]);

	return (
		<Container maxWidth="md" style={styles.Container}>
			<Title/>
			{/*<h1> {filterText} </h1>*/}
			{/*<h1> {sortBy} </h1>*/}
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
					{/*<SortButton*/}
					{/*	value=""*/}
					{/*	onChange={}*/}
					{/*/>*/}
				</Grid>
			</Grid>
			{
				filteredArticles.map((article) => (
					<BlogStub key={article.id} blog={article}/>
				))
			}

		</Container>
	);
};

export default ArticlesListPage;
