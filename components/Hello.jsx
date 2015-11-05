// 初识React jsx 语法
// props

// see: http://app.myzaker.com/news/article.php?pk=55adc9c81bc8e03c61000016

var Hello = React.createClass({
	render: function() {
		return (
			<h1>hello {this.props.name}</h1>
		)
	}
});