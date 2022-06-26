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
    'Passionate App Developer offering expertise in Android and IOS. Innovative thinker with sound judgment and resourceful approach to problem-solving. Expert in App Development with training in Flutter and Android Native.',
  resume: 'https://drive.google.com/file/d/1cfbgMDOSj5xrGpXIKEv-i5s72rUpJYdZ/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/in-amanyadav/',
    github: 'https://github.com/gh-amanyadav/',
  },
}

const projects = [
  {
    name: 'Know Your Plant',
    description:
      'It is Crossplatform app which is used to detect plant species and show its remedial use.',
    stack: ['Flutter', 'TensorFlow Lite', 'Google Colab'],
    sourceCode: 'https://github.com/gh-amanyadav/Know-your-plant',
    livePreview: 'https://youtube.com/shorts/jnSDR2cNto4?feature=share',
  },
  {
    name: 'Portfolio Website',
    description:
      'It is my own portfolio website which you seeing right now.',
    stack: ['ReactJs', 'firebase', 'JavaScript'],
    sourceCode: 'https://github.com/gh-amanyadav/portfolio',
    livePreview: 'https://knowaboutaman.co/',
  },
  {
    name: 'Apni Yaari',
    description:
      'It is a chating app which is build on flutter and Connected with Firebase.',
    stack: ['Flutter', 'Dart', 'Firebase'],
    sourceCode: 'https://github.com/gh-amanyadav/Apni_Yaari',
    livePreview: 'https://youtu.be/E0Zqp2BYUCE',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Flutter',
  'Firebase',
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
