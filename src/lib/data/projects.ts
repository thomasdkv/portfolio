import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'doctalk-mern-reactjs-nodejs-mongodb-tailwind-expressjs',
		color: '#5e95e3',
		description: [
			"DOCTALK is a web application designed to enhance doctor-patient communication by providing tools for conversation recording, transcription, and summarization.",
			"Developed with React, Node.js, MongoDB, and Tailwind CSS, this project combines a modern frontend with a powerful backend to streamline patient documentation for medical professionals.",
		],
		shortDescription:
			"DOCTALK is a web application designed to assist doctors in recording and transcribing patient conversations. ",
		links: [{ to: 'https://devpost.com/software/medinote-7k1gmp', label: 'Devpost' }],
		logo: Assets.DocTalk,
		name: 'DocTalk',
		period: {
			from: new Date(2024, 8 - 1, 16),
			to: new Date(2024, 8 - 1, 18)
		},
		skills: getSkills('mern', 'tailwind', 'js', 'react', 'nodejs', 'mongodb', 'expressjs'),
		type: 'Ignition Hacks 2024 Project',
	},
	{
		slug: 'lox-java-c',
		color: '#4A90E2',
		description: [
			"This personal project is an ongoing journey into the fundamentals of programming languages, covering every aspect from syntax and grammar to compilation.",
			"It starts from foundational language grammar and syntax scanning, through expression parsing and interpreter development, to advanced features like garbage collection, language optimization, and constructing a bytecode virtual machine.",
			"It’s been a hands-on way to learn about language structure and implementation details. This project wouldn’t be possible without the invaluable guidance of Robert Nystrom's book, Crafting Interpreters.",
		],
		shortDescription:
			"This personal project is an ongoing journey into the fundamentals of programming languages, covering every aspect from syntax and grammar to compilation. It starts from foundational language grammar and syntax scanning, through expression parsing and interpreter development, to advanced features like garbage collection, language optimization, and constructing a bytecode virtual machine.",
		links: [{ to: 'https://github.com/thomasdkv/Lox', label: 'GitHub' }],
		logo: Assets.Lox,
		name: 'Lox Language',
		period: {
			from: new Date(2024, 9 - 1, 1),
			// to: new Date()
		},
		skills: getSkills('c', 'java'),
		type: 'Personal Project',
	},
	{
		slug: 'chatapplication-html-css-js-django',
		color: '#006400',
		description: [
			"A personal project developed using HTML, CSS, JavaScript, and Django to enable instant communication.",
			"This application provides users with seamless, live messaging in a streamlined and intuitive interface.",
			"The backend, powered by Django, handles real-time data flow efficiently, ensuring messages appear instantly for all participants without requiring manual refreshes.",
		],
		shortDescription:
			'A real-time chat application made with Django framework.',
		links: [{ to: 'https://github.com/thomasdkv/chat-app', label: 'GitHub' }],
		logo: Assets.Django,
		name: 'Real-time chat application',
		period: {
			from: new Date(2024, 7 - 1, 1),
			to: new Date(2024, 7 - 1, 3)
		},
		skills: getSkills('html', 'css', 'js', 'django', 'python'),
		type: 'Personal Project',
	},
	{
		slug: 'dashboard-html-css-js-python',
		color: '#9B30FF',
		description:[
			"A custom dashboard integrating web scraping to collect course data from Western University and professor ratings from RateMyProf.com.",
			"This project provides students with a centralized view of course options and instructor feedback, helping them make informed decisions during course selection.",
		],
		shortDescription:
			'A full-stack course dashboard application for Western University student',
		links: [{ to: 'https://devpost.com/software/western-university-course-lookup', label: 'Devpost' }],
		logo: Assets.Western,
		name: 'Western University Course Dashboard',
		period: {
			from: new Date(2022, 11 - 1, 18),
			to: new Date(2022, 11 - 1, 20)
		},
		skills: getSkills('html', 'css', 'js', 'python'),
		type: 'Hacks Western 9 Project',
	},
	{
		slug: 'ecology-html-css-reactnative-django-mern-nodejs-expressjs',
		color: '#228B22',
		description:[
			"Ecology assigns users daily eco-tasks they can complete to reduce their everyday carbon footprint.",
			"The app also features a daily community task where users can globally contribute to reach a goal, and compete for positions on a leaderboard.",
			"Every continuous day that tasks are completed, a streak is earned.",
		],
		shortDescription:
			'An app focused on bringing people together to help the environment. Complete everyday eco-tasks alongside your community to make the world a better place. ',
		links: [{ to: 'https://devpost.com/software/ecology-phycfo', label: 'Devpost' }],
		logo: Assets.Ecology,
		name: 'Ecology',
		period: {
			from: new Date(2024, 7 - 1, 27),
			to: new Date(2024, 7 - 1, 27)
		},
		skills: getSkills('html', 'css', 'js', 'react', 'nodejs', 'mongodb', 'mern', 'expressjs'),
		type: 'Starter Hack 2024 Project',
	},
	{
		slug: 'studypartner-html-css-nextjs-nodejs-mongodb-mern-expressjs',
		color: '#FF4500',
		description:
			"Study Partner Matcher help students improve their efficiency and make friends by matching them with a study partner based on their institution, availability, courses, and personality ",
		shortDescription:
			'A tool that assist student with finding study partners.',
		links: [{ to: 'https://devpost.com/software/study-partner-matcher', label: 'Devpost' }],
		logo: Assets.Unknown,
		name: 'Study Partner Matcher',
		period: {
			from: new Date(2024, 11 - 1, 9),
			to: new Date(2024, 11 - 1, 10)
		},
		skills: getSkills('html', 'css', 'js', 'nextjs', 'nodejs', 'mongodb', 'mern', 'expressjs'),
		type: 'CTRL+HACK+DEL Hackathon 2024 Project',
	},
	{
		slug: 'game-godot',
		color: '#40E0D0',
		description:[
			"In a world, barred with pain and suffering, a small village has created an unknown potion recipe, that grants an endless source of joy to withstand this cruel world.",
			"A large group of evil raiders hated the sound of this, and wanted to put an end to the village.",
			"Unexpectedly, the village fought back, defending their recipe and taking down the raiders. now, you are tasked with a significant operation.",
			"Finish the job. Take down the village.",
		],
		shortDescription:
			'Unleash your inner villain and bring the world to its knees.',
		links: [{ to: 'https://ashtonfranklin04.itch.io/elemental-flip', label: 'Gamejam' }],
		logo: Assets.ElementalFlip,
		name: 'Elemental Flip',
		period: {
			from: new Date(2024, 3 - 1, 22),
			to: new Date(2024, 3 - 1, 30)
		},
		skills: getSkills('godot'),
		type: 'LoJam x GDS 2024 Game',
	},
	{
		slug: 'maze-game-java',
		color: '#40E0D0',
		description:
			"A maze game in Java using Dijkstra algorithm to collect all coins and ﬁnd the shortest path to the exit while avoiding hazards.",
		shortDescription:
			'Collect all the coins, avoid the obstacles, and escape the maze',
		links: [],
		logo: Assets.Java,
		name: 'Maze Game',
		period: {
			from: new Date(2024, 5 - 1, 1),
			to: new Date(2024, 5 - 1, 1)
		},
		skills: getSkills('java'),
		type: 'Maze Game',
	},
];

export const title = 'Projects';
