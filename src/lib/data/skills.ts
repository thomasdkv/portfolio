import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Softwares', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'assembly',
		color: 'blue',
		description: [
			"Assembly is a low-level programming language that is closely related to machine code, allowing direct control over hardware. ",
			"Each assembly language instruction corresponds to a specific machine operation, making it highly efficient but also more complex and error-prone compared to higher-level languages. ",
			"It is often used in situations where performance and resource efficiency are critical, such as in embedded systems, operating systems, and device drivers.",
		],
		logo: Assets.Assembly,
		name: 'Assembly',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'bash',
		color: 'black',
		description: [
			"Bash (Bourne Again Shell) is a Unix shell and command language widely used in Linux and macOS environments. ",
			"It provides a command-line interface for interacting with the operating system, automating tasks, and writing scripts for system administration. ",
			"Bash is essential for any developer or system administrator, enabling the execution of commands, file manipulation, and process control efficiently.",
		],
		logo: Assets.Bash,
		name: 'Bash',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'c',
		color: 'blue',
		description: [
			"C is a general-purpose, procedural programming language that has influenced many modern languages. " ,
			"Known for its efficiency and control over system resources, C is commonly used in system programming, embedded systems, and developing software that requires direct hardware manipulation. " ,
			"Its simple syntax and low-level capabilities make it a powerful tool for performance-critical applications, though it requires careful memory management.",
		],
		logo: Assets.C,
		name: 'C',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'c,,',
		color: 'blue',
		description:[
			"C,, is a high-performance, object-oriented programming language that builds on the C language by adding features like classes, inheritance, and polymorphism. " ,
			"It is widely used in system software, game development, real-time applications, and performance-critical software due to its ability to provide low-level memory control and high efficiency. " ,
			"C,, supports both procedural and object-oriented programming paradigms, making it versatile for a wide range of applications.",
		],
		logo: Assets.Cpp,
		name: 'C,,',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'clion',
		color: 'teal',
		description:[
			"CLion is an IDE developed by JetBrains specifically for C and C,, development. " ,
			"It provides intelligent code assistance, including code completion, real-time code analysis, and powerful refactoring tools. " ,
			"CLion integrates with CMake and supports a variety of compilers and build systems, making it ideal for both small projects and large-scale applications. " ,
			"It’s a powerful tool for low-level programming and system development.",
		],
		logo: Assets.CLion,
		name: 'CLion IDE',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:[
			"CSS (Cascading Style Sheets) is a stylesheet language used to control the presentation and layout of HTML elements on web pages. " ,
			"It enables developers to apply styles like colors, fonts, spacing, and positioning, allowing for visually engaging and responsive designs. " ,
			"CSS works alongside HTML and JavaScript to create a cohesive, styled user experience across devices.",
		],
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'django',
		color: 'green',
		description:[
			"Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. " ,
			"It comes with built-in features like an admin panel, authentication system, and ORM, which make it easy to develop secure and scalable web applications. " ,
			"Django follows the model-template-views (MTV) architecture, making it a great choice for developers looking to create dynamic websites with minimal configuration.",
		],
		logo: Assets.Django,
		name: 'Django',
		category: 'framework'
	}),
	defineSkill({
		slug: 'eclipse',
		color: 'purple',
		description:[
			"Eclipse IDE is a widely used open-source Integrated Development Environment (IDE) primarily for Java development. " ,
			"It offers powerful features like code completion, debugging, and refactoring tools. " ,
			"Eclipse supports a wide range of programming languages and is extensible with plugins, making it suitable for various development tasks, including Java, C,,, and web development.",
		],
		logo: Assets.Eclipse,
		name: 'Eclipse IDE',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'expressjs',
		color: 'green',
		description:[
			"Express.js is a fast, minimalistic web application framework for Node.js that simplifies building web servers and APIs. " ,
			"It provides a robust set of features for handling routing, middleware, and HTTP requests/responses, allowing developers to create scalable and efficient applications. " ,
			"Known for its flexibility, Express.js is widely used for both RESTful APIs and full-stack applications with ease of integration into various databases and frontend frameworks.",
		],
		logo: Assets.ExpressJs,
		name: 'Express.js',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'figma',
		color: 'red',
		description:[
			"Figma is a collaborative design tool used for creating user interfaces and user experiences. " ,
			"It’s popular for its cloud-based platform that allows real-time collaboration among design teams. " ,
			"Figma provides vector graphics tools, prototyping features, and design systems management, making it suitable for everything from wireframes to high-fidelity design mockups. " ,
			"Its cross-platform accessibility and ease of use make it a top choice for designers.",
		],
		logo: Assets.Figma,
		name: 'Figma',
		category: 'soft'
	}),
	defineSkill({
		slug: 'git',
		color: 'orange',
		description:[
			"Git is a distributed version control system that tracks changes in source code during software development. " ,
			"It allows multiple developers to work on a project simultaneously, merging their changes efficiently without overwriting each other’s work. " ,
			"Git’s decentralized nature ensures that each developer has a full copy of the codebase, improving reliability and flexibility in managing code versions.",
		],
		logo: Assets.Git,
		name: 'Git',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'godot',
		color: 'turquoise',
		description:[
			"Godot is an open-source game engine that provides a user-friendly interface for developing both 2D and 3D games. " ,
			"It supports multiple programming languages, including GDScript, C#, and VisualScript, offering flexibility for developers of all skill levels. " ,
			"With a focus on ease of use, performance, and rapid development, Godot is a popular choice for indie game developers and small studios.",
		],
		logo: Assets.Godot,
		name: 'Godot',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:[
			"HTML (Hypertext Markup Language) is the foundational language used to structure and organize content on web pages. " ,
			"It defines elements like headings, paragraphs, images, and links, creating the basic framework that browsers render visually. " ,
			"HTML works together with CSS for styling and JavaScript for interactivity to form complete, functional web pages.",
		],
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'intellij',
		color: 'pink',
		description:[
			"IntelliJ IDEA is a robust, Java-based Integrated Development Environment (IDE) known for its intelligent code completion, in-depth debugging tools, and seamless version control integration. " ,
			"It supports numerous programming languages like Java, Kotlin, and Python, and its productivity features, like automated refactoring and code navigation, make it a popular choice for professional developers.",
		],
		logo: Assets.IntelliJ,
		name: 'IntelliJ IDEA',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'java',
		color: 'blue',
		description:[
			"Java is a widely-used, object-oriented programming language known for its platform independence, achieved through the 'write once, run anywhere' philosophy. " ,
			"It is commonly used for building web applications, mobile apps (especially Android), enterprise software, and large-scale systems. " ,
			"Java's robust ecosystem, including libraries, frameworks, and development tools, makes it a versatile and reliable choice for developers ",
		],
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description:[
			"JavaScript is a versatile, high-level programming language primarily used to create dynamic and interactive elements on websites. " ,
			"Originally developed for front-end web development, it enables functions like form validation, animations, and event handling directly within the browser. " ,
			"JavaScript also works on the server side (via Node.js), making it a full-stack language capable of building entire web applications. " ,
			"It supports object-oriented, imperative, and functional programming styles, offering flexibility in approach. " ,
			"With its vast ecosystem of libraries and frameworks (like React, Angular, and Vue), JavaScript is central to modern web development, enabling responsive, interactive user experiences.",
		],
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'junit',
		color: 'red',
		description:[
			"JUnit is a widely used framework for writing and running tests in Java. " ,
			"It provides a simple, annotation-based API for creating unit tests and includes features like assertions, test fixtures, and test runners. " ,
			"JUnit helps developers ensure the correctness and reliability of their code, making it an essential tool in test-driven development (TDD). " ,
			"By automating tests, JUnit makes it easier to catch bugs early and maintain high-quality software.",
		],
		logo: Assets.JUnit,
		name: 'JUnit',
		category: 'test'
	}),
	defineSkill({
		slug: 'lua',
		color: 'blue',
		description:[
			"Lua is a lightweight, high-level scripting language commonly used for embedded systems, gaming, and configurations. " ,
			"It is designed to be fast, efficient, and easily extensible, making it popular in environments that require minimal overhead. " ,
			"Lua integrates well with other programming languages and is commonly used in game engines for scripting game logic and behaviors.",
		],
		logo: Assets.Lua,
		name: 'Lua',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'mern',
		color: 'black',
		description:[
			"The MERN Stack is a full-stack framework that integrates MongoDB, Express.js, React.js, and Node.js to build dynamic, data-driven web applications. " ,
			"Being JavaScript-based, it allows developers to use a single programming language for both frontend and backend development, streamlining the development process and ensuring seamless communication between client and server. " ,
			"Additionally, the stack is highly scalable and flexible, leveraging MongoDB for data management, React for component-based user interfaces, and Node.js for efficiently handling multiple simultaneous connections.",
		],
		logo: Assets.Mern,
		name: 'MERN',
		category: 'framework'
	}),
	defineSkill({
		slug: 'mongodb',
		color: 'green',
		description:[
			"MongoDB is a popular NoSQL database that stores data in a flexible, document-oriented format using JSON-like objects. " ,
			"It is designed for scalability and performance, making it ideal for handling large volumes of unstructured data. " ,
			"MongoDB is commonly used in modern web applications for its ability to scale horizontally and integrate easily with various development frameworks.",
		],
		logo: Assets.MongoDB,
		name: 'MongoDB',
		category: 'db'
	}),
	defineSkill({
		slug: 'nextjs',
		color: 'black',
		description:[
			"Next.js is a powerful React framework that enables developers to build fast, scalable web applications with features like server-side rendering (SSR), static site generation (SSG), and API routes " ,
			"It optimizes performance through automatic code splitting and efficient rendering strategies, making it ideal for SEO-friendly applications. " ,
			"With an intuitive file-based routing system, Next.js simplifies creating complex, dynamic pages and supports seamless integration with popular databases and backend solutions.",
		],
		logo: Assets.Nextjs,
		name: 'Next.js',
		category: 'library'
	}),
	defineSkill({
		slug: 'nodejs',
		color: 'green',
		description:[
			"Node.js is a runtime environment that allows developers to run JavaScript on the server side, enabling full-stack JavaScript development.  " ,
			"It is built on the V8 JavaScript engine, providing high performance and scalability for handling multiple concurrent connections. " ,
			"With its non-blocking, event-driven architecture, Node.js is well-suited for building real-time applications like chat services, APIs, and streaming platforms.",
		],
		logo: Assets.NodeJs,
		name: 'Node.js',
		category: 'library'
	}),
	defineSkill({
		slug: 'python',
		color: 'yellow',
		description:[
			"Python is a high-level, general-purpose programming language known for its readability and simplicity, making it ideal for both beginners and professionals. " ,
			"It supports various programming paradigms, including object-oriented, procedural, and functional programming, and is widely used in fields like web development, data science, machine learning, and automation. " ,
			"With a vast ecosystem of libraries and frameworks, Python enables rapid development and is popular for applications requiring quick prototyping and robust performance.",
		],
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'react',
		color: 'skyblue',
		description:[
			"React is a popular JavaScript library for building user interfaces, particularly for single-page applications. " ,
			"It allows developers to create reusable UI components and efficiently update the view when data changes, improving performance. " ,
			"React's declarative nature and component-based architecture make it easier to build and maintain complex applications.",
		],
		logo: Assets.ReactJs,
		name: 'React',
		category: 'library'
	}),
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
