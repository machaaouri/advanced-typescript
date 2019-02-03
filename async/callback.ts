import { Category } from '../enums';
import { Book, Logger, Author, Librarian, Magazine } from '../interfaces';
import { UniversityLibrarian, ReferenceItem,} from '../classes';
import * as util from '../lib/utilityFunctions';

 
interface LibCallBakc {
    (err: Error, titles: string[]): void;
}

function getBooksByCategory(cat: Category, callBack: LibCallBakc): void {

        // simulate a server call
        setTimeout(() => {
            try{
                let foundBooks = util.GetBookTitlesByCategory(cat);
                if(foundBooks.length > 0 )
                    callBack(null,foundBooks);
                else
                    throw new Error('No books found');
            }
            catch(err)
            {
                callBack(err,null);
            }
        }, 2000);
}

function logCategorySearch(err: Error, titles:string[]): void  {
    if(err) {
        console.log(`Error Message : ${err.message}`);
    }
    else {
        console.log('Found the following titles')
        console.log(titles);
    }
}

export function MainCallback()
{
    console.log('Beginning search...');
    getBooksByCategory(Category.Biography,logCategorySearch)
    console.log('Serach submitted...')
}