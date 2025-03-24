// leftovers from polygros that i'll use later
const $Blocks = Java.loadClass('net.minecraft.world.level.block.Blocks')
const $Properties = Java.loadClass('net.minecraft.world.level.block.state.BlockBehaviour$Properties')
const $BlockItem = Java.loadClass('net.minecraft.world.item.BlockItem')
const $IProperties = Java.loadClass('net.minecraft.world.item.Item$Properties')


StartupEvents.registry("item", (event) => {
    event.create("basic_wand") 
    .displayName("Stable Wand") 

    event.create('iron_twinblade', 'sword')
    .tier('iron')
    .speedBaseline('-2')

    event.create('golden_twinblade', 'sword')
    .tier('gold')
    .speedBaseline('-2')

    event.create('diamond_twinblade', 'sword')
    .tier('diamond')
    .speedBaseline('-2')

    event.create('netherite_twinblade', 'sword')
    .tier('netherite')
    .speedBaseline('-2')
})

/*
ItemEvents.modification(event => {
    event.modify(`archers:flint_spear`, item => {
        item.addAttribute("puffish_attributes:armor_shred", "b648b500-63e2-4664-95f7-5b5c0eac27cc", "Armor Shred", 2, "addition")
    })
    event.modify(`archers:iron_spear`, item => {
        item.addAttribute("puffish_attributes:armor_shred", "c7b1cbcc-37e4-470b-9189-77bf8df1b98f", "Armor Shred", 2, "addition")
    })
    event.modify(`archers:golden_spear`, item => {
        item.addAttribute("puffish_attributes:armor_shred", "37cc876c-6d78-4204-9e9f-6581227d814e", "Armor Shred", 2, "addition")
    })
    event.modify(`archers:diamond_spear`, item => {
        item.addAttribute("puffish_attributes:armor_shred", "9087e83f-cf41-4b06-b0d7-37a33bbfbcc1", "Armor Shred", 2, "addition")
    })
    event.modify(`archers:netherite_spear`, item => {
        item.addAttribute("puffish_attributes:armor_shred", "8c6d9d46-5012-43fb-be38-380ddc30a166", "Armor Shred", 2, "addition")
    })
})
*/