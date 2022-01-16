import React, { useState } from "react";
import { Badge } from "react-bootstrap";
import { marked } from "marked";
import "./App.css";
const App = () => {
	const [state, setstate] = useState("");

	const updateMarkdown = (markdown) => setstate(markdown);
	return (
		<div className="App">
			<div className="container">
				<div className="row mt-4">
					<div className="col text-center">
						<h1>
							{" "}
							<Badge className="text-align-center" bg="dark">
								Markdown Previewer
							</Badge>
						</h1>
					</div>
				</div>

				<div className="row mt-4">
					<div className="col-md-6">
						{" "}
						<div className="col text-center">
							<h4>
								<Badge className="text-align-center" bg="dark">
									Markdown Input
								</Badge>
							</h4>
						</div>
						<div>
							<textarea
								className="input-style"
								value={state}
								onChange={(e) => {
									updateMarkdown(e.target.value);
								}}
							></textarea>
						</div>
					</div>

					<div className="col-md-6">
						{" "}
						<div className="col ">
							<h4>
								<Badge className="text-align-center" bg="dark">
									Preview
								</Badge>
							</h4>
						</div>
						<div
							className="output-style"
							style={{ textAlign: "left" }}
							dangerouslySetInnerHTML={{
								__html: marked(state),
							}}
						></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
