"use client";

import { useState } from 'react';
import Image from 'next/image';
import NotebookLayout from '@/components/NotebookLayout';
import { Users, Rocket, Award, Heart, Target, Lightbulb, Handshake, BarChart3, Send, Mail, Phone, MapPin, MessageSquare, User as UserIcon, Clock, ShieldCheck, Tag, PenLine, ChevronDown } from 'lucide-react';
import styles from './page.module.css';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [animationClass, setAnimationClass] = useState('');

  // Store State
  const [activeOverlay, setActiveOverlay] = useState(null); // 'store', 'cart', 'wishlist', 'downloads'
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');

  const storeProducts = [
    { id: 101, title: 'Pro E-book Template', price: 29.99, image: '/prod-ebook.png' },
    { id: 102, title: 'Minimalist UI Kit', price: 49.00, image: '/prod-uikit.png' },
    { id: 103, title: 'Hand-drawn Icon Set', price: 15.50, image: '/prod-icons.png' },
    { id: 104, title: 'Custom Typography', price: 22.00, image: '/prod-font.png' },
    { id: 105, title: 'Web Dev Blueprint', price: 99.00, image: '/service-2.png' },
    { id: 106, title: 'Brand Identity Guide', price: 35.00, image: '/service-4.png' }
  ];

  const servicesData = [
    {
      id: 1,
      title: 'Digital Marketing',
      desc: (
        <>
          <p>Digital marketing is the lifeblood of any modern business. In today's highly competitive landscape, establishing a strong digital footprint isn't just an option; it's an absolute necessity. Our comprehensive digital marketing strategies are meticulously crafted to ensure your brand not only survives but completely dominates its sector. We begin with a profound deep dive into your market, relentlessly analyzing competitor weaknesses and identifying highly lucrative opportunities.</p>
          <p>By leveraging a cohesive multi-channel approach, we aggressively maximize your visibility across the entire web. Our campaigns are entirely data-driven, meaning every single dollar spent is tracked, analyzed, and optimized for absolute maximum ROI. We do not believe in vanity metrics; our sole focus is on conversions, qualified sales, and tangible, long-term business growth. Our team of digital strategists stays ahead of the curve, constantly adapting to algorithmic shifts and emerging consumer trends.</p>
          <ul className={styles.stickyList}>
            <li><strong>Search Engine Optimization (SEO):</strong> Dominating search results to capture high-intent organic traffic.</li>
            <li><strong>Pay-Per-Click Advertising (PPC):</strong> Highly targeted ad campaigns designed to drive immediate, scalable results.</li>
            <li><strong>Content Marketing:</strong> Producing high-value, authoritative content that builds deep trust and establishes your brand as a clear industry leader.</li>
            <li><strong>Email Marketing Automation:</strong> Nurturing leads through personalized, automated email sequences that seamlessly convert prospects into loyal, returning customers.</li>
          </ul>
          <p>We continuously monitor performance through advanced analytics frameworks, allowing us to pivot strategies instantly in response to subtle market shifts. Transparency is at our core—you will receive detailed, easy-to-understand reports showing exactly how our marketing efforts are directly impacting your bottom line. We work as a direct extension of your internal team, deeply and personally invested in your ultimate success.</p>
        </>
      ),
      image: '/service-1.png'
    },
    {
      id: 2,
      title: 'Web Development',
      desc: (
        <>
          <p>Your website is the digital storefront of your business; it is often the very first impression a potential customer has of your brand. We build ultra-fast, modern, and highly responsive web applications that are meticulously engineered to impress and perform. Utilizing the absolute latest technology stacks like React, Next.js, and Node, our high-performance websites are designed from the ground up for maximum scalability, flawless accessibility, and explosive business growth.</p>
          <p>We believe that exceptional web development goes far beyond writing clean code. It requires a deep understanding of user psychology, frictionless user experience (UX) design, and a relentless focus on conversion rate optimization (CRO). Every button placement, color choice, and animation is strategically planned to guide users seamlessly toward your ultimate business goals. We ensure your site looks stunning and functions perfectly on every device, from massive desktop monitors to the smallest smartphones.</p>
          <ul className={styles.stickyList}>
            <li><strong>Custom Front-End Development:</strong> Pixel-perfect, incredibly fast interfaces that captivate users immediately.</li>
            <li><strong>Robust Back-End Architecture:</strong> Secure, scalable, and highly reliable server environments capable of handling massive traffic spikes.</li>
            <li><strong>API Integrations:</strong> Seamlessly connecting your website with essential third-party tools, CRMs, and payment gateways.</li>
            <li><strong>Continuous Maintenance:</strong> Ongoing support, security patches, and performance optimizations to keep your site at the cutting edge.</li>
          </ul>
          <p>Security and speed are our top priorities. We implement strict security protocols to protect your sensitive user data and utilize advanced caching strategies to ensure your pages load in milliseconds. A slow website loses customers; our websites are engineered to retain them and aggressively push them down the sales funnel.</p>
        </>
      ),
      image: '/service-2.png'
    },
    {
      id: 3,
      title: 'Shopify Development',
      desc: (
        <>
          <p>Launch, scale, and dominate the eCommerce landscape with our custom-built, highly optimized Shopify stores. Selling products online requires far more than just a basic template; it demands a strategic, highly engineered shopping experience designed to aggressively maximize average order value (AOV) and minimize cart abandonment. We specialize in transforming standard Shopify setups into powerful, high-converting retail empires that sell products effortlessly while you sleep.</p>
          <p>Our approach combines stunning visual design with deep eCommerce psychology. We meticulously optimize every step of the user journey, from the moment a customer lands on a product page to the final, frictionless checkout experience. We understand that in eCommerce, milliseconds matter. Our custom themes are heavily optimized for blazing-fast load speeds, ensuring that your customers never abandon their carts out of pure frustration.</p>
          <ul className={styles.stickyList}>
            <li><strong>Custom Theme Design:</strong> Unique, brand-aligned storefronts that stand out in a crowded, noisy marketplace.</li>
            <li><strong>App Integration & Configuration:</strong> Seamlessly implementing essential tools for reviews, upselling, and inventory management.</li>
            <li><strong>Conversion Rate Optimization (CRO):</strong> Data-driven tweaks and A/B testing designed to squeeze every ounce of revenue from your traffic.</li>
            <li><strong>Frictionless Checkout:</strong> Streamlined, highly secure payment flows that drastically reduce drop-off rates and boost completed sales.</li>
          </ul>
          <p>Beyond the initial build, we provide strategic consulting on product merchandising, subscription models, and customer retention loops. We don't just build your store; we provide you with the exact blueprint needed to scale your brand to seven figures and far beyond. Your Shopify store will become your most valuable and reliable asset.</p>
        </>
      ),
      image: '/service-3.png'
    },
    {
      id: 4,
      title: 'Branding & Creative',
      desc: (
        <>
          <p>In a world overflowing with generic noise, a powerful, unforgettable brand identity is your ultimate competitive advantage. Our Branding & Creative services are designed to craft deep, emotional connections between your business and your exact target audience. We go far beyond simple logo design; we build comprehensive visual systems and compelling brand narratives that instantly communicate your core values, your unique mission, and your market positioning.</p>
          <p>We start with an intensive discovery phase, diving deep into your brand's DNA to understand exactly what makes you unique. From there, our award-winning creative team develops stunning visual assets that demand immediate attention. We ensure absolute consistency across every single touchpoint, from your digital presence and social media profiles to physical packaging and print materials. A cohesive brand breeds trust, and trust invariably drives massive sales.</p>
          <ul className={styles.stickyList}>
            <li><strong>Logo & Identity Systems:</strong> Timeless, highly versatile logos paired with strict, comprehensive brand guidelines.</li>
            <li><strong>Typography & Color Theory:</strong> Strategic visual selections psychologically proven to evoke the exact right emotions from your customers.</li>
            <li><strong>Digital Asset Creation:</strong> High-impact graphics, custom illustrations, and dynamic motion design for all your marketing channels.</li>
            <li><strong>Brand Voice & Copywriting:</strong> Crafting a unique, compelling narrative tone that makes your brand sound as good as it looks.</li>
          </ul>
          <p>Your brand is much more than a visual aesthetic; it is the fundamental promise you make to your customers. We help you articulate that promise with absolute clarity and undeniable style. Whether you are launching a completely new venture from scratch or executing a massive rebranding campaign, our creative team ensures you leave a permanent, indelible mark on your industry.</p>
        </>
      ),
      image: '/service-4.png'
    },
    {
      id: 5,
      title: 'Analytics & Reporting',
      desc: (
        <>
          <p>Stop relying on gut feelings and start making aggressive business decisions backed by hard, irrefutable data. In the digital age, information is your most valuable currency. Our Analytics & Reporting services dive deep into the numbers to uncover the hidden truths about your audience's behavior, your campaign performance, and your overall digital health. We transform overwhelming raw data into crystal-clear, highly actionable insights that drive immediate revenue growth.</p>
          <p>We implement highly advanced tracking systems that monitor every single complex user interaction across your entire digital ecosystem. From intricate click heatmaps and deep session recordings to complex multi-touch attribution modeling, we leave absolutely no stone unturned. We build highly customized, real-time dashboards that give you a bird's-eye view of your most critical Key Performance Indicators (KPIs) exactly when you need them.</p>
          <ul className={styles.stickyList}>
            <li><strong>Custom Dashboard Creation:</strong> Real-time, visually stunning reporting hubs tailored specifically to your exact business goals.</li>
            <li><strong>Advanced Conversion Tracking:</strong> Pinpointing exactly which specific channels and campaigns are driving your most valuable sales.</li>
            <li><strong>User Behavior Analysis:</strong> Discovering precisely where users are dropping off and rapidly identifying critical areas for immediate improvement.</li>
            <li><strong>A/B & Multivariate Testing:</strong> Rigorously experimenting with different layouts and copy to mathematically determine the highest converting variations.</li>
          </ul>
          <p>Data without context is completely useless. Our expert analysts provide regular, deeply insightful strategic reviews, breaking down exactly what the numbers mean in plain English and offering highly prescriptive recommendations for your next steps. We turn complex analytics into your unfair, strategic advantage, ensuring you are always one step ahead of your toughest competitors.</p>
        </>
      ),
      image: '/service-5.png'
    },
    {
      id: 6,
      title: 'Social Media Marketing',
      desc: (
        <>
          <p>Social media is no longer just a place to post casual updates; it is a critical, high-stakes battleground for customer attention and fierce brand loyalty. We build deeply engaging, highly active communities and rapidly explode your brand awareness across every major social platform (Instagram, TikTok, LinkedIn, Twitter, etc.). Our strategies are designed to cut straight through the noise, spark genuine viral conversations, and turn casual passive scrollers into passionate, vocal brand advocates.</p>
          <p>We handle every single aspect of your social presence, from high-level strategic planning and calendar management to day-to-day community engagement and aggressive crisis management. We produce highly relatable, trend-jacking content that resonates deeply with your specific target demographic. Furthermore, our targeted paid social ad campaigns are meticulously designed to maximize reach and drive massive, highly qualified traffic directly to your primary conversion funnels.</p>
          <ul className={styles.stickyList}>
            <li><strong>Content Strategy & Creation:</strong> Producing high-quality, highly shareable photos, viral videos, and engaging graphics.</li>
            <li><strong>Community Management:</strong> Actively engaging with your audience, rapidly responding to comments, and deeply fostering brand loyalty.</li>
            <li><strong>Paid Social Advertising:</strong> Highly targeted, massively scalable ad campaigns designed to generate immediate, profitable leads.</li>
            <li><strong>Influencer Partnerships:</strong> Strategically collaborating with key industry voices to drastically expand your organic reach.</li>
          </ul>
          <p>We don't just chase empty likes or vanity follower counts; we focus relentlessly on building highly meaningful relationships that directly translate into measurable business value. By consistently delivering immense value and entertainment, we ensure your brand remains constantly top-of-mind, establishing a dominant, undeniable presence in your industry's social sphere.</p>
        </>
      ),
      image: '/service-6.png'
    },
  ];

  const goToPage = (index) => {
    setCurrentPage(index);
  };

  const navigateService = (direction) => {
    if (!activeService) return;

    // Set animation direction
    setAnimationClass(direction === 1 ? styles.slideInFromRight : styles.slideInFromLeft);

    const currentIndex = servicesData.findIndex(s => s.id === activeService.id);
    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) nextIndex = servicesData.length - 1;
    if (nextIndex >= servicesData.length) nextIndex = 0;

    // Tiny timeout to allow animation state to register if rapidly clicking
    setTimeout(() => setActiveService(servicesData[nextIndex]), 10);
  };

  const navItems = [
    { name: 'HOME', index: 0 },
    { name: 'SERVICES', index: 1 },
    { name: 'PRODUCTS', index: 2 },
    { name: 'BLOG', index: 3 },
    { name: 'ABOUT US', index: 4 },
    { name: 'CONTACT US', index: 5 },
  ];

  const pages = [
    {
      title: "Home",
      content: (
        <div className={styles.heroPageWrapper}>
          {/* Left Column */}
          <div className={styles.heroContentLeft}>
            <p className={styles.greetingText}>Nice to meet you! 👋</p>

            <h1 className={styles.heroMainTitle}>
              WELCOME TO BRANDIQ
            </h1>

            <div className={styles.heroDivider}></div>

            <h3 className={styles.heroSubtitle}>Digital Marketing. Strategic Growth.</h3>

            <p className={styles.heroBodyText}>
              We help brands grow smarter with creative strategies, powerful storytelling, and data-driven marketing that delivers real results.
            </p>

            <div className={styles.heroMission}>
              <span className={styles.heartIcon}>♡</span>
              <p className={styles.missionText}>Your growth is our mission.</p>
            </div>
          </div>

          {/* Right Column - Collage placeholder */}
          <div className={styles.heroContentRight}>
            {/* The user will need to place the collage image as 'hero-collage.png' in the public folder */}
            <img src="/welcome-page.png" alt="Marketing Sketch Collage" className={styles.heroCollage} />
          </div>
        </div>
      )
    },
    {
      title: "Services",
      content: (
        <div className={styles.servicesPageWrapper}>
          {/* Left Column */}
          <div className={styles.servicesContentLeft}>
            <p className={styles.servicesGreetingText}>What We Do</p>
            <h1 className={styles.servicesMainTitle}>Our<br />Services</h1>
            <p className={styles.servicesBodyText}>
              End-to-end digital solutions to build, grow and elevate your brand.
            </p>

            <div className={styles.servicesDivider}></div>

            <div className={styles.planeIconContainer}>
              <span className={styles.planeSketch}>✈️</span>
              <svg className={styles.dashedLinePath} viewBox="0 0 100 100">
                <path d="M10,90 Q40,40 90,10" fill="none" stroke="#999" strokeWidth="2" strokeDasharray="5,5" />
              </svg>
            </div>
          </div>

          {/* Right Column - Service Cards Grid */}
          <div className={styles.servicesContentRight}>
            <div className={styles.servicesGrid}>
              {servicesData.map((service) => (
                <div key={service.id} className={styles.serviceCard} onClick={() => setActiveService(service)}>
                  <img src={service.image} alt={service.title} className={styles.serviceIcon} />
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <div className={styles.serviceCardFooter}>
                    <span className={styles.exploreText}>Explore Service</span>
                    <span className={styles.cardArrow}>→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Products",
      content: (
        <div className={styles.productsPageWrapper}>
          {/* Top Section */}
          <div className={styles.productsTopSection}>
            <div className={styles.productsContentLeft}>
              <p className={styles.productsGreetingText}>What We Offer</p>
              <h1 className={styles.productsMainTitle}>OUR PRODUCTS</h1>
              <h3 className={styles.productsSubtitle}>Premium Digital Products, Made for You.</h3>
              <p className={styles.productsBodyText}>
                Explore our collection of high-quality digital products designed to help you learn, grow, and achieve more. Instant access. Lifetime value.
              </p>

              <div className={styles.productsButtonGroup}>
                <button className={styles.btnPrimary} onClick={() => setActiveOverlay('store')}>
                  <span className={styles.btnIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                  </span> GO TO STORE <span className={styles.btnArrow}>→</span>
                </button>
                <button className={styles.btnSecondary} onClick={() => setActiveOverlay('downloads')}>
                  <span className={styles.btnIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                  </span> YOUR DOWNLOADS <span className={styles.btnArrow}>→</span>
                </button>
              </div>
            </div>

            <div className={styles.productsContentRight}>
              <img src="/products-hero.png" alt="Our Products" className={styles.productsHeroImage} />
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Blog",
      content: (
        <div className={styles.blogPageWrapper}>
          {/* Hero Section */}
          <div className={styles.blogHero}>
            <div className={styles.blogHeroLeft}>
              <p className={styles.blogGreetingText}>From Ideas to Impact</p>
              <h1 className={styles.blogMainTitle}>OUR BLOG</h1>
              <p className={styles.blogBodyText}>
                Insights, strategies, and tips to help you<br />
                stay ahead in the digital world.<br />
                Learn. Grow. Succeed.
              </p>
            </div>
            <div className={styles.blogHeroRight}>
              <div className={styles.blogHeroImageContainer}>
                <img src="/blog.png" alt="Blog Illustration" className={styles.blogHeroImage} />
                <button className={styles.scrollDownBtn} onClick={() => document.getElementById('latest-articles').scrollIntoView({ behavior: 'smooth' })}>
                  See our latest articles ↓
                </button>
              </div>
            </div>
          </div>

          {/* Latest Articles Section */}
          <div id="latest-articles" className={styles.blogArticlesSection}>
            <h2 className={styles.blogArticlesTitle}><span>Latest Articles</span></h2>
            <div className={styles.blogArticlesGrid}>
              {/* Card 1 */}
              <div className={styles.blogArticleCard}>
                <img src="/service-1.png" alt="Digital Marketing" className={styles.blogArticleIcon} />
                <div className={styles.blogArticleContent}>
                  <span className={styles.blogArticleTag}>Digital Marketing</span>
                  <h3 className={styles.blogArticleTitle}>7 Digital Marketing Strategies That Drive Real Results</h3>
                  <p className={styles.blogArticleDesc}>Discover proven strategies to boost your online presence, engage your audience, and grow your business.</p>
                  <button className={styles.blogReadBtn}>READ ARTICLE →</button>
                </div>
              </div>
              {/* Card 2 */}
              <div className={styles.blogArticleCard}>
                <img src="/service-2.png" alt="Web Development" className={styles.blogArticleIcon} />
                <div className={styles.blogArticleContent}>
                  <span className={styles.blogArticleTag}>Web Development</span>
                  <h3 className={styles.blogArticleTitle}>Web Development Trends You Should Watch in 2024</h3>
                  <p className={styles.blogArticleDesc}>Explore the latest web development trends and technologies shaping the future of the digital experience.</p>
                  <button className={styles.blogReadBtn}>READ ARTICLE →</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "About Us",
      content: (
        <div className={styles.aboutPageWrapper}>
          {/* Hero Section */}
          <div className={styles.aboutHero}>
            <div className={styles.aboutHeroLeft}>
              <p className={styles.aboutGreetingText}>Get to Know Us</p>
              <h1 className={styles.aboutMainTitle}>ABOUT US</h1>
              <p className={styles.aboutBodyText}>
                We are a team of passionate innovators, creators,<br/>
                and problem-solvers helping businesses grow<br/>
                in the digital world.
              </p>
              <p className={styles.aboutBodyText}>
                Our mission is to deliver smart, result-driven<br/>
                solutions with creativity and clarity.
              </p>
              <div className={styles.aboutScribbleUnderline}></div>
            </div>
            <div className={styles.aboutHeroRight}>
               <img src="/logo.png" alt="About Us Illustration" className={styles.aboutHeroImage} />
            </div>
          </div>

          {/* Stats Section */}
          <div className={styles.aboutStatsContainer}>
            <div className={styles.aboutStatItem}>
              <Users className={styles.aboutStatIcon} size={40} strokeWidth={1.5} />
              <h2>50+</h2>
              <h3>Happy Clients</h3>
              <p>We've had the privilege of working with amazing brands and startups.</p>
            </div>
            <div className={styles.aboutStatItem}>
              <Rocket className={styles.aboutStatIcon} size={40} strokeWidth={1.5} />
              <h2>120+</h2>
              <h3>Projects Completed</h3>
              <p>Successful projects delivered across various industries.</p>
            </div>
            <div className={styles.aboutStatItem}>
              <Award className={styles.aboutStatIcon} size={40} strokeWidth={1.5} />
              <h2>5+</h2>
              <h3>Years of Experience</h3>
              <p>Built on experience, driven by passion, focused on results.</p>
            </div>
            <div className={styles.aboutStatItem}>
              <Heart className={styles.aboutStatIcon} size={40} strokeWidth={1.5} />
              <h2>100%</h2>
              <h3>Client Satisfaction</h3>
              <p>We prioritize quality, communication, and long-term relationships.</p>
            </div>
          </div>

          {/* Story & Values Section */}
          <div className={styles.aboutSplitSection}>
            <div className={styles.aboutStorySide}>
              <p className={styles.aboutGreetingText}>Our Story</p>
              <h2 className={styles.aboutSectionTitle}>Driven by Purpose. Focused on You.</h2>
              <p className={styles.aboutStoryText}>
                We started with a simple idea — to help businesses stand out and grow through smart digital solutions. Since day one, we've believed in building meaningful connections, delivering real value, and growing together with our clients.
              </p>
              <button className={styles.btnPrimary}>
                Let's Work Together <span className={styles.btnArrow}>→</span>
              </button>
            </div>
            
            <div className={styles.aboutValuesSide}>
              <p className={styles.aboutGreetingText}>Our Values</p>
              <div className={styles.aboutValuesGrid}>
                <div className={styles.aboutValueItem}>
                  <Target className={styles.aboutValueIcon} size={36} strokeWidth={1.5} />
                  <h4>Focus</h4>
                  <p>We stay focused on what matters most — your goals.</p>
                </div>
                <div className={styles.aboutValueItem}>
                  <Lightbulb className={styles.aboutValueIcon} size={36} strokeWidth={1.5} />
                  <h4>Creativity</h4>
                  <p>Creative ideas that bring your brand to life.</p>
                </div>
                <div className={styles.aboutValueItem}>
                  <Handshake className={styles.aboutValueIcon} size={36} strokeWidth={1.5} />
                  <h4>Integrity</h4>
                  <p>Honest communication and transparent processes.</p>
                </div>
                <div className={styles.aboutValueItem}>
                  <BarChart3 className={styles.aboutValueIcon} size={36} strokeWidth={1.5} />
                  <h4>Results</h4>
                  <p>We measure success by the results we deliver.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Banner */}
          <div className={styles.aboutFooterBanner}>
             <div className={styles.aboutFooterLeft}>
               <Send className={styles.aboutFooterIcon} size={40} strokeWidth={1.5} />
               <h2>Let's Build Something Great Together!</h2>
             </div>
             <div className={styles.aboutFooterRight}>
               <p>Have a project in mind or just want to say hello?<br/>We'd love to hear from you.</p>
               <button className={styles.btnPrimary} onClick={() => goToPage(5)}>
                 Contact Us <span className={styles.btnArrow}>→</span>
               </button>
             </div>
          </div>

        </div>
      )
    },
    {
      title: "Contact Us",
      content: (
        <div className={styles.contactContainer}>
          <div className={styles.contactLayout}>
            {/* Left side */}
            <div className={styles.contactLeft}>
              <div className={styles.contactBadge}>
                <Send size={14} />
                <span>GET IN TOUCH</span>
              </div>
              
              <h1 className={styles.contactTitle}>Contact Us</h1>
              <p className={styles.contactDesc}>
                We'd love to hear from you! Whether you have a question, need support, or want to work together, feel free to reach out to us.
              </p>
              
              <div className={styles.contactDivider}></div>
              
              <div className={styles.contactInfoList}>
                <div className={styles.contactInfoItem}>
                  <div className={styles.contactInfoIconWrapper}>
                    <Mail size={20} strokeWidth={1.5} />
                  </div>
                  <div className={styles.contactInfoContent}>
                    <h4>Email Us</h4>
                    <p>hello@brandiq.com<br/>We reply within 24 hours</p>
                  </div>
                </div>
                
                <div className={styles.contactInfoItem}>
                  <div className={styles.contactInfoIconWrapper}>
                    <Phone size={20} strokeWidth={1.5} />
                  </div>
                  <div className={styles.contactInfoContent}>
                    <h4>Call Us</h4>
                    <p>+91 98765 43210<br/>Mon - Fri, 10:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className={styles.contactInfoItem}>
                  <div className={styles.contactInfoIconWrapper}>
                    <MapPin size={20} strokeWidth={1.5} />
                  </div>
                  <div className={styles.contactInfoContent}>
                    <h4>Our Office</h4>
                    <p>123 Business Street, Suite 100<br/>New Delhi, India - 110001</p>
                  </div>
                </div>


              </div>
            </div>

            {/* Right side form */}
            <div className={styles.contactRight}>
              <div className={styles.contactFormHeader}>
                <div className={styles.contactMessageIconWrapper}>
                  <MessageSquare size={28} strokeWidth={1.5} />
                </div>
                <div className={styles.contactFormHeaderContent}>
                  <h3>Send Us a Message</h3>
                  <p>Fill out the form below and we'll get back to you soon.</p>
                </div>
              </div>

              <form className={styles.contactForm}>
                <div className={styles.formRow}>
                  <div className={styles.inputWrapper}>
                    <UserIcon size={18} className={styles.inputIcon} />
                    <input type="text" placeholder="Your Name" className={styles.contactInput} />
                  </div>
                  <div className={styles.inputWrapper}>
                    <Mail size={18} className={styles.inputIcon} />
                    <input type="email" placeholder="Your Email" className={styles.contactInput} />
                  </div>
                </div>
                
                <div className={styles.inputWrapper}>
                  <Phone size={18} className={styles.inputIcon} />
                  <input type="text" placeholder="Your Phone (Optional)" className={styles.contactInput} />
                </div>

                <div className={styles.inputWrapper}>
                  <Tag size={18} className={styles.inputIcon} />
                  <select className={styles.contactSelect}>
                    <option value="" disabled selected>Subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Support</option>
                    <option value="collaboration">Collaboration</option>
                  </select>
                  <ChevronDown size={18} className={styles.selectIcon} />
                </div>

                <div className={styles.inputWrapper}>
                  <PenLine size={18} className={styles.inputIcon} style={{ top: '1rem' }} />
                  <textarea placeholder="Your Message" className={styles.contactTextarea}></textarea>
                </div>

                <button type="button" className={styles.submitBtn}>
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Features Bar */}
          <div className={styles.contactFeaturesBar}>
            <div className={styles.featureItem}>
              <Clock size={24} className={styles.featureIcon} />
              <h4>Fast Response</h4>
              <p>We respond to all inquiries within 24 hours.</p>
            </div>
            <div className={styles.featureItem}>
              <ShieldCheck size={24} className={styles.featureIcon} />
              <h4>Reliable Support</h4>
              <p>Our team is here to help you with the best solutions.</p>
            </div>
            <div className={styles.featureItem}>
              <Handshake size={24} className={styles.featureIcon} />
              <h4>Let's Collaborate</h4>
              <p>Have a project in mind? Let's build something great together.</p>
            </div>
            <div className={styles.featureItem}>
              <Heart size={24} className={styles.featureIcon} />
              <h4>We Care</h4>
              <p>Your satisfaction is our top priority.</p>
            </div>
            <div className={styles.featureIllustration}>
               <img src="/contact-illustration.png" alt="Contact Illustration" style={{ width: '100%', maxWidth: '120px', objectFit: 'contain' }} />

            </div>
          </div>
        </div>
      )
    },
    {
      title: "Profile",
      content: (
        <div>
          <h2>Your Profile</h2>
          <p>Welcome back! Here are your saved items and account details.</p>
          <button className="notebook-button" onClick={() => setIsSignedIn(false)}>Sign Out</button>
        </div>
      )
    }
  ];

  const toggleWishlist = (productId) => {
    if (wishlistItems.includes(productId)) {
      setWishlistItems(wishlistItems.filter(id => id !== productId));
    } else {
      setWishlistItems([...wishlistItems, productId]);
    }
  };

  const toggleCart = (product) => {
    const exists = cartItems.find(item => item.id === product.id);
    if (exists) {
      setCartItems(cartItems.filter(item => item.id !== product.id));
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  const filteredStoreProducts = storeProducts.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;

    if (priceFilter === 'under50') return product.price < 50;
    if (priceFilter === 'over50') return product.price >= 50;
    return true;
  });

  const cartSubtotal = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <main className={styles.mainContainer}>
      {/* Top Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <button
              key={item.name}
              className={`${styles.navButton} ${currentPage === item.index ? styles.activeNav : ''}`}
              onClick={() => goToPage(item.index)}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className={styles.navRight}>
          {!isSignedIn ? (
            <button className={styles.signInButton} onClick={() => setIsSignedIn(true)}>
              SIGN IN
            </button>
          ) : (
            <button className={styles.signInButton} onClick={() => goToPage(6)}>
              PROFILE
            </button>
          )}
        </div>
      </nav>

      {/* Notebook Environment */}
      <NotebookLayout currentPageIndex={currentPage} pages={pages}>
        {pages[currentPage].content}
      </NotebookLayout>

      {/* Full Screen Overlay for Active Service */}
      {activeService && (
        <div className={styles.serviceDetailOverlay}>
          <button className={styles.goBackButton} onClick={() => setActiveService(null)}>
            ← Go Back
          </button>

          <button className={styles.navArrowLeft} onClick={() => navigateService(-1)}>
            ‹
          </button>
          <button className={styles.navArrowRight} onClick={() => navigateService(1)}>
            ›
          </button>

          <div key={activeService.id} className={`${styles.serviceDetailContent} ${animationClass}`}>
            <h1 className={styles.serviceDetailTitle}>{activeService.title}</h1>

            <div className={styles.stickyNote}>
              <img src={activeService.image} alt={activeService.title} className={styles.stickyNoteImage} />
              <div className={styles.stickyNoteDesc}>{activeService.desc}</div>
            </div>
          </div>
        </div>
      )}

      {/* Full Screen Overlay for Digital Store / Cart / Wishlist */}
      {activeOverlay && (
        <div className={styles.storeOverlay}>
          <div className={styles.storeTopNav}>
            <button className={styles.storeNavBtn} onClick={() => {
              if (activeOverlay === 'store') setActiveOverlay(null);
              else setActiveOverlay('store');
            }}>
              {activeOverlay === 'store' ? '← Go Back' : '← Back to Store'}
            </button>

            {activeOverlay === 'store' && (
              <div className={styles.storeFilters}>
                <input
                  type="text"
                  placeholder="Search products..."
                  className={styles.storeSearchInput}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <select className={styles.storePriceFilter} value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
                  <option value="all">All Prices</option>
                  <option value="under50">Under $50</option>
                  <option value="over50">$50 and up</option>
                </select>
              </div>
            )}

            <div className={styles.storeActionsNav}>
              <button className={styles.storeNavBtn} onClick={() => setActiveOverlay('downloads')}>
                Downloads
              </button>
              <button className={styles.storeNavBtn} onClick={() => setActiveOverlay('wishlist')}>
                Wishlist ({wishlistItems.length})
              </button>
              <button className={styles.storeNavBtn} onClick={() => setActiveOverlay('cart')}>
                Cart ({cartItems.length})
              </button>
            </div>
          </div>

          <div className={styles.storeOverlayContent}>
            {activeOverlay === 'store' && (
              <div className={styles.productGrid}>
                {filteredStoreProducts.map(product => (
                  <div key={product.id} className={styles.productStickyNote}>
                    <div className={styles.stickyPin}></div>
                    <img src={product.image} alt={product.title} className={styles.productImage} />
                    <h3 className={styles.productTitle}>{product.title}</h3>
                    <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
                    <div className={styles.productActions}>
                      <button
                        className={`${styles.iconBtn} ${wishlistItems.includes(product.id) ? styles.activeHeart : ''}`}
                        onClick={() => toggleWishlist(product.id)}
                      >
                        {wishlistItems.includes(product.id) ? '❤️' : '🤍'}
                      </button>
                      <button
                        className={styles.addToCartBtn}
                        onClick={() => toggleCart(product)}
                      >
                        {cartItems.find(item => item.id === product.id) ? 'Remove' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                ))}
                {filteredStoreProducts.length === 0 && (
                  <p className={styles.emptyStateMsg}>No products found matching your search.</p>
                )}
              </div>
            )}

            {activeOverlay === 'cart' && (
              <div className={styles.cartView}>
                <h1 className={styles.storeSectionTitle}>Your Cart</h1>
                {cartItems.length === 0 ? (
                  <p className={styles.emptyStateMsg}>Your cart is empty.</p>
                ) : (
                  <div className={styles.cartContentSplit}>
                    <div className={styles.cartItemsList}>
                      {cartItems.map(item => (
                        <div key={item.id} className={styles.cartItemCard}>
                          <img src={item.image} alt={item.title} className={styles.cartItemImage} />
                          <div className={styles.cartItemInfo}>
                            <h3>{item.title}</h3>
                            <p>${item.price.toFixed(2)}</p>
                          </div>
                          <button className={`${styles.removeBtn} ${styles.iconRemoveBtn}`} onClick={() => toggleCart(item)} aria-label="Remove item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1="10" y1="11" x2="10" y2="17"></line>
                              <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className={styles.subtotalSection}>
                      <h2>Subtotal: ${cartSubtotal}</h2>
                      <button className={styles.payNowBtn}>Pay Now</button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeOverlay === 'wishlist' && (
              <div className={styles.wishlistView}>
                <h1 className={styles.storeSectionTitle}>Your Wishlist</h1>
                <div className={styles.productGrid}>
                  {storeProducts.filter(p => wishlistItems.includes(p.id)).map(product => (
                    <div key={product.id} className={styles.productStickyNote}>
                      <div className={styles.stickyPin}></div>
                      <img src={product.image} alt={product.title} className={styles.productImage} />
                      <h3 className={styles.productTitle}>{product.title}</h3>
                      <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
                      <div className={styles.productActions}>
                        <button className={styles.removeBtn} onClick={() => toggleWishlist(product.id)}>Remove</button>
                        <button className={styles.addToCartBtn} onClick={() => toggleCart(product)}>
                          {cartItems.find(item => item.id === product.id) ? 'In Cart' : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  ))}
                  {wishlistItems.length === 0 && <p className={styles.emptyStateMsg}>Your wishlist is empty.</p>}
                </div>
              </div>
            )}

            {activeOverlay === 'downloads' && (
              <div className={styles.downloadsView}>
                <h1 className={styles.storeSectionTitle}>Your Downloads</h1>
                <p className={styles.emptyStateMsg}>You haven't purchased any items yet.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
