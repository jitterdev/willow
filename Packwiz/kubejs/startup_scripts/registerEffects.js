StartupEvents.registry('mob_effect', event => {
    event.create('twinblade_dance')
        .displayName("Twinblade Dance")
        .color(Color.WHITE)
        .beneficial()
        .modifyAttribute('puffish_attributes:resistance', '9c83de53-ad06-464f-a4cd-767d7f94d4e1', 100, 'addition')
})