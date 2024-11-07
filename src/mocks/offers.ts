import { v4 as uuid } from 'uuid';
import { CityEnum, Convenience, HousingType, Rating, RentalOffer } from '../models';
import { userList } from './users';

export const rentalOfferList: RentalOffer[] = [
  {
    id: uuid(),
    name: 'Уютная квартира в центре города',
    offerDescription:
      'Идеальное место для романтического отдыха или деловых поездок.',
    publicationDate: new Date('2024-09-30T15:45:12.000Z'),
    city: {
      title: CityEnum.Paris,
      coordinate: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
      },
      zoom: 10,
    },
    previewUrl: 'https://example.com/preview',
    housingImages: [
      'https://example.com/images/0',
      'https://example.com/images/1',
      'https://example.com/images/2',
      'https://example.com/images/3',
      'https://example.com/images/4',
      'https://example.com/images/5',
    ],
    isPremium: true,
    isFavorite: false,
    rating: Rating['4star'],
    housingType: HousingType.apartment,
    roomsCount: 2,
    guestsCount: 4,
    rentalCost: 80000,
    convenienceList: [Convenience.Washer, Convenience.Fridge],
    author: 'https://example.com/author',
    commentsCount: 1,
    creater: userList[0],
    fullOfferDescription:
      'Идеальное место для романтического отдыха или деловых поездок. Квартира находится в сердце города, обеспечивая удобный доступ к основным достопримечательностям и развлекательным заведениям. Оснащена всем необходимым для комфортного проживания, включая современную кухню и уютную спальню.',
  },
  {
    id: uuid(),
    name: 'Стильный домик в горах',
    offerDescription:
      'Отличное место для семейного отдыха и прогулок на свежем воздухе.',
    publicationDate: new Date('2024-09-30T10:22:45.000Z'),
    city: {
      title: CityEnum.Brussels,
      coordinate: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
      },
      zoom: 10,
    },
    previewUrl: 'https://example2.com/preview',
    housingImages: [
      'https://example2.com/images/0',
      'https://example2.com/images/1',
      'https://example2.com/images/2',
      'https://example2.com/images/3',
      'https://example2.com/images/4',
      'https://example2.com/images/5',
    ],
    isPremium: false,
    isFavorite: true,
    rating: Rating['3star'],
    housingType: HousingType.house,
    roomsCount: 3,
    guestsCount: 6,
    rentalCost: 60000,
    convenienceList: [
      Convenience['Laptop friendly workspace'],
      Convenience['Baby seat'],
    ],
    author: 'https://example2.com/author',
    commentsCount: 1,
    creater: userList[1],
    fullOfferDescription:
      'Описание: Отличное место для семейного отдыха и прогулок на свежем воздухе. Этот домик окружен живописной природой и предлагает просторные комнаты, идеально подходящие для семейных собраний. Также доступны возможности для активного отдыха: пешие прогулки, катание на велосипеде и многое другое.',
  },
  {
    id: uuid(),
    name: 'Просторный номер в хостеле',
    offerDescription: 'Подходит для бюджетных путешественников, есть все необходимое.',
    publicationDate: new Date('2024-09-30T12:15:00.000Z'),
    city: {
      title: CityEnum.Hamburg,
      coordinate: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
      },
      zoom: 10,
    },
    previewUrl: 'https://example3.com/preview',
    housingImages: [
      'https://example3.com/images/0',
      'https://example3.com/images/1',
      'https://example3.com/images/2',
      'https://example3.com/images/3',
      'https://example3.com/images/4',
      'https://example3.com/images/5',
    ],
    isPremium: true,
    isFavorite: false,
    rating: Rating['2star'],
    housingType: HousingType.room,
    roomsCount: 1,
    guestsCount: 8,
    rentalCost: 1500,
    convenienceList: [Convenience['Air conditioning']],
    author: 'https://example3.com/author',
    commentsCount: 1,
    creater: userList[2],
    fullOfferDescription: 'Подходит для бюджетных путешественников, есть все необходимое. Номер предлагает доступное размещение с комфортом. Идеально подходит для тех, кто хочет сэкономить, но не отказываться от удобств. Хостел расположен в центре города, что позволяет легко исследовать местные достопримечательности.'
  },
  {
    id: uuid(),
    name: 'Люкс в центре столицы',
    offerDescription:
      'Роскошный номер с видом на город, идеально подходит для романтических поездок.',
    publicationDate: new Date('2024-09-30T11:30:00.000Z'),
    city: {
      title: CityEnum.Dusseldorf,
      coordinate: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
      },
      zoom: 10
    },
    previewUrl: 'https://example4.com/preview',
    housingImages: [
      'https://example4.com/images/0',
      'https://example4.com/images/1',
      'https://example4.com/images/2',
    ],
    isPremium: true,
    isFavorite: false,
    rating: Rating['5star'],
    housingType: HousingType.apartment,
    roomsCount: 1,
    guestsCount: 2,
    rentalCost: 120000,
    convenienceList: [Convenience['Air conditioning'], Convenience.Towels],
    author: 'https://example4.com/author',
    commentsCount: 1,
    creater: userList[3],
    fullOfferDescription:
      'ИРоскошный номер с видом на город, идеально подходит для романтических поездок. Этот люкс предлагает великолепные условия для отдыха: стильный интерьер, высококачественное обслуживание и возможность насладиться прекрасными видами. Идеальное место для тех, кто ценит комфорт и стиль.',
  },
];
