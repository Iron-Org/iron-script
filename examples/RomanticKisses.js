Events.on('playerSelected', (entity, target) => {
	if (!entity.touching(target)) {
		return
	}

	entity.lookTo(target, true)
	target.lookTo(entity, true)

	entity.action(2)
	target.action(2)

	entity.say(`beijou ${target.getUsername()}`, true, 35)
})