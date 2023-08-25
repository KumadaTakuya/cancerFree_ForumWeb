const resources = {
  en: {
    translation: {
      "output": "Hello, World!"
    }
  },
  tw: {
    translation: {
      "output": "你好，世界！"
    }
  }
}

i18next.init({
  lng: 'tw', // 初始語言設定為英文
  resources: resources
}, function(err, t) {
  // 翻譯完成後的回調函數
  updateContent();
});


function updateContent() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.innerHTML = i18next.t(key);
  });
}


function changeLanguage(lng) {
  i18next.changeLanguage(lng, function() {
    updateContent();
  });
}

function translateElement(element) {
  const key = element.getAttribute("data-i18n-key");
  const translation = translations[locale][key];
  element.innerText = translation;
}