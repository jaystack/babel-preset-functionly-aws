module.exports = {
	presets: [
		[
			'env',
			{
				targets: {
					node: '6.10'
				}
			}
		]
	],
	plugins: [
		'functionly-annotations',
		'transform-decorators-legacy'
	]
};
