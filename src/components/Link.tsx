import React, { FunctionComponent } from "react";

const Link: FunctionComponent = ({ active, children, onClick }: any) => {
	if (active) {
		return <span>{children}</span>;
	}

	return (
		<a
			href="!#"
			onClick={(e) => {
				e.preventDefault();
				onClick();
			}}
		>
			{children}
		</a>
	);
};

export default Link;
