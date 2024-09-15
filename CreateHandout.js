/*
const baseTable = {
    "Simple-Armor" : "none",
    "Quality-Armor" : "none",
    "Common-Magic-Armor" : "none",
    "Uncommon-Magic-Armor" : "none",
    "Rare-Magic-Armor" : "none",
    "Very-Rare-Magic-Armor" : "none",
    "Legendary-Magic-Armor" : "none",

    "Common-Staff" : "none",
    "Uncommon-Staff" : "none",
    "Rare-Staff" : "none",
    "Very-Rare-Staff" : "none",
    "Legendary-Staff" : "none",
    
    "Uncommon-Ring" : "none",
    "Rare-Ring" : "none",
    "Very-Rare-Ring" : "none",
    "Legendary-Ring" : "none",

    "Uncommon-Rod" : "none",
    "Rare-Rod" : "none",
    "Very-Rare-Rod" : "none",
    "Legendary-Rod" : "none",

    "Uncommon-Tattoo" : "none",
    "Rare-Tattoo" : "none",
    "Very-Rare-Tattoo" : "none",
    "Legendary-Tattoo" : "none",
    
    "Common-Wand" : "none",
    "Uncommon-Wand" : "none",
    "Rare-Wand" : "none",
    "Very-Rare-Wand" : "none",
    "Legendary-Wand" : "none",

    "Martial-Melee-Weapons" : "none",
    "Martial-Ranged-Weapons" : "none",
    "Simple-Melee-Weapons" : "none",
    "Simple-Ranged-Weapons" : "none",
    "Common-Magic-Weapon" : "none",
    "Uncommon-Magic-Weapon" : "none",
    "Rare-Magic-Weapon" : "none",
    "Very-Rare-Magic-Weapon" : "none",
    "Legendary-Magic-Weapon" : "none",

    "Common-Wondrous-Item" : "none",
    "Uncommon-Wondrous-Item" : "none",
    "Rare-Wondrous-Item" : "none",
    "Very-Rare-Wondrous-Item" : "none",
    "Legendary-Wondrous-Item" : "none",

    "Artifact" : "none",

    "Minor-Potions" : "none",
    "Major-Potions" : "none",

    "Level-0-Spell" : "none",
    "Level-1-Spell" : "none",
    "Level-2-Spell" : "none",
    "Level-3-Spell" : "none",
    "Level-4-Spell" : "none",
    "Level-5-Spell" : "none",
    "Level-6-Spell" : "none",
    "Level-7-Spell" : "none",
    "Level-8-Spell" : "none",
    "Level-9-Spell" : "none",

    "5sp-Food" : "none",
    "5gp-Food" : "none",
    "2cp-Drink" : "none",
    "2sp-Drink" : "none",
    "10gp-Drink" : "none",
    "150gp-Drink" : "none",

    "General-Store" : "none",
};
    // all
    // many - frequently
    // some - maybe
    // unique - rarely
    // none
*/
function retrieveSelectedTable(merchantName) {
    switch (merchantName) {
        case 'Alchemist' : 
            return {
                "Minor-Potions" : "many",
                "Uncommon-Ring" : "some frequently",
                "Common-Staff" : "many",
                "Uncommon-Staff" : "many frequently",
                "Rare-Staff" : "unique maybe",
                "Uncommon-Wondrous-Item" : "some",
                "Level-1-Spell" : "some",
                "Level-2-Spell" : "some maybe",
                "Level-3-Spell" : "unique maybe",
                "Level-2-Spell" : "unique rarely",
            };
        case 'Armorsmith' : 
            return {
                "Simple-Armor" : "all",
                "Quality-Armor" : "all",
                "Common-Magic-Armor" : "all",
                "Uncommon-Magic-Armor" : "many",
                "Rare-Magic-Armor" : "some",
                "Very-Rare-Magic-Armor" : "some"
            };
        case 'Antiquary' : 
            return {
                "Uncommon-Ring" : "many",
                "Rare-Ring" : "some maybe",
                "Very-Rare-Ring" : "unique rarely",

                "Common-Wondrous-Item" : "many",
                "Uncommon-Wondrous-Item" : "many",
                "Rare-Wondrous-Item" : "some",
                "Very-Rare-Wondrous-Item" : "unique maybe",

                "Level-3-Spell" : "some maybe",
                "Level-4-Spell" : "some maybe",
                "Level-5-Spell" : "unique maybe",
            };
        case 'Antiquary Noble' : 
            return {
                "Rare-Ring" : "many",
                "Very-Rare-Ring" : "some",
                "Legendary-Ring" : "unique maybe",

                "Common-Wondrous-Item" : "many",
                "Uncommon-Wondrous-Item" : "many",
                "Rare-Wondrous-Item" : "many",
                "Very-Rare-Wondrous-Item" : "some",
                "Legendary-Wondrous-Item" : "unique frequently",

                "Level-5-Spell" : "some maybe",
                "Level-6-Spell" : "some rarely",
                "Level-7-Spell" : "unique maybe",
            };
        case 'Black Market' : 
            return {
                "Simple-Armor" : "many frequently",
                "Quality-Armor" : "many frequently",
                "Common-Magic-Armor" : "many frequently",
                "Uncommon-Magic-Armor" : "many frequently",
                "Rare-Magic-Armor" : "some maybe",
                "Very-Rare-Magic-Armor" : "unique rarely",

                "Common-Staff" : "many frequently",
                "Uncommon-Staff" : "many frequently",
                "Rare-Staff" : "some maybe",
                "Very-Rare-Staff" : "unique rarely",
                
                "Uncommon-Ring" : "many frequently",
                "Rare-Ring" : "some maybe",
                "Very-Rare-Ring" : "unique rarely",
            
                "Uncommon-Rod" : "many frequently",
                "Rare-Rod" : "some maybe",
                "Very-Rare-Rod" : "unique rarely",
            
                "Uncommon-Tattoo" : "many frequently",
                "Rare-Tattoo" : "some maybe",
                "Very-Rare-Tattoo" : "unique rarely",
                
                "Common-Wand" : "many frequently",
                "Uncommon-Wand" : "many frequently",
                "Rare-Wand" : "some maybe",
                "Very-Rare-Wand" : "unique rarely",
            
                "Martial-Melee-Weapons" : "many frequently",
                "Martial-Ranged-Weapons" : "many frequently",
                "Simple-Melee-Weapons" : "many frequently",
                "Simple-Ranged-Weapons" : "many frequently",
                "Common-Magic-Weapon" : "many frequently",
                "Uncommon-Magic-Weapon" : "many frequently",
                "Rare-Magic-Weapon" : "some maybe",
                "Very-Rare-Magic-Weapon" : "unique rarely",

            
                "Common-Wondrous-Item" : "many frequently",
                "Uncommon-Wondrous-Item" : "many frequently",
                "Rare-Wondrous-Item" : "some maybe",
                "Very-Rare-Wondrous-Item" : "unique rarely",

                "Minor-Potions" : "many frequently",
                "Major-Potions" : "some maybe",

                "10gp-Drink" : "many frequently",
                "150gp-Drink" : "some maybe",

                "Level-1-Spell" : "many frequently",
                "Level-2-Spell" : "some maybe",
                "Level-3-Spell" : "some maybe",
                "Level-4-Spell" : "some rarely",
                "Level-5-Spell" : "some rarely",
                "Level-6-Spell" : "unique rarely",
                "Level-7-Spell" : "unique rarely",
            };
        case 'Blacksmith' : 
            return { 
                "Simple-Armor" : "all",
                "Quality-Armor" : "some",
                "Martial-Melee-Weapons" : "many",
                "Martial-Ranged-Weapons" : "many",
                "Simple-Melee-Weapons" : "all",
                "Simple-Ranged-Weapons" : "all",
                "Common-Magic-Armor" : "some",
                "Common-Magic-Weapon" : "some",
                "Uncommon-Magic-Weapon" : "unique",
                "Uncommon-Magic-Armor" : "unique",
                "Rare-Magic-Weapon" : "unique maybe",
                "Rare-Magic-Armor" : "unique maybe"
            };
        case 'General Store' : 
            return {
                "General-Store" : "all",
                "Common-Wondrous-Item" : "many",
                "Uncommon-Wondrous-Item" : "some",
                "Rare-Wondrous-Item" : "some rarely",
            };
        case 'Magic Store' : 
            return {
                "Uncommon-Ring" : "many",
                "Rare-Ring" : "some",

                "Uncommon-Tattoo" : "many",
                "Rare-Tattoo" : "some",

                "Uncommon-Wondrous-Item" : "many",
                "Rare-Wondrous-Item" : "some maybe",

                "Level-1-Spell" : "many",
                "Level-2-Spell" : "many",
                "Level-3-Spell" : "some maybe",
                "Level-4-Spell" : "some rarely",
                "Level-5-Spell" : "some rarely",
            };
        case 'Magic Store+' : 
            return {
                "Uncommon-Ring" : "all",
                "Rare-Ring" : "many",
                "Very-Rare-Ring" : "unique",
                "Legendary-Ring" : "unique rarely",
                
                "Uncommon-Tattoo" : "all",
                "Rare-Tattoo" : "many",
                "Very-Rare-Tattoo" : "unique",
                "Legendary-Tattoo" : "unique rarely",

                "Uncommon-Wondrous-Item" : "many",
                "Rare-Wondrous-Item" : "some",
                "Very-Rare-Wondrous-Item" : "some",
                "Legendary-Wondrous-Item" : "unique rarely",

                "Level-1-Spell" : "all",
                "Level-2-Spell" : "all",
                "Level-3-Spell" : "many",
                "Level-4-Spell" : "many",
                "Level-5-Spell" : "some",
                "Level-6-Spell" : "some maybe",
                "Level-7-Spell" : "some rarely",
            };
        case 'Magic Weapon Store' : 
            return {
                "Uncommon-Rod" : "many",
                "Rare-Rod" : "unique",

                "Common-Staff" : "many",
                "Uncommon-Staff" : "many",
                "Rare-Staff" : "unique",

                "Common-Wand" : "many",
                "Uncommon-Wand" : "many",
                "Rare-Wand" : "unique",
            };
        case 'Magic Weapon Store+' : 
            return {
                "Uncommon-Rod" : "many",
                "Rare-Rod" : "some",
                "Very-Rare-Rod" : "unique frequently",

                "Common-Staff" : "all",
                "Uncommon-Staff" : "many",
                "Rare-Staff" : "some",
                "Very-Rare-Staff" : "unique frequently",

                "Common-Wand" : "all",
                "Uncommon-Wand" : "many",
                "Rare-Wand" : "some",
                "Very-Rare-Wand" : "unique frequently",
            };
        case 'Planescape' : 
            return {
                "Very-Rare-Magic-Armor" : "many maybe",
                "Legendary-Magic-Armor" : "many maybe",
                           
                "Very-Rare-Staff" : "many maybe",
                "Legendary-Staff" : "many maybe",

                "Very-Rare-Ring" : "many maybe",
                "Legendary-Ring" : "many maybe",
            
                "Very-Rare-Rod" : "many maybe",
                "Legendary-Rod" : "many maybe",
            
                "Very-Rare-Tattoo" : "many maybe",
                "Legendary-Tattoo" : "many maybe",
                
                "Very-Rare-Wand" : "many maybe",
                "Legendary-Wand" : "many maybe",
            
                "Very-Rare-Magic-Weapon" : "many maybe",
                "Legendary-Magic-Weapon" : "many maybe",
            
                "Very-Rare-Wondrous-Item" : "many maybe",
                "Legendary-Wondrous-Item" : "many maybe",
            
                "Artifact" : "some",

                "Level-7-Spell" : "many maybe",
                "Level-8-Spell" : "many maybe",
                "Level-9-Spell" : "some",

                "150gp-Drink" : "all",
            };
        case 'Potion Store' : 
            return {
                "Minor-Potions" : "many",
                "Major-Potions" : "unique"
            };
        case 'Potion Store+' : 
            return {
                "Minor-Potions" : "all",
                "Major-Potions" : "many"
            };
        case 'Tavern' : 
            return {
                "5sp-Food" : "many",
                "5gp-Food" : "some",
                "2cp-Drink" : "many",
                "2sp-Drink" : "some",
            };
        case 'Tavern+' : 
            return {
                "5sp-Food" : "many",
                "5gp-Food" : "many",
                "2sp-Drink" : "many",
                "10gp-Drink" : "some",
                "150gp-Drink" : "unique",
            };
        case 'Tavern++' : 
            return {
                "5gp-Food" : "all",
                "10gp-Drink" : "all",
                "150gp-Drink" : "many",
            };
        case 'Travelling Merchant' : 
            return {
                "Simple-Armor" : "many maybe",
                "Quality-Armor" : "some rarely",
                "Common-Magic-Armor" : "some rarely",
                "Uncommon-Magic-Armor" : "some rarely",
           
                "Common-Staff" : "unique rarely",
                "Uncommon-Staff" : "unique rarely",
                
                "Uncommon-Ring" : "some rarely",
                "Rare-Ring" : "unique rarely",
            
                "Uncommon-Rod" : "unique rarely",
            
                "Uncommon-Tattoo" : "some rarely",
                "Rare-Tattoo" : "unique rarely",
                
                "Common-Wand" : "some rarely",
                "Uncommon-Wand" : "unique rarely",
            
                "Martial-Melee-Weapons" : "some maybe",
                "Martial-Ranged-Weapons" : "some maybe",
                "Simple-Melee-Weapons" : "some",
                "Simple-Ranged-Weapons" : "some",
                "Common-Magic-Weapon" : "some maybe",
            
                "Common-Wondrous-Item" : "some maybe",
                "Uncommon-Wondrous-Item" : "some rarely",

                "Minor-Potions" : "some",
                "General-Store" : "many",

                "Level-1-Spell" : "some rarely",
                "Level-2-Spell" : "some rarely",
                "Level-3-Spell" : "unique rarely",
            };
        case 'Weaponsmith' : 
            return {
                "Martial-Melee-Weapons" : "all",
                "Martial-Ranged-Weapons" : "all",
                "Simple-Melee-Weapons" : "all",
                "Simple-Ranged-Weapons" : "all",
                "Common-Magic-Weapon" : "all",
                "Uncommon-Magic-Weapon" : "many",
                "Rare-Magic-Weapon" : "some",
                "Very-Rare-Magic-Weapon" : "some",
            };
        default : return null;
    }
}

