export class Greeting {
    static morningUs = 'Good morning,';
    static afternoonUs = 'Good afternoon,';
    static eveningUs = 'Good evening,';
    static nightUs = 'Good night,';

    static morningRu = 'Доброе утро,';
    static afternoonRu = 'Добрый день,';
    static eveningRu = 'Добрый вечер,';
    static nightRu = 'Доброй ночи,';

    static getGreeting(hour, language) {
        if (hour >= 6 && hour < 12) {
            if (language === 'ru-RU')
                return Greeting.morningRu;
            if (language === 'en-US')
                return Greeting.morningUs;
        } else if (hour >= 12 && hour < 18) {
            if (language === 'ru-RU')
                return Greeting.afternoonRu;
            if (language === 'en-US')
                return Greeting.afternoonUs;
        } else if (hour >= 18 && hour < 24) {
            if (language === 'ru-RU')
                return Greeting.eveningRu;
            if (language === 'en-US')
                return Greeting.eveningUs;
        } else if (hour >= 0 && hour < 6) {
            if (language === 'ru-RU')
                return Greeting.nightRu;
            if (language === 'en-US')
                return Greeting.nightUs;
        }
    }
}
