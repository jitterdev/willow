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




