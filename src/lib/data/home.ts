import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Thomas';

export const lastName = 'Vu';

export const description =
	"Hi there! I\’m Thomas. I love pushing myself to grow, whether it\’s through personal projects or exploring new concepts in technology. "
	"Outside of coding, I enjoy playing around with Linux and exploring human psychology. "
	"I always up for a good conversation and I always stay open to help others however I can!";
export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/thomasdkv' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/thomasdkv'
	},
	// {
	// 	platform: Platform.Twitter,
	// 	link: 'https://twitter.com/'
	// },
	// {
	// 	platform: Platform.StackOverflow,
	// 	link: 'https://stackoverflow.com/'
	// },
	{
		platform: Platform.Email,
		link: 'thomasv5201@gmail.com'
	},
	// {
	// 	platform: Platform.Youtube,
	// 	link: 'https://www.youtube.com'
	// },
	// {
	// 	platform: Platform.Facebook,
	// 	link: 'https://www.facebook.com'
	// }
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');
