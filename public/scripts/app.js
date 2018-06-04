'use strict';

console.log('App.js is running!');
// JSX - Javascript XML
var app = {
    title: 'Some title',
    subtitle: 'This is a subtitle',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'p',
        null,
        'This is ',
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        'This is a subtitle: ',
        app.subtitle,
        ' '
    ),
    React.createElement(
        'p',
        null,
        app.options && app.options.length > 0 ? React.createElement(
            'ol',
            null,
            React.createElement(
                'li',
                null,
                app.options[0]
            ),
            React.createElement(
                'li',
                null,
                app.options[1]
            )
        ) : 'No options available.'
    )
);
var userName = "Mike";
var userAge = 27;
var userLocation = "California";

var user = {
    name: 'Mike',
    age: 26,
    location: 'California'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
