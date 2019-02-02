import { Book } from '../interfaces';
import * as util from '../lib/utilityFunctions';

function PrintBokInfo(item: Book): void {
    console.log(`${item.title} was authored by ${item.author}`)
}

function LogFavoriteBooks([book1, book2, ...others]: Book[]): void {
    PrintBokInfo(book1);
    PrintBokInfo(book2);
    console.log(others);
}

export function ex1 () {
    LogFavoriteBooks(util.GetAllBooks());
}

export function ex2 () {
    let [book1]  = util.GetAllBooks();
    let {title, author} = book1;
    console.log(title);
    console.log(author);
}

export function mainDestructuring() {
    ex1();
    ex2();
}