"use client";
import {FormEvent,useState} from "react";

const sports=[
["Самбо","с 4 лет","Сила, координация, дисциплина и безопасная база для ребёнка."],
["Боевое самбо","подростки и взрослые","Борцовская и ударная техника, выносливость и навыки самообороны."],
["Джиу-джитсу","дети и взрослые","Контроль в партере, гибкость мышления и уверенность без опоры только на силу."]
];
const times=[
["4–6 лет","Самбо","Пн, Ср, Пт","17:00"],["7–11 лет","Самбо","Пн, Ср, Пт","18:00"],
["12–16 лет","Боевое самбо","Вт, Чт, Сб","18:30"],["16+","Джиу-джитсу","Вт, Чт, Сб","20:00"]
];

export default function Home(){
 const [open,setOpen]=useState(false); const [sent,setSent]=useState(false);
 function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();setSent(true);e.currentTarget.reset()}
 return <main>
  <header><a className="logo" href="#top"><i>MT</i><span><b>MAKAROV</b><small>TEAM</small></span></a>
   <button className="hamb" onClick={()=>setOpen(!open)} aria-label="Открыть меню">☰</button>
   <nav className={open?"open":""} onClick={()=>setOpen(false)}><a href="#about">О клубе</a><a href="#sports">Направления</a><a href="#trainers">Тренеры</a><a href="#schedule">Расписание</a><a href="#contacts">Контакты</a></nav>
   <a className="navCta" href="#form">Пробная тренировка</a>
  </header>
  <section className="hero" id="top"><div className="heroCopy"><p className="tag">Клуб единоборств в Одинцово</p><h1>СИЛЬНЫЙ ХАРАКТЕР<br/><em>НАЧИНАЕТСЯ ЗДЕСЬ</em></h1><p>Самбо · Боевое самбо · Джиу-джитсу<br/>Для детей от 4 лет и взрослых</p><div className="actions"><a className="btn" href="#form">Записаться бесплатно →</a><a href="#sports">Выбрать направление ↓</a></div><div className="stats"><b>4+<small>принимаем детей</small></b><b>2<small>филиала</small></b><b>3<small>направления</small></b></div></div><div className="visual"><div className="sun"/><div className="person"><b>MT</b></div><small>ДИСЦИПЛИНА · УВАЖЕНИЕ · РЕЗУЛЬТАТ</small></div></section>
  <section className="section intro" id="about"><Label n="01" t="О клубе"/><div><h2>НЕ ПРОСТО СЕКЦИЯ.<br/><em>КОМАНДА И ХАРАКТЕР.</em></h2><p className="lead">В Makarov Team учат не только технике. На тренировках дети становятся увереннее, дисциплинированнее и сильнее — физически и внутренне.</p><div className="features"><Card n="01" h="Безопасный старт">Нагрузка по возрасту и уровню подготовки.</Card><Card n="02" h="Сильное окружение">Уважение, взаимопомощь и здоровая мотивация.</Card><Card n="03" h="Видимый прогресс">Понятная траектория роста от первых приёмов до соревнований.</Card></div></div></section>
  <section className="section dark" id="sports"><Label n="02" t="Направления"/><div className="split"><h2>НАЙДИ СВОЙ<br/><em>СТИЛЬ БОРЬБЫ</em></h2><p>Можно начать с нуля. Тренер оценит подготовку и подскажет подходящую группу.</p></div><div className="sportGrid">{sports.map((x,i)=><article key={x[0]}><span>0{i+1} / {x[1]}</span><i>◢</i><h3>{x[0]}</h3><p>{x[2]}</p><a href="#form">Записаться ↗</a></article>)}</div></section>
  <section className="section" id="trainers"><Label n="03" t="Тренерский состав"/><div className="split"><h2>ЛЮДИ, КОТОРЫМ<br/><em>МОЖНО ДОВЕРЯТЬ</em></h2><p>Фотографии и подтверждённые регалии будут добавлены после получения материалов клуба.</p></div><div className="trainerGrid"><Trainer letter="М" name="Макаров" role="Главный тренер"/><Trainer letter="Д" name="Данилочкин" role="Тренер клуба"/></div></section>
  <section className="section white" id="schedule"><Label n="04" t="Расписание"/><div className="split"><h2>ТРЕНИРОВКИ<br/><em>НА НЕДЕЛЕ</em></h2><p>Демонстрационное расписание. Перед публикацией необходимо подтвердить время.</p></div><div className="table"><div className="tr head"><span>Группа</span><span>Направление</span><span>Дни</span><span>Время</span></div>{times.map(r=><div className="tr" key={r[0]}>{r.map((c,i)=><span data-l={["Группа","Направление","Дни","Время"][i]} key={c}>{c}</span>)}</div>)}</div></section>
  <section className="section pricing"><Label n="05" t="Абонементы"/><div className="priceGrid"><div><h2>НАЧНИТЕ С<br/><em>ПРОБНОЙ ТРЕНИРОВКИ</em></h2><p>Познакомьтесь с тренером, залом и группой без покупки абонемента.</p></div><article className="redCard"><small>Первое занятие</small><b>БЕСПЛАТНО</b><p>Знакомство с клубом и подбор группы</p><a className="btn lightBtn" href="#form">Записаться →</a></article><article><small>Абонементы</small><b>ПО ЗАПРОСУ</b><p>Стоимость добавим после подтверждения клуба</p><a className="outline" href="#form">Узнать стоимость →</a></article></div></section>
  <section className="section"><Label n="06" t="Жизнь клуба"/><div className="split"><h2>ТРЕНИРУЕМСЯ.<br/><em>СОРЕВНУЕМСЯ. ПОБЕЖДАЕМ.</em></h2><p>Места для фото, видео и результатов учеников уже подготовлены.</p></div><div className="media"><div>▶<small>ВИДЕО С ТРЕНИРОВКИ</small></div><div>🏆<small>ДОСТИЖЕНИЯ КОМАНДЫ</small></div><div>+<small>ФОТО С ТУРНИРОВ</small></div></div></section>
  <section className="section contacts" id="contacts"><Label n="07" t="Филиалы"/><h2>ЗАЛ РЯДОМ<br/><em>С ДОМОМ</em></h2><div className="branches"><Branch name="Одинцово"/><Branch name="Переделкино Ближнее"/></div></section>
  <section className="section formSection" id="form"><div><Label n="08" t="Запись"/><h2>ПЕРВЫЙ ШАГ —<br/><em>ПРОСТО ПРИЙТИ</em></h2><p>Оставьте контакты. Представитель клуба подберёт удобную группу.</p><strong>0 ₽ <small>первая тренировка</small></strong></div><form onSubmit={submit}><label>Фамилия и имя ребёнка<input required placeholder="Иванов Максим"/></label><div><label>Возраст ребёнка<input required type="number" min="4" placeholder="8"/></label><label>Имя родителя<input required placeholder="Дмитрий"/></label></div><label>Телефон<input required type="tel" pattern="[+0-9 ()-]{10,20}" placeholder="+7 (___) ___-__-__"/></label><div><label>Филиал<select required defaultValue=""><option value="" disabled>Выберите</option><option>Одинцово</option><option>Переделкино Ближнее</option></select></label><label>Направление<select required defaultValue=""><option value="" disabled>Выберите</option>{sports.map(x=><option key={x[0]}>{x[0]}</option>)}</select></label></div><label className="check"><input required type="checkbox"/> Согласен на обработку персональных данных</label><button className="btn">Отправить заявку →</button>{sent&&<p className="success">Форма заполнена. Для реальной отправки подключим CRM или почту клуба.</p>}</form></section>
  <footer><a className="logo" href="#top"><i>MT</i><span><b>MAKAROV</b><small>TEAM</small></span></a><p>Самбо · Боевое самбо · Джиу-джитсу</p><small>© 2026 Makarov Team. Информация не является публичной офертой.</small></footer>
 </main>
}
function Label({n,t}:{n:string,t:string}){return <p className="label">{n} / {t}</p>}
function Card({n,h,children}:{n:string,h:string,children:React.ReactNode}){return <article><span>{n}</span><h3>{h}</h3><p>{children}</p></article>}
function Trainer({letter,name,role}:{letter:string,name:string,role:string}){return <article className="trainer"><div><b>{letter}</b><small>ФОТО ТРЕНЕРА</small></div><section><p>{role}</p><h3>{name}</h3><ul><li>Регалии — ожидаются</li><li>Стаж — уточняется</li></ul></section></article>}
function Branch({name}:{name:string}){return <article><span>ФИЛИАЛ</span><h3>{name}</h3><p>Точный адрес будет добавлен после подтверждения.</p><div className="map">Место для Яндекс Карты</div><a href="#form">Выбрать филиал →</a></article>}
