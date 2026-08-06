# Aran Media Showcase

Build this following engineering best practices:

- Write all code to WCAG AA accessibility standards

- Create and use reusable components throughout

- Use semantic HTML and proper component architecture

- Avoid absolute positioning; use flexbox/grid layouts

- Build actual code components, not image SVGs

- Keep code clean, maintainable, and well-structured





Use the client-provided logo and media assets in their original high resolution. Do not replace them with stock images or placeholder logos. Preserve the brand identity throughout the website. 





I need you to build a complete website for a business called Aran Media & Digital Printing ("Aran Elan").

APP OVERVIEW:

1. **App Type & Purpose**: What kind of app is this? What problem does it solve?

App Type
Corporate Business Website for a Media Production and Digital Printing company.
Purpose

Aran Media & Digital Printing is a one-stop solution for photography, videography, event media services, and digital printing. The website is designed to showcase the company's expertise, display completed projects, build trust with potential customers, and generate leads through quote requests and direct contact.

Problem It Solves:

Businesses and individuals often need multiple vendors for photography, videography, printing, branding, signage, and event media. Aran Media brings all these services together under one brand, making it easier for customers to explore services, view previous work, and contact the company for customized solutions.




Target Audience

Wedding & Event Clients

Small & Medium Businesses

Corporate Organizations

Educational Institutions

Retail Shops

Real Estate Companies

Political Campaigns

Individuals requiring digital printing or media services





2. **Core Features**: List the 5-7 main features/functionalities




1. Service Showcase




Display all media and digital printing services with detailed descriptions, images, and benefits.




2. Portfolio & Gallery




Present high-quality images and videos of completed projects, categorized by service type.




3. Quote Request




Allow customers to request quotations through a contact form or WhatsApp.




4. Company Information




Introduce Aran Media, its mission, expertise, and why customers should choose the company.




5. Contact & Location




Provide business address, phone number, email, Google Maps location, and social media links.




6. Testimonials




Display customer reviews and success stories to build trust and credibility.




7. Responsive User Experience




Ensure the website is fully responsive, accessible, and optimized for desktop, tablet, and mobile devices.





3. **User Flow**: Describe the main user journey from start to finish




Visitor Lands on Home Page

            │

            ▼

Views Hero Banner & Company Introduction

            │

            ▼

Explores Available Services

            │

            ▼

Views Portfolio & Gallery

            │

            ▼

Reads Testimonials & Company Highlights

            │

            ▼

Clicks "Get a Quote" or "Contact Us"

            │

            ▼

Submits Contact Form / Calls / WhatsApp

            │

            ▼

Business Team Follows Up with Customer





4. **Page Structure**: Break down the app into distinct pages/screens and list them with a 1-sentence description of each




1. Home




The landing page introducing Aran Media, highlighting services, featured work, company strengths, and clear call-to-action buttons.




2. About Us




Provides the company's background, mission, vision, values, experience, and commitment to quality service.




3. Services




Displays all services offered by Aran Media, divided into Media Services and Digital Printing Services, with detailed descriptions and images.




4. Portfolio




Showcases completed projects across photography, videography, printing, branding, and event management with category filters.




5. Gallery




A visual gallery featuring high-quality photos and videos from recent projects and events.




6. Testimonials




Highlights customer feedback, reviews, and client experiences to establish credibility.




7. FAQ




Answers common customer questions regarding services, pricing, delivery timelines, booking, and support.




8. Contact Us




Provides business contact details, address, embedded Google Map, contact form, WhatsApp button, and social media links for easy communication.




9. Get Quote (Optional Dedicated Page)




Allows customers to submit project requirements and receive a customized quotation for media or printing services.




Expected Website Navigation

Home

About Us

Services

Portfolio

Gallery

Testimonials

FAQ

Contact Us

Get Quote





# Global Website Structure




Header

- Company Logo

- Navigation Menu

- Get a Quote Button

- Mobile Hamburger Menu




Footer

