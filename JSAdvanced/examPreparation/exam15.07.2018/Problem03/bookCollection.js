class BookCollection {
    constructor(shelfGenre, room, shelfCapacity) {
        this.room = room;
        this.shelfGenre = shelfGenre;
        this.shelf = [];
        this.shelfCapacity = Number(shelfCapacity)
    }

    get shelfGenre() {
        return this._shelfGenre;
    }

    set shelfGenre(shelfGenre) {
        if (this.room === 'livingRoom' || this.room === 'bedRoom' || this.room === 'closet') {
            this._shelfGenre = shelfGenre;
        } else {
            throw new Error(`Cannot have book shelf in ${this.room}`)
        }

    }

    addBook(bookName, bookAuthor, genre) {
        let book = {
            bookName: bookName,
            bookAuthor: bookAuthor,
        }
        if(genre!==undefined){
            book.genre=genre;
        }
        if (this.shelf.length <this.shelfCapacity) {  ///????
            this.shelf.push(book)
        } else {
            this.shelf.shift()
            this.shelf.push(book)
        }
        this.shelf.sort((a, b) => a.bookAuthor.localeCompare(b.bookAuthor));
        return this
    }

    throwAwayBook(bookName) {
        let arr = this.shelf;
        for (let i = 0; i < arr.length; i++) {
            let currBookObj = arr[i];
            if (currBookObj.bookName === bookName) {
                this.shelf.splice(i, 1)
                break;
            }
        }
    }

    showBooks(genre) { //sort????
        let resultArr = this.shelf.filter(x => x.genre === genre);
        resultArr = resultArr.filter(x => x !== undefined);
            let result = `Results for search "history":\n`;
            for (let book of resultArr) {
                result += `\uD83D\uDCD6 ${book.bookAuthor} - "${book.bookName}"\n`;
            }
            return result.trim();

    }

    get shelfCondition() {
        return this.shelfCapacity - this.shelf.length;
    }

    toString() {
        if (this.shelf.length > 0) {
            let result = `"${this.shelfGenre}" shelf in ${this.room} contains:\n`;
            for (let book of this.shelf) {
                result += `\uD83D\uDCD6 "${book.bookName}" - ${book.bookAuthor}\n`;
            }
            return result.trim()
        } else {
            return "It's an empty shelf"
        }
    }
}


let livingRoom = new BookCollection("Programming", "livingRoom", 3)
livingRoom.addBook("Introduction to Programming with C#", "Svetlin Nakov")
livingRoom.addBook("Introduction to Programming with C#", "Svetlin Nakov")
livingRoom.addBook("Introduction to Programming with C#", "Svetlin Nakov")
livingRoom.throwAwayBook("Introduction to Programming with C#")
console.log(livingRoom.toString())