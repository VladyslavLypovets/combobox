export const items: Item[] =  [
    { title: 'Морква', tags: ['овочі', 'помаранчевий'], id: 1, selected: false },

    { title: 'Картопля', tags: ['овочі', 'коричневий'], id: 2, selected: false },

    { title: 'Огірок', tags: ['овочі', 'зелений'], id: 4, selected: false },

    { title: 'Помідор', tags: ['овочі', 'червоний'], id: 5, selected: false },

    { title: 'Кабачок', tags: ['овочі', 'зелений'], id: 6, selected: false },

    { title: 'Цибуля', tags: ['овочі', 'білий'], id: 7, selected: false },

    { title: 'Перець', tags: ['овочі', 'червоний'], id: 8, selected: false },

    { title: 'Баклажан', tags: ['овочі', 'фіолетовий'], id: 9, selected: false },

    { title: 'Буряк', tags: ['овочі', 'червоний'], id: 10, selected: false },

    { title: 'Капуста', tags: ['овочі', 'зелений'], id: 11, selected: false },

    { title: 'Яблуко', tags: ['фрукти', 'червоний'], id: 12, selected: false },

    { title: 'Банан', tags: ['фрукти', 'жовтий'], id: 13, selected: false },

    { title: 'Апельсин', tags: ['фрукти', 'оранжевий'], id: 14, selected: false },

    { title: 'Груша', tags: ['фрукти', 'зелений'], id: 15, selected: false },

    { title: 'Виноград', tags: ['фрукти', 'фіолетовий'], id: 16, selected: false },

    { title: 'Лимон', tags: ['фрукти', 'жовтий'], id: 17, selected: false },

    { title: 'Ківі', tags: ['фрукти', 'коричневий'], id: 18, selected: false },

    { title: 'Ананас', tags: ['фрукти', 'жовтий'], id: 19, selected: false },

    { title: 'Полуниця', tags: ['фрукти', 'червоний'], id: 20, selected: false },

    { title: 'Манго', tags: ['фрукти', 'зелений'], id: 21, selected: false },

    { title: 'Шоколад', tags: ['солодощі', 'коричневий'], id: 22, selected: false },

    { title: 'Зефір', tags: ['солодощі', 'білий'], id: 23, selected: false },

    { title: 'Торт', tags: ['солодощі', 'білий'], id: 24, selected: false },

    { title: 'Льодяник', tags: ['солодощі', 'червоний'], id: 25, selected: false },

    { title: 'Печиво', tags: ['солодощі', 'золотистий'], id: 26, selected: false },

    { title: 'Маршмеллоу', tags: ['солодощі', 'рожевий'], id: 27, selected: false },

    { title: 'Вафлі', tags: ['солодощі', 'бежевий'], id: 28, selected: false },

    { title: 'Карамель', tags: ['солодощі', 'бурштиновий'], id: 29, selected: false },

    { title: 'Пастила', tags: ['солодощі', 'білий'], id: 30, selected: false },

    { title: 'Пряник', tags: ['солодощі', 'коричневий'], id: 31, selected: false }

]

export type Item = {
    title: string;
    tags: Array<string>;
    id: number;
    selected: boolean;
}