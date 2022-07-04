import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { Blogs } from "../../articles";


interface Props {
    value: string | null;
    setValue: (value: string | null) => void;
    setText: (text: string) => void;
}

const ArticleAutocomplete = ({value, setValue, setText}: Props) => {

    const options = Blogs.sort((a, b) =>
        a.shortTitle < b.shortTitle ? -1 : 1
    ).map((article) => article.shortTitle);
    const [ inputValue, setInputValue ] = useState("");

    return (
        <Autocomplete
            freeSolo
            disablePortal
            options={options}
            renderInput={(params) => <TextField {...params} label="Article Title/Content"/>}
            value={value}
            onChange={(event: any, newValue: string | null) => {
                setValue(newValue);
                setText(newValue === null ? "" : newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
                setText(newInputValue);
            }}
        />
    );
};

export default ArticleAutocomplete;
