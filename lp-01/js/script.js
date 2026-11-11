const courses = [
  {
    title: 'フロントエンドマスターコース',
    category: 'FRONTEND',
    number: '01',
    description: 'HTML・CSS・JavaScriptを基礎から習得。使いやすく美しいWebサイトを、自分の手で形にします。',
  },
  {
    title: 'AIパートナー・Vibeコーディング講座',
    category: 'AI / VIBE',
    number: '02',
    description: 'AIとの対話からアイデアを動くプロダクトへ。開発を加速する新しいワークフローを身につけます。',
  },
  {
    title: 'フルスタックWeb開発実践ワークショップ',
    category: 'FULL STACK',
    number: '03',
    description: 'フロントエンドからバックエンドまで。実際に動くWebアプリを企画・設計・公開します。',
  },
];

const faqs = [
  {
    question: '完全なプログラミング未経験でも受講できますか？',
    answer: 'はい。基礎的なパソコン操作からAIツールの活用法まで、段階的に学べるステップアップ形式になっています。',
  },
  {
    question: '受講に必要な環境やPCスペックはありますか？',
    answer: 'VS Code等のテキストエディタと一般的なWebブラウザが動作する環境があれば問題ありません。',
  },
  {
    question: '質問やサポートの体制はどうなっていますか？',
    answer: '専用チャットツールで24時間いつでも質問を受け付けており、メンターが順次回答・フォローします。',
  },
];

const courseList = document.querySelector('#course-list');

courses.forEach((course) => {
  const article = document.createElement('article');
  article.className = 'course-card';

  const meta = document.createElement('div');
  meta.className = 'course-meta';
  const number = document.createElement('span');
  number.textContent = `PROGRAM ${course.number}`;
  const category = document.createElement('span');
  category.textContent = course.category;
  meta.append(number, category);

  const title = document.createElement('h3');
  title.textContent = course.title;
  const description = document.createElement('p');
  description.textContent = course.description;
  const link = document.createElement('a');
  link.className = 'course-link';
  link.href = '#contact';
  link.append(document.createTextNode('コースについて相談する'));
  const arrow = document.createElement('span');
  arrow.setAttribute('aria-hidden', 'true');
  arrow.textContent = '→';
  link.append(arrow);

  article.append(meta, title, description, link);
  courseList.append(article);
});

const faqList = document.querySelector('#faq-list');

faqs.forEach((faq, index) => {
  const item = document.createElement('section');
  item.className = 'faq-item';

  const button = document.createElement('button');
  button.className = 'faq-question';
  button.type = 'button';
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-controls', `faq-answer-${index + 1}`);

  const marker = document.createElement('span');
  marker.className = 'faq-q-mark';
  marker.setAttribute('aria-hidden', 'true');
  marker.textContent = 'Q';
  const question = document.createElement('span');
  question.className = 'faq-question-text';
  question.textContent = faq.question;
  const toggle = document.createElement('span');
  toggle.className = 'faq-toggle';
  toggle.setAttribute('aria-hidden', 'true');
  toggle.textContent = '+';
  button.append(marker, question, toggle);

  const answer = document.createElement('div');
  answer.className = 'faq-answer';
  answer.id = `faq-answer-${index + 1}`;
  answer.hidden = true;
  const answerInner = document.createElement('div');
  answerInner.className = 'faq-answer-inner';
  const answerText = document.createElement('p');
  answerText.textContent = faq.answer;
  answerInner.append(answerText);
  answer.append(answerInner);

  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isExpanded));
    if (isExpanded) {
      answer.classList.remove('is-open');
      window.setTimeout(() => {
        if (button.getAttribute('aria-expanded') === 'false') answer.hidden = true;
      }, 220);
    } else {
      answer.hidden = false;
      window.requestAnimationFrame(() => answer.classList.add('is-open'));
    }
  });

  item.append(button, answer);
  faqList.append(item);
});