function createInventory(selectedTables) {
    let completeInventory = {};
    let rollableTables = Object.keys(selectedTables);

    for (let i = 0; i < rollableTables.length; i++) {
        let tableName = rollableTables[i];
        let findability = selectedTables[tableName];

        let table = findObjs({
            type: "rollabletable",
            name: tableName
        })[0];

        if (table === undefined) {
            sendChat("Merchant Creator", `Unable to find the table ${tableName}`);
            return null;
        }

        let tableItems = findObjs({
            type : "tableitem",
            rollabletableid : table.get("id")
        });
        
        if (tableItems.length === 0) {
            sendChat("Merchant Creator", `table ${tableName} is empty`);
            return null;
        }

        if (!probability(findability)) {
            continue;
        }

        completeInventory[tableName] = chooseItems(tableItems, findability);
    }

    return completeInventory;
}

function probability(findability) {
    let proba;
    if (findability.includes("frequently")) {
        proba = 75;
    }
    else if (findability.includes("maybe")) {
        proba = 50;
    }
    else if (findability.includes("rarely")) {
        proba = 25;
    }
    else {
        proba = 101;
    }
    
    return (randomInteger(100) <= proba);
}

function chooseItems(tableItems, findability) {
    let itemsChosen = [];
    let size = tableItems.length;
    let AlreadyChosenItems = new Set();
    let numberOfItemsInStore = 0;
    let randomIndex = 0;

    if (findability.includes("all")) {
        tableItems.forEach(item => itemsChosen.push(item.get("name")));
    }
    else if (findability.includes("many")) {
        let half = Math.ceil(size / 2);
        numberOfItemsInStore = Math.floor(Math.random() * (size - half)) + half;
        
        while (itemsChosen.length < numberOfItemsInStore) {
            randomIndex = randomInteger(size);
            randomIndex -= 1;
            if (!AlreadyChosenItems.has(randomIndex)) {
                AlreadyChosenItems.add(randomIndex);
                itemsChosen.push(tableItems[randomIndex].get("name"));
            }
        }
    }
    else if (findability.includes("some")) {
        if (size <= 4) {
            numberOfItemsInStore = 1;
        }
        else if (size <= 6) {
            numberOfItemsInStore = 2;
        }
        else {
            let half = Math.floor(size / 2);
            numberOfItemsInStore = Math.floor(Math.random() * half) + 1;
        }

        while (itemsChosen.length < numberOfItemsInStore) {
            let randomIndex = randomInteger(size - 1);
            if (!AlreadyChosenItems.has(randomIndex)) {
                AlreadyChosenItems.add(randomIndex);
                itemsChosen.push(tableItems[randomIndex].get("name"));
            }
        }
    }
    else if (findability.includes("unique")) {
        let randomIndex = randomInteger(size - 1);
        itemsChosen.push(tableItems[randomIndex].get("name"));
    }

    return itemsChosen;
}

