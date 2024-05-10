function byId(id) {
    return document.getElementById(id);
}

var text = byId('beans');
var button = byId('btn');
var quest = byId('quest');
var questdesc = byId('questdesc');
var questspan = byId('questsp');
var questdiv = byId('questdiv');
var questnum = 1;
var beanicupg = byId('beanicupg');
var beanicupgdesc = byId('beanicupgdesc');
var beanicupgdiv = byId('beanicupgdiv');
var beanicnum = 1;
var upgradediv = byId('upgrades');
var starterkit1 = byId('starterkit1');
var starterkit2 = byId('starterkit2');
var importbtn = byId('import');
var exportbtn = byId('export');
var specialload = byId('import2');
var specialsave = byId('export2');
var savetext = byId('savetext');
var beans = 0;
var beansps = byId('beansps');
var up = 1;
var bps = 0;
var mult = 0;
var beanmult = 0;
var upgrades = {
    "Beanator": {
        name: "Beanator",
        btn: byId('beanator'),
        span: byId('beanatorsp'),
        level: 1,
        cost: 30,
        bps: 2,
        tbps: 0,
        mult: 0,
        smult:0,
    },
    "Enhancer": {
        name: "Enhancer",
        btn: byId('enhancer'),
        span: byId('enhancersp'),
        level: 1,
        cost: 100,
        bps: 6,
        tbps: 0,
        mult: 0,
        smult:0,
    },
    "Worker": {
        name: "Worker",
        btn: byId('worker'),
        span: byId('workersp'),
        level: 1,
        cost: 400,
        up: 1,
        tup: 0,
        mult: 0,
        smult:0,
    },
    "Enchantment": {
        name: "Enchantment",
        btn: byId('enchantment'),
        span: byId('enchantmentsp'),
        level: 1,
        cost: 1500,
        bps: 21,
        tbps: 0,
        mult: 0,
        smult:0,
    },
    "RedBeanator": {
        name: "RedBeanator",
        div: byId('hidden1'),
        btn: byId('redbeanator'),
        span: byId('redbeanatorsp'),
        level: 1,
        cost: 2000,
        bps: 65,
        tbps: 0,
        mult: 0,
        smult:0,
    },
    "BeanFuse": {
        name: "BeanFuse",
        div: byId('hidden2'),
        btn: byId('beanfuse'),
        span: byId('beanfusesp'),
        level: 1,
        cost: 7000,
        bps: 120,
        tbps: 0,
        mult: 0,
        smult:0,
    },
    "BeanRecycler": {
        name: "BeanRecycler",
        div: byId('hidden3'),
        btn: byId('beanrecycler'),
        span: byId('beanrecyclersp'),
        level: 1,
        cost: 40000,
        bps: 300,
        tbps: 0,
        mult: 0,
        smult:0,
    },
}

