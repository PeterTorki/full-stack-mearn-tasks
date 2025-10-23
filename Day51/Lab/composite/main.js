import Book from "./Book.js";
import Box from "./Box.js";

const book1 = new Book("Design Patterns", 395);
const book2 = new Book("Clean Code", 464);
const book3 = new Book("Refactoring", 448);
const book4 = new Book("You Don’t Know JS", 278);

const box1 = new Box("Programming Books");
const box2 = new Box("Advanced Topics");
const mainBox = new Box("Library Box");

box1.add(book1);
box1.add(book2);

box2.add(book3);
box2.add(book4);

mainBox.add(box1);
mainBox.add(box2);

mainBox.showDetails();

console.log(`\n📚 Total pages in Library: ${mainBox.getPages()} pages`);
