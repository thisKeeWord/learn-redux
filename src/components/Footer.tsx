import React, { FunctionComponent } from "react";
import FilterLink from "./FilterLink";

const Footer: FunctionComponent = () => (
	<p>
		Show: <FilterLink filter="SHOW_ALL">All</FilterLink>
		{", "}
		<FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
		{", "}
		<FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
	</p>
);

export default Footer;
