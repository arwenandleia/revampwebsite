import React from "react";

const VerticalTextScroller = ({ listOfWords }) => {
	const longestWord = listOfWords.reduce(
		(acc, word) => (acc.length > word.length ? acc : word),
		""
	);

	return (
		<div className="inline-flex">
			<div className="relative max-h-fit overflow-hidden flex  items-center ">
				<ul className="invisible">
					<li>{longestWord}</li>
				</ul>
				<div className="absolute top-0 left-0">
					<ul className=" animate-infinite-scroll delay-1000 max-h-fit text-center ">
						{listOfWords.map((word) => (
							<li key={`first${word}`}>{word}</li>
						))}
					</ul>
					<ul
						className="animate-infinite-scroll delay-1000 max-h-fit text-center "
						aria-hidden="true">
						{listOfWords.map((word) => (
							<li key={`second${word}`}>{word}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default VerticalTextScroller;
