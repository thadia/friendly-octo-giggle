console.log('App.js is running!');
// JSX - Javascript XML
var app = {
    title: 'Some title',
    subtitle: 'This is a subtitle',
    options: ['One', 'Two']
};

var template = ( 
    <div>
        <p>This is {app.title}</p> 
        {app.subtitle && <p>This is a subtitle: {app.subtitle} </p>}
        <p> 
            {(app.options && app.options.length > 0) ? 
            <ol>
                <li>{app.options[0]}</li>
                <li>{app.options[1]}</li>
            </ol> : 'No options available.'
        }
        </p>
    </div> 
) ;
var userName = "Mike";
var userAge = 27;
var userLocation = "California";

var user = {
    name: 'Mike',
    age: 26,
    location: 'California'
};

function getLocation(location){
    if(location) {
        return <p>Location: {location}</p>
        ;
    }
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        { (user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template,appRoot);