// BEANATOR - TOBALC
// ENHANCER - FILO
// WORKER - TALLMART
// ENCHANTMENT - UNCLE RICTOR
// RED BEANATOR - TOBALC
// BEAN FUSE - FEEBOLE
var quests = {
    "Adoba1": {
        name: "Adoba1",
        num: 1,
        text: "Give Adoba 300 beans",
        spantext: "Give Adoba 300 beans for +2% multiplier",
        req: 300,
        case: "None",
        multbonus: 2,
    },
    "UncleRictor1": {
        name: "UncleRictor1",
        num: 2,
        text: "Give Uncle Rictor 700 beans",
        spantext: "Give Uncle Rictor 700 beans for +2% multiplier",
        req: 700,
        case: "None",
        multbonus: 2,
    },
    "Filo1": {
        name: "Filo1",
        num: 3,
        text: "Package 1600 beans to Filo Meats Inc.",
        spantext: "Package 1600 beans to Filo Meats Inc. for +35% more efficient enhancers",
        req: 1600,
        case: "BuildUpg",
        multbonus: 0,
        buildupg: "Enhancer",
        buildbonus: 35,
    },
    "Feebole1": {
        name: "Feebole1",
        num: 4,
        text: "Package 3500 beans to Feebole Inc.",
        spantext: "Package 3500 beans to Feebole Inc. for +5% multiplier",
        req: 3500,
        case: "None",
        multbonus: 5,
    },
    "Tallmart1": {
        name: "Tallmart1",
        num: 5,
        text: "Package 4500 beans to Tallmart Warehouse",
        spantext: "Package 4500 beans to Tallmart Warehouse for +8% multiplier and +50% more efficient clicking",
        req: 4500,
        case: "BuildUpg",
        multbonus: 8,
        buildupg: "Worker",
        buildbonus: 50,
    },
    "UncleRictor2": {
        name: "UncleRictor2",
        num: 6,
        text: "Give 7500 beans to Uncle Rictor",
        spantext: "Give Uncle Rictor 7500 beans so he can research. +80% more efficient enchantments",
        req: 7500,
        case: "BuildUpg",
        multbonus: 0,
        buildupg: "Enchantment",
        buildbonus: 80,
    },
    "Adoba2": {
        name: "Adoba2",
        num: 7,
        text: "Give 10000 beans to Adoba",
        spantext: "Give 10000 beans to Adoba for +8% multiplier",
        req: 10000,
        case: "None",
        multbonus: 8,
    },
    "Filo2": {
        name: "Filo2",
        num: 8,
        text: "Give 11000 beans to Filo Meats Inc.",
        spantext: "Give 11000 beans to Filo Meats Inc. for +5% multiplier and 75% more efficient enhancers",
        req: 11000,
        case: "BuildUpg",
        multbonus: 5,
        buildupg: "Enhancer",
        buildbonus: 75,
    },
    "Tobalc1": {
        name: "Tobalc1",
        num: 8,
        text: "Give 12000 beans to Tobalc Corp.",
        spantext: "Give 12000 beans to Tobalc Corp. so it can research beans. Unlocks red beanators & +150% more efficient beanators.",
        lore: "TOBALC IS BEANMELON CO.'S RESEARCH COMPANY, RESEARCHING BEANS",
        req: 12000,
        case: "Tobalc1",
        multbonus: 0,
    },
    "Feebole2": {
        name: "Feebole2",
        num: 9,
        text: "Give 21000 beans to Feebole Inc.",
        spantext: "Give 21000 beans to Feebole Inc. Unlocks bean fuse & +12% multiplier.",
        req: 25000,
        case: "Feebole2",
        multbonus: 12,
    },
    "UncleRictor3": {
        name: "UncleRictor3",
        num: 10,
        text: "Give 32000 beans to Uncle Rictor",
        spantext: "Give 32000 beans to Uncle Rictor so he can research enchantments for 65% more efficient enchantments and +12% multiplier.",
        req: 34000,
        case: "BuildUpg", 
        multbonus: 12,
        buildupg: "Enchantment",
        buildbonus: 50,
    },
    "Tallmart2": {
        name: "Tallmart2",
        num: 10,
        text: "Package 37000 beans to Tallmart",
        spantext: "Package 37000 beans to Tallmart for +15% clicking for every normal beanator there is.",
        req: 38000,
        case: "BuildUpg2", 
        multbonus: 0,
        main: "Worker",
        synergy: "Beanator",
        minc: 1,
        inc: 15,
        minc2: 0,
        inc2: 0,
    },
    "Janjo1": {
        name: "Janjo1",
        num: 11,
        text: "Give 43000 beans to Janjo",
        spantext: "Give 43000 beans to Janjo for +5% beanator efficiency per enhancer and +5% enhancer efficiency per 2 beanators.",
        req: 43000,
        case: "BuildUpg2", 
        multbonus: 0,
        main: "Beanator",
        synergy: "Enhancer",
        minc: 1,
        inc: 5,
        minc2: 2,
        inc2: 5,
    },
    "Greg1": {
        name: "Greg1",
        num: 12,
        text: "Give 55000 beans to Greg",
        spantext: "Give 55000 beans to Greg for bean recyclers & +12% multiplier.",
        req: 55000,
        case: "Greg1",
        multbonus: 12,
    },
    "Feebole3": {
        name: "Feebole3",
        num: 13,
        text: "Give 72000 beans to Feebole Inc.",
        spantext: "Give 72000 beans to Feebole Inc. for 2x more efficient bean fuses and +12% multiplier.",
        req: 72000,
        case: "BuildUpg", 
        multbonus: 12,
        buildupg: "BeanFuse",
        buildbonus: 100,
    },
    "Tallmart3": {
        name: "Tallmart3",
        num: 14,
        text: "Give 90000 beans to Tallmart",
        spantext: "Give 90000 beans to Tallmart for +1000% clicking power and +10% multiplier.",
        req: 90000,
        case: "BuildUpg", 
        multbonus: 10,
        buildupg: "Worker",
        buildbonus: 1000,
    },
    "Tobalc2": {
        name: "Tobalc2",
        num: 15,
        text: "Give 120000 beans to Tobalc Corp.",
        spantext: "Give 120000 beans to Tobalc Corp. for +300% more efficient normal and red beanators.",
        req: 120000,
        case: "SevBuildUpg", 
        multbonus: 0,
        buildupg: ["Beanator","RedBeanator"],
        buildbonus: [300,300],
    },
    "Kazko1": {
        name: "Kazko1",
        num: 16,
        text: "Give 170000 beans to Kazko Research",
        spantext: "100% worth it.",
        req: 170000,
        case: "Kazko1", 
        multbonus: 10,
    },
    "TheEnd": {
        name: "TheEnd",
        num: 100,
        text: "No more quests.",
        spantext: "The end.",
        req: 10000000000000000,
        case: "None",
        multbonus: 0,
    },
}
//fire beans
// void beans
// sea beans
// thunder beans
// nature beans
// time beans
// frost beans
// pumpkin beans
// crystal beans
// rock beans
// soul beans
// galaxy beans
var beanicupgrades = {
    "CelestialBean": {
        name: "CelestialBean",
        text: "Celestial Beans",
        desc: "Start producing the rare & highly sought after celestial beans, giving a +40% multiplier.",
        num: 1,
        cost: 250000,
        multbonus: 40,
        case: "None",
        css: [
            "background-color:rgb(180,220,255)",
        ],
    },
    "FlameBean": {
        name: "FlameBean",
        text: "Flame Beans",
        desc: "Discover how to collect flame beans, special ultra-hot beans that appeal to those who love spiciness. +60% multiplier.",
        num: 2,
        cost: 1500000,
        multbonus: 60,
        case: "None",
        css: [
            "background-color:rgb(255,100,100)",
        ],
    },
    "VoidBean": {
        name: "VoidBean",
        text: "Void Beans",
        desc: "Harness the power of void beans, ones that warp the laws of reality. +100% multiplier.",
        num: 3,
        cost: 17500000,
        multbonus: 100,
        case: "None",
        css: [
            "background-color:rgb(250,120,250)",
        ],
    },
    "NullBean": {
        name: "NullBean",
        text: "Null Beans",
        desc: "The very last beans.",
        num: 4,
        cost: Infinity,
        multbonus: 0,
        case: "None",
        css: [
            "background-color:rgb(180,180,180)",
        ],
    },
}
var buowned = [];
var synergies = {
    amount: 0,
    synergies: {
        
    },
}
var beanator = upgrades.Beanator;
var enhancer = upgrades.Enhancer;
var worker = upgrades.Worker;
var enchantment = upgrades.Enchantment;
var redbeanator = upgrades.RedBeanator;
var beanfuse = upgrades.BeanFuse;
var beanrecycler = upgrades.BeanRecycler;
var currentquest = quests.Adoba1;
var currentbeanic = beanicupgrades.CelestialBean;

