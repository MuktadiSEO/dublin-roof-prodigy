type Props = {
  title: string;
  subtitle?: string;
  image?: string;
};

export function PageHero({ title, subtitle, image = "https://images.unsplash.com/photo-1632759145355-8b8f3ab6c5f6?w=1800&q=80" }: Props) {
  return (
    <section className="relative h-[42vh] min-h-[280px] flex items-center justify-center text-white overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-charcoal/75" />
      <div className="relative z-10 text-center max-w-3xl px-4 fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">{title}</h1>
        {subtitle && <p className="text-lg text-white/85">{subtitle}</p>}
      </div>
    </section>
  );
}
