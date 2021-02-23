import { NextApiRequest, NextApiResponse } from 'next'

const data = {
    nameRu: 'Сергей',
    nameEn: 'Sergey',
    surnameRu: 'Козлов',
    surnameEn: 'Kozlov',
    titleRu: 'React / ReactNative (Android) / NextJS / Web-разработчик',
    titleEn: 'React / ReactNative (Android) / NextJS / Web-developer',
    descRu: 'Привет! Меня зовут Сергей Козлов, я родом из города Бутурлиновки, Воронежской области. Еще со школы занимаюсь веб-программированием). К этому увлечению меня подтолкнул мой друг Руслан Урядинский, который сам неравнодушенс детсва к технике. Мой первый сайт был размещен на NAROD.RU, который я написал благодаря RAR-архиву, который мне дал Руслан. В этом RAR-архиве веб-статьи были загружены с сайта postroika.ru, что меня очень заинтересовало. В настоящее время я пишу интерфейс и бэкэнд на JavaScript. Вы также можете ознакомиться с моими приложениями для Android, ссылка есть на моем сайте. ',
    descEn: 'Hi, my name is Sergey Kozlov, I am from the city of Buturlinovka, Voronezh region of Russia.Welcome to my business card site! You will not find much information about me here, but I have emphasized all the main things. Briefly I want to note that I prefer JavaScript from programming languages (so far without Types, but I strive for Types ╮ (￣_￣) ╭).',
    aboutRu: 'Обо мне',
    aboutEn: 'About',
    contactRu: 'Контакты',
    contactEn: 'Contact',
    resumeRu: 'Резюме',
    resumeEn: 'Resume',
    portfolioRu: 'Портфолио',
    portfolioEn: 'Portfolio',
    blogRu: 'Блог',
    blogEn: 'Blog',
    sexRu: 'Мужчина',
    sexEn: 'Male',
    RuRu: 'Отлично владею русским',
    EnRu: 'Mastery',
    EnEn: 'Intermediate',
    RuEn: 'Средний уровень английского',
    yoRu: '09.04.1995 (25 лет)',
    yoEn: '09.04.1995 (25 years old)',
    geoRu: 'Бутурлиновка, Воронежская область, Россия',
    geoEn: 'Buturlinovka, Voronezh region, Russian Federation',
    skilsRu: 'Web-programming / HTML / CSS (SCSS) / JavaScript / ReactJs / Redux / Git / SSR / SPA',
    skilsEn: 'Web-programming / HTML / CSS (SCSS) / JavaScript / ReactJs / Redux / Git / SSR / SPA',
    apkRu: 'Справочник АПК Воронежской области',
    apkEn: 'Directory of agricultural enterprises of the voronezh region',
    blogSoryRu: 'УПС....Я ещё не придумал себе блог...)',
    blogSoryEn: 'OOOPS...And I haven’t come up with a blog yet ...)',
}

export default function language(req, res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    if (req.body.message == 'ru') {
        res.end(JSON.stringify({
            name: data.nameRu,
            surname: data.surnameRu,
            title: data.titleRu,
            desc: data.descRu,
            about: data.aboutRu,
            contact: data.contactRu,
            resume: data.resumeRu,
            portfolio: data.portfolioRu,
            blog: data.blogRu,
            sex: data.sexRu,
            langRu: data.RuRu,
            langEn: data.EnRu,
            yo: data.yoRu,
            geo: data.geoRu,
            skils: data.skilsRu,
            apk: data.apkRu,
            blogSory: data.blogSoryRu
        }))
    } else {
        res.end(JSON.stringify({
            name: data.nameEn,
            surname: data.surnameEn,
            title: data.titleEn,
            desc: data.descEn,
            about: data.aboutEn,
            contact: data.contactEn,
            resume: data.resumeEn,
            portfolio: data.portfolioEn,
            blog: data.blogEn,
            sex: data.sexEn,
            langRu: data.EnRu,
            langEn: data.EnEn,
            yo: data.yoEn,
            geo: data.geoEn,
            skils: data.skilsEn,
            apk: data.apkEn,
            blogSory: data.blogSoryEn
        }))
    }



}
