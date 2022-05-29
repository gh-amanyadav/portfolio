const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://knowaboutaman.co/',
  title: 'AK.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Aman Kumar',
  role: 'App Developer and Front End Engineer',
  description:
    'Multilingual, newly graduated App Developer offering expertise in Android and IOS. Innovative thinker with sound judgment and resourceful approach to problem-solving. Expert in App Development with training in Flutter and Android Native.',
  resume: 'https://drive.google.com/file/d/1wwPhJfQ8uIO3sTinzfwo6ygY4oCHRsUr/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/in-amanyadav/',
    github: 'https://github.com/gh-amanyadav/',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Know Your Plant',
    description:
      'It is Crossplatform app which is used to detect plant species and show its remedial use.',
    stack: ['Flutter', 'TensorFlow Lite', 'Google Colab'],
    sourceCode: 'https://github.com/gh-amanyadav/Know-your-plant',
    livePreview: 'Soon...',
  },
  {
    name: 'Portfolio Website',
    description:
      'It is my own portfolio website which you seeing right now.',
    stack: ['ReactJs', 'firebase', 'JavaScript'],
    sourceCode: 'Soon...',
    livePreview: 'Soon...',
  },
  {
    name: 'Apni Yyaari',
    description:
      'It is a chating app which is build on flutter.',
    stack: ['Flutter', 'Dart', 'Firebase'],
    sourceCode: 'https://github.com/gh-amanyadav/portfolio',
    livePreview: 'Soon...',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Flutter',
  'React',
  'Dart',
  'C',
  'C++',
  'Kotlin',
  'Python',
  'Git/Github',
  'Vs Code',
  'Android Studio',
  'PostMan'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'amankumar99347@gmail.com',
}

export { header, about, projects, skills, contact }
