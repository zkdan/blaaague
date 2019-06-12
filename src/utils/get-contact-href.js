// @flow
const getContactHref = (name: string, contact: string) => {
  let href;

  switch (name) {
    case 'twitter':
      href = `https://www.twitter.com/${contact}`;
      break;
    case 'github':
      href = `https://github.com/${contact}`;
      break;
<<<<<<< HEAD
    // case 'vkontakte':
    //   href = `https://vk.com/${contact}`;
    //   break;
    // case 'telegram':
    //   href = `telegram:${contact}`;
    //   break;
    // case 'email':
    //   href = `mailto:${contact}`;
    //   break;
=======
    case 'vkontakte':
      href = `https://vk.com/${contact}`;
      break;
    case 'telegram':
      href = `telegram:${contact}`;
      break;
    case 'email':
      href = `mailto:${contact}`;
      break;
>>>>>>> 9d14ba355c15a3887b654ad96b24b4b58eb2171a
    default:
      href = contact;
      break;
  }

  return href;
};

export default getContactHref;