function update() {
    let current = Object.keys(quests)[questnum-1];
    currentquest = quests[current];
    let current2 = Object.keys(beanicupgrades)[beanicnum-1];
    currentbeanic = beanicupgrades[current2];
    text.innerHTML = "Beans: "+beans;
    beansps.innerHTML = "TOTAL BPS: "+Number((bps*((100+mult)/100)*((100+beanmult)/100)).toFixed(1))+" ("+Number((bps*((mult)/100)).toFixed(1))+" bonus from multiplier) ";
    if (currentquest.num > 16) {
        beansps.innerHTML += "("+Number((bps*((mult)/100)*((beanmult)/100)).toFixed(1))+" bonus from beanic multiplier)";
    }
    // BEANATORS
    beanator.btn.innerHTML = "Beanators Lvl "+beanator.level+` (${beanator.cost})`;
    beanator.span.innerHTML = "&emsp;BPS: "+beanator.tbps+" | MULT: +"+(beanator.mult+beanator.smult)+"%"+" | TOTAL: "+(beanator.tbps*((100+beanator.mult+beanator.smult)/100)).toFixed(1);
    // ENHANCERS
    enhancer.btn.innerHTML = "Enhancers Lvl "+enhancer.level+` (${enhancer.cost})`;
    enhancer.span.innerHTML = "&emsp;BPS: "+enhancer.tbps+" | MULT: +"+(enhancer.mult+enhancer.smult)+"%"+" | TOTAL: "+(enhancer.tbps*((100+enhancer.mult+enhancer.smult)/100)).toFixed(1);
    // WORKERS
    worker.btn.innerHTML = "Workers Lvl "+worker.level+` (${worker.cost})`;
    worker.span.innerHTML = "&emsp;CLICK BONUS: "+worker.tup+" | MULT: +"+(worker.mult+worker.smult)+"%"+" | TOTAL: "+(worker.tup*((100+worker.mult+worker.smult)/100)).toFixed(1);
    // ENCHANTMENTS
    enchantment.btn.innerHTML = "Enchantments Lvl "+enchantment.level+` (${enchantment.cost})`;
    enchantment.span.innerHTML = "&emsp;BPS: "+enchantment.tbps+" | MULT: +"+(enchantment.mult+enchantment.smult)+"%"+" | TOTAL: "+(enchantment.tbps*((100+enchantment.mult+enchantment.smult)/100)).toFixed(1);
    // RED BEANATORS
    redbeanator.btn.innerHTML = "Red Beanators Lvl "+redbeanator.level+` (${redbeanator.cost})`;
    redbeanator.span.innerHTML = "&emsp;BPS: "+redbeanator.tbps+" | MULT: +"+(redbeanator.mult+redbeanator.smult)+"%"+" | TOTAL: "+(redbeanator.tbps*((100+redbeanator.mult+redbeanator.smult)/100)).toFixed(1);
     // BEAN FUSE
     beanfuse.btn.innerHTML = "Bean Fuse Lvl "+beanfuse.level+` (${beanfuse.cost})`;
     beanfuse.span.innerHTML = "&emsp;BPS: "+beanfuse.tbps+" | MULT: +"+(beanfuse.mult+beanfuse.smult)+"%"+" | TOTAL: "+(beanfuse.tbps*((100+beanfuse.mult+beanfuse.smult)/100)).toFixed(1);
      // BEAN FUSE
      beanrecycler.btn.innerHTML = "Bean Recycler Lvl "+beanrecycler.level+` (${beanrecycler.cost})`;
      beanrecycler.span.innerHTML = "&emsp;BPS: "+beanrecycler.tbps+" | MULT: +"+(beanrecycler.mult+beanrecycler.smult)+"%"+" | TOTAL: "+(beanrecycler.tbps*((100+beanrecycler.mult+beanrecycler.smult)/100)).toFixed(1);
    
    // QUESTS
    quest.innerHTML = `Quest ${questnum}: `+currentquest.text;
    questspan.innerHTML = "MULTIPLIER: +"+mult+"%";
    questdesc.innerHTML = currentquest.spantext;
    beanicupg.innerHTML = `Beanic Upgrade ${beanicnum}: `+currentbeanic.text+` (${currentbeanic.cost})`;
    beanicupgdesc.innerHTML = currentbeanic.desc;
    
}

