// Rehype plugin: turn a Markdown image with a title into a <figure> with a
// <figcaption>. e.g. ![alt](./img.png "My caption") becomes
//   <figure><img .../><figcaption>My caption</figcaption></figure>
// We replace the wrapping <p> (when it only holds the image) so we don't end
// up with an invalid <figure> nested inside a <p>.

const isWhitespaceText = (node) =>
	node.type === 'text' && node.value.trim() === '';

const onlyChildImage = (node) => {
	if (node.tagName !== 'p') return null;
	const significant = node.children.filter((c) => !isWhitespaceText(c));
	if (significant.length !== 1) return null;
	const [child] = significant;
	if (child.type !== 'element' || child.tagName !== 'img') return null;
	return child;
};

export default function rehypeFigure() {
	return (tree) => {
		const walk = (node) => {
			if (!node.children) return;
			for (let i = 0; i < node.children.length; i++) {
				const child = node.children[i];

				const img = onlyChildImage(child);
				const title = img?.properties?.title;
				if (img && title) {
					node.children[i] = {
						type: 'element',
						tagName: 'figure',
						properties: { className: ['post-figure'] },
						children: [
							img,
							{
								type: 'element',
								tagName: 'figcaption',
								properties: {},
								children: [{ type: 'text', value: String(title) }],
							},
						],
					};
					continue;
				}

				walk(child);
			}
		};
		walk(tree);
	};
}
