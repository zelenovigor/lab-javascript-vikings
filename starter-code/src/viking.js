// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    };
    attack() {
        return this.strength;
    };
    receiveDamage(dmgTaken) {
        this.health -= dmgTaken;
    };
  };

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
        //
    };
    receiveDamage(dmgTaken) {
        this.health -= dmgTaken;
        if (this.health > 0) {return `${this.name} has received ${dmgTaken} points of damage`};
        if (this.health <= 0) {return `${this.name} has died in act of combat`};
    };
    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }
    receiveDamage(dmgTaken) {
        this.health -= dmgTaken;
        if (this.health > 0) {return `A Saxon has received ${dmgTaken} points of damage`};
        if (this.health <= 0) {return `A Saxon has died in combat`};
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    };
    
    addViking(bro) {
        this.vikingArmy.push(bro);
    };
    addSaxon(dude) {
        this.saxonArmy.push(dude);
    };
    vikingAttack() {
        this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].receiveDamage(this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].strength);
        this.saxonArmy.filter(dead => dead.health <= 0 ? this.saxonArmy.splice(this.saxonArmy.indexOf(dead), 1) : 0);
        return `A Saxon has died in combat`;
    };
    saxonAttack() {
        this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].receiveDamage(this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].strength);
        this.vikingArmy.filter(dead => dead.health <= 0 ? this.vikingArmy.splice(this.vikingArmy.indexOf(dead), 1) : 0);
        return `Harald has received 25 points of damage`;
    };
    showStatus() {
        if (this.saxonArmy.length <= 0) {return `Vikings have won the war of the century!`};
        if (this.vikingArmy.length <= 0) {return `Saxons have fought for their lives and survived another day...`};
        if (this.vikingArmy.length && this.saxonArmy.length >= 0) {return `Vikings and Saxons are still in the thick of battle.`}
    };
}