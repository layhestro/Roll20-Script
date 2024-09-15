# Roll20 Merchant Inventory Creator Script

## Overview

This script is designed for **Roll20** to dynamically generate a merchant inventory and display it in a handout. It allows users to create a variety of merchants, each with a predefined list of items, quantities, and prices. The inventory is formatted into a table and can be customized per merchant type, such as a **Black Market**, **Antiquary**, or **Weapon Smith**.

## Features

- **Dynamic Merchant Inventory**: Create inventories for different types of merchants, each offering a unique set of items.
- **Price Randomization**: Randomized pricing is added to each item for more varied and unpredictable merchant inventories.
- **HTML Formatting**: The inventory is formatted as an HTML table, making it easy to read and present in a Roll20 handout.
- **Roll20 Integration**: Trigger the script using the `!merchant` API command in the Roll20 chat to create merchant inventories on the fly.

## How It Works

1. **Merchant Selection**: When the `!merchant` command is called in the Roll20 chat, the script matches the merchant type (e.g., "Antiquary", "Black Market") and retrieves the corresponding item table.

2. **Inventory Creation**: Based on the selected merchant type, the script generates an inventory with randomized item quantities and prices.

3. **Formatting**: The inventory is formatted into an HTML table with alternating row colors for easy readability.

4. **Handout Creation**: The formatted table is then added to a Roll20 handout, labeled with the merchant's name.

## Command Syntax

To create a merchant's inventory, use the following command in the Roll20 chat:
!merchant - [MerchantType]

- **MerchantType**: The type of merchant for which the inventory will be generated (e.g., "Antiquary", "Black Market", "Weapon Smith").

Example:
!merchant - Black Market

## Merchant Types

The following merchant types are supported by the script:

- **Weapon Smith**: Offers various weapons, armors, and magic items.
- **Antiquary**: Specializes in rare rings, wondrous items, and high-level spells.
- **Black Market**: Provides a wide range of frequently available items, including magic armors, staffs, and rare rings.

## Customization

The script can be easily modified to include additional merchant types or tweak the existing inventories. Each merchant's item table is defined in the `retrieveSelectedTable` function, allowing you to adjust the items and quantities offered by each merchant.

## How to Install

1. **Copy the Script**: Copy the contents of `CreateHandout.js`.
2. **Add to Roll20**: Open your Roll20 campaign, go to the API scripts section, and paste the script.
3. **Save**: After saving the script, it's ready to use in your Roll20 campaign.

## Future Enhancements

- **Additional Merchant Types**: Expand the merchant types to include more specialized or unique inventories.
- **Dynamic Pricing Models**: Implement more complex pricing models based on supply and demand or item rarity.
- **Item Descriptions**: Add detailed descriptions for each item in the inventory for more immersive gameplay.

## License

This project is licensed under the MIT License.
