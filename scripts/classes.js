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

class LittleMonster extends Character {
    constructor() {
        super('Little Monster');
        this.life = 50;
        this.attack = 5;
        this.defense = 5;
        this.maxLife = this.life;
    }
}

class BigMonster extends Character {
    constructor() {
        super('Big Monster');
        this.life = 125;
        this.attack = 15;
        this.defense = 5;
        this.maxLife = this.life;
    }
}

class Stage {
    constructor(hero, monster, heroEl, monsterEl){
        this.hero = hero;
        this.monster = monster;
        this.heroEl = heroEl;
        this.monsterEl = monsterEl;
    }

    start() {
        this.update();

        this.heroEl.querySelector('.atkbutton').addEventListener('click', () => this.doAttack(this.hero, this.monster));

        this.monsterEl.querySelector('.atkbutton').addEventListener('click', () => this.doAttack(this.monster, this.hero));
    }

    update() {
        //Player
        this.heroEl.querySelector('.name').innerHTML = `${this.hero.name} | ${this.hero.life.toFixed(1)} HP`;
        let heroPct = (this.hero.life / this.hero.maxLife) * 100;
        this.heroEl.querySelector('.bar').style.width = `${heroPct}%`
        //Monstro
        this.monsterEl.querySelector('.name').innerHTML = `${this.monster.name} | ${this.monster.life.toFixed(1)} HP`;
        let monsterPct = (this.monster.life / this.monster.maxLife) * 100;
        this.monsterEl.querySelector('.bar').style.width = `${monsterPct}%`
    }
    doAttack(attacking, attacked) {
        if(attacking.life <= 0 || attacked.life <= 0) {
            console.log('Está atacando mesmo com o inimigo morto')
            return;
        }
        
        let attackFactor = (Math.random() * 2).toFixed(2);
        let defenseFactor = (Math.random() * 2).toFixed(2); 

        let newAttack = attacking.attack * attackFactor;
        let newDefense = attacked.defense * defenseFactor;

        if(newAttack > newDefense){
            attacked.life -= newAttack;
            console.log(`${attacking.name} Causou ${newAttack.toFixed(2)} de dano em ${attacked.name}`)
        } else {
            console.log(`${attacking.name} Errou o ataque, ${attacked.name} conseguiu se esquivar`)
        }

        console.log(newAttack); 

        this.update();
    }
}

