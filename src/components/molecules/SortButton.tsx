import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import * as React from "react";


const options = [ "Sort Alphabetically", "Sort Chronologically" ];

const SortButton = () =>
	<FormControl>
		<FormLabel id="demo-form-control-label-placement">Sort</FormLabel>
		<RadioGroup
			row
			aria-labelledby="demo-form-control-label-placement"
			name="position"
			defaultValue="top"
		>
			<FormControlLabel
				value="Chronologically"
				control={<Radio/>}
				label="Chronologically"
				labelPlacement="start"
			/>
			<FormControlLabel
				value="Alphabetically"
				control={<Radio/>}
				label="Alphabetically"
				labelPlacement="start"
			/>
		</RadioGroup>
	</FormControl>;

export default SortButton;
