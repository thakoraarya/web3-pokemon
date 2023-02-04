// backgrounds
import saiman from './background/forest.jpg';
import astral from './background/inForest.jpg';
// import eoaalien from './background/eoaalien.jpg';
// import panight from './background/panight.jpg';
import heroImg from './background/hero-img.png';

// cards2
import mewtwo from './mewtwo.png';
import azelf from './azelf.png';
import cobolion from './cobolion.png';
import cresselia from './cresselia.png';
import diagla from './diagla.png';
import flareon from './flareon.png';
import gardevoir from './Gardevoir.png';
import giratina from './giratina.png';
import groudon from './groudon.png';
import furiosa from './gyarados.png';
import geomancer from './ho-oh.png';
import goreHorn from './kyurem.png';
import latias from './latias.png';
import latios from './latios.png';
import lugia from './lugia.png';
import zekrom from './zekrom.png';
import moltres from './moltres.png';
import palkia from './palkia.png';
import pikachu from './pikachu.png';
import raiku from './raiku.png';
import rayquaza from './rayquaza.png';
import regigigas from './regigigas.png';
import regirock from './regirock.png';
import thudurus from './tf-thudurus.png';
import tornadus from './tornadus.png';
import umbreon from './umbreon.png';
import uxie from './uxie.png';
import virizion from './virizion.png';
import xerneas from './xerneas.png';
import xho from './yeltal.png';

// logo
import logo from './logo.svg';

// icon
import attack from './attack.png';
import defense from './defense.png';
import alertIcon from './alertIcon.svg';
import AlertIcon from './AlertIcon.jsx';

// players
import player01 from './player01.png';
import player02 from './player02.png';

// sounds
import attackSound from './sounds/attack.wav';
import defenseSound from './sounds/defense.mp3';
import explosion from './sounds/explosion.mp3';

export const allCards = [
  mewtwo,
  azelf,
  cobolion,
  cresselia,
  diagla,
  flareon,
  gardevoir,
  giratina,
  groudon,
  furiosa,
  geomancer,
  goreHorn,
  latias,
  latios,
  lugia,
  zekrom,
  moltres,
  palkia,
  pikachu,
  raiku,
  rayquaza,
  regigigas,
  regirock,
  thudurus,
  tornadus,
  umbreon,
  uxie,
  virizion,
  xerneas,
  xho,
];

export {
  saiman,
  astral,
  // eoaalien,
  // panight,
  heroImg,

  mewtwo,
  azelf,
  cobolion,
  cresselia,
  diagla,
  flareon,
  gardevoir,
  giratina,
  groudon,
  furiosa,
  geomancer,
  goreHorn,
  latias,
  latios,
  lugia,
  zekrom,
  moltres,
  palkia,
  pikachu,
  raiku,
  rayquaza,
  regigigas,
  regirock,
  thudurus,
  tornadus,
  umbreon,
  uxie,
  virizion,
  xerneas,
  xho,

  logo,

  attack,
  defense,
  alertIcon,
  AlertIcon,

  player01,
  player02,

  attackSound,
  defenseSound,
  explosion,
};

export const battlegrounds = [
  { id: 'bg-saiman', image: saiman, name: 'Saiman' },
  { id: 'bg-astral', image: astral, name: 'Astral' }
  // { id: 'bg-eoaalien', image: eoaalien, name: 'Eoaalien' },
  // { id: 'bg-panight', image: panight, name: 'Panight' },
];

export const gameRules = [
  'Card with the same defense and attack point will cancel each other out.',
  'Attack points from the attacking card will deduct the opposing player’s health points.',
  'If P1 does not defend, their health wil be deducted by P2’s attack.',
  'If P1 defends, P2’s attack is equal to P2’s attack - P1’s defense.',
  'If a player defends, they refill 3 Mana',
  'If a player attacks, they spend 3 Mana',
];