function add() {
    if (synergies.amount > 0) {
        for (var i=0; i < synergies.amount; i++) {
            let index = Object.keys(synergies.synergies)[i];
            let building = synergies.synergies[index]; 
            let standmult = upgrades[building.main].smult;
            let synergymult = 0;
            for (j = 1; j < upgrades[building.synergy].level; j++) {
                if (j % building.minc == 0) {
                    synergymult += building.inc;
                }
                
            }
            upgrades[building.main].smult = synergymult;
            standmult2 = upgrades[building.synergy].smult;
            synergymult2 = 0;
            for (k = 1; k < upgrades[building.main].level; k++) {
                if (k % building.minc2 == 0) {
                    synergymult2 += building.inc2;
                }
            }
            upgrades[building.synergy].smult = synergymult2;
        }
    }
    
    let beanmult2 = 100;
    for (i = 0; i < buowned.length; i++) {
        beanmult2 *= 1+((buowned[i].multbonus)/100);
    }
    beanmult = beanmult2-100;
    let bps2 = (beanator.tbps*((100+beanator.mult+beanator.smult)/100))+(enhancer.tbps*((100+enhancer.mult+enhancer.smult)/100))+(enchantment.tbps*((100+enchantment.mult+enchantment.smult)/100))+(redbeanator.tbps*((100+redbeanator.mult+redbeanator.smult)/100))+(beanfuse.tbps*((100+beanfuse.mult+beanfuse.smult)/100))+(beanrecycler.tbps*((100+beanrecycler.mult+beanrecycler.smult)/100));
    bps = Number(bps2.toFixed(1));
    let up2 = (1+worker.tup)*((100+worker.mult+worker.smult)/100)*((100+mult)/100);
    up = Number(up2.toFixed(1));
    beans += Number(bps*((100+mult)/100)*((100+beanmult)/100));
    beans = Number(beans.toFixed(1));
    
    update();
}
var updating = setInterval(add,1000);

