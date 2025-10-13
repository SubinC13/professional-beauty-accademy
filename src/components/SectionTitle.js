'use client';

export default function SectionTitle({ title, subtitle, className = "" }) {
  return (
    <div className={`${className}`}>
      {title && (
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-black mb-4">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-700 font-sans leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
