import type { CampsiteConfig } from "../types";

const IMG = "/campsites/stellplatz-harrerhill";

const stellplatzHarrerhill: CampsiteConfig = {
  name: "Stellplatz Harrer Hill",
  shortName: "Harrer Hill",
  slug: "stellplatz-harrerhill",
  ort: "Passail",
  region: "Steiermark",
  brandKind: "Wohnmobilstellplatz",
  regionLong: "Naturpark Almenland · Steiermark · Österreich",

  heroVariant: "center",

  claim: "Frei stehen über dem Almenland",
  claimEmphasis: "über dem Almenland",
  emailDetail: "euer Sanitärgebäude mit den großen Landschaftsbildern",
  intro:
    "Auf einer sonnigen Anhöhe über Passail stehst du mit deinem Wohnmobil mitten im Almenland — ebene Plätze, ein Sanitärgebäude wie im Hotel und ein Rundumblick über sanfte Hügel. Der Stellplatz selbst ist gratis.",

  logo: { src: `${IMG}/logo.png`, alt: "Stellplatz Harrer Hill Logo" },

  statement: {
    text: "Ein Sanitärgebäude wie im Hotel, ein Stellplatz, der nichts kostet — und vor dem Vorzelt das ganze Almenland.",
    emphasis: "nichts kostet",
  },

  pillars: [
    {
      title: "Mitten im Almenland",
      text: "Der Platz liegt auf einer sonnigen Anhöhe über Passail, umgeben von Wiesen und Wäldern — der Blick reicht bis zu 50 km weit.",
      image: { src: `${IMG}/luft-almenland.webp`, alt: "Luftaufnahme: Stellplatz Harrer Hill im Almenland mit Bergpanorama" },
    },
    {
      title: "Sanitär auf Hotelniveau",
      text: "Bodentiefe Fliesen, Echtholz-Kabinen und großformatige Landschaftsbilder: das Sanitärgebäude ist modern und gepflegt.",
      image: { src: `${IMG}/sanitaer-waschbecken.webp`, alt: "Moderne Waschbecken im Sanitärgebäude des Stellplatz Harrer Hill" },
    },
    {
      title: "Alles aus einer Hand",
      text: "Robert Harrer betreibt Wohnmobil-Zentrum, Campingshop und Stellplatz in einem — du stehst direkt beim Betrieb.",
      image: { src: `${IMG}/stellplatz-flagge.webp`, alt: "Sanitärgebäude und Stellplatz-Fahne am Harrer Hill mit Wohnmobilen" },
    },
  ],

  usps: [
    "Stellplatz gratis",
    "40 Plätze für Wohnmobile",
    "Sanitär auf Hotelniveau",
    "Barrierefreies Bad",
    "Waschbox & Entsorgung",
    "Campingshop am Platz",
  ],

  trust: {
    heading: "Klein, aber rundum versorgt",
    headingEmphasis: "rundum versorgt",
    intro:
      "Ein reiner Wohnmobilstellplatz für bis zu drei Tage: gratis stehen, ein modernes Sanitärgebäude, Ver- und Entsorgung inklusive und der Campingshop gleich nebenan. Hunde sind hier allerdings nicht erlaubt.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/hero-stellplatz.webp`, alt: "Wohnmobile auf der Wiese am Stellplatz Harrer Hill mit Blick über die Hügel" },
  },

  camping: {
    heading: "Alles, was dein Wohnmobil braucht",
    intro:
      "Ein reiner Wohnmobilstellplatz mit kurzen Wegen: ebene Plätze, ein modernes Sanitärgebäude und die ganze Ver- und Entsorgung. Strom läuft über den Münzzähler.",
    features: [
      {
        title: "40 Stellplätze für Wohnmobile",
        text: "30 Plätze mit und 10 ohne Strom, klare Bodenmarkierungen und Abstand zum Nachbarn — Wohnmobile stehen hier eben und ruhig.",
        image: { src: `${IMG}/stellplaetze-anhoehe.webp`, alt: "Reihe von Wohnmobilen auf der Anhöhe am Stellplatz Harrer Hill" },
      },
      {
        title: "Sanitär auf Hotelniveau",
        text: "Helle Räume mit Echtholz-Kabinen und Landschaftsbildern. Der Eintritt kostet 50 Cent über den Münzzähler.",
        image: { src: `${IMG}/sanitaer-kabinen.webp`, alt: "Echtholz-Kabinen und Waschbereich im Sanitärgebäude des Stellplatz Harrer Hill" },
      },
      {
        title: "Barrierefreies Bad",
        text: "Eine eigene barrierefreie Einheit mit ebenerdiger Dusche und Haltegriffen — mit € 1 duschst du drei Minuten warm.",
        image: { src: `${IMG}/sanitaer-barrierefrei.webp`, alt: "Barrierefreies Bad mit ebenerdiger Dusche am Stellplatz Harrer Hill" },
      },
      {
        title: "Damen und Herren getrennt",
        text: "WC und Duschen sind nach Damen und Herren getrennt, hell und sauber — der Eingang ist videoüberwacht.",
        image: { src: `${IMG}/sanitaer-eingaenge.webp`, alt: "Getrennte Eingänge für Damen und Herren am Sanitärgebäude" },
      },
      {
        title: "Waschbox & Entsorgung",
        text: "Direkt angrenzend liegt eine Waschbox für Wohnmobile; die Entsorgung von Grau- und Schwarzwasser ist kostenlos.",
        image: { src: `${IMG}/waschbox.webp`, alt: "Wohnmobil-Zentrum mit SB-Waschbox am Stellplatz Harrer Hill" },
      },
      {
        title: "Campingshop am Platz",
        text: "Im Campingshop findest du praktisches Zubehör für deinen Camper — das Wohnmobil-Zentrum liegt gleich daneben.",
        image: { src: `${IMG}/servicegebaeude.webp`, alt: "Service- und Sanitärgebäude des Stellplatz Harrer Hill" },
      },
    ],
  },

  anreise: {
    heading: "Der Weg ins Almenland",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A2 Süd Autobahn bis Gleisdorf, dann via Weiz und Passail nach Auen — der Platz liegt rund 3,5 km außerhalb des Ortszentrums von Passail.",
      },
      {
        title: "Lage & Höhe",
        text: "Auen 61 bei Passail, im Passailer Becken auf rund 650 m Seehöhe — mitten im Naturpark Almenland im Grazer Bergland.",
      },
      {
        title: "Mit der Bahn",
        text: "Die nächsten Bahnhöfe liegen in Weiz und Graz; die letzte Strecke ins Passailer Becken legst du mit Bus oder Auto zurück.",
      },
    ],
  },

  galerie: {
    heading: "Sommer auf dem Harrer Hill",
    headingEmphasis: "Harrer Hill",
    intro: "Ein paar Eindrücke vom Stellplatz, vom modernen Sanitärgebäude und vom Blick über das Almenland.",
    tag: "Almenland · Steiermark",
    moreCount: 10,
    images: [
      { src: `${IMG}/wohnmobile-wiese.webp`, alt: "Wohnmobile und ein Zelt auf der Wiese am Stellplatz Harrer Hill" },
      { src: `${IMG}/abend-stellplatz.webp`, alt: "Abendstimmung am Stellplatz Harrer Hill mit Wohnmobilen auf der Anhöhe" },
      { src: `${IMG}/gebaeude-stellflaechen.webp`, alt: "Sanitärgebäude und Stellflächen am Stellplatz Harrer Hill" },
      { src: `${IMG}/sanitaer-wc.webp`, alt: "Modernes WC-Bereich im Sanitärgebäude des Stellplatz Harrer Hill" },
    ],
  },

  booking: {
    heading: "Drei Tage frei stehen im Almenland",
    headingEmphasis: "frei stehen",
    intro:
      "Plane deine bis zu drei Tage am Harrer Hill. Der Stellplatz ist gratis — schreib uns einfach, Familie Harrer meldet sich mit allen Infos zu Anfahrt und Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote:
      "Der Stellplatz selbst ist gratis. Strom über Münzzähler · Eintritt Sanitärgebäude 50 Cent · Dusche € 1 für 3 Minuten · Ver- und Entsorgung von Grau- und Schwarzwasser kostenlos.",
    highlight: {
      title: "Stellplatz gratis",
      text: "Das Stehen kostet nichts — bezahlt wird nur Strom und Sanitär über den Münzzähler.",
    },
    categories: [
      { id: "strom", label: "Stellplatz mit Strom", perNight: 0 },
      { id: "ohne", label: "Stellplatz ohne Strom", perNight: 0 },
    ],
  },

  kontakt: {
    tel: "+43 3179 27395",
    telHref: "tel:+43317927395",
    mail: "office@stellplatz-harrerhill.at",
    adresse: "Auen 61 · 8162 Passail · Steiermark",
    coords: { lat: 47.28238, lng: 15.556168 },
  },

  languages: ["DE"],

  nav: [
    {
      label: "Stellplatz",
      href: "#camping",
      children: [
        { label: "Plätze", href: "#camping" },
        { label: "Sanitär", href: "#camping" },
      ],
    },
    { label: "Galerie", href: "#galerie" },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default stellplatzHarrerhill;
