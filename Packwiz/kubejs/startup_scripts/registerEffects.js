StartupEvents.registry('mob_effect', event => {

    event.create('twinblade_dance')
        .displayName("Twinblade Dance")
        .color(Color.WHITE)
        .beneficial()
        .modifyAttribute('puffish_attributes:resistance', '9c83de53-ad06-464f-a4cd-767d7f94d4e1', 100, 'addition')

    event.create('wolf_strength')
        .displayName("Wolf Strength")
        .color(Color.RED)
        .beneficial()
        .modifyAttribute('minecraft:generic.attack_damage', '5bd00780-7ba2-429d-ad2a-94debe122422', 2, 'addition')
        
    event.create('wolf_speed')
        .displayName("Wolf Speed")
        .color(Color.RED)
        .beneficial()
        .modifyAttribute('minecraft:generic.movement_speed', 'cf6bc5b4-16e0-48c0-95fc-d9e28a9f7aaa', 0.04, 'addition')

      event.create('wolf_rage')
        .displayName("Wolf Rage")
        .color(Color.RED)
        .beneficial()
        .modifyAttribute('minecraft:generic.movement_speed', 'cf6bc5b4-16e0-48c0-95fc-d9e28a9f7aaa', 0.04, 'addition')
        .modifyAttribute('minecraft:generic.attack_damage', '5bd00780-7ba2-429d-ad2a-94debe122422', 2, 'addition')
})