function createHandout(content, name){
    var Inventory = createObj('handout', {
        name: name,
        inplayerjournals: 'all',
        archived: false
    });

    Inventory.set("notes", content);
};

function formatPrice(merchantInventory){
    let merchantInventoryWithPrice = {};
    let randomPrice = 0;

    for(let [tableName, items] of Object.entries(merchantInventory)) {
        merchantInventoryWithPrice[tableName] = [];

        items.forEach(item => {
            if (tableName.includes("Common") || tableName.includes("Level-1-Spell")) {
                if (!tableName.includes("Uncommon") || tableName.includes("Level-1-Spell")) {
                    // (1d6 + 2) x 10 + 1d9; [30 - 89]
                    randomPrice = (randomInteger(6) + 2) * 10 + randomInteger(10) - 1;
                }
            } 
            else if (tableName.includes("Uncommon") || tableName.includes("Level-2-Spell") || tableName.includes("Level-3-Spell")) {
                // (1d6 + 1) x 100 + 1d99, [200 - 800]
                randomPrice = (randomInteger(6) + 1) * 100 + (randomInteger(20) * 5);
            }
            else if (tableName.includes("Very-Rare") || tableName.includes("Level-6-Spell") || tableName.includes("Level-7-Spell") || tableName.includes("Level-8-Spell")) {
                // 1d4+1 x 10,000 + 1d999gp [20 000 - 59 000]
                randomPrice = (randomInteger(4) + 1) * 10000 + ((randomInteger(10) - 1) * 1000);
            }
            else if (tableName.includes("Rare") || tableName.includes("Level-4-Spell") || tableName.includes("Level-5-Spell")) {
                    // 2d4 x 1,000 + 1d999gp [2 000 - 9 000]
                    randomPrice = (randomInteger(4) + randomInteger(4)) * 1000 + (randomInteger(200) * 5);
            }
            else if (tableName.includes("Legendary") || tableName.includes("Level-9-Spell")) {
                // 2d6+6 x 25,000 + 1d9999gp [50 000 - 390 000]
                randomPrice = (randomInteger(6) + randomInteger(6)) * 25000 + ((randomInteger(10) - 1) * 10000);
            }
            else if (tableName.includes("Artifact")) {
                // 2d4 * 250 000 [500 000 - 2 000 000]
                randomPrice = (randomInteger(4) + randomInteger(4)) * 250000;
            }
            else if (tableName.includes("Minor-Potions")) {
                // 1d4 * 10 + 1d9 [10 - 49]
                randomPrice = (randomInteger(4) + 1) * 10 + randomInteger(10) - 1;
            }
            else if (tableName.includes("Major-Potions")) {
                // 1d4 * 100 + 1d9 [100 - 499]
                randomPrice = randomInteger(4) * 100 + randomInteger(100) - 1;
            }
            else if (/\d/.test(tableName)) {
                let match = tableName.match(/\d+/);
                if (match) {
                    let extractedNumber = parseInt(match[0]);
                    randomPrice = extractedNumber;
                }
            }
            else {
                randomPrice = item.split('-')[1].trim();
                item = item.split('-')[0].trim();
            }

            merchantInventoryWithPrice[tableName].push({ "item" : item, "price" : randomPrice});
        });
    }

    return merchantInventoryWithPrice;
}

