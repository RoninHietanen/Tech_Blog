const { Post } = require('../models');

const postData = [
  {
    title: 'ORM Mapping',
    content: 'An ORM tool simplifies the data creation, data manipulation and data access. It is a programming technique that maps the object to the data stored in the database.',
    user_id: 1
    
  },
  {
    title: 'VSCODE',
    content: 'Visual Studio Code is an integrated development environment made by Microsoft for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git.',
    user_id: 2
  },
  {
    title: 'Is VS Code an IDE?',
    content: 'In contrast, Visual Studio Code can be classed as an integrated development environment (IDE), meaning that developers can write and test code at the same time.',
    user_id: 3
  },
  {
    title: 'What is Python?',
    content: 'Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.',
    user_id: 3
  },
  {
    title: 'MVC',
    content: 'The Model-View-Controller (MVC) is an architectural pattern that separates an application into three main logical components: the model, the view, and the controller. Each of these components are built to handle specific development aspects of an application.',
    user_id: 1
    
  }
  
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;