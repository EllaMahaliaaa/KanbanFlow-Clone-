import Column from "./column.js";

export default class Kanban {
	constructor(root) {
		this.root = root;

		Kanban.columns().forEach(column => {
			const columnView = new Column(column.id, column.title);

			this.root.appendChild(columnView.elements.root);
		});
	}

	static columns() {
		return [
			{
				id: 1,
				title: "To Do"
			},
			{
				id: 2,
				title: "Progging"
			},
			{
				id: 3,
				title: "Completed"
			}
		];
	}
}