function formatDictToHTML(merchantInventoryWithPrice) {
    let html = '';

    for (let [tableName, items] of Object.entries(merchantInventoryWithPrice)) {
        html += '<table border="1" cellspacing="0" cellpadding="5">'; // Optional table styling
        html += `<thead><tr><th colspan="2" style="text-align: center;">${tableName}</th></tr></thead>`;
        html += `<thead><tr><th>Item(s)</th><th style="text-align: center;">Price</th></tr></thead>`;
        html += '<tbody>';
        
        items.forEach(({ item, price }, index) => {
            const backgroundColor = index % 2 === 0 ? '#f9f9f9' : '#e0e0e0'; // Light grey for even rows, slightly darker for odd
            html += `<tr style="background-color: ${backgroundColor};"><td>${item}</td><td style="text-align: center;">${price}</td></tr>`;
        });

        html += '</tbody></table><br>';
    }

    return html;
}

on("chat:message", function(msg){
    if(msg.type == "api" && msg.content.includes("!merchant")) {
        let regex = /^!merchant\s*-\s+(.+)/;
        let match = msg.content.match(regex);

        if (!match) {
            sendChat("Merchant Creator", "Invalid Input");
            return;
        }

        let merchantName = msg.content.split('-')[1].trim();
        let selectedTables = retrieveSelectedTable(merchantName);

        if (selectedTables === null) {
            sendChat("Merchant Creator", "Merchant Type Not Found");
            return;
        }

        let merchantInventory = createInventory(selectedTables);
        merchantInventory = formatPrice(merchantInventory);
        merchantInventory = formatDictToHTML(merchantInventory);
        createHandout(merchantInventory, merchantName);
    }
})