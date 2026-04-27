export const SITE = {
  name: "Pat Wright Roofing",
  phone: "+353 87 231 5636",
  phoneHref: "tel:+353872315636",
  address: "37 Nutley Ave, Ballsbridge, Dublin, D04 Y4C8, Ireland",
  hours: "Open 24 Hours",
  rating: 4.7,
  reviews: 12,
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  image: string;
};

export const SERVICES: Service[] = [
  {
    slug: "flat-roofing",
    title: "Flat Roofing",
    short: "Durable flat roof installations for homes and commercial buildings.",
    image: "https://images.unsplash.com/photo-1632759145355-8b8f3ab6c5f6?w=1200&q=80",
  },
  {
    slug: "roof-repair",
    title: "Roof Repair",
    short: "Fast, reliable roof repairs to stop leaks and prevent further damage.",
    image: "https://images.unsplash.com/photo-1601055283742-8b27e81b5553?w=1200&q=80",
  },
  {
    slug: "rubber-roofing",
    title: "Rubber Roofing (EPDM)",
    short: "Long-lasting EPDM rubber roofs for a watertight finish.",
    image: "https://images.unsplash.com/photo-1605152276897-4f618f831968?w=1200&q=80",
  },
  {
    slug: "felt-roofing",
    title: "Felt Roofing",
    short: "Traditional felt roofing — affordable and effective.",
    image: "https://images.unsplash.com/photo-1591588582259-e675bd2e6088?w=1200&q=80",
  },
  {
    slug: "roof-replacement",
    title: "Roof Replacement",
    short: "Full roof replacements built to last decades.",
    image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=1200&q=80",
  },
  {
    slug: "fascia-soffit",
    title: "Fascia & Soffit",
    short: "uPVC fascia and soffit installation and repair.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
  },
  {
    slug: "chimney-repairs",
    title: "Chimney Repairs",
    short: "Chimney pointing, capping and full repair services.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&q=80",
  },
  {
    slug: "emergency-roofing",
    title: "Emergency Roofing",
    short: "24/7 emergency response across Dublin.",
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=1200&q=80",
  },
];

export const TESTIMONIALS = [
  { name: "Aoife O'Sullivan", location: "Ballsbridge, Dublin", text: "Pat and his team replaced our flat roof and did a fantastic job. Tidy, professional and great value." },
  { name: "Cian Murphy", location: "Rathmines, Dublin", text: "Called them at 11pm with a major leak — they were on site within the hour. Lifesavers." },
  { name: "Sinead Byrne", location: "Sandymount, Dublin", text: "Excellent work on our chimney repair. Honest pricing and quality craftsmanship." },
  { name: "Liam Kavanagh", location: "Donnybrook, Dublin", text: "Best roofers in Dublin. Fitted new fascia and soffits — looks brilliant." },
  { name: "Niamh Doyle", location: "Ranelagh, Dublin", text: "Highly recommend Pat Wright Roofing. Professional from quote to completion." },
  { name: "Eoin Walsh", location: "Dun Laoghaire, Dublin", text: "Quick, clean and well-priced. Our new EPDM roof is perfect." },
  { name: "Ciara Fitzgerald", location: "Blackrock, Dublin", text: "Great communication and top quality workmanship. Will use again." },
  { name: "Darragh O'Brien", location: "Clontarf, Dublin", text: "Pat is a true professional. Repaired our slate roof beautifully." },
  { name: "Roisin Healy", location: "Drumcondra, Dublin", text: "Lovely team, very respectful of our property. Excellent finish." },
  { name: "Conor Lynch", location: "Stillorgan, Dublin", text: "From the free quote to the final tidy-up, everything was first class." },
];

export const POSTS = [
  { slug: "signs-your-roof-needs-replacing", title: "Signs Your Roof Needs Replacing", date: "March 12, 2025", category: "Maintenance", excerpt: "Curling shingles, sagging, persistent leaks — here's how to know it's time." },
  { slug: "flat-vs-pitched-roof", title: "Flat Roof vs Pitched Roof: Which Is Right for You?", date: "February 28, 2025", category: "Guides", excerpt: "Comparing cost, lifespan and aesthetics for Irish homes." },
  { slug: "prepare-roof-irish-winter", title: "How to Prepare Your Roof for an Irish Winter", date: "October 5, 2024", category: "Seasonal", excerpt: "Storms and rain are coming. Here's our checklist to keep your home dry." },
  { slug: "epdm-rubber-roofing-explained", title: "EPDM Rubber Roofing Explained", date: "September 15, 2024", category: "Materials", excerpt: "Why EPDM has become the go-to choice for flat roofs." },
  { slug: "chimney-maintenance-tips", title: "5 Chimney Maintenance Tips Every Homeowner Should Know", date: "August 2, 2024", category: "Maintenance", excerpt: "Simple checks that can save you thousands in repairs." },
  { slug: "choosing-a-roofer-dublin", title: "How to Choose a Roofer in Dublin", date: "July 18, 2024", category: "Guides", excerpt: "Insurance, references and red flags to watch out for." },
];

export const PROJECTS = [
  { src: "https://images.unsplash.com/photo-1632759145355-8b8f3ab6c5f6?w=800&q=80", category: "Flat Roofing" },
  { src: "https://images.unsplash.com/photo-1601055283742-8b27e81b5553?w=800&q=80", category: "Roof Repair" },
  { src: "https://images.unsplash.com/photo-1605152276897-4f618f831968?w=800&q=80", category: "Rubber Roofing" },
  { src: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80", category: "Chimney" },
  { src: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800&q=80", category: "Flat Roofing" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", category: "Roof Repair" },
  { src: "https://images.unsplash.com/photo-1591588582259-e675bd2e6088?w=800&q=80", category: "Rubber Roofing" },
  { src: "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=800&q=80", category: "Chimney" },
  { src: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&q=80", category: "Flat Roofing" },
  { src: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&q=80", category: "Roof Repair" },
  { src: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&q=80", category: "Rubber Roofing" },
  { src: "https://images.unsplash.com/photo-1567016526105-22da7c13161a?w=800&q=80", category: "Chimney" },
];
