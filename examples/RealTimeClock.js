// Alphabet furniture sprites
const alphabet = {
	number: 7357, a: 7399, b: 7175,
	c: 7161, d: 7315, e: 7273, f: 7259,
	g: 7063, h: 7105, i: 7203, j: 7245,
	k: 7343, l: 7231, m: 7189, n: 7329,
	o: 7133, p: 7413, q: 7287, r: 7077,
	s: 7091, t: 7119, u: 7371, v: 7147,
	w: 7049, x: 7217, y: 7301, z: 7385
}

// Static values
const statics = {
	week_names: ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'],

	regions: {
		br: { value: 3, operator: false, name: 'Brasil' },
		pt: { value: 1, operator: true, name: 'Portugal' },
		fr: { value: 2, operator: true, name: 'França' },
		jp: { value: 9, operator: true, name: 'Japão' },
		eua: { value: 4, operator: false, name: 'Estados Unidos' }
	},
}

// Furnitures
const clock = {
	furnis: {},
	time: {},
	calendar: {},
	region: 0,
}

const updateWeek = date => {
  if (clock.calendar.week === date.getDay()) {
		return
	}

  for (const furni of clock.furnis.week) {
		Faker.removeFakeFloorItem(furni)
	}

	clock.furnis.week.length = 0
  clock.calendar.week = date.getDay()

  const day = statics.week_names[clock.calendar.week].split('')
  for (const i in day) {
    clock.furnis.week.push(Faker.createFakeItem(alphabet[day[i]], 4, 11 - i, 0, 2))
  }
}

const updateClock = date => {
  const seconds = date.getSeconds()

  clock.furnis.seconds[0].setState(seconds / 10)
  clock.furnis.seconds[1].setState(seconds % 10)

  if (clock.time.hour === date.getHours() && clock.time.minutes === date.getMinutes()) {
		return
	}

  clock.time.hour = date.getHours()
  clock.time.minutes = date.getMinutes()

  for (const key in clock.time) {
    clock.furnis[key][0].setState(clock.time[key] / 10)
    clock.furnis[key][1].setState(clock.time[key] % 10)
  }
}

const updateDate = date => {
	if (clock.calendar.day === date.getDate() && clock.calendar.month === (date.getMonth() + 1)) {
		return
	}

  clock.calendar.day = date.getDate()
  clock.calendar.month = date.getMonth() + 1
  clock.calendar.year = date.getFullYear()

	const keys = ['day', 'month']
  for (const key of keys) {
    clock.furnis[key][0].setState(clock.calendar[key] / 10)
    clock.furnis[key][1].setState(clock.calendar[key] % 10)
  }

  clock.furnis.year[0].setState(clock.calendar.year / 1000 % 10)
  clock.furnis.year[1].setState(clock.calendar.year / 100 % 10)
  clock.furnis.year[2].setState(clock.calendar.year / 10 % 10)
  clock.furnis.year[3].setState(clock.calendar.year / 1 % 10)
}

Events.on('load', () => {
  clock.furnis.hour = [
    Faker.createFakeItem(7357, 4, 11, 4, 2),
    Faker.createFakeItem(7357, 4, 10, 4, 2)
  ]
  clock.furnis.minutes = [
    Faker.createFakeItem(7357, 4, 8, 4, 2),
    Faker.createFakeItem(7357, 4, 7, 4, 2)
  ]
  clock.furnis.seconds = [
    Faker.createFakeItem(7357, 4, 5, 4, 2),
    Faker.createFakeItem(7357, 4, 4, 4, 2)
  ]
  clock.furnis.day = [
    Faker.createFakeItem(7357, 4, 11, 2, 2),
    Faker.createFakeItem(7357, 4, 10, 2, 2)
  ]
  clock.furnis.month = [
    Faker.createFakeItem(7357, 4, 8, 2, 2),
    Faker.createFakeItem(7357, 4, 7, 2, 2)
  ]
  clock.furnis.year = [
    Faker.createFakeItem(7357, 4, 5, 2, 2),
    Faker.createFakeItem(7357, 4, 4, 2, 2),
    Faker.createFakeItem(7357, 4, 3, 2, 2),
    Faker.createFakeItem(7357, 4, 2, 2, 2)
  ]
  clock.furnis.week = []

  clock.region = statics.regions.br
})

//Update Clock
Events.on('tick', () => {
  const date = new Date()

  date.setHours(clock.region.operator ? date.getHours() + clock.region.value : date.getHours() - clock.region.value)

  updateWeek(date)
  updateDate(date)
  updateClock(date)
})

Commands.register(':region', true, (e, m) => {
	const arg = m.toLowerCase().split(' ').slice(1).join(' ')

  if (!(arg in statics.regions))
    return e.message('Digite uma região valida!')

  clock.region = statics.regions[arg]

  Room.notification('generic', `Região do Rélogio alterada para ${clock.region.name}!`)
})

Commands.register(':list', true, e => e.message('* Regiões disponíveis: ' + Object.keys(statics.regions).join(', ')))
