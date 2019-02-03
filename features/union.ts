import { Book, Magazine } from '../interfaces';
import * as util from '../lib/utilityFunctions';

let allBooks: Book[] = util.GetAllBooks();
let allMagazines: Magazine[] = util.GetAllMagazines();

function PrintTitle(item: Book | Magazine) : void {
    console.log(item.title)
}


export function MainUnion() {

    PrintTitle(allBooks[0]);
    PrintTitle(allMagazines[0]);
}

