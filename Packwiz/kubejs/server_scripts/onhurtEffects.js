const BuiltInRegistries = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries")

EntityEvents.hurt(event => {
    if (event.entity.hasEffect("kubejs:twinblade_dance")) {
        event.entity.potionEffects.add("minecraft:strength", 5)
        event.server.runCommand(`execute at ${event.entity.username} run playsound bettercombat:glaive_slash_quick master @a[distance=..5] ~ ~ ~ 1 1.2 1`)
        event.entity.server.scheduleInTicks(1, () => {
            event.entity.removeEffect("kubejs:twinblade_dance")
        })
    }

})