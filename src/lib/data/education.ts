import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Honour Specialization in Computer Science',
		description: '',
		location: 'Canada',
		logo: Assets.Western,
		name: '',
		organization: 'Western University',
		period: { from: new Date(2022, 9, 1), to: new Date(2026, 9, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ["C", "C++", "Python", "Java", "DSA", "Networks", "OS", "AI", "Data Science"]
	},
];

export const title = 'Education';
