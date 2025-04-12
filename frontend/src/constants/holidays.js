const holidays = [
    {
        "label": "New Year's Day",
        "date": "2025-01-01"
    },
    {
        "label": "Last day of Hanukkah",
        "date": "2025-01-02"
    },
    {
        "label": "Guru Govind Singh Jayanti",
        "date": "2025-01-06"
    },
    {
        "label": "Lohri",
        "date": "2025-01-13"
    },
    {
        "label": "Pongal",
        "date": "2025-01-14"
    },
    {
        "label": "Makar Sankranti",
        "date": "2025-01-14"
    },
    {
        "label": "Hazarat Ali's Birthday",
        "date": "2025-01-14"
    },
    {
        "label": "Republic Day",
        "date": "2025-01-26"
    },
    {
        "label": "Lunar New Year",
        "date": "2025-01-29"
    },
    {
        "label": "Vasant Panchami",
        "date": "2025-02-02"
    },
    {
        "label": "Guru Ravidas Jayanti",
        "date": "2025-02-12"
    },
    {
        "label": "Valentine's Day",
        "date": "2025-02-14"
    },
    {
        "label": "Shivaji Jayanti",
        "date": "2025-02-19"
    },
    {
        "label": "Maharishi Dayanand Saraswati Jayanti",
        "date": "2025-02-23"
    },
    {
        "label": "Maha Shivaratri/Shivaratri",
        "date": "2025-02-26"
    },
    {
        "label": "Ramadan Start",
        "date": "2025-03-02"
    },
    {
        "label": "Holika Dahana",
        "date": "2025-03-13"
    },
    {
        "label": "Holi",
        "date": "2025-03-14"
    },
    {
        "label": "Dolyatra",
        "date": "2025-03-14"
    },
    {
        "label": "March Equinox",
        "date": "2025-03-20T14:31:21+05:30"
    },
    {
        "label": "Jamat Ul-Vida",
        "date": "2025-03-28"
    },
    {
        "label": "Chaitra Sukhladi",
        "date": "2025-03-30"
    },
    {
        "label": "Ugadi",
        "date": "2025-03-30"
    },
    {
        "label": "Gudi Padwa",
        "date": "2025-03-30"
    },
    {
        "label": "Ramzan Id",
        "date": "2025-03-31"
    },
    {
        "label": "Rama Navami",
        "date": "2025-04-06"
    },
    {
        "label": "Mahavir Jayanti",
        "date": "2025-04-10"
    },
    {
        "label": "First day of Passover",
        "date": "2025-04-13"
    },
    {
        "label": "Vaisakhi",
        "date": "2025-04-13"
    },
    {
        "label": "Mesadi",
        "date": "2025-04-14"
    },
    {
        "label": "Ambedkar Jayanti",
        "date": "2025-04-14"
    },
    {
        "label": "Bahag Bihu/Vaisakhadi",
        "date": "2025-04-15"
    },
    {
        "label": "Maundy Thursday",
        "date": "2025-04-17"
    },
    {
        "label": "Good Friday",
        "date": "2025-04-18"
    },
    {
        "label": "Easter Day",
        "date": "2025-04-20"
    },
    {
        "label": "International Worker's Day",
        "date": "2025-05-01"
    },
    {
        "label": "Birthday of Rabindranath",
        "date": "2025-05-09"
    },
    {
        "label": "Mothers' Day",
        "date": "2025-05-11"
    },
    {
        "label": "Buddha Purnima/Vesak",
        "date": "2025-05-12"
    },
    {
        "label": "Bakrid",
        "date": "2025-06-07"
    },
    {
        "label": "Fathers' Day",
        "date": "2025-06-15"
    },
    {
        "label": "June Solstice",
        "date": "2025-06-21T08:12:15+05:30"
    },
    {
        "label": "Rath Yatra",
        "date": "2025-06-27"
    },
    {
        "label": "Muharram/Ashura",
        "date": "2025-07-06"
    },
    {
        "label": "Guru Purnima",
        "date": "2025-07-10"
    },
    {
        "label": "Friendship Day",
        "date": "2025-08-03"
    },
    {
        "label": "Raksha Bandhan (Rakhi)",
        "date": "2025-08-09"
    },
    {
        "label": "Independence Day",
        "date": "2025-08-15"
    },
    {
        "label": "Janmashtami (Smarta)",
        "date": "2025-08-15"
    },
    {
        "label": "Parsi New Year",
        "date": "2025-08-15"
    },
    {
        "label": "Janmashtami",
        "date": "2025-08-16"
    },
    {
        "label": "Ganesh Chaturthi/Vinayaka Chaturthi",
        "date": "2025-08-27"
    },
    {
        "label": "Milad un-Nabi/Id-e-Milad",
        "date": "2025-09-05"
    },
    {
        "label": "Onam",
        "date": "2025-09-05"
    },
    {
        "label": "First Day of Sharad Navratri",
        "date": "2025-09-22"
    },
    {
        "label": "September Equinox",
        "date": "2025-09-22T23:49:22+05:30"
    },
    {
        "label": "First Day of Durga Puja Festivities",
        "date": "2025-09-28"
    },
    {
        "label": "Maha Saptami",
        "date": "2025-09-29"
    },
    {
        "label": "Maha Ashtami",
        "date": "2025-09-30"
    },
    {
        "label": "Maha Navami",
        "date": "2025-10-01"
    },
    {
        "label": "Mahatma Gandhi Jayanti",
        "date": "2025-10-02"
    },
    {
        "label": "Dussehra",
        "date": "2025-10-02"
    },
    {
        "label": "Maharishi Valmiki Jayanti",
        "date": "2025-10-07"
    },
    {
        "label": "Karaka Chaturthi (Karva Chauth)",
        "date": "2025-10-10"
    },
    {
        "label": "Naraka Chaturdasi",
        "date": "2025-10-20"
    },
    {
        "label": "Diwali/Deepavali",
        "date": "2025-10-20"
    },
    {
        "label": "Govardhan Puja",
        "date": "2025-10-22"
    },
    {
        "label": "Bhai Duj",
        "date": "2025-10-23"
    },
    {
        "label": "Chhat Puja (Pratihar Sashthi/Surya Sashthi)",
        "date": "2025-10-28"
    },
    {
        "label": "Halloween",
        "date": "2025-10-31"
    },
    {
        "label": "Guru Nanak Jayanti",
        "date": "2025-11-05"
    },
    {
        "label": "Guru Tegh Bahadur's Martyrdom Day",
        "date": "2025-11-24"
    },
    {
        "label": "First Day of Hanukkah",
        "date": "2025-12-15"
    },
    {
        "label": "December Solstice",
        "date": "2025-12-21T20:33:05+05:30"
    },
    {
        "label": "Last day of Hanukkah",
        "date": "2025-12-22"
    },
    {
        "label": "Christmas Eve",
        "date": "2025-12-24"
    },
    {
        "label": "Christmas",
        "date": "2025-12-25"
    },
    {
        "label": "New Year's Eve",
        "date": "2025-12-31"
    }
];

export {holidays}