///38.

//1.
class SyntaxError{
    constructor(message) {
    }
};

class FormatError extends SyntaxError{
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}