document.body.addEventListener('click',function() {
    update();
});
questdiv.addEventListener("mouseover",function() {
   /* quest.style.visibility = "hidden";
    quest.style.opacity = "0";
    questspan.style.visibility = "hidden";
    questspan.style.opacity = "0";*/
    questdesc.style.visibility = "visible";
    questdesc.style.opacity = "1";
});
questdiv.addEventListener("mouseout",function() {
    quest.style.visibility = "visible";
    quest.style.opacity = "1";
    questspan.style.visibility = "visible";
    questspan.style.opacity = "1";
    questdesc.style.visibility = "hidden";
    questdesc.style.opacity = "0";
});
quest.addEventListener("click",function() {
    if (beans >= currentquest.req) {
        beans -= currentquest.req;
        if (currentquest.case == "None") {
            mult += currentquest.multbonus;    
        } else {
            if (currentquest.case == "BuildUpg") {
                upgrades[currentquest.buildupg].mult += currentquest.buildbonus;
                mult += currentquest.multbonus;
            }
            if (currentquest.case == "BuildUpg2") {
                synergies.synergies[currentquest.main] = {
                    main: currentquest.main,
                    synergy: currentquest.synergy,
                    inc: currentquest.inc,
                    minc: currentquest.minc,
                    inc2: currentquest.inc2,
                    minc2: currentquest.minc2,
                };
                mult += currentquest.multbonus;
                synergies.amount += 1;
                
            }
            if (currentquest.case == "SevBuildUpg") {
                for (var i = 0; i < currentquest.buildupg.length; i++) {
                    upgrades[currentquest.buildupg[i]].mult += currentquest.buildbonus[i];
                    mult += currentquest.multbonus;
                }
                
            }
            if (currentquest.case == "Tobalc1") {
                beanator.mult += 150;
                redbeanator.div.style.display = "block";
            }
            
            if (currentquest.case == "Feebole2") {
                mult += currentquest.multbonus;
                beanfuse.div.style.display = "block";
            }
            if (currentquest.case == "Greg1") {
                mult += currentquest.multbonus;
                beanrecycler.div.style.display = "block";
            }
            if (currentquest.case == "Kazko1") {
                mult += currentquest.multbonus;
                beanicupgdiv.style.display = "block";
            }
        }
        
        questnum++;
    }
});
beanicupg.addEventListener('click', function() {
    if (beans >= currentbeanic.cost) {
        beans -= currentbeanic.cost;
        if (currentbeanic.case == "None") {
            
        } else {

        }
        buowned.push(currentbeanic);
        document.body.setAttribute('style',currentbeanic.css);
        beanicnum++;
    }
});
button.addEventListener('click', function() {
    beans += up;
    beans = Number(beans.toFixed(1));
    update();
});
starterkit1.addEventListener('click', function() {
    beans += 5000;
    beans = Number(beans.toFixed(1));
    update();
});
starterkit2.addEventListener('click', function() {
    beans += 250000;
    beans = Number(beans.toFixed(1));
    cost = buyBeanator(15);
    beans += cost;
    update();
});
function buyBeanator(times) {
    var totalcost = 0;
    for (i = 0; i < times; i++) {
        if (beans >= beanator.cost) {
            totalcost += beanator.cost;
            beans -= beanator.cost;
            beanator.tbps += beanator.bps;
            bps += beanator.bps;
            beanator.level += 1;
            beanator.cost *= 1.5;
            beanator.cost = Number(Math.round(beanator.cost));
        }
    }
    return totalcost;
    
}
beanator.btn.addEventListener('click', function() {
    buyBeanator(1);
});
function buyEnhancer(times) {
    var totalcost = 0;
    for (i = 0; i < times; i++) {
        if (beans >= enhancer.cost) {
            totalcost += enhancer.cost;
            beans -= enhancer.cost;
            enhancer.tbps += enhancer.bps;
            bps += enhancer.bps;
            enhancer.level += 1;
            enhancer.cost *= 1.5;
            enhancer.cost = Number(Math.round(enhancer.cost));
        }
    }
    return totalcost;
    
}
enhancer.btn.addEventListener('click', function() {
    buyEnhancer(1);
});
function buyWorker(times) {
    var totalcost = 0;
    for (i = 0; i < times; i++) {
        if (beans >= worker.cost) {
            totalcost += worker.cost;
            beans -= worker.cost;
            worker.tup += worker.up;
            up += worker.up;
            worker.level += 1;
            worker.cost *= 2;
            worker.cost = Number(Math.round(worker.cost));
        }
    }
    return totalcost;
    
}
worker.btn.addEventListener('click', function() {
    buyWorker(1);
});
function buyEnchantment(times) {
    var totalcost = 0;
    for (i = 0; i < times; i++) {
        if (beans >= enchantment.cost) {
            totalcost += enchantment.cost;
            beans -= enchantment.cost;
            enchantment.tbps += enchantment.bps;
            bps += enchantment.bps;
            enchantment.level += 1;
            enchantment.cost *= 1.5;
            enchantment.cost = Number(Math.round(enchantment.cost));
    
        }
    }
    return totalcost;
    
}
enchantment.btn.addEventListener('click', function() {
    buyEnchantment(1);
});
function buyRedBeanator(times) {
    var totalcost = 0;
    for (i = 0; i < times; i++) {
        if (beans >= redbeanator.cost) {
            totalcost += redbeanator.cost;
            beans -= redbeanator.cost;
            redbeanator.tbps += redbeanator.bps;
            bps += redbeanator.bps;
            redbeanator.level += 1;
            redbeanator.cost *= 1.5;
            redbeanator.cost = Number(Math.round(redbeanator.cost));
    
        }
    }
    return totalcost;
}
redbeanator.btn.addEventListener('click', function() {
    buyRedBeanator(1);
});
function buyBeanFuse(times) {
    var totalcost = 0;
    for (i = 0; i < times; i++) {
        if (beans >= beanfuse.cost) {
            totalcost += beanfuse.cost
            beans -= beanfuse.cost;
            beanfuse.tbps += beanfuse.bps;
            bps += beanfuse.bps;
            beanfuse.level += 1;
            beanfuse.cost *= 1.5;
            beanfuse.cost = Number(Math.round(beanfuse.cost));
        }
    }
    return totalcost;
}
beanfuse.btn.addEventListener('click', function() {
    buyBeanFuse(1);
});
function buyBeanRecycler(times) {
    var totalcost = 0;
    for (i = 0; i < times; i++) {
        if (beans >= beanrecycler.cost) {
            totalcost += beanrecycler.cost;
            beans -= beanrecycler.cost;
            beanrecycler.tbps += beanrecycler.bps;
            bps += beanrecycler.bps;
            beanrecycler.level += 1;
            beanrecycler.cost *= 1.5;
            beanrecycler.cost = Number(Math.round(beanrecycler.cost));
        }
    }
    return totalcost;
}
beanrecycler.btn.addEventListener('click', function() {
    buyBeanRecycler(1);
});
console.log(beans);

