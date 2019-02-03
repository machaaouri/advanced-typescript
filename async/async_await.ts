import { Category } from '../enums';
import { Book, Logger, Author, Librarian, Magazine } from '../interfaces';
import { UniversityLibrarian, ReferenceItem,} from '../classes';
import * as util from '../lib/utilityFunctions';

 
function getBooksByCategory(cat: Category): Promise<string[]> {

    let p: Promise<string[]> = new Promise((resolve, reject) => {
        
        setTimeout(() => {
            let foundBooks = util.GetBookTitlesByCategory(cat);
                if(foundBooks.length > 0 )
                    resolve(foundBooks);
                else
                    reject('No books found for that category');
        }, 2000);
    })
    return p;
}

async function logSearchResults(booksCategory: Category){
    let foundBooks = await getBooksByCategory(booksCategory);
    console.log(foundBooks);
}
export function MainAsync()
{
    console.log('Beginning search...')      
    logSearchResults(Category.Biography)
    .catch(reason => console.log(`Error: ${reason}`));  
    console.log('Serach submitted...')
}