- Company Logo

- Quick Links

- Services Links

- Contact Information

- Social Media Icons

- Copyright




Global Components

- Sticky Header

- Floating WhatsApp Button

- Scroll-to-Top Button

- Responsive Navigation

- CTA Buttons





Page-by-Page UX Flow

5.1 Home

Purpose First impression; communicate what Aran Media does and drive visitors to explore services or request a quote.

Layout  Full-width hero, then stacked content sections, footer at bottom.

Sections (top to bottom)    •   Hero banner: headline ("Creative Solutions For Every Occasion"), sub-text, 4 trust icons (High Quality, Experienced Team, Creative Ideas, On Time Delivery), hero image collage

•   "Our Services" grid — 4 cards (Digital Print, Event Management, Drone Photography, Videography), each with icon, image, feature list, "Learn More" button

•   "Have a Project in Mind?" CTA banner with "Get a Free Quote" button

•   Trust strip — 4 value props (Premium Quality, Expert Team, On Time Delivery, Customer Satisfaction)

•   Footer

Key Interactions    Nav links, Get a Quote button, 4x Learn More buttons scroll/link to respective service pages, Get a Free Quote CTA opens contact/quote form

Navigation  Entry point from all external links; links out to About, Services (x4), Portfolio, Gallery, Contact Us

Content Needed  Hero headline/subtext copy, 4 service card descriptions + feature bullets, CTA copy, trust strip copy, footer contact details

States  Image loading placeholder for hero collage; no data-dependent states (static content page)




5.2 About Us

Purpose Build credibility — who Aran Media is, experience, and why customers should choose them.

Layout  Header, intro section, content sections, footer.

Sections (top to bottom)    •   Page banner/title

•   Company story / introduction

•   Why Choose Us (reuse trust strip: Premium Quality, Expert Team, On Time Delivery, Customer Satisfaction)

•   Team or experience highlights (optional, pending client photos/content)

•   CTA banner

•   Footer

Key Interactions    CTA button to Contact Us

Navigation  Accessible from main nav; links to Contact Us via CTA

Content Needed  Company background copy, mission/values, team photos if available

States  N/A — static content page




5.3 Services (Overview)

Purpose Central hub listing all 4 service categories before visitors drill into specifics.

Layout  Header/banner, 4-card grid (same pattern as Home), footer.

Sections (top to bottom)    •   Page banner ("Our Services")

•   4 service cards: Digital Print Service, Event Management, Drone Photography, Videography — each with icon, image, short feature list, Learn More button

•   CTA banner

•   Footer

Key Interactions    4x Learn More buttons linking to individual service pages

Navigation  Accessible from main nav; links to 4 service sub-pages

Content Needed  Same content as Home service cards, or expanded intro copy per category

States  N/A — static content page




5.3.1 Service Detail — Digital Print Service

Purpose Detail printing/offset offerings and prompt a quote request.

Layout  Banner, feature list, gallery/samples, CTA, footer.

Sections (top to bottom)    •   Page banner with service name

•   Full feature list: High Quality Digital Printing, Banners/Flex/Backdrop, Offset Printing, Visiting Cards/Brochures/Pamphlets, Fast Turnaround, Vibrant Colors & Premium Finish

•   Sample print gallery

•   "Get a Quote" CTA

•   Footer

Key Interactions    Get a Quote CTA opens contact/quote form

Navigation  Reached from Home/Services Learn More; back to Services via nav

Content Needed  Feature bullet copy, sample images of print work

States  Gallery empty-state placeholder if no samples yet




5.3.2 Service Detail — Event Management

Purpose Detail event coverage/planning offerings and prompt inquiry.

Layout  Banner, feature list, sample event gallery, CTA, footer.

Sections (top to bottom)    •   Page banner with service name

•   Full feature list: Wedding, Baby Shower (Punch), Birthday Function, New Born Baby Shoot, Puberty Ceremony, Customized Decor, Complete Event Planning

