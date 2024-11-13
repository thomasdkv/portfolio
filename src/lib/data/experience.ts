import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'restaurant-worker',
		company: 'Fabulous Pizza',
		description: 'Preparing food items according to recipes, maintaining a clean and organized kitchen, ensuring quality service for customers, taking orders, handling payments, and providing a positive dining experience',
		contract: ContractType.PartTime,
		type: 'Customer Service',
		location: 'Restaurant',
		period: {
			from: new Date(2019, 6 - 1, 1),
			to: new Date(2019, 9 - 1, 1)
		},
		skills: getSkills(''),
		name: 'Restaurant Customer Service',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: "Serving customers"
	},
	// {
	// 	slug: 'software-freelance',
	// 	company: 'Self-employed',
	// 	description: 'Creating awesome applications for customers.',
	// 	contract: ContractType.Freelance,
	// 	type: 'Software Development',
	// 	location: 'Home',
	// 	period: { from: new Date() },
	// 	skills: getSkills('svelte', 'ts', 'sass', 'css', 'html', 'js'),
	// 	name: 'Freelancer',
	// 	color: 'blue',
	// 	links: [],
	// 	logo: Assets.Unknown,
	// 	shortDescription: 'Creating awesome applications for customers.'
	// },
	// {
	// 	slug: 'software-freelance-junior',
	// 	company: 'Self-employed',
	// 	description: 'Creating awesome applications for customers.',
	// 	contract: ContractType.Freelance,
	// 	type: 'Software Development',
	// 	location: 'Home',
	// 	period: { from: new Date(2022, 0, 1), to: new Date() },
	// 	skills: getSkills('css', 'html', 'js'),
	// 	name: 'Junior Freelancer',
	// 	color: 'green',
	// 	links: [],
	// 	logo: Assets.Unknown,
	// 	shortDescription: 'Creating awesome applications for customers.'
	// }
];

export const title = 'Experience';
