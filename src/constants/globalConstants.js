export const EMPTY_ARRAY = Object.freeze([])
export const EMPTY_OBJECT = Object.freeze({})

export const formId = 'ipg_form'

export const CURRENCY = {
	usd: 'USD',
	euro: 'EURO',
	inr: 'INR'
}

export const STATUS = {
	active: 'Active',
	inactive: 'Inactive'
}

export const EVENT_TYPES = {
	EVENT: 'event',
	BUNDLE_PASS: 'bundle-pass',
	PARTY_PASS: 'party-pass',
	SIMPLE: 'simple-pass'
}

export const EVENT_TYPES_VALUES = {
	EVENT: 'Single Event',
	BUNDLE_PASS: 'Full Season',
	PARTY_PASS: 'Half Season',
	SIMPLE: '6 Pack'
}


export const EVENT_TYPES_VALUES_LOGS = {
	EVENT: 'SINGLE EVENT',
	BUNDLE_PASS: 'FULL SEASON',
	PARTY_PASS: 'HALF SEASON',
	SIMPLE: '6 PACK'
}

export const DEFAULT_EVENT_RATE = '0.00'
export const DEFAULT_IMAGE = 'blank-image'



export const MONTH_NAMES = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
]
export const DAYS = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
]
export const EXPIRY_MONTHS = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
export const EXPIRY_YEARS = [
	{
		val: '22',
		label: '2022'
	},
	{
		val: '23',
		label: '2023'
	},
	{
		val: '24',
		label: '2024'
	},
	{
		val: '25',
		label: '2025'
	},
	{
		val: '26',
		label: '2026'
	},
	{
		val: '27',
		label: '2027'
	},
	{
		val: '28',
		label: '2028'
	},
	{
		val: '29',
		label: '2029'
	},
	{
		val: '30',
		label: '2030'
	},
	{
		val: '31',
		label: '2031'
	},
	{
		val: '32',
		label: '2032'
	},
	{
		val: '33',
		label: '2033'
	},
	{
		val: '34',
		label: '2034'
	},
	{
		val: '35',
		label: '2035'
	},
	{
		val: '36',
		label: '2036'
	},
	{
		val: '37',
		label: '2037'
	},
	{
		val: '38',
		label: '2038'
	},
	{
		val: '39',
		label: '2039'
	},
	{
		val: '40',
		label: '2040'
	},
	{
		val: '41',
		label: '2041'
	},
	{
		val: '42',
		label: '2042'
	},
	{
		val: '43',
		label: '2043'
	},
	{
		val: '44',
		label: '2044'
	},
	{
		val: '45',
		label: '2045'
	},
	{
		val: '46',
		label: '2046'
	},
	{
		val: '47',
		label: '2047'
	},
	{
		val: '48',
		label: '2048'
	},
	{
		val: '49',
		label: '2049'
	},
	{
		val: '50',
		label: '2050'
	}


]

export const MONTHNAME = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
]
export const MONTHNAMESMALL = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
]
export const WEEKDAYS = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
]

export const CARDTYPES =
{
	VS: 'VS',
	MC: 'MC'
}

export const createData = (data, dataCount) => {
	const originData = []
	for (let i = 1; i < dataCount; i++) {
		originData.push({
			key: i.toString(),
			text: `${data}`,
			val: i,
		})
	}
	return originData
}


export const BookingSectionHeader = [
	{ type: 'home', serviceName: 'Split AC', imageSrc: 'split', id: 1 },
	{ type: 'profile', serviceName: 'Portable AC', imageSrc: 'portable', id: 2 },
	{ type: 'contact', serviceName: 'Window AC', imageSrc: 'window', id: 3 }
]


export const facilityListSplit = [
	{ facilityName: 'Filter Cleaning', facilityMessage: 'This is a wider card with supporting text below', facilityAmount: '450.00', png: { png: require('../assets/images/ac-servicing.jpg') }, id: 1 },
	{ facilityName: 'Gas Filling', facilityMessage: 'This is a wider card with supporting text below', facilityAmount: '450.00', png: { png: require('../assets/images/gas-filling.jpg') }, id: 2 },
	{ facilityName: 'Preasure Cleaning', facilityMessage: 'This is a wider card with supporting text below', facilityAmount: '450.00', png: { png: require('../assets/images/washer-cleaning.jpg') }, id: 3 },
	{ facilityName: 'Filter Cleaning', facilityMessage: 'This is a wider card with supporting text below', facilityAmount: '450.00', png: { png: require('../assets/images/ac-servicing.jpg') }, id: 4 },
	{ facilityName: 'Gas Filling', facilityMessage: 'This is a wider card with supporting text below', facilityAmount: '450.00', png: { png: require('../assets/images/gas-filling.jpg') }, id: 5 },
	{ facilityName: 'Preasure Cleaning', facilityMessage: 'This is a wider card with supporting text below', facilityAmount: '450.00', png: { png: require('../assets/images/washer-cleaning.jpg') }, id: 6 },
]

export const facilityListPortable = [
	{ facilityName: 'Portable Filter Cleaning', facilityMessage: 'This is a wider card with supporting text below', facilityAmount: '450.00', png: { png: require('../assets/images/ac-servicing.jpg') }, id: 1 },
	{ facilityName: 'Portable Gas Filling', facilityMessage: 'This is a wider card with supporting text below', facilityAmount: '450.00', png: { png: require('../assets/images/gas-filling.jpg') }, id: 2 },
	{ facilityName: 'Portable Preasure Cleaning', facilityMessage: 'This is a wider card with supporting text below', facilityAmount: '450.00', png: { png: require('../assets/images/washer-cleaning.jpg') }, id: 3 },
	{ facilityName: 'Portable Filter Cleaning', facilityMessage: 'This is a wider card with supporting text below', facilityAmount: '450.00', png: { png: require('../assets/images/ac-servicing.jpg') }, id: 4 },
	{ facilityName: 'Portable Gas Filling', facilityMessage: 'This is a wider card with supporting text below', facilityAmount: '450.00', png: { png: require('../assets/images/gas-filling.jpg') }, id: 5 },
	{ facilityName: 'Portable Preasure Cleaning', facilityMessage: 'This is a wider card with supporting text below', facilityAmount: '450.00', png: { png: require('../assets/images/washer-cleaning.jpg') }, id: 6 },
]


export const imagesUrlsForBrands = [
	{ png: require('../assets/images/clients/blue star.png') },
	{ png: require('../assets/images/clients/carrier.png') },
	{ png: require('../assets/images/clients/daikin.png') },
	{ png: require('../assets/images/clients/haier.png') },
	{ png: require('../assets/images/clients/lg.png') },
	{ png: require('../assets/images/clients/lloyd.png') },
	{ png: require('../assets/images/clients/marq.png') },
	{ png: require('../assets/images/clients/mitsubishi.png') },
]

export const RepairLocation = [
	'Lucknow', 'Pune', 'delhi', 'Kanpur', 'Lucknow', 'Kanpur',
	'Kanpur', 'Lucknow', 'Kanpur', 'delhi', 'Pune', 'Lucknow',
	'Lucknow', 'Pune', 'delhi', 'Kanpur', 'Lucknow', 'Kanpur',
	'Kanpur', 'Lucknow', 'Kanpur', 'delhi', 'Pune', 'Lucknow',
	'Lucknow', 'Pune', 'delhi', 'Kanpur', 'Lucknow', 'Kanpur',
	'Kanpur', 'Lucknow', 'Kanpur', 'delhi', 'Pune', 'Lucknow',
	'Lucknow', 'Pune', 'delhi', 'Kanpur', 'Lucknow', 'Kanpur',
]
