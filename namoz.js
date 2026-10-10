/* =========================================================
   NAMOZ O'RGANISH ILOVASI
   namoz.js
   ========================================================= */

(function () {

"use strict";


/* =========================================================
   TARJIMALAR
   ========================================================= */

const translations = {

    latin: {

        /* ================= INDEX ================= */

        page_title: "Namoz oʼqishni oʼrganamiz!",
        nav_title: "Bosh sahifa",

        lang_latin: "Oʻzbekcha",
        lang_cyrillic: "Ўзбекча",

        theme_btn: "Rejim",

        menu_times: "Namoz vaqtlari",
        menu_qibla: "Qibla",
        menu_tahorat: "Tahorat olish",
        menu_men: "Erkaklar uchun namoz",
        menu_women: "Ayollar uchun namoz",
        menu_jamoat: "Jamoat namozlari",
        menu_duos: "Duolar",

        footer: "Copyright © 2026 Namoz oʼqishni oʼrganamiz!",


        /* ================= TAHORAT ================= */

        tahorat_title: "Tahorat olish tartibi",

        tah_step_1: "1. Niyat qilish",
        tah_text_1:
            "Tahorat olishga qalbdan niyat qilinadi. So‘ng «Bismillahir rohmanir rohiym» deyiladi.",
        tah_tip_1:
            "💡 Niyatning o‘rni qalbdir.",

        tah_step_2: "2. Qo‘llarni yuvish",
        tah_text_2:
            "Avval o‘ng qo‘l bilan suv olinadi va chap qo‘l bilakkacha yuviladi. Keyin chap qo‘l bilan suv olinib, o‘ng qo‘l bilakkacha yuviladi. Har bir qo‘l uch martadan yuviladi.",
        tah_tip_2:
            "💡 Barmoqlar orasiga va bilak atrofidagi joylarga ham suv yetkaziladi.",

        tah_step_3: "3. Og‘izni chayish",
        tah_text_3:
            "O‘ng qo‘l bilan suv olinadi va og‘izga solinadi. Og‘iz yaxshilab chayiladi va suv chiqarib tashlanadi. Uch marta bajariladi.",
        tah_tip_3:
            "💡 Har safar yangi suv olinadi.",

        tah_step_4: "4. Burunni yuvish",
        tah_text_4:
            "O‘ng qo‘l bilan suv olinadi. Suv burunga ehtiyotkorlik bilan tortiladi va chiqariladi. Uch marta bajariladi.",
        tah_tip_4:
            "💡 Suvni burunga juda kuch bilan tortmang.",

        tah_step_5: "5. Yuzni yuvish",
        tah_text_5:
            "O‘ng qo‘l bilan suv olinadi. Yuz peshonadan iyakkacha va ikki quloq oralig‘igacha to‘liq yuviladi.",
        tah_tip_5:
            "💡 Yuzda quruq joy qolib ketmasin.",

        tah_step_6: "6. O‘ng qo‘lni tirsakkacha yuvish",
        tah_text_6:
            "Suv olinadi va o‘ng qo‘l tirsakkacha yaxshilab yuviladi. So‘ng chap qo‘l tirsakkacha yuviladi.",
        tah_tip_6:
            "💡 Tirsakning o‘zi ham suv bilan yuviladi.",

        tah_step_7: "7. Boshga mas’h tortish",
        tah_text_7:
            "Qo‘l namlanadi va boshga mas’h tortiladi. Bu bosqichda bosh yuvilmaydi, nam qo‘l bilan mas’h qilinadi.",
        tah_tip_7:
            "💡 Mas’h yuvishdan farq qiladi.",

        tah_step_8: "8. Quloqlarga mas’h qilish",
        tah_text_8:
            "Nam qo‘l bilan quloqlarning ichki va tashqi qismlariga mas’h qilinadi.",
        tah_tip_8:
            "💡 Quloqlarga mas’h qilish tahorat sunnatlaridan hisoblanadi.",

        tah_step_9: "9. Oyoqlarni yuvish",
        tah_text_9:
            "Avval o‘ng oyoq, keyin chap oyoq to‘piqqacha yuviladi. Oyoq barmoqlari orasiga ham suv yetkaziladi.",
        tah_tip_9:
            "💡 To‘piq va barmoqlar orasida quruq joy qolmasin.",

        tah_step_10: "10. Tahoratdan keyin duo",
        tah_text_10:
            "Tahorat tugagach, shahodat kalimasini va tahoratdan keyingi duoni aytish mustahab.",
        tah_tip_10:
            "💡 Duoni bilmasangiz, tahoratni to‘g‘ri tugatishingiz mumkin.",

        tahorat_footer:
            "Eslatma: tahorat tafsilotlari mazhabga ko‘ra ayrim jihatlarda farq qilishi mumkin.",


        /* ================= ERKAKLAR ================= */

        men_title: "Erkaklar uchun namoz",

        azon: "AZON VA IQOMAT",
        bomdod: "BOMDOD NAMOZI",
        peshin: "PESHIN NAMOZI",
        asr: "ASR NAMOZI",
        shom: "SHOM NAMOZI",
        xufton: "XUFTON NAMOZI",
        vitr: "VITR NAMOZI",
        qazo: "QAZO NAMOZI",

        men_footer:
            "© 2026 Namoz O'rganish Ilovasi. Barcha huquqlar himoyalangan.",

        azon_title: "Azon va Iqomat",
        azon_matni: "1. Azon matni (To'liq):",
        azon_eslatma: "Eslatma:",
        azon_bomdod:
            "Bomdod azonida «Hayya 'alal-falah»dan so'ng 2 marta «As-solatu khayrum-minan-nawm» aytiladi.",
        azon_manosi: "Azon ma'nosi:",

        iqomat_matni: "2. Iqomat matni (To'liq):",
        iqomat_manosi: "Iqomat ma'nosi:",

        peshin_title: "Peshin namozi",
        jami_10: "Jami: 10 rakat",
        oqilish: "O'qilish tartibi:",

        asr_title: "Asr namozi",
        jami_4: "Jami: 4 rakat",

        shom_title: "Shom namozi",
        jami_5: "Jami: 5 rakat",

        xufton_title: "Xufton namozi",
        jami_6: "Jami: 6 rakat (Vitr bilan 9)",

        vitr_title: "Vitr namozi",
        jami_3: "Jami: 3 rakat (Vajib)",

        qazo_title: "Qazo namozi",


        /* ================= ERKAKLAR DATA-KEYSIZ MATNLARI ================= */

        azon_full:
`Allohu akbar, Allohu akbar.
Allohu akbar, Allohu akbar.
Ashhadu alla ilaha illalloh.
Ashhadu alla ilaha illalloh.
Ashhadu anna Muhammadar-rosululloh.
Ashhadu anna Muhammadar-rosululloh.
Hayya 'alas-solah, Hayya 'alas-solah.
Hayya 'alal-falah, Hayya 'alal-falah.
Allohu akbar, Allohu akbar.
La ilaha illalloh.`,

        azon_meaning:
            "Alloh buyukdir! Allohdan o'zga iloh yo'qligiga guvohlik beraman. Muhammad Allohning elchisi ekanligiga guvohlik beraman. Namozga keling! Najotga keling! Alloh buyukdir! Allohdan o'zga iloh yo'qdir. (Bomdodda: Namoz uyqudan afzaldir).",

        iqomat_full:
`Allohu akbar, Allohu akbar.
Allohu akbar, Allohu akbar.
Ashhadu alla ilaha illalloh.
Ashhadu alla ilaha illalloh.
Ashhadu anna Muhammadar-rosululloh.
Ashhadu anna Muhammadar-rosululloh.
Hayya 'alas-solah, Hayya 'alas-solah.
Hayya 'alal-falah, Hayya 'alal-falah.
Qod qomatis-solah, Qod qomatis-solah.
Allohu akbar, Allohu akbar.
La ilaha illalloh.`,

        iqomat_meaning:
            "Iqomat matni azon bilan bir xil, faqat unda «Qod qomatis-solah» (Batahqiq namoz boshlandi) iborasi qo'shiladi hamda erkaklar farz namozidan oldin uni tezroq ohangda aytishadi.",

        peshin_1:
            "1. Avval 4 rakat sunnat o'qiladi.",

        peshin_2:
            "2. Keyin Iqomat aytilib 4 rakat farz o'qiladi.",

        peshin_3:
            "3. Oxirida 2 rakat sunnat o'qiladi.",

        iqomat_nima_title:
            "📌 Iqomat nima?",

        iqomat_nima:
            "Iqomat — erkaklar farz namozini boshlashdan oldin aytadigan chaqirig'idir. Sunnat namozlaridan oldin iqomat aytilmaydi, faqat Farzdan oldin aytiladi.",

        farz_3_4_title:
            "📌 Nega Farzning 3-4 rakatlarida Zam sura o'qilmaydi?",

        farz_3_4:
            "Farz namozlarining faqat dastlabki 2 rakatida Fotiha surasidan keyin Zam sura qo'shiladi. 3 va 4-rakatlarda esa faqat Fotiha surasi o'qiladi. Sunnat namozlarida esa barcha rakatlarda Zam sura o'qiladi.",

        asr_text:
            "Asr namozida sunnat yo'q, faqat 4 rakat farz o'qiladi.",

        asr_sequence_title:
            "Ketma-ketlik:",

        asr_sequence:
            "• Avval tezroq ohangda Iqomat aytiladi.\n• Niyat qilinib 4 rakat farz o'qiladi.\n• 1 va 2-rakatda Fotiha + Zam sura, 3 va 4-rakatda faqat Fotiha o'qiladi. Suralar va duolar ichda aytiladi.",

        shom_1:
            "1. Avval Iqomat aytilib 3 rakat farz o'qiladi.",

        shom_2:
            "2. Farz tugagach 2 rakat sunnat o'qiladi.",

        shom_qoida_title:
            "3 rakatli farz qoidasi:",

        shom_qoida:
            "• 1 va 2-rakatda suralar ovoz chiqarib o'qiladi.\n• 2-rakat sajdalaridan so'ng o'tirib (Qa'da) faqat Attahiyyat o me'yorida o'qiladi va salom bermasdan 3-rakatga turiladi.\n• 3-rakatda faqat Fotiha surasi o'qilib, sajdadan so'ng salom beriladi.",

        xufton_1:
            "1. Avval Iqomat aytilib 4 rakat farz o'qiladi (1-2 rakatlarda suralar ovoz chiqarib o'qiladi).",

        xufton_2:
            "2. So'ng 2 rakat sunnat o'qiladi.",

        xufton_3:
            "3. Oxirida 3 rakat Vitr vajib namozi o'qiladi.",

        vitr_qoida:
            "• 1 va 2-rakatlarda Fotiha va Zam sura o'qiladi. 2-rakatda o'tirib faqat Attahiyyat o'qiladi.\n• 3-rakatga turib Fotiha va Zam sura o'qiladi.\n• Sura tugagach ruku qilmay, turgan holatda «Allohu akbar» deb quloq qoqib qayta takbir aytiladi.\n• Qo'llar bog'lanib Qunut duosi o'qiladi va rukuga boriladi.",

        qazo_intro:
            "Insonga balog'at yoshiga yetganidan boshlab namoz o'qish farz bo'ladi.",

        qazo_warning_title:
            "⚠️ Qazo namozlarining muhim qoidasi:",

        qazo_warning:
            "Agar inson balog'atga yetganidan so'ng 1 kun, 1 oy yoki 3 yil o'tib namoz o'qishni boshlagan bo'lsa, o'sha o'tkazib yuborilgan 1 kunlik bo'lsin yoki 3 yillik bo'lsin — barcha qazo bo'lgan namozlarni o'qib berishi SHART hisoblanadi.",

        qazo_farz:
            "Qazo namozlarida faqat FARZLAR va Vitr namozining qazosi o'qiladi. Sunnat namozlarining qazosi o'qilmaydi.",

        qazo_niyat_title:
            "Niyat qilish:",

        qazo_niyat:
            "«Xolis Alloh uchun zimmamdagi eng birinchi qazo bo'lgan Bomdod (yoki Peshin/Asr/Shom/Xufton) farzini o'qishni niyat qildim».",


        /* ================= E BOMDOD ================= */

        eb_title: "Bomdod namozi to'liq erkaklar uchun",

        eb_step_1: "1. Niyat",
        eb_text_1:
            "Yuzni Qiblaga qaratib, ko'ngildan niyat qilinadi: «Xolis Alloh uchun Bomdod namozining ikki rakat sunnatini o'qishni niyat qildim».",

        eb_step_2: "2. Takbir",
        eb_text_2:
            "Iftitoh takbiri: «Allohu akbar» deb aytilib namozga kiriladi. Qo'llar kaftini qiblaga qaratib, bosh barmoqlarning uchi quloqlarning yumshoq joyiga tekkiziladi.",

        eb_step_3: "3. Qiyom",
        eb_text_3:
            "Qo'llar kindik ostida bog'lanadi (o'ng qo'l kafti chap qo'l bilagi ustiga qo'yiladi).",

        eb_sano_title: "Sano duosi",
        eb_sano:
            "Subhanakallohumma va bihamdika va tabarokasmuka va ta'ala jadduka va la ilaha g'oyruk.",

        eb_fotiha_title: "Fotiha surasi",
        eb_fotiha:
            "A'uzu billahi minash-shaytonir-rojiym. Bismillahir-rohmanir-rohiym. Alhamdu lillahi robbil-'alamiyn. Ar-rohmanir-rohiym. Maliki yavmiddiyn. Iyyaka na'budu va iyyaka nasta'iyn. Ihdinas-sirotol-mustaqiym. Sirotollaziyna an'amta 'alayhim g'oyril-mag'zubi 'alayhim valazzolliyn. (Omin)",

        eb_kavsar_title: "Zam sura 1: Kavsar surasi",
        eb_kavsar:
            "Inna a'toynakal-kavsar. Fa solli lirobbika vanhar. Inna shani'aka huval-abtar.",

        eb_ixlos_title: "Zam sura 2: Ixlos surasi",
        eb_ixlos:
            "Qul huvallohu ahad. Allohus-somad. Lam yalid va lam yulad. Va lam yakul-lahu kufuvan ahad.",

        eb_falaq_title: "Zam sura 3: Falaq surasi",
        eb_falaq:
            "Qul a'uzu birobbil-falaq. Min sharri ma khalaq. Va min sharri g'osiqin iza vaqob. Va min sharrin-naffasati fil-'uqad. Va min sharri hasidin iza hasad.",

        eb_step_4: "4. Ruku",
        eb_text_4:
            "«Allohu akbar» deb rukuga egilinadi. Tizgalar qo'llar bilan ushlanadi. Rukuda 3 marta aytiladi:",

        eb_ruku_duo:
            "Subhana robbiyal-'aziym (3 marta)",

        eb_step_5: "5. Qavma",
        eb_qavma_1:
            "Rukudan tik turilayotganda aytiladi:",

        eb_qavma_2:
            "Sami'allohu liman hamidah.",

        eb_qavma_3:
            "To'g'ri turib olgach aytiladi:",

        eb_qavma_4:
            "Robbana lakal-hamd.",

        eb_step_6: "6. Sajda",
        eb_text_6:
            "«Allohu akbar» deb sajdaga boriladi. Sajdada 3 marta aytiladi:",

        eb_sajda_duo:
            "Subhana robbiyal-a'la (3 marta)",

        eb_step_7: "7. Jalsa",
        eb_text_7:
            "«Allohu akbar» deb sajdadan bosh ko'tarib, biroz muddat o'tiriladi.",

        eb_step_8: "8. Sajda",
        eb_text_8:
            "«Allohu akbar» deb ikkinchi bor sajdaga boriladi va 3 marta aytiladi:",

        eb_sajda_duo_2:
            "Subhana robbiyal-a'la (3 marta)",

        eb_step_9: "9. 2-chi rakat. Qiyom",
        eb_text_9:
            "«Allohu akbar» deb ikkinchi rakatga turiladi va qo'llar bog'lanadi.",

        eb_fotiha_title_2: "Fotiha surasi",
        eb_fotiha_2:
            "Bismillahir-rohmanir-rohiym. Alhamdu lillahi robbil-'alamiyn. Ar-rohmanir-rohiym. Maliki yavmiddiyn. Iyyaka na'budu va iyyaka nasta'iyn. Ihdinas-sirotol-mustaqiym. Sirotollaziyna an'amta 'alayhim g'oyril-mag'zubi 'alayhim valazzolliyn. (Omin)",

        eb_nos_title: "Zam sura 1: An-Nos surasi",
        eb_nos:
            "Qul a'uzu birobbin-nas. Malikin-nas. Ilahin-nas. Min sharril-vasvasil-khannas. Allazi yuvasvisu fi sudurin-nas. Minal-jinnati van-nas.",

        eb_ixlos_title_2: "Zam sura 2: Ixlos surasi",
        eb_ixlos_2:
            "Qul huvallohu ahad. Allohus-somad. Lam yalid va lam yulad. Va lam yakul-lahu kufuvan ahad.",

        eb_kavsar_title_2: "Zam sura 3: Kavsar surasi",
        eb_kavsar_2:
            "Inna a'toynakal-kavsar. Fa solli lirobbika vanhar. Inna shani'aka huval-abtar.",

        eb_step_10: "10. Ruku",
        eb_text_10:
            "«Allohu akbar» deb rukuga egilinadi va 3 marta aytiladi:",

        eb_ruku_duo_2:
            "Subhana robbiyal-'aziym (3 marta)",

        eb_step_11: "11. Qavma",
        eb_text_11:
            "Rukudan tik turib aytiladi: «Sami'allohu liman hamidah. Robbana lakal-hamd».",

        eb_step_12: "12. Sajda",
        eb_text_12:
            "«Allohu akbar» deb sajdaga boriladi. 3 marta aytiladi: «Subhana robbiyal-a'la».",

        eb_step_13: "13. Jalsa",
        eb_text_13:
            "Sajdadan bosh ko'tarib biroz o'tiriladi.",

        eb_step_14: "14. Sajda",
        eb_text_14:
            "Ikkinchi sajda qilinadi va 3 marta aytiladi: «Subhana robbiyal-a'la».",

        eb_step_15: "15. Qa'da",
        eb_text_15:
            "O'tiriladi (Qa'da). Attahiyyat, Salovat hamda Robbana duolari o'qiladi.",

        eb_attahiyyat_title: "ATTAHIYYAT DUOSI",
        eb_attahiyyat:
            "Attahiyyatu lillahi vas-solavatu vat-toyyibat. Assalamu 'alayka ayyuhan-nabiyyu va rohmatullohi va barokatuh. Assalamu 'alayna va 'ala 'ibadillahis-solihiyn. Ashhadu alla ilaha illalloh va ashhadu anna Muhammadan 'abduhu va rosuluh.",

        eb_salovat_title: "SALOVAT",
        eb_salovat:
            "Allohumma solli 'ala Muhammadiv-va 'ala ali Muhammad. Kama sollayta 'ala Ibrohima va 'ala ali Ibrohim. Innakam hamidum-majid.",

        eb_robbana_title: "ROBBANA DUOSI",
        eb_robbana:
            "Robbana atina fid-dunya hasanatav-va fil-akhiroti hasanatav-va qina 'azaban-nar.",

        eb_step_16: "16. Salom",
        eb_text_16:
            "O'ng va chap tomonga salom berilib 2 rakat sunnat yakunlanadi:",

        eb_salom:
            "«Assalamu alaykum va rohmatulloh»",

        eb_step_17:
            "17. Bomdodning 2 rakat farzi hamda Yakun",

        eb_text_17:
            "Sunnat o'qib bo'lingach, turib erkaklar Iqomat aytishadi va Bomdod namozining 2 rakat farzini ham huddi sunnat kabi o'qishadi (faqat niyatda «farzini» deyiladi).",

        eb_zikr_title:
            "FARZ TUGAGACH O'QILADIGAN ZIKR",

        eb_zikr:
            "Allohumma antas-salam va minkas-salam, tabarokta ya zal-jalali val-ikrom.",

        eb_zikr_meaning:
            "Ma'nosi: Ey Allohim! Sen Tinchlik egasisan va tinchlik Sendandir. Ey ulug'lik va ikrom egasi bo'lgan Zot, Sen barakotlisan.",

        eb_final:
            "Shundan so'ng Oyatul-Kursiy hamda 33 marta Subhanalloh, 33 marta Alhamdulillah, 33 marta Allohu akbar zikrlari aytilib duo qilinadi.",
        "title": "Ayollar uchun bomdod namozi",
"page_title": "Bomdod namozi",
"intro": "Bomdod namozi ikki rakat sunnat va ikki rakat farzdan iborat. Avval ikki rakat sunnat, keyin ikki rakat farz o‘qiladi.",
"section_sunnat": "Bomdod namozining ikki rakat sunnati",
"section_farz": "Bomdod namozining ikki rakat farzi",

"niyat_title": "1. Niyat",
"niyat_text": "Qiblaga yuzlanib, bomdod namozining ikki rakat sunnatini o‘qishni niyat qilinadi. Niyat qalb bilan qilinadi. Uni til bilan aytish shart emas.",

"takbir_title": "2. Takbiri tahrima",
"takbir_text": "Qo‘llar ko‘tarilib, Allohu akbar deyiladi. Shu takbir bilan namoz boshlanadi. Keyin qo‘llar bog‘lanib, qiyom holatida turiladi.",

"qiyom_title": "3. Qiyom",
"qiyom_text": "Qiyom — namozda tik turish. Tik turgan holda avval Sano duosi o‘qiladi. So‘ng A’uzu va Bismillah aytilib, Fotiha surasi o‘qiladi. Fotiha tugagach, omin deyiladi. Keyin Qur’ondan boshqa bir sura yoki oyatlar o‘qiladi.",

"sano_title": "Sano duosi",
"sano_text": "Subhanakallohumma va bihamdika, va tabarokasmuka, va ta’ala jadduka, va la ilaha g‘oyruk.",

"fotiha_title": "Fotiha surasi",
"fotiha_text": "Fotiha surasi Qur’onning birinchi surasidir. U namozning har bir rakatida o‘qiladi. Fotiha surasidan keyin omin deyiladi.",

"zamsura_title": "Zam sura",
"zamsura_text": "Fotiha surasidan keyin Qur’ondan bir sura yoki kamida uchta qisqa oyat miqdorida oyatlar o‘qiladi. Masalan, Ixlos, Kavsar yoki Falaq suralaridan biri o‘qilishi mumkin. Ularning barchasini ketma-ket o‘qish shart emas.",

"ruku_title": "4. Ruku",
"ruku_text": "Qiroat tugagach, Allohu akbar deb rukuga egilinadi. Qo‘llar tizzalarga qo‘yiladi va ruku holatida xotirjam turiladi. Rukuda kamida uch marta Subhana robbiyal aziym deyiladi.",

"qavma_title": "5. Qavma",
"qavma_text": "Rukudan turib, gavda tiklanadi. Turayotganda Sami’allohu liman hamidah deyiladi. To‘liq tik turgach, Robbana lakal hamd deyiladi. Shoshilmasdan, gavdani rostlab turish kerak.",

"sajda_title": "6. Birinchi sajda",
"sajda_text": "Allohu akbar deb sajdaga boriladi. Sajdada peshona va burun, kaftlar, tizzalar hamda oyoq barmoqlari yerga qo‘yiladi. Sajdada kamida uch marta Subhana robbiyal a’la deyiladi.",

"jalsa_title": "7. Ikki sajda orasida o‘tirish",
"jalsa_text": "Allohu akbar deb sajdadan bosh ko‘tarilib, qisqa muddat o‘tiriladi. Xotirjam o‘tirgandan keyin yana Allohu akbar deb ikkinchi sajdaga boriladi.",

"second_sajda_title": "8. Ikkinchi sajda",
"second_sajda_text": "Ikkinchi sajda birinchi sajda kabi bajariladi. Sajdada kamida uch marta Subhana robbiyal a’la deyiladi. Shundan so‘ng Allohu akbar deb ikkinchi rakatga turiladi.",

"second_rakat_title": "9. Ikkinchi rakat",
"second_rakat_text": "Ikkinchi rakatda tik turib, Bismillah aytiladi, Fotiha surasi o‘qiladi va omin deyiladi. Keyin Qur’ondan boshqa bir sura yoki oyatlar o‘qiladi. So‘ng Allohu akbar deb ruku qilinadi va birinchi rakatdagi kabi qavma hamda ikki sajda bajariladi.",

"qaida_title": "10. Qa’da — o‘tirish",
"qaida_text": "Ikkinchi rakatdagi ikki sajdadan keyin o‘tirib, Attahiyyat duosi o‘qiladi. Keyin salovat va duo o‘qiladi. So‘ng salom berib namoz tugatiladi.",

"attahiyyat_title": "Attahiyyat duosi",
"salovat_title": "Salovat",
"dua_title": "Duo",
"salom_title": "Salom berish",
"salom_text": "Avval boshni o‘ng tomonga burib Assalomu alaykum va rohmatulloh deyiladi. Keyin chap tomonga burib, yana Assalomu alaykum va rohmatulloh deyiladi. Shu bilan namoz tugaydi.",
        "jamoat_namozlari": "Jamoat namozlari",
"juma_namozi": "JUMA NAMOZI",
"taroveh_namozi": "TAROVEH NAMOZI",
"ramazon_hayiti_namozi": "RAMAZON HAYITI NAMOZI",
"qurbon_hayiti_namozi": "QURBON HAYITI NAMOZI",
"juma_sarlavha": "Juma namozi",
"juma_tavsif": "Juma namozi juma kuni peshin vaqtida jamoat bilan o‘qiladi. Hanafiy mazhabida shartlariga javob beradigan erkak musulmonlarga farzdir. Juma namozining farzi imom bilan ikki rakat qilib o‘qiladi.",
"rakatlar_tartibi": "Rakatlari tartibi:",
"juma_sunnat_oldin": "Odatda xutbadan oldin 4 rakat sunnat o‘qiladi.",
"juma_xutba": "Imom xutba qiladi. Xutba vaqtida jim turib tinglanadi.",
"juma_farzi": "Imomga ergashib 2 rakat juma farzi o‘qiladi.",
"juma_sunnat_keyin": "Farzdan keyin odatda 4 rakat sunnat, so‘ng 2 rakat sunnat o‘qiladi.",
"niyat": "Niyat",
"juma_niyat": "Juma namozining ikki rakat farzini ushbu imomga iqtido qilib o‘qishni niyat qildim.",
"jamoatda_oqish_tartibi": "Jamoatda o‘qish tartibi",
"safga_turing": "Safga turing, imomga ergashishga niyat qiling.",
"imom_takbir": "Imom takbir aytganda, unga ergashib namozni boshlang.",
"imomdan_oldin": "Ruku va sajdalarda imomdan oldin harakat qilmang.",
"imom_salom": "Imom salom bergach, farz namozi tugaydi.",
"eslatma": "Eslatma:",
"juma_eslatma": "Xutba vaqtida gaplashmang. Sunnat rakatlari va ayrim tafsilotlarda mahalliy imom ko‘rsatmasiga amal qiling.",
"taroveh_sarlavha": "Taroveh namozi",
"taroveh_tavsif": "Taroveh Ramazon oyida xufton namozidan keyin o‘qiladi. Hanafiy mazhabida taroveh 20 rakatdir.",
"rakat_va_niyat": "Rakatlari va niyat",
"taroveh_jami": "Jami 20 rakat: o‘nta ikki rakatli namoz.",
"taroveh_niyat": "Taroveh namozidan ikki rakat o‘qishni niyat qildim va imomga iqtido qildim.",
"taroveh_vitr": "Tarovehdan keyin vitr namozi o‘qiladi.",
"ikki_rakat_tartibi": "Har ikki rakatning tartibi",
"sano_imom": "Sano duosini o‘qing; keyin imom qiroat qiladi.",
"ruku_sajda": "Imom bilan ruku va ikki sajda bajaring.",
"ikkinchi_rakat_turish": "Ikkinchi rakatga turing va imom qiroatini tinglang.",
"oxirgi_otirish": "Oxirgi o‘tirishda tashahhud, salovat va duo o‘qib, salom bering.",
"taroveh_eslatma": "Jamoatda imomga ergashing. Qiroat tartibi bo‘yicha masjidingiz imomining ko‘rsatmasiga amal qiling.",
"ramazon_hayiti_sarlavha": "Ramazon hayiti namozi",
"ramazon_tavsif": "Ramazon hayiti namozi Ramazon oyi tugagach, hayit kuni jamoat bilan o‘qiladi. Hanafiy mazhabida ikki rakat vojib hisoblanadi.",
"ramazon_niyat": "Ramazon hayiti namozining ikki rakat vojibini o‘qishni niyat qildim va imomga iqtido qildim.",
"birinchi_rakat": "Birinchi rakat",
"hayit_boshlash": "Imom takbir aytganda namozni boshlang, so‘ng sano duosini o‘qing.",
"hayit_takbir_1": "Sano duosidan keyin uchta qo‘shimcha takbir aytiladi. Har safar qo‘llar ko‘tariladi; dastlabki ikki takbirdan keyin qo‘llar tushiriladi.",
"hayit_takbir_2": "Uchinchi qo‘shimcha takbirdan keyin qo‘llar bog‘lanadi, imom qiroat qiladi.",
"ikkinchi_rakat": "Ikkinchi rakat",
"hayit_takbir_3": "Qiroatdan keyin uchta qo‘shimcha takbir aytiladi; har birida qo‘llar ko‘tarilib, tushiriladi.",
"hayit_ruku": "Keyingi takbir bilan ruku qiling, so‘ng ikki sajda bajaring.",
"hayit_salom": "Oxirgi o‘tirishda tashahhud, salovat va duo o‘qib, imom bilan salom bering.",
"hayit_xutba": "Hayit xutbasi namozdan keyin bo‘ladi. Imomga ergashing va xutbani tinglang.",
"hayitlar_eslatma": "Ramazon va Qurbon hayiti namozlarining hanafiy tartibi bir xil. Qo‘shimcha takbirlarda imomga ergashing.",
"umumiy_eslatma": "Bu sahifa o‘rganish uchun qo‘llanma. Ayrim tafsilotlarda masjid imomi ko‘rsatmasiga amal qiling."
    },


    /* =====================================================
       KIRILL
       ===================================================== */

    cyrillic: {

        page_title: "Намоз ўқишни ўрганамиз!",
        nav_title: "Бош саҳифа",

        lang_latin: "Oʻzbekcha",
        lang_cyrillic: "Ўзбекча",

        theme_btn: "Режим",

        menu_times: "Намоз вақтлари",
        menu_qibla: "Қибла",
        menu_tahorat: "Таҳорат олиш",
        menu_men: "Эркаклар учун намоз",
        menu_women: "Аёллар учун намоз",
        menu_jamoat: "Жамоат намозлари",
        menu_duos: "Дуолар",

        footer: "Copyright © 2026 Намоз ўқишни ўрганамиз!",

        tahorat_title: "Таҳорат олиш тартиби",

        tah_step_1: "1. Ният қилиш",
        tah_text_1:
            "Таҳорат олишга қалбдан ният қилинади. Сўнг «Бисмиллаҳир роҳманир роҳийм» дейилади.",
        tah_tip_1:
            "💡 Ниятнинг ўрни қалбдир.",

        tah_step_2: "2. Қўлларни ювиш",
        tah_text_2:
            "Аввал ўнг қўл билан сув олинади ва чап қўл билаккача ювилади. Кейин чап қўл билан сув олиниб, ўнг қўл билаккача ювилади. Ҳар бир қўл уч мартадан ювилади.",
        tah_tip_2:
            "💡 Бармоқлар орасига ва билак атрофидаги жойларга ҳам сув етказилади.",

        tah_step_3: "3. Оғизни чайиш",
        tah_text_3:
            "Ўнг қўл билан сув олинади ва оғизга солинади. Оғиз яхшилаб чайилади ва сув чиқариб ташланади. Уч марта бажарилади.",
        tah_tip_3:
            "💡 Ҳар сафар янги сув олинади.",

        tah_step_4: "4. Бурунни ювиш",
        tah_text_4:
            "Ўнг қўл билан сув олинади. Сув бурунга эҳтиёткорлик билан тортилади ва чиқарилади. Уч марта бажарилади.",
        tah_tip_4:
            "💡 Сувни бурунга жуда куч билан тортманг.",

        tah_step_5: "5. Юзни ювиш",
        tah_text_5:
            "Ўнг қўл билан сув олинади. Юз пешонадан ияккача ва икки қулоқ оралиғигача тўлиқ ювилади.",
        tah_tip_5:
            "💡 Юзда қуруқ жой қолиб кетмасин.",

        tah_step_6: "6. Ўнг қўлни тирсаккача ювиш",
        tah_text_6:
            "Сув олинади ва ўнг қўл тирсаккача яхшилаб ювилади. Сўнг чап қўл тирсаккача ювилади.",
        tah_tip_6:
            "💡 Тирсакнинг ўзи ҳам сув билан ювилади.",

        tah_step_7: "7. Бошга масҳ тортиш",
        tah_text_7:
            "Қўл намланади ва бошга масҳ тортилади. Бу босқичда бош ювилмайди, нам қўл билан масҳ қилинади.",
        tah_tip_7:
            "💡 Масҳ ювишдан фарқ қилади.",

        tah_step_8: "8. Қулоқларга масҳ қилиш",
        tah_text_8:
            "Нам қўл билан қулоқларнинг ички ва ташқи қисмларига масҳ қилинади.",
        tah_tip_8:
            "💡 Қулоқларга масҳ қилиш таҳорат суннатларидан ҳисобланади.",

        tah_step_9: "9. Оёқларни ювиш",
        tah_text_9:
            "Аввал ўнг оёқ, кейин чап оёқ тўпиққача ювилади. Оёқ бармоқлари орасига ҳам сув етказилади.",
        tah_tip_9:
            "💡 Тўпиқ ва бармоқлар орасида қуруқ жой қолмасин.",

        tah_step_10: "10. Таҳоратдан кейин дуо",
        tah_text_10:
            "Таҳорат тугагач, шаҳодат калимасини ва таҳоратдан кейинги дуони айтиш мустаҳаб.",
        tah_tip_10:
            "💡 Дуони билмасангиз, таҳоратни тўғри тугатишингиз мумкин.",

        tahorat_footer:
            "Эслатма: таҳорат тафсилотлари мазҳабга кўра айрим жиҳатларда фарқ қилиши мумкин.",


        men_title: "Эркаклар учун намоз",

        azon: "АЗОН ВА ИҚОМАТ",
        bomdod: "БОМДОД НАМОЗИ",
        peshin: "ПЕШИН НАМОЗИ",
        asr: "АСР НАМОЗИ",
        shom: "ШОМ НАМОЗИ",
        xufton: "ХУФТОН НАМОЗИ",
        vitr: "ВИТР НАМОЗИ",
        qazo: "ҚАЗО НАМОЗИ",

        men_footer:
            "© 2026 Намоз Ўрганиш Иловаси. Барча ҳуқуқлар ҳимояланган.",

        azon_title: "Азон ва Иқомат",
        azon_matni: "1. Азон матни (Тўлиқ):",
        azon_eslatma: "Эслатма:",
        azon_bomdod:
            "Бомдод азонида «Ҳайя 'алал-фалаҳ»дан сўнг 2 марта «Ас-солату хайрум-минан-наум» айтилади.",
        azon_manosi: "Азон маъноси:",
        

        iqomat_matni: "2. Иқомат матни (Тўлиқ):",
        iqomat_manosi: "Иқомат маъноси:",

        peshin_title: "Пешин намози",
        jami_10: "Жами: 10 ракат",
        oqilish: "Ўқилиш тартиби:",

        asr_title: "Аср намози",
        jami_4: "Жами: 4 ракат",

        shom_title: "Шом намози",
        jami_5: "Жами: 5 ракат",

        xufton_title: "Хуфтон намози",
        jami_6: "Жами: 6 ракат (Витр билан 9)",

        vitr_title: "Витр намози",
        jami_3: "Жами: 3 ракат (Вожиб)",

        qazo_title: "Қазо намози",


        /* E BOMDOD */

        eb_title: "Бомдод намози тўлиқ эркаклар учун",

        eb_step_1: "1. Ният",
        eb_text_1:
            "Юзни Қиблага қаратиб, кўнгилдан ният қилинади: «Холис Аллоҳ учун Бомдод намозининг икки ракат суннатини ўқишни ният қилдим».",

        eb_step_2: "2. Такбир",
        eb_text_2:
            "Ифтитоҳ такбири: «Аллоҳу акбар» деб айтилиб намозга кирилади. Қўллар кафтини қиблага қаратиб, бош бармоқларнинг учи қулоқларнинг юмшоқ жойига теккизилади.",

        eb_step_3: "3. Қиём",
        eb_text_3:
            "Қўллар киндик остида боғланади (ўнг қўл кафти чап қўл билаги устига қўйилади).",

        eb_sano_title: "Сано дуоси",
        eb_sano:
            "Субҳанакаллоҳумма ва биҳамдика ва табарокасмука ва таъала жаддука ва ла илаҳа ғойрук.",

        eb_fotiha_title: "Фотиҳа сураси",
        eb_fotiha:
            "Аъузу биллаҳи минаш-шайтонир-рожийм. Бисмиллаҳир-роҳманир-роҳийм. Алҳамду лиллаҳи роббил-'аламин. Ар-роҳманир-роҳийм. Малики явмиддин. Ийяка наъбуду ва ийяка настаъийн. Иҳдинас-сиротол-мустақийм. Сиротоллазийна анъамта алайҳим ғайрил-магзуби алайҳим валаззоллийн. (Омин)",

        eb_kavsar_title: "Зам сура 1: Кавсар сураси",
        eb_kavsar:
            "Инна аътойнакал-кавсар. Фа солли лироббика ванҳар. Инна шаниака ҳувал-абтар.",

        eb_ixlos_title: "Зам сура 2: Ихлос сураси",
        eb_ixlos:
            "Қул ҳуваллоҳу аҳад. Аллоҳус-сомад. Лам ялид ва лам юлад. Ва лам якул-лаҳу куфуван аҳад.",

        eb_falaq_title: "Зам сура 3: Фалақ сураси",
        eb_falaq:
            "Қул аъузу бироббил-фалақ. Мин шарри ма халақ. Ва мин шарри ғосиқин иза вақоб. Ва мин шаррин-наффасати фил-уқад. Ва мин шарри ҳасидин иза ҳасад.",

        eb_step_4: "4. Руку",
        eb_text_4:
            "«Аллоҳу акбар» деб рукуга эгилинади. Тиззалар қўллар билан ушланади. Рукуда 3 марта айтилади:",

        eb_ruku_duo:
            "Субҳана роббийал-'азийм (3 марта)",

        eb_step_5: "5. Қавма",
        eb_qavma_1:
            "Рукудан тик турилаётганда айтилади:",

        eb_qavma_2:
            "Самиъаллоҳу лиман ҳамидаҳ.",

        eb_qavma_3:
            "Тўғри туриб олгач айтилади:",

        eb_qavma_4:
            "Роббана лакал-ҳамд.",

        eb_step_6: "6. Сажда",
        eb_text_6:
            "«Аллоҳу акбар» деб саждага борилади. Саждада 3 марта айтилади:",

        eb_sajda_duo:
            "Субҳана роббийал-аъла (3 марта)",

        eb_step_7: "7. Жалса",
        eb_text_7:
            "«Аллоҳу акбар» деб саждадан бош кўтариб, бироз муддат ўтирилади.",

        eb_step_8: "8. Сажда",
        eb_text_8:
            "«Аллоҳу акбар» деб иккинчи бор саждага борилади ва 3 марта айтилади:",

        eb_sajda_duo_2:
            "Субҳана роббийал-аъла (3 марта)",

        eb_step_9: "9. 2-чи ракат. Қиём",
        eb_text_9:
            "«Аллоҳу акбар» деб иккинчи ракатга турилади ва қўллар боғланади.",

        eb_fotiha_title_2: "Фотиҳа сураси",
        eb_fotiha_2:
            "Бисмиллаҳир-роҳманир-роҳийм. Алҳамду лиллаҳи роббил-'аламин. Ар-роҳманир-роҳийм. Малики явмиддин. Ийяка наъбуду ва ийяка настаъийн. Иҳдинас-сиротол-мустақийм. Сиротоллазийна анъамта алайҳим ғайрил-магзуби алайҳим валаззоллийн. (Омин)",

        eb_nos_title: "Зам сура 1: Ан-Нос сураси",
        eb_nos:
            "Қул аъузу бироббин-нас. Маликин-нас. Илаҳин-нас. Мин шаррил-васвасил-ханнас. Аллазий ювасвису фи судурин-нас. Минал-жиннати ван-нас.",

        eb_ixlos_title_2: "Зам сура 2: Ихлос сураси",
        eb_ixlos_2:
            "Қул ҳуваллоҳу аҳад. Аллоҳус-сомад. Лам ялид ва лам юлад. Ва лам якул-лаҳу куфуван аҳад.",

        eb_kavsar_title_2: "Зам сура 3: Кавсар сураси",
        eb_kavsar_2:
            "Инна аътойнакал-кавсар. Фа солли лироббика ванҳар. Инна шаниака ҳувал-абтар.",

        eb_step_10: "10. Руку",
        eb_text_10:
            "«Аллоҳу акбар» деб рукуга эгилинади ва 3 марта айтилади:",

        eb_ruku_duo_2:
            "Субҳана роббийал-'азийм (3 марта)",

        eb_step_11: "11. Қавма",
        eb_text_11:
            "Рукудан тик туриб айтилади: «Самиъаллоҳу лиман ҳамидаҳ. Роббана лакал-ҳамд».",

        eb_step_12: "12. Сажда",
        eb_text_12:
            "«Аллоҳу акбар» деб саждага борилади. 3 марта айтилади: «Субҳана роббийал-аъла».",

        eb_step_13: "13. Жалса",
        eb_text_13:
            "Саждадан бош кўтариб бироз ўтирилади.",

        eb_step_14: "14. Сажда",
        eb_text_14:
            "Иккинчи сажда қилинади ва 3 марта айтилади: «Субҳана роббийал-аъла».",

        eb_step_15: "15. Қаъда",
        eb_text_15:
            "Ўтирилади (Қаъда). Аттаҳийёт, Саловат ҳамда Роббана дуолари ўқилади.",

        eb_attahiyyat_title: "АТТАҲИЙЁТ ДУОСИ",
        eb_attahiyyat:
            "Аттаҳийёту лиллаҳи вас-соловату ват-тоййибот. Ассаламу алайка айюҳан-набиййу ва роҳматуллоҳи ва барокатуҳ. Ассаламу алайна ва ала ибадиллаҳис-солиҳийн. Ашҳаду алла илаҳа иллаллоҳ ва ашҳаду анна Муҳаммадан абдуҳу ва росулуҳ.",

        eb_salovat_title: "САЛОВАТ",
        eb_salovat:
            "Аллоҳумма солли ала Муҳаммадив-ва ала али Муҳаммад. Кама соллайта ала Иброҳима ва ала али Иброҳим. Иннакам ҳамидум-мажид.",

        eb_robbana_title: "РОББАНА ДУОСИ",
        eb_robbana:
            "Роббана атина фид-дунё ҳасанатав-ва фил-ахироти ҳасанатав-ва қина азабан-нар.",

        eb_step_16: "16. Салом",
        eb_text_16:
            "Ўнг ва чап томонга салом берилиб 2 ракат суннат якунланади:",

        eb_salom:
            "«Ассаламу алайкум ва роҳматуллоҳ»",

        eb_step_17:
            "17. Бомдоднинг 2 ракат фарзи ҳамда Якун",

        eb_text_17:
            "Суннат ўқиб бўлинггач, туриб эркаклар Иқомат айтишади ва Бомдод намозининг 2 ракат фарзини ҳам худди суннат каби ўқишади (фақат ниятда «фарзини» дейилади).",

        eb_zikr_title:
            "ФАРЗ ТУГАГАЧ ЎҚИЛАДИГАН ЗИКР",

        eb_zikr:
            "Аллоҳумма антас-салам ва минкас-салам, табарокта я зал-жалали вал-икром.",

        eb_zikr_meaning:
            "Маъноси: Эй Аллоҳим! Сен Тинчлик эгасисан ва тинчлик Сендан. Эй улуғлик ва икром эгаси бўлган Зот, Сен баракотлисан.",

        eb_final:
            "Шундан сўнг Оятул-Курсий ҳамда 33 марта Субҳаналлоҳ, 33 марта Алҳамдулиллаҳ, 33 марта Аллоҳу акбар зикрлари айтилиб дуо қилинади.",
        "title": "Аёллар учун бомдод намози",
"page_title": "Бомдод намози",
"intro": "Бомдод намози икки ракат суннат ва икки ракат фарздан иборат. Аввал икки ракат суннат, кейин икки ракат фарз ўқилади.",
"section_sunnat": "Бомдод намозининг икки ракат суннати",
"section_farz": "Бомдод намозининг икки ракат фарзи",

"niyat_title": "1. Ният",
"niyat_text": "Қиблага юзланиб, бомдод намозининг икки ракат суннатини ўқишни ният қилинади. Ният қалб билан қилинади. Уни тил билан айтиш шарт эмас.",

"takbir_title": "2. Такбири таҳрима",
"takbir_text": "Қўллар кўтарилиб, Аллоҳу акбар дейилади. Шу такбир билан намоз бошланади. Кейин қўллар боғланиб, қиёm ҳолатида турилади.",

"qiyom_title": "3. Қиём",
"qiyom_text": "Қиём — намозда тик туриш. Тик турган ҳолда аввал Сано дуоси ўқилади. Сўнг Аъузу ва Бисмиллаҳ айтилиб, Фотиҳа сураси ўқилади. Фотиҳа тугагач, омин дейилади. Кейин Қуръондан бошқа бир сура ёки оятлар ўқилади.",

"sano_title": "Сано дуоси",
"sano_text": "Субҳанакаллоҳумма ва биҳамдика, ва табарокасмука, ва таъала жаддука, ва ла илаҳа ғойрук.",

"fotiha_title": "Фотиҳа сураси",
"fotiha_text": "Фотиҳа сураси Қуръоннинг биринчи сурасидир. У намознинг ҳар бир ракатида ўқилади. Фотиҳа сурасидан кейин омин дейилади.",

"zamsura_title": "Зам сура",
"zamsura_text": "Фотиҳа сурасидан кейин Қуръондан бир сура ёки камида учта қисқа оят миқдорида оятлар ўқилади. Масалан, Ихлос, Кавсар ёки Фалақ сураларидан бири ўқилиши мумкин. Уларнинг барчасини кетма-кет ўқиш шарт эмас.",

"ruku_title": "4. Руку",
"ruku_text": "Қироат тугагач, Аллоҳу акбар деб рукуга эгилинади. Қўллар тиззаларга қўйилади ва руку ҳолатида хотиржам турилади. Рукуда камида уч марта Субҳана роббиял азийм дейилади.",

"qavma_title": "5. Қавма",
"qavma_text": "Рукудан туриб, гавда тикланади. Тураётганда Самиъаллоҳу лиман ҳамидаҳ дейилади. Тўлиқ тик тургач, Роббана лакал ҳамд дейилади. Шошилмасдан, гавдани ростлаб туриш керак.",

"sajda_title": "6. Биринчи сажда",
"sajda_text": "Аллоҳу акбар деб саждага борилади. Саждада пешона ва бурун, кафтлар, тиззалар ҳамда оёқ бармоқлари ерга қўйилади. Саждада камида уч марта Субҳана роббиял аъла дейилади.",

"jalsa_title": "7. Икки сажда орасида ўтириш",
"jalsa_text": "Аллоҳу акбар деб саждадан бош кўтарилиб, қисқа муддат ўтирилади. Хотиржам ўтиргандан кейин яна Аллоҳу акбар деб иккинчи саждага борилади.",

"second_sajda_title": "8. Иккинчи сажда",
"second_sajda_text": "Иккинчи сажда биринчи сажда каби бажарилади. Саждада камида уч марта Субҳана роббиял аъла дейилади. Шундан сўнг Аллоҳу акбар деб иккинчи ракатга турилади.",

"second_rakat_title": "9. Иккинчи ракат",
"second_rakat_text": "Иккинчи ракатда тик туриб, Бисмиллаҳ айтилади, Фотиҳа сураси ўқилади ва омин дейилади. Кейин Қуръондан бошқа бир сура ёки оятлар ўқилади. Сўнг Аллоҳу акбар деб руку қилинади ва биринчи ракатдаги каби қавма ҳамда икки сажда бажарилади.",

"qaida_title": "10. Қаъда — ўтириш",
"qaida_text": "Иккинчи ракатдаги икки саждадан кейин ўтириб, Аттаҳийят дуоси ўқилади. Кейин салавот ва дуо ўқилади. Сўнг салом бериб намоз тугатилади.",

"attahiyyat_title": "Аттаҳийят дуоси",
"salovat_title": "Салавот",
"dua_title": "Дуо",
"salom_title": "Салом бериш",
"salom_text": "Аввал бошни ўнг томонга буриб, Ассалому алайкум ва раҳматуллоҳ дейилади. Кейин чап томонга буриб, яна Ассалому алайкум ва раҳматуллоҳ дейилади. Шу билан намоз тугайди.",
        "jamoat_namozlari": "Жамоат намозлари",
"juma_namozi": "ЖУМА НАМОЗИ",
"taroveh_namozi": "ТАРОВЕҲ НАМОЗИ",
"ramazon_hayiti_namozi": "РАМАЗОН ҲАЙИТИ НАМОЗИ",
"qurbon_hayiti_namozi": "ҚУРБОН ҲАЙИТИ НАМОЗИ",
"juma_sarlavha": "Жума намози",
"juma_tavsif": "Жума намози жума куни пешин вақтида жамоат билан ўқилади. Ҳанафий мазҳабида шартларига жавоб берадиган эркак мусулмонларга фарздир.",
"rakatlar_tartibi": "Ракатлари тартиби:",
"juma_sunnat_oldin": "Одатда хутбадан олдин 4 ракат суннат ўқилади.",
"juma_xutba": "Имом хутба қилади. Хутба вақтида жим туриб тингланади.",
"juma_farzi": "Имомга эргашиб 2 ракат жума фарзи ўқилади.",
"juma_sunnat_keyin": "Фарздан кейин одатда 4 ракат суннат, сўнг 2 ракат суннат ўқилади.",
"niyat": "Ният",
"juma_niyat": "Жума намозининг икки ракат фарзини ушбу имомга иқтидо қилиб ўқишни ният қилдим.",
"jamoatda_oqish_tartibi": "Жамоатда ўқиш тартиби",
"safga_turing": "Сафга туринг, имомга эргашишга ният қилинг.",
"imom_takbir": "Имом такбир айтганда, унга эргашиб намозни бошланг.",
"imomdan_oldin": "Руку ва саждаларда имомдан олдин ҳаракат қилманг.",
"imom_salom": "Имом салом бергач, фарз намози тугайди.",
"eslatma": "Эслатма:",
"juma_eslatma": "Хутба вақтида гаплашманг. Суннат ракатлари ва айрим тафсилотларда маҳаллий имом кўрсатмасига амал қилинг.",
"taroveh_sarlavha": "Таровеҳ намози",
"taroveh_tavsif": "Таровеҳ Рамазон ойида хуфтон намозидан кейин ўқилади. Ҳанафий мазҳабида таровеҳ 20 ракатдир.",
"rakat_va_niyat": "Ракатлари ва ният",
"taroveh_jami": "Жами 20 ракат: ўнта икки ракатли намоз.",
"taroveh_niyat": "Таровеҳ намозидан икки ракат ўқишни ният қилдим ва имомга иқтидо қилдим.",
"taroveh_vitr": "Таровеҳдан кейин витр намози ўқилади.",
"ikki_rakat_tartibi": "Ҳар икки ракатнинг тартиби",
"sano_imom": "Сано дуосини ўқинг; кейин имом қироат қилади.",
"ruku_sajda": "Имом билан руку ва икки сажда бажаринг.",
"ikkinchi_rakat_turish": "Иккинчи ракатга туринг ва имом қироатини тингланг.",
"oxirgi_otirish": "Охирги ўтиришда ташаҳҳуд, салавот ва дуо ўқиб, салом беринг.",
"taroveh_eslatma": "Жамоатда имомга эргашинг. Қироат тартиби бўйича масжидингиз имомининг кўрсатмасига амал қилинг.",
"ramazon_hayiti_sarlavha": "Рамазон ҳайити намози",
"ramazon_tavsif": "Рамазон ҳайити намози Рамазон ойи тугагач, ҳайит куни жамоат билан ўқилади. Ҳанафий мазҳабида икки ракат вожиб ҳисобланади.",
"ramazon_niyat": "Рамазон ҳайити намозининг икки ракат вожибини ўқишни ният қилдим ва имомга иқтидо қилдим.",
"birinchi_rakat": "Биринчи ракат",
"hayit_boshlash": "Имом такбир айтганда намозни бошланг, сўнг сано дуосини ўқинг.",
"hayit_takbir_1": "Сано дуосидан кейин учта қўшимча такбир айтилади. Ҳар сафар қўллар кўтарилади; дастлабки икки такбирдан кейин қўллар туширилади.",
"hayit_takbir_2": "Учинчи қўшимча такбирдан кейин қўллар боғланади, имом қироат қилади.",
"ikkinchi_rakat": "Иккинчи ракат",
"hayit_takbir_3": "Қироатдан кейин учта қўшимча такбир айтилади; ҳар бирида қўллар кўтарилиб, туширилади.",
"hayit_ruku": "Кейинги такбир билан руку қилинг, сўнг икки сажда бажаринг.",
"hayit_salom": "Охирги ўтиришда ташаҳҳуд, салавот ва дуо ўқиб, имом билан салом беринг.",
"hayit_xutba": "Ҳайит хутбаси намоздан кейин бўлади. Имомга эргашинг ва хутбани тингланг.",
"hayitlar_eslatma": "Рамазон ва Қурбон ҳайити намозларининг ҳанафий тартиби бир хил. Қўшимча такбирларда имомга эргашинг.",
"umumiy_eslatma": "Бу саҳифа ўрганиш учун қўлланма. Айрим тафсилотларда масжид имоми кўрсатмасига амал қилинг."
    }
};


/* =========================================================
   DATA-KEY LARNI HTMLGA QO'LLASH
   ========================================================= */

function applyLanguage(language) {

    const data = translations[language] || translations.latin;

    document.querySelectorAll("[data-key]").forEach(function (element) {

        const key = element.getAttribute("data-key");

        if (!Object.prototype.hasOwnProperty.call(data, key)) {
            return;
        }

        const value = data[key];

        if (element.tagName === "TITLE") {
            element.textContent = value;
        }
        else {
            element.textContent = value;
        }
    });


    document.documentElement.lang =
        language === "cyrillic" ? "uz-Cyrl" : "uz";


    localStorage.setItem("namoz_language", language);
}


/* =========================================================
   TILNI O'RNATISH
   ========================================================= */

function initLanguage() {

    const savedLanguage =
        localStorage.getItem("namoz_language") || "latin";

    const select =
        document.getElementById("langSelect");

    if (select) {

        select.value = savedLanguage;

        select.addEventListener("change", function () {

            applyLanguage(this.value);

        });
    }

    applyLanguage(savedLanguage);
}


/* =========================================================
   TUNGI / KUNDUZGI REJIM
   ========================================================= */

function applyTheme(theme) {

    const body = document.body;

    body.classList.remove("dark-mode");
    body.classList.remove("light-mode");

    if (theme === "light") {

        body.classList.add("light-mode");

    } else {

        body.classList.add("dark-mode");
    }


    localStorage.setItem("namoz_theme", theme);


    const icon =
        document.getElementById("themeIcon");

    const text =
        document.getElementById("themeBtnText");


    if (icon) {

        icon.className =
            theme === "light"
            ? "fa-solid fa-sun"
            : "fa-solid fa-moon";
    }


    if (text) {

        const language =
            localStorage.getItem("namoz_language") || "latin";

        text.textContent =
            language === "cyrillic"
            ? "Режим"
            : "Rejim";
    }
}


/* =========================================================
   REJIMNI BOSHLANG'ICH O'RNATISH
   ========================================================= */

function initTheme() {

    const savedTheme =
        localStorage.getItem("namoz_theme") || "dark";

    applyTheme(savedTheme);


    const button =
        document.getElementById("themeBtn");

    if (!button) {
        return;
    }


    button.addEventListener("click", function () {

        const current =
            document.body.classList.contains("light-mode")
            ? "light"
            : "dark";

        const next =
            current === "light"
            ? "dark"
            : "light";

        applyTheme(next);
    });
}


/* =========================================================
   MENU / SCREEN
   erkaklar.html uchun
   ========================================================= */

window.openScreen = function (screenId) {

    const screen =
        document.getElementById(screenId);

    if (!screen) {
        return;
    }

    screen.classList.add("active");

    document.body.style.overflow = "hidden";
};


window.closeScreen = function (screenId) {

    const screen =
        document.getElementById(screenId);

    if (!screen) {
        return;
    }

    screen.classList.remove("active");

    const activeScreen =
        document.querySelector(".sub-screen.active");

    if (!activeScreen) {
        document.body.style.overflow = "";
    }
};


/* =========================================================
   BRAUZER ORQAGA TUGMASI
   ========================================================= */

window.addEventListener("popstate", function () {

    document
        .querySelectorAll(".sub-screen.active")
        .forEach(function (screen) {

            screen.classList.remove("active");
        });

    document.body.style.overflow = "";
});


/* =========================================================
   SAHIFA YUKLANGANDA
   ========================================================= */

function init() {

    initLanguage();

    initTheme();

}


/* =========================================================
   DOM TAYYOR BO'LGANDA ISHLATISH
   ========================================================= */

if (document.readyState === "loading") {

    document.addEventListener("DOMContentLoaded", init);

} else {

    init();
}


/* =========================================================
   GLOBAL FUNKSIYALAR
   ========================================================= */

window.namozTranslations = translations;

window.setNamozLanguage = function (language) {

    if (
        language !== "latin" &&
        language !== "cyrillic"
    ) {
        language = "latin";
    }

    applyLanguage(language);

    const select =
        document.getElementById("langSelect");

    if (select) {
        select.value = language;
    }

    applyTheme(
        localStorage.getItem("namoz_theme") || "dark"
    );
};


window.setNamozTheme = function (theme) {

    if (
        theme !== "light" &&
        theme !== "dark"
    ) {
        theme = "dark";
    }

    applyTheme(theme);
};

})();
