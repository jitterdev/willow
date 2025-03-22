// sorry for the ugly code, but i'm reasoning that the performance impact will be negligible - vibri

const keywords = [];
const icons = [];
function startsWithVowel(letter) {
    return "aeiou".includes(letter.toLowerCase());
}

PlayerEvents.chat(event => {
    if (event.message.includes('explosion')) {
        keywords.push('explosive'); 
        icons.push('{"text":"\ud83d\udd25","color":"dark_red"},');
    }
    if (event.message.includes('inflame')) {
        keywords.push('fiery'); 
        icons.push('{"text":"\ud83d\udd25","color":"#fa7d00"},');
    }  
    if (event.message.includes('smite')) {
        keywords.push('thunderous'); 
        icons.push('{"text":"\u26a1","color":"yellow"},');
    }  
    if (event.message.includes('action.kubejs.fireworks')) {
        keywords.push('spectacular'); 
        icons.push('{"text":"\u2600","color":"white"},');
    }
    if (event.message.includes('action.kubejs.smoke')) {
        keywords.push('hazy'); 
        icons.push('{"text":"\u2592","color":"#C3C3C3"},'); 
    }
    if (event.message.includes('projectile')) {
      event.server.scheduleInTicks(1, () => {
        if (keywords.length > 0) { 
            const plsWork = keywords[0].charAt(0);
            if (startsWithVowel(plsWork)) {
                keywords.unshift(" an");
                } else {
                keywords.unshift(" a");
            }}
        event.server.runCommandSilent(`execute positioned ${event.player.x} ${event.player.y} ${event.player.z} run tellraw @a[distance=..12] ["",{"text":"[","color":"gray"},` + icons.join("") + `{"text":"] ","color":"gray"},{"text":"${event.player.displayName.string}","color":"gold"},{"text":" casts` + keywords.join(" ") + ` projectile!","color":"light_purple"}]`)
        keywords.length = 0
        icons.length = 0
    })}
    if (event.message.includes('hitscan')) {
        event.server.scheduleInTicks(1, () => {
          if (keywords.length > 0) { 
              const plsWork = keywords[0].charAt(0);
              if (startsWithVowel(plsWork)) {
                  keywords.unshift(" an");
                  } else {
                  keywords.unshift(" a");
              }}
          event.server.runCommandSilent(`execute positioned ${event.player.x} ${event.player.y} ${event.player.z} run tellraw @a[distance=..12] ["",{"text":"[","color":"gray"},` + icons.join("") + `{"text":"] ","color":"gray"},{"text":"${event.player.displayName.string}","color":"gold"},{"text":" instantly casts` + keywords.join(" ") + ` cantrip!","color":"light_purple"}]`)
          keywords.length = 0
          icons.length = 0
      })}
      if (event.message.includes('self')) {
        event.server.scheduleInTicks(1, () => {
          if (keywords.length > 0) { 
              const plsWork = keywords[0].charAt(0);
              if (startsWithVowel(plsWork)) {
                  keywords.unshift(" an");
                  } else {
                  keywords.unshift(" a");
              }}
          event.server.runCommandSilent(`execute positioned ${event.player.x} ${event.player.y} ${event.player.z} run tellraw @a[distance=..12] ["",{"text":"[","color":"gray"},` + icons.join("") + `{"text":"] ","color":"gray"},{"text":"${event.player.displayName.string}","color":"gold"},{"text":" incarnates within themselves` + keywords.join(" ") + ` aura..","color":"light_purple"}]`)
          keywords.length = 0
          icons.length = 0
      })}
      if (event.message.includes('storm')) {
        event.server.scheduleInTicks(1, () => {
          if (keywords.length > 0) { 
              const plsWork = keywords[0].charAt(0);
              if (startsWithVowel(plsWork)) {
                  keywords.unshift(" an");
                  } else {
                  keywords.unshift(" a");
              }}
          event.server.runCommandSilent(`execute positioned ${event.player.x} ${event.player.y} ${event.player.z} run tellraw @a[distance=..12] ["",{"text":"[","color":"gray"},` + icons.join("") + `{"text":"] ","color":"gray"},{"text":"${event.player.displayName.string}","color":"gold"},{"text":" casts` + keywords.join(" ") + ` storm!","color":"light_purple"}]`)
          keywords.length = 0
          icons.length = 0
      })}
  })
  