•   Sample event photo gallery / testimonials (optional)

•   "Get a Quote" CTA

•   Footer

Key Interactions    Get a Quote CTA opens contact/quote form

Navigation  Reached from Home/Services Learn More; back to Services via nav

Content Needed  Feature bullet copy, sample event images

States  Gallery empty-state placeholder if no samples yet




5.3.3 Service Detail — Drone Photography

Purpose Detail aerial photography/videography offerings and prompt inquiry.

Layout  Banner, feature list, sample aerial shots, CTA, footer.

Sections (top to bottom)    •   Page banner with service name

•   Full feature list: Aerial Photography, Stunning Landscape Shots, Real Estate Photography, Event Aerial Coverage, High Resolution Images, Creative Angles

•   Sample aerial photo/video gallery

•   "Get a Quote" CTA

•   Footer

Key Interactions    Get a Quote CTA opens contact/quote form

Navigation  Reached from Home/Services Learn More; back to Services via nav

Content Needed  Feature bullet copy, sample aerial images

States  Gallery empty-state placeholder if no samples yet




5.3.4 Service Detail — Videography

Purpose Detail video production offerings and prompt inquiry.

Layout  Banner, feature list, video showreel/gallery, CTA, footer.

Sections (top to bottom)    •   Page banner with service name

•   Full feature list: Wedding Videography, Event Coverage, Promotional Videos, Cinematic Teasers, Documentary Films, Professional Editing

•   Embedded showreel or sample video thumbnails

•   "Get a Quote" CTA

•   Footer

Key Interactions    Video play controls; Get a Quote CTA opens contact/quote form

Navigation  Reached from Home/Services Learn More; back to Services via nav

Content Needed  Feature bullet copy, sample/showreel videos (or YouTube links)

States  Video loading state; fallback thumbnail if video unavailable




5.4 Portfolio

Purpose Showcase completed work across all service categories to build trust.

Layout  Banner, filterable grid, footer.

Sections (top to bottom)    •   Page banner ("Our Portfolio")

•   Filter/tabs by category: Printing, Events, Drone, Videography

•   Project grid (image/video thumbnails, click to view larger or open project detail)

•   CTA banner

•   Footer

Key Interactions    Category filter tabs, thumbnail click to open lightbox/detail

Navigation  Accessible from main nav

Content Needed  Portfolio images/videos per category, project captions

States  Empty state per filter if no items yet; loading state for lightbox




5.5 Gallery

Purpose General photo/video gallery — broader visual showcase than curated Portfolio.

Layout  Banner, grid/masonry layout, footer.

Sections (top to bottom)    •   Page banner ("Gallery")

•   Photo/video grid (masonry or fixed grid)

•   Footer

Key Interactions    Thumbnail click opens lightbox

Navigation  Accessible from main nav

Content Needed  Gallery images/videos to be supplied by client

States  Empty state if gallery not yet populated; lightbox loading state




5.6 Contact Us

Purpose Capture leads and provide all ways to reach Aran Media.

Layout  Banner, two-column (form + contact details/map), footer.

Sections (top to bottom)    •   Page banner ("Contact Us")

•   Contact form: Name, Phone, Email, Service Interested In (dropdown), Message, Submit

•   Contact details panel: Address, Phone, Email, Social links

•   Embedded Google Map (Harur location)

•   Footer

Key Interactions    Form submission (validation + success/error states), click-to-call phone link, map interaction

Navigation  Accessible from main nav and all CTA buttons site-wide

Content Needed  Form field labels/placeholders, address/phone/email, map embed

States  Form validation errors, submit-success confirmation, submit-failure error message




1. Color Palette




The design should reflect Aran Media's creative and vibrant identity while maintaining a professional and modern appearance. The dark hero section combined with colorful accents creates a premium visual experience.




Brand Colors

Usage   Color   Hex

Primary Deep Navy   #0B0F2F

Secondary   Vibrant Pink    #EC008C

Accent  Golden Yellow   #FFC107

