// ДЗ 
//  Згенерувати header за допомогою JS використовуючи дані з об'єкту.
//  При виконанні логотипу посилання на головну потрібно додати через атрибут, а текст через контент.
// Навігація має бути динамічною, тобто вона має підлаштовуватись під кількість елементів.
// Застилити header за допомогою js.

let header = {
  logo: {
    url: '/home',
    text: 'logo',
  },
  nav: {
    1: {
      url: '/home',
      text: 'Home',
    },
    2: {
      url: '/about',
      text: 'About',
    },
    3: {
      url: '/portfolio',
      text: 'Portfolio',
    },
    4: {
      url: '/contacts',
      text: 'Contacts',
    }
  },
  btn: ['LogIn', 'LogOut'],
};


const body = document.body;
const headerElement = document.createElement('header');
headerElement.style.cssText = 'margin: 0 auto; max-width: 1200px; display: flex; gap: 40px; align-items: center; border: 2px solid red;';

const logoElement = document.createElement('a');
logoElement.href = header.logo.url;
logoElement.textContent = header.logo.text;
logoElement.style.cssText = 'color: red; text-decoration: none; font-size: 40px; margin: 0 100px;text-transform: uppercase;';


headerElement.appendChild(logoElement);

const navElement = document.createElement('nav');

const navUl = document.createElement('ul');
navUl.style.cssText = 'display: flex; gap: 15px; margin-right: 200px; list-style-type: none;'
  
for (let key in header.nav) {
  let navKey = header.nav[key];
  const navLi = document.createElement('li');
  navUl.append(navLi);
  const navLink = document.createElement('a');
  navLi.append(navLink);
  navLink.href = navKey.url;
  navLink.textContent = navKey.text;
  headerElement.appendChild(navUl);
  navLink.style.cssText = 'text-decoration: none; font-size: 20px; color: brown;'
}


const btnContainer = document.createElement('div');
btnContainer.style.cssText = 'display:flex; gap: 25px;'




for (let key of header.btn){
  const btnElement = document.createElement('button');
  btnElement.textContent = key;
  btnElement.style.cssText = 'width: 100px; height: 30px; background-color: rgb(233, 85, 85); color: aliceblue;  border-radius: 10px; border: 2px solid red;cursor: pointer;'
  btnContainer.appendChild(btnElement);
}

headerElement.appendChild(btnContainer);
body.appendChild(headerElement);
