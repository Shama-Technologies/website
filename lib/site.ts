// Links shared by the site nav, footer and Home page.
export const STUDIO_URL = "https://studio.shamaapp.com";
export const DONATE_URL = "https://paystack.shop/pay/app-shama";
export const WHATSAPP_URL = "https://wa.me/2348072101662";
// Google Form for ministries who would rather be onboarded by the team.
export const MINISTRY_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSekRZyaWM-4kK--pdI377oQ16AW1u2DR5SQhKHySG7S4AjqUg/viewform";
export const CONTACT_EMAIL = "shama@shamaapp.com";

export const SiteLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us" },
  { name: "Partner", href: "/partner" },
  { name: "Ambassadors", href: "/ambassador" },
];

export const Socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/theshama-app/" },
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61561300449671" },
  { name: "X", href: "https://x.com/theshamaapp" },
  { name: "Instagram", href: "https://www.instagram.com/theshamaapp/" },
];

// Real channels on Shama, shown in the marquee.
export const Channels: [string, string][] = [
  ["The Still Waters Global", "#483FB2"],
  ["Samuel Akinwumi", "#2F8F6B"],
  ["Grace Chapel International", "#7A3FB2"],
  ["SWAT Nation", "#B2563F"],
  ["GodLife Conversations", "#3F6FB2"],
  ["The Effulgence Church", "#B2933F"],
  ["House of Encounters Ministries", "#5D3FB2"],
  ["Grace Covenant Center", "#3FA0B2"],
];

// Real sermons and songs on Shama, shown on the library sphere.
export const LibraryItems: [title: string, by: string, kind: string][] = [
  ["Courage, the Currency of Destiny", "Oluwagbemileke Agboola", "Sermon"],
  ["Living A Life Of Grace", "Oluwagbemileke Agboola", "Sermon"],
  ["Gazing At Grace Charge", "Samuel Akinwumi", "Sermon"],
  ["Oil From Above, Part 2", "Samuel Akinwumi", "Sermon"],
  ["Marks Of A Growing Believer", "Samuel Akinwumi", "Sermon"],
  ["Let’s Talk Love", "Samuel Akinwumi", "Sermon"],
  ["The Fountain Of Life", "Prophet Usen MJ", "Sermon"],
  ["Ministry And Ordination", "Dr. Val Oje", "Sermon"],
  ["Tearing The Veil", "Dr. Val Oje", "Sermon"],
  ["The Believers Authority", "Pastor Victor Joseph", "Sermon"],
  ["Mercy Interventions", "Samuel Akinwumi", "Sermon"],
  ["Praise", "Elevation Worship", "Song"],
  ["You Are Great", "Moses Bliss", "Song"],
  ["The Supernatural Anthem", "Steve Hills", "Song"],
  ["Emperor Of The Universe", "Dunsin Oyekan", "Song"],
  ["Exodus", "Apostle Femi Lazarus", "Sermon"],
  ["Who Touched Me?", "Apostle Joshua Selman", "Sermon"],
  ["Meditation I", "Lawrence Oyor", "Sermon"],
  ["An Evening With The Holy Ghost", "Samuel Akinwumi", "Sermon"],
  ["In The Spirit With Asa", "Samuel Akinwumi", "Sermon"],
  ["Hiding Place", "Samuel Akinwumi", "Sermon"],
  ["Faith Toward God", "Grace Chapel International", "Podcast"],
  ["The Lion & The Bear", "GodLife Conversations", "Podcast"],
  ["Premiering This Friday", "SWAT Nation", "Song"],
];

export const Palettes: [string, string][] = [
  ["#483FB2", "#1A1640"],
  ["#6C63FF", "#231C5C"],
  ["#7A3FB2", "#1E1240"],
  ["#2F8F6B", "#0F2A22"],
  ["#B2563F", "#2A130E"],
  ["#3F6FB2", "#101E36"],
  ["#B2933F", "#2A2210"],
  ["#3FA0B2", "#0E2A30"],
];

export const coverBackground = ([a, b]: [string, string]) =>
  `radial-gradient(circle at 25% 15%, ${a}, transparent 65%), linear-gradient(150deg, ${a}, ${b})`;
