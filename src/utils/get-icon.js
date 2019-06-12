// @flow
import { ICONS } from '../constants';

const getIcon = (name: string) => {
  let icon;

  switch (name) {
    case 'twitter':
      icon = ICONS.TWITTER;
      break;
    case 'github':
      icon = ICONS.GITHUB;
      break;
<<<<<<< HEAD
    // case 'vkontakte':
    //   icon = ICONS.VKONTAKTE;
    //   break;
    // case 'telegram':
    //   icon = ICONS.TELEGRAM;
    //   break;
    // case 'email':
    //   icon = ICONS.EMAIL;
    //   break;
    // case 'rss':
    //   icon = ICONS.RSS;
    //   break;
=======
    case 'vkontakte':
      icon = ICONS.VKONTAKTE;
      break;
    case 'telegram':
      icon = ICONS.TELEGRAM;
      break;
    case 'email':
      icon = ICONS.EMAIL;
      break;
    case 'rss':
      icon = ICONS.RSS;
      break;
>>>>>>> 9d14ba355c15a3887b654ad96b24b4b58eb2171a
    default:
      icon = {};
      break;
  }

  return icon;
};

export default getIcon;
