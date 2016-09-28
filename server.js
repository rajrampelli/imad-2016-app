var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

//Java script object for Article three
var articleThree = {
    title: "Article Three | Raj Kumar R",
    heading: "Article Three",
    content: `
        <p>
		    This is Article three created using Java objects and function called createTemplate()
		</p>
		<br>
		<h1>Story</h1><br>
		<p>
		    Article Three story: New way of creating html pages
		</p>
    `

};

function createTemplate(data) {
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
var htmlTemplate = `
<html>
	<head>
	    <title>
	        ${title}
	    </title>
	    <meta name="viewport" content="width=device-width, initial-scale=1" />
	    <link href="/ui/style.css" rel="stylesheet" />
	</head>
	<body>
	    <div class="container">
	        <div>
	            <a href="/">Home</a>
	        </div>
		    <h1>${heading}</h1>
		    ${content}
		</div>
	</body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/raj.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'raj.jpg'));
});

app.get('/aboutme.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'aboutme.html'));
});

app.get('/article-one.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-two.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

//Using Java script object, create html
app.get('/article-three.html', function (req, res) {
  res.send(createTemplate(articleThree));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
