import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Professional Beauty Academy - Expert Beauty & Hair Training",
  description: "Industry-recognized beauty and hairdressing training in just 12 or 18 weeks. Launch your global beauty career with The Professional Beauty Academy.",
  icons: {
    icon: "/favicon.png", // or "/favicon.png" if that’s your file
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head>
        <title>Professional Beauty Academy - Courses & Training</title>
        <meta
          name="description"
          content="Join Professional Beauty Academy for expert-led beauty courses and certifications. Start your career in beauty today!"
        />
        <meta
          name="keywords"
          content="beauty academy, beauty courses, beauty training, professional beauty, cosmetology, makeup, skincare"
        />
        {/* <link rel="canonical" href="https://www.professionalbeauty.com/" />

        <meta property="og:title" content="Professional Beauty Academy - Courses & Training" />
        <meta property="og:description" content="Join Professional Beauty Academy for expert-led beauty courses and certifications. Start your career in beauty today!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.professionalbeauty.com/" />
        <meta property="og:image" content="https://www.professionalbeauty.com/images/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Beauty Academy - Courses & Training" />
        <meta name="twitter:description" content="Join Professional Beauty Academy for expert-led beauty courses and certifications." />
        <meta name="twitter:image" content="https://www.professionalbeauty.com/images/twitter-image.jpg" /> */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Professional Beauty Academy",
              url: "https://www.professionalbeauty.com/",
              logo: "https://www.professionalbeauty.com/images/logo.png",
              sameAs: [
                "https://www.facebook.com/professionalbeauty",
                "https://www.instagram.com/professionalbeauty",
              ],
              description:
                "Expert-led beauty courses and certifications.",
            }),
          }}
        />
      </Head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