function exportsave() {
    console.log("balsl");
    var save = [];
    save.push(beans);
    save.push(buowned);
    save.push(beanicupgrades);
    save.push(beanicnum);
    save.push(quests);
    save.push(currentquest);
    save.push(questnum);
    save.push(upgrades);
    save.push(synergies)
    console.log(save);
    localStorage.setItem('save',JSON.stringify(save));
}
exportbtn.addEventListener("click",function () {
    exportsave();
});
function importsave() {
    console.log("bals2l");
    var storedData = localStorage.getItem('save');
    if (storedData) {
        clearInterval(updating);
        var newData = JSON.parse(storedData);
        beans = newData[0];
        buowned = newData[1];
        beanicupgrades = newData[2];
        beanicnum = newData[3];
        quests = newData[4];
        currentquest = newData[5];
        questnum = newData[6];
        upgrades = newData[7];
        beanator = upgrades.Beanator;
        enhancer = upgrades.Enhancer;
        worker = upgrades.Worker;
        enchantment = upgrades.Enchantment;
        redbeanator = upgrades.RedBeanator;
        beanfuse = upgrades.BeanFuse;
        beanrecycler = upgrades.BeanRecycler;
        for (i = 0; i < Object.keys(upgrades).length;i++) {
            var index = Object.keys(upgrades)[i];
            var key = upgrades[index];
            key.btn = byId(key.name.toLowerCase());
            key.span = byId(key.name.toLowerCase()+"sp");
        }
        synergies = newData[8];
    }
    update();
    updating = setInterval(add,1000);
}
importbtn.addEventListener("click",function () {
    importsave();
});
function coolsave() {
    console.log("balsl");
    var save = [];
    save.push(beans);
    save.push(buowned);
    save.push(beanicupgrades);
    save.push(beanicnum);
    save.push(quests);
    save.push(currentquest);
    save.push(questnum);
    save.push(upgrades);
    save.push(synergies);
    localStorage.setItem('save',JSON.stringify(save));
    savetext.value = JSON.stringify(save);
}
specialsave.addEventListener("click",function () {
    coolsave();
});
function coolload() {
    console.log("bals2l");
    var storedData = JSON.parse(savetext.value);
    console.log(savetext.value);
    if (storedData) {
        clearInterval(updating);
        var newData = JSON.parse(storedData);
        beans = newData[0];
        buowned = newData[1];
        beanicupgrades = newData[2];
        beanicnum = newData[3];
        quests = newData[4];
        currentquest = newData[5];
        questnum = newData[6];
        upgrades = newData[7];
        beanator = upgrades.Beanator;
        enhancer = upgrades.Enhancer;
        worker = upgrades.Worker;
        enchantment = upgrades.Enchantment;
        redbeanator = upgrades.RedBeanator;
        beanfuse = upgrades.BeanFuse;
        beanrecycler = upgrades.BeanRecycler;
        for (i = 0; i < Object.keys(upgrades).length;i++) {
            var index = Object.keys(upgrades)[i];
            var key = upgrades[index];
            key.btn = byId(key.name.toLowerCase());
            key.span = byId(key.name.toLowerCase()+"sp");
        }
        synergies = newData[8];
    }
    update();
    updating = setInterval(add,1000);
}
specialload.addEventListener("click",function () {
    coolload();
});