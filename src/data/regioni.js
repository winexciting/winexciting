/* ============================================================
   WINEXCITING — Dati delle regioni
   Per aggiungere una regione: copiare un blocco e compilarlo.
   Per le foto: aggiungere il file in /public/images e indicare
   il nome (senza estensione) nel campo "img".
   ============================================================ */

export const REGIONI = [
  {
    slug: "langhe",
    nome: "Langhe",
    zona: "Piemonte",
    paese: "italia",
    img: "langhe",
    coord: [44.62, 7.99],
    vitigni: ["Nebbiolo", "Barbera", "Dolcetto", "Moscato"],
    denominazioni: ["Barolo DOCG", "Barbaresco DOCG", "Langhe DOC", "Barbera d'Alba DOC"],
    intro: [
      "Colline patrimonio UNESCO, nebbie autunnali e il tartufo bianco d'Alba: le Langhe sono il cuore nobile del vino italiano. Qui il Nebbiolo dà vita a Barolo e Barbaresco, rossi capaci di attraversare i decenni, prodotti da una costellazione di piccoli cru che i langhetti chiamano 'sorì'.",
      "È una terra di contadini diventati leggenda, dove ogni paese — La Morra, Serralunga, Castiglione Falletto, Neive — racconta una sfumatura diversa dello stesso vitigno. Da vivere lentamente, tra una cantina scavata nel tufo e una merenda sinoira al tramonto.",
    ],
    tour: {
      titolo: "Langhe: Barolo e nocciole",
      durata: "2 giorni",
      descrizione:
        "Tra La Morra e Serralunga d'Alba: tre cantine storiche, una verticale di Barolo e una merenda sinoira con vista sui vigneti patrimonio UNESCO.",
      tappe: [
        "Giorno 1 — La Morra: belvedere, pranzo in osteria e visita con degustazione in una cantina storica del Barolo",
        "Giorno 1 — Barolo: il borgo, il castello e il Museo del Vino (WiMu)",
        "Giorno 2 — Serralunga d'Alba e Castiglione Falletto: due cru a confronto, verticale guidata",
        "Giorno 2 — Alba: passeggiata nel centro storico e merenda sinoira di congedo",
      ],
    },
    cantine: [
      { nome: "Marchesi di Barolo", comune: "Barolo (CN)", visite: "Visite e degustazioni su prenotazione", sito: "marchesibarolo.com" },
      { nome: "Fontanafredda", comune: "Serralunga d'Alba (CN)", visite: "Tour del villaggio storico e degustazioni", sito: "fontanafredda.it" },
      { nome: "Ceretto", comune: "Alba (CN)", visite: "Visite su prenotazione, architettura contemporanea tra i filari", sito: "ceretto.com" },
      { nome: "Vietti", comune: "Castiglione Falletto (CN)", visite: "Degustazioni su appuntamento", sito: "vietti.com" },
      { nome: "Pio Cesare", comune: "Alba (CN)", visite: "Cantina storica nel centro di Alba, su prenotazione", sito: "piocesare.it" },
    ],
  },
  {
    slug: "franciacorta",
    nome: "Franciacorta",
    zona: "Lombardia",
    paese: "italia",
    img: "franciacorta",
    coord: [45.6, 10.02],
    vitigni: ["Chardonnay", "Pinot Nero", "Pinot Bianco", "Erbamat"],
    denominazioni: ["Franciacorta DOCG", "Curtefranca DOC", "Sebino IGT"],
    intro: [
      "A meno di un'ora da Milano, tra il lago d'Iseo e le colline moreniche, la Franciacorta è la patria del metodo classico italiano: rifermentazione in bottiglia, lunghi affinamenti sui lieviti e uno stile che non teme il confronto con la Champagne.",
      "Il territorio è compatto e perfetto da esplorare in bicicletta: maison eleganti, vigneti curati come giardini e il lago sempre all'orizzonte. Ideale per un weekend di bollicine, anche per chi parte da zero.",
    ],
    tour: {
      titolo: "Franciacorta in bicicletta",
      durata: "1 giorno",
      descrizione:
        "Pedalata dolce tra Erbusco e il lago d'Iseo, con soste in due maison per capire il metodo classico italiano, calice alla mano.",
      tappe: [
        "Mattina — Erbusco: visita e degustazione in una grande maison, con focus sul metodo classico",
        "Pranzo — Trattoria tra i vigneti con abbinamento Franciacorta",
        "Pomeriggio — Pedalata verso le Torbiere del Sebino e sosta in una cantina biologica",
        "Tramonto — Aperitivo sul lago d'Iseo",
      ],
    },
    cantine: [
      { nome: "Ca' del Bosco", comune: "Erbusco (BS)", visite: "Percorso tra arte e cantina, su prenotazione", sito: "cadelbosco.com" },
      { nome: "Bellavista", comune: "Erbusco (BS)", visite: "Visite e degustazioni su prenotazione", sito: "bellavistawine.it" },
      { nome: "Guido Berlucchi", comune: "Corte Franca (BS)", visite: "Le cantine storiche di palazzo Lana, su prenotazione", sito: "berlucchi.it" },
      { nome: "Barone Pizzini", comune: "Provaglio d'Iseo (BS)", visite: "Pioniere del biologico in Franciacorta, visite guidate", sito: "baronepizzini.it" },
      { nome: "Contadi Castaldi", comune: "Adro (BS)", visite: "Degustazioni nella ex fornace, su prenotazione", sito: "contadicastaldi.it" },
    ],
  },
  {
    slug: "valpolicella",
    nome: "Valpolicella",
    zona: "Veneto",
    paese: "italia",
    img: "valpolicella",
    coord: [45.53, 10.9],
    vitigni: ["Corvina", "Corvinone", "Rondinella", "Molinara"],
    denominazioni: ["Amarone della Valpolicella DOCG", "Recioto DOCG", "Valpolicella Ripasso DOC", "Valpolicella DOC"],
    intro: [
      "Alle spalle di Verona, tra marogne (i muretti a secco) e ciliegi, la Valpolicella è la terra dell'appassimento: le uve riposano per mesi nei fruttai prima di diventare Amarone, uno dei rossi più celebri e potenti d'Italia.",
      "Le tre valli — Fumane, Marano e Negrar — custodiscono ville venete, pievi romaniche e cantine che vanno dal garage artigianale alla grande maison. E Verona, con la sua Arena, è a un quarto d'ora.",
    ],
    tour: {
      titolo: "Valpolicella: la via dell'Amarone",
      durata: "2 giorni",
      descrizione:
        "Dai fruttai dove riposano le uve alle cantine storiche di Fumane e Negrar: un viaggio nell'appassimento, con Verona come gran finale.",
      tappe: [
        "Giorno 1 — Fumane e Marano: visita a un fruttaio e degustazione verticale di Amarone",
        "Giorno 1 — Cena in agriturismo tra i vigneti con Ripasso e piatti veronesi",
        "Giorno 2 — Negrar e San Giorgio di Valpolicella: pieve romanica e cantina artigianale",
        "Giorno 2 — Verona: passeggiata nel centro storico e calice di congedo in enoteca",
      ],
    },
    cantine: [
      { nome: "Allegrini", comune: "Fumane (VR)", visite: "Visite a Villa della Torre e degustazioni", sito: "allegrini.it" },
      { nome: "Masi", comune: "Sant'Ambrogio di Valpolicella (VR)", visite: "Wine experience e visite su prenotazione", sito: "masi.it" },
      { nome: "Tommasi", comune: "Pedemonte (VR)", visite: "Visite alla cantina storica di famiglia", sito: "tommasi.com" },
      { nome: "Bertani", comune: "Grezzana (VR)", visite: "Villa storica e cantine ottocentesche, su prenotazione", sito: "bertani.net" },
      { nome: "Speri", comune: "Pedemonte (VR)", visite: "Storica famiglia della Valpolicella Classica, visite su prenotazione", sito: "speri.com" },
    ],
  },
  {
    slug: "chianti-classico",
    nome: "Chianti Classico",
    zona: "Toscana",
    paese: "italia",
    img: "chianti",
    coord: [43.47, 11.32],
    vitigni: ["Sangiovese", "Canaiolo", "Colorino"],
    denominazioni: ["Chianti Classico DOCG", "Chianti Classico Riserva", "Gran Selezione"],
    intro: [
      "Tra Firenze e Siena, il Chianti Classico è l'immagine stessa della Toscana: colline a onde, cipressi, borghi in pietra e il Gallo Nero che dal Trecento marchia i vini di questo territorio.",
      "Il Sangiovese qui trova la sua espressione più elegante, tra castelli medievali trasformati in cantine e pievi immerse nei boschi. Greve, Panzano, Radda, Gaiole e Castellina sono le tappe di un itinerario senza tempo.",
    ],
    tour: {
      titolo: "Chianti Classico: la via del Gallo Nero",
      durata: "2 giorni",
      descrizione:
        "Da Greve a Castellina tra pievi, castelli e cantine simbolo del Sangiovese, con degustazione verticale e cena in fattoria.",
      tappe: [
        "Giorno 1 — Greve in Chianti: la piazza, il mercato e una cantina storica",
        "Giorno 1 — Panzano: degustazione al tramonto sulla 'conca d'oro'",
        "Giorno 2 — Radda e Gaiole: castello-cantina e verticale di Gran Selezione",
        "Giorno 2 — Castellina: passeggiata etrusca e cena in fattoria",
      ],
    },
    cantine: [
      { nome: "Barone Ricasoli — Castello di Brolio", comune: "Gaiole in Chianti (SI)", visite: "Castello, giardini e degustazioni", sito: "ricasoli.com" },
      { nome: "Antinori nel Chianti Classico", comune: "San Casciano V.P. (FI)", visite: "Cantina d'autore, visite su prenotazione", sito: "antinori.it" },
      { nome: "Castello di Ama", comune: "Gaiole in Chianti (SI)", visite: "Vino e arte contemporanea tra i vigneti", sito: "castellodiama.com" },
      { nome: "Fontodi", comune: "Panzano in Chianti (FI)", visite: "Biologico nella conca d'oro, su appuntamento", sito: "fontodi.com" },
      { nome: "Badia a Coltibuono", comune: "Gaiole in Chianti (SI)", visite: "Abbazia millenaria, visite e corsi di cucina", sito: "coltibuono.com" },
    ],
  },
  {
    slug: "bolgheri",
    nome: "Bolgheri",
    zona: "Toscana",
    paese: "italia",
    img: "bolgheri",
    coord: [43.23, 10.64],
    vitigni: ["Cabernet Sauvignon", "Merlot", "Cabernet Franc", "Vermentino"],
    denominazioni: ["Bolgheri DOC", "Bolgheri Sassicaia DOC"],
    intro: [
      "Un viale di cipressi lungo cinque chilometri, il mare a un passo e i vigneti che hanno riscritto la storia del vino italiano: Bolgheri è la patria dei Supertuscan, nati negli anni Settanta dall'intuizione di piantare vitigni bordolesi sulla costa toscana.",
      "Sassicaia, Ornellaia, Masseto: nomi che hanno portato l'Italia sulle mappe dei collezionisti di tutto il mondo. Ma Bolgheri è anche un borgo minuscolo e romantico, perfetto per un weekend tra vino e Maremma.",
    ],
    tour: {
      titolo: "Bolgheri: i Supertuscan e il mare",
      durata: "2 giorni",
      descrizione:
        "Il viale dei cipressi, le cantine che hanno fatto la storia dei Supertuscan e la costa degli Etruschi: eleganza bordolese in salsa toscana.",
      tappe: [
        "Giorno 1 — Il viale dei cipressi e il borgo di Bolgheri",
        "Giorno 1 — Visita e degustazione in una cantina simbolo dei Supertuscan",
        "Giorno 2 — Castagneto Carducci e una cantina di nuova generazione",
        "Giorno 2 — Tramonto sulla costa degli Etruschi con Vermentino",
      ],
    },
    cantine: [
      { nome: "Tenuta San Guido", comune: "Bolgheri (LI)", visite: "La casa del Sassicaia, visite su prenotazione", sito: "tenutasanguido.com" },
      { nome: "Ornellaia", comune: "Bolgheri (LI)", visite: "Visite e degustazioni su appuntamento", sito: "ornellaia.com" },
      { nome: "Guado al Tasso — Antinori", comune: "Bolgheri (LI)", visite: "Tenuta nella piana bolgherese, su prenotazione", sito: "antinori.it" },
      { nome: "Le Macchiole", comune: "Bolgheri (LI)", visite: "Cantina familiare di culto, su appuntamento", sito: "lemacchiole.it" },
      { nome: "Grattamacco", comune: "Castagneto Carducci (LI)", visite: "Storica collina tra bosco e mare, su prenotazione", sito: "collemassari.it" },
    ],
  },
  {
    slug: "etna",
    nome: "Etna",
    zona: "Sicilia",
    paese: "italia",
    img: "etna",
    coord: [37.77, 15.05],
    vitigni: ["Nerello Mascalese", "Nerello Cappuccio", "Carricante"],
    denominazioni: ["Etna DOC (Rosso, Bianco, Rosato)"],
    intro: [
      "Vigneti fino a mille metri di quota, terrazze di pietra lavica e alberelli centenari sopravvissuti alla fillossera: sull'Etna si fa viticoltura eroica sul vulcano attivo più alto d'Europa.",
      "I Nerello danno rossi di eleganza quasi borgognona, il Carricante bianchi verticali e salini. Le contrade — Passopisciaro, Solicchiata, Milo — sono i 'cru' di una delle zone più entusiasmanti del vino mondiale, tra colate laviche e paesi barocchi.",
    ],
    tour: {
      titolo: "Etna: vini di fuoco",
      durata: "3 giorni",
      descrizione:
        "I vigneti più alti d'Europa, alberelli centenari su terrazze di pietra lavica e i Nerello che stanno conquistando il mondo.",
      tappe: [
        "Giorno 1 — Versante nord: le contrade di Castiglione di Sicilia e una verticale di Etna Rosso",
        "Giorno 2 — Randazzo e Passopisciaro: alberelli centenari e pranzo in vigna",
        "Giorno 2 — Milo: il regno del Carricante, degustazione di Etna Bianco Superiore",
        "Giorno 3 — Salita ai crateri sommitali (con guida) e calice di congedo a Taormina",
      ],
    },
    cantine: [
      { nome: "Benanti", comune: "Viagrande (CT)", visite: "Storica famiglia dell'Etna, visite e degustazioni", sito: "benanti.it" },
      { nome: "Tenuta delle Terre Nere", comune: "Randazzo (CT)", visite: "Contrade del versante nord, su prenotazione", sito: "tenutaterrenere.com" },
      { nome: "Passopisciaro — Vini Franchetti", comune: "Castiglione di Sicilia (CT)", visite: "Le contrade in purezza, su appuntamento", sito: "vinifranchetti.com" },
      { nome: "Pietradolce", comune: "Castiglione di Sicilia (CT)", visite: "Cantina contemporanea tra gli alberelli, su prenotazione", sito: "pietradolce.it" },
      { nome: "Barone di Villagrande", comune: "Milo (CT)", visite: "La più antica dell'Etna, visite e wine resort", sito: "villagrande.it" },
    ],
  },
];

/* Paesi per l'indice mondiale: quelli senza "attivo" appaiono come "in arrivo" */
export const PAESI = [
  { slug: "italia", nome: "Italia", attivo: true, descr: "6 regioni online — si cresce" },
  { slug: "francia", nome: "Francia", attivo: false, descr: "Borgogna, Bordeaux, Champagne, Rodano, Loira, Alsazia" },
  { slug: "spagna", nome: "Spagna", attivo: false, descr: "Rioja, Ribera del Duero, Priorat, Jerez" },
  { slug: "usa", nome: "Stati Uniti", attivo: false, descr: "Napa Valley, Sonoma, Willamette Valley" },
  { slug: "argentina", nome: "Argentina", attivo: false, descr: "Mendoza, Salta" },
  { slug: "cile", nome: "Cile", attivo: false, descr: "Maipo, Colchagua, Casablanca" },
  { slug: "australia", nome: "Australia", attivo: false, descr: "Barossa Valley, Yarra Valley, Margaret River" },
];
