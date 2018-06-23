/* HTML Code Version
<div>
    <h1>Bookstore</h1>
    <ul>
        <li>Books are coming soon!</li>
    </ul>
    <footer>Copyright 2018</footer>
</div>
*/

// Step 1 ---- Description of what page looks like

// let element = document.createElement(1, 2, 3); - Vanilla JS
// 1st argument of createElement: location of div on page
// 2nd argument of createElement: where you outline your attributes, href, etc - CAN'T DEFINE CLASS, must use className
// 3rd argument of createElement: element.textContent = 'Bookstore'; // don't use innerText // html goes here

/* If we handwrite out React.createElement -- describes what the page looks like 
React.createElement = function(type, mystery, children) {
    return {
        type: type,
        props: {
            children: children
        }
    }
};
*/

// Step 2 ---- Rendering to the page
// document.querySelector('react-root').appendChild(element); - Vanilla JS
// instead use ReactDOM.render


// Step 1 in React

const books = [
    { title: 'A Tale of Two Cities', author: 'Charles Dickens'}, 
    { title: 'War and Peace', author: 'Leo Tolstory'},
    { title: 'The Count of Monte Cristo', author: 'Another Guy'}
];

let h = React.createElement; // goes into variable to save space, BUT it's not invoked - variable often called h or v

/* -- version 1 (longer)
let title = h('h1', null, 'Bookstore');
let bookRow = h('li', null, 'Books are coming soon!')
let bookList = h('ul', { className : 'book-list' }, bookRow);
let copyright = h('footer', null, 'Copyright 2018');
let container = h('div', null, [
    title, 
    bookList,
    copyright,
]);
*/

/* version 2 (shorter-ish)
let bookRows = books.map(book => 
    h('li', null, `${book.title} by ${book.author}`)
);
*/

// version 3 (shortest)
let container = h('div', null, [
    h('h1', null, 'Bookstore'), 
    h('ul', { className : 'book-list' }, 
        books.map(book => 
            h('li', null, `${book.title} by ${book.author}`)
        )
    ),
    h('footer', null, 'Copyright 2018'),
]);

// Step 2 in React
ReactDOM.render(
    container, 
    document.querySelector('.react-root')
);