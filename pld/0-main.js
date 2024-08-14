const newClass = new class newGlass {
    checkClass() {
        return this.constructor();
    }
}

console.log(newClass === new newGlass());