Supporting Blue #2563EB 

Supporting Purple   #7C3AED 

Supporting Green    #65A30D 

Background Colors

Usage   Color

Main Background #FFFFFF

Secondary Background    #F8FAFC

Dark Hero/Footer    #0B0F2F

Section Alternate   #F1F5F9

Text Colors

Usage   Color

Primary Text    #111827

Secondary Text  #6B7280

Light Text  #FFFFFF

Disabled Text   #9CA3AF

Status Colors

Status  Color

Success #22C55E

Error   #EF4444

Warning #F59E0B

Information #3B82F6

2. Typography

Font Families

Headings




Poppins




Clean

Modern

Professional

Body Text




Inter




Excellent readability across desktop and mobile.




Monospace




JetBrains Mono




Only for technical content if required.




Font Sizes

Element Size

H1  56px

H2  44px

H3  36px

H4  28px

H5  24px

H6  20px

Large Body  18px

Body    16px

Small   14px

Caption 12px

Font Weights

Usage   Weight

Regular 400

Medium  500

SemiBold    600

Bold    700

Line Heights

Element Line Height

Heading 120%

Body    160%

Small   150%

3. Spacing System




Use an 8px spacing scale for consistency.




Token   Size

XS  4px

SM  8px

MD  16px

LG  24px

XL  32px

XXL 48px

XXXL    64px

Section Gap 96px

4. Component Styles

Buttons

Primary Button

Background: Pink → Orange Gradient

Text: White

Border Radius: 12px

Height: 48px

Padding: 16px × 24px

Hover: Slight lift with darker gradient

Shadow: Medium




Example:




Get a Quote




Secondary Button

Background: Deep Navy

Text: White

Border Radius: 12px

Border: None

Ghost Button

Transparent Background

White or Navy Border

Text matches border

Hover fills with brand color

Button Sizes

Size    Height

Small   36px

Medium  48px

Large   56px

Input Fields

Height: 48px

Border Radius: 10px

Border: 1px solid #D1D5DB

Focus Border: Primary Blue

Placeholder: Secondary Gray

Error Border: Red

Text Area

Minimum Height: 120px

Same styling as inputs

Dropdown

Rounded corners

Custom arrow icon

Keyboard accessible

Cards

Service Cards

White background

Rounded corners (20px)

Soft shadow

Colored icon badge

Image on top

CTA button at bottom




Hover:




Lift by 6px

Stronger shadow

Button highlight

Portfolio Cards

Rounded image

Overlay on hover

Project title

Category label

Testimonial Cards

Customer photo

Quote

Star rating

Soft border

Light shadow

Border Radius

Component   Radius

Inputs  10px

Buttons 12px

Cards   20px

Images  20px

Modals  24px

Shadows / Elevation

Level 1




Used for cards




0 4px 12px rgba(0,0,0,0.08)

Level 2




Hover




0 8px 24px rgba(0,0,0,0.12)

Level 3




Modals




0 16px 48px rgba(0,0,0,0.18)

5. Layout Grid

Container Width

Device  Width

Large Desktop   1440px

Desktop 1200px

Tablet  768px

Mobile  100%

Grid

Desktop

12 Columns


Tablet

8 Columns

Mobile

4 Columns

Gutters

Desktop

24px

Tablet

20px

Mobile

16px

Section Padding

Desktop

96px top & bottom

Tablet

72px

Mobile

48px

Responsive Breakpoints

Device  Width

Mobile  ≤576px

Small Tablet    577–767px

Tablet  768–991px

Laptop  992–1199px

Desktop 1200–1439px

Large Desktop   ≥1440px

Build out all 10 pages as separate page components with full functionality, content, and styling according to this design system. Use the business contact details: Bye Pass Road, opp. State Bank of India, Varnathirutha, Harur, Tamil Nadu 636903, Mobile +91 82208 98006.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/fc5a5146-0ef4-4d7c-9be7-84ea1d33cbc8).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
