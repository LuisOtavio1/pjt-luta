class Character {

    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

    constructor(name){
        this.name = name;
    }

    get life() {
        return this._life;
    }

    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife; 
    }
}

class Warrior extends Character {
    constructor(name) {
        super(name);
        this.life = 120;
        this.attack = 12;
        this.defense = 10;
        this.maxLife = this.life;
    }
}

class Sorcerer extends Character {
    constructor(name) {
        super(name);
        this.life = 95
        this.attack = 19;
        this.defense = 5;
        this.maxLife = this.life;
    }
}