const nouns = ['man','woman','child','brother','sister','boy','girl','father','mother','dog','cat'];
const adjectives = ['big','small','short','tall','handsome','homely','angry','happy','clumsy','adept'];
const verbs = ['arose','beat','began','chose','drove','fought','grew','hid','rode','sang','threw','woke'];
const adverbs = ['slowly','quickly','usually','rarely','lazily','generally'];

let noun = nouns[Math.floor(Math.random() * nouns.length)];
let adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
let verb = verbs[Math.floor(Math.random() * verbs.length)];
let adverb = adverbs[Math.floor(Math.random() * adverbs.length)];

console.log(`The ${adjective} ${noun} ${verb} ${adverb}.`);