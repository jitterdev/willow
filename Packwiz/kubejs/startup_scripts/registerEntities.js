
// if you're wondering why i added this:
// around the time of creation of polygros i was talking to my best friend josh and he suggested a raw chicken breast item that you can throw to poison people.
// so, i'm adding it to willow academy. this won't be available to most people

/**
 * 
 * @param {Internal.ContextUtils$ProjectileBlockHitContext} ctx 
 */
global.onHitBlock = ctx => {
    const { entity, result, result: { direction } } = ctx
    let deltaMovement = entity.deltaMovement
    let velX = deltaMovement.x()
    let velY = deltaMovement.y()
    let velZ = deltaMovement.z()
    switch (direction) {
        case "up":
            velY = 0
            velX *= 0.7
            velZ *= 0.7
            entity.persistentData.IsInGround = 1
            break
        case "down":
            velY = 0
            break
        case "north":
            velZ = -velZ * 0.5
            break
        case "south":
            velZ = -velZ * 0.5
            break
        case "west":
            velX = -velX * 0.5
            break
        case "east":
            velX = -velX * 0.5
            break
    }
    entity.setMotion(velX, velY * 2, velZ)
}

/**
 * 
 * @param {Internal.Entity} entity 
 */
global.tick = entity => {
    let pos = entity.blockPosition()
    let block = entity.level.getBlock(pos).blockState
    entity.persistentData.IsCollidingWithBlock = false
    if (!block.isAir()) {
        let collisionBoxes = block.getCollisionShape(entity.level, pos).toAabbs()
        let entityBoundingBox = entity.getBoundingBox()
        let entityPos = entity.position()
        for (let i = 0; i < collisionBoxes.size(); i++) {
            let blockAABB = collisionBoxes.get(i)
            let expandedBlockAABB = blockAABB.move(pos.getX(), pos.getY(), pos.getZ())
            let distanceY = Math.min(Math.abs(entityPos.y() - expandedBlockAABB.minY), Math.abs(entityPos.y() - expandedBlockAABB.maxY))
            if (distanceY <= 0.5) {
                entity.persistentData.IsInGround = 1
            } else {
                entity.persistentData.IsInGround = 0
            }
            let intersectX = Math.max(0, Math.min(entityBoundingBox.maxX, expandedBlockAABB.maxX) - Math.max(entityBoundingBox.minX, expandedBlockAABB.minX))
            let intersectZ = Math.max(0, Math.min(entityBoundingBox.maxZ, expandedBlockAABB.maxZ) - Math.max(entityBoundingBox.minZ, expandedBlockAABB.minZ))
            if (intersectX > 0 || intersectZ > 0) {
                entity.persistentData.IsCollidingWithBlock = true
                break
            }
        }
    }

    if (entity.persistentData.IsInGround === 1) {
        if (!entity.persistentData.GroundTime) entity.persistentData.GroundTime = 0
        entity.persistentData.GroundTime++
        if (entity.persistentData.GroundTime >= 200) {
            entity.remove("discarded")
            return
        }
    } else {
        entity.persistentData.GroundTime = 0
    }
}



StartupEvents.registry('entity_type', event => {
    event.create('raw_chicken_breast', 'entityjs:projectile')
        .displayName('Raw Chicken Breast')
        .clientTrackingRange(8) // Set client tracking range to 8
        .isAttackable(true) // Make the arrow attackable
        .sized(0.75, 0.75) // Set size of arrow entity to 1x1
        .renderScale(0.75, 0.75, 0.75)
        .renderOffset(-0.5, -0.5, -0.5)
        .updateInterval(1) // Set update interval to 3 ticks
        //Setting .noItem() here will result in the builder skipping the item build altogether
        //Since the builder registers the item automatically this is the only way to prevent an item from being created here.
        //.noItem()
        .mobCategory('misc') // Set mob category to 'misc'
        .item(item => {
            item.maxStackSize(64); // Set maximum stack size of arrow item to 64
            item.canThrow(true)
        })
        .textureLocation(entity => {
            return "minecraft:textures/item/chicken.png"
        })
        .onHitBlock(ctx => global.onHitBlock(ctx))
        .tick(entity => global.tick(entity))
        .onHitEntity(context => {
            const { entity, result } = context;
            // Custom behavior when the arrow hits an entity, for example, applying potion effects
            if (result.entity.living) {
                let potion = result.entity.potionEffects
                potion.add('minecraft:poison', 200, 10, false, true)
                result.entity.attack(2)
                entity.discard()
            }
        })

});

