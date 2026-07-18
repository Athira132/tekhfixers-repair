export interface ServiceInfo {
  slug: string;
  title: string;
  shortDesc: string;
  overview: string;
  image: string;
  bannerImage: string;
  process: { step: string; title: string; desc: string }[];
  whyChooseUs: string[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
  reviews: { author: string; rating: number; text: string; date: string }[];
  metaTitle: string;
  metaDesc: string;
}

export const servicesData: Record<string, ServiceInfo> = {
  "screen-replacement": {
    slug: "screen-replacement",
    title: "Screen Replacement",
    shortDesc: "OEM-grade glass replacements to resolve cracked, scratched, or shattered front glass modules.",
    overview: "Our screen replacement service targets devices with cracked external glass while the underlying OLED/LCD display remains fully functional. By replacing only the outer glass layer using specialized OCA lamination tools, we preserve your original factory display panel and save you up to 50% compared to a complete display swap.",
    image: "https://i.ibb.co/rLg9D5h/image.png",
    bannerImage: "https://i.ibb.co/rLg9D5h/image.png",
    process: [
      { step: "01", title: "Diagnostic Sweep", desc: "We test touch sensitivity, digitizer functionality, and sensor alignment across the entire glass surface." },
      { step: "02", title: "Glass Separation", desc: "Using precision thermal plates, we separate the cracked glass layer from the underlying display." },
      { step: "03", title: "OCA Lamination", desc: "We apply a fresh layer of Optically Clear Adhesive and laminate the new OEM-grade glass sheet in a dust-free chamber." },
      { step: "04", title: "Autoclave Pressure", desc: "The combined module is cured under vacuum pressure to eliminate micro-bubbles and ensure perfect lamination." }
    ],
    whyChooseUs: [
      "Retain your original high-quality factory display panel",
      "Cost-effective alternative to complete display replacement",
      "Dust-free cleanroom environment for OCA lamination",
      "Full warranty support coverage against delamination"
    ],
    faqs: [
      { q: "What is the difference between Screen and Display Replacement?", a: "Screen replacement replaces only the top glass layer when the display underneath works perfectly. Display replacement is required if the screen has black spots, colored lines, or does not light up." },
      { q: "Will I lose my True Tone feature after glass replacement?", a: "No. Since we preserve your original display panel and transfer the original ambient light sensor, True Tone will continue to function normally." }
    ],
    relatedSlugs: ["display-replacement", "face-id-repair"],
    reviews: [
      { author: "Rahul Sharma", rating: 5, text: "Excellent screen repair. The glass looks as good as new and the touch sensitivity is perfectly preserved. Done at my doorstep in 40 minutes!", date: "2 days ago" }
    ],
    metaTitle: "Screen Replacement in Trivandrum | iPhonix Mobile Repair",
    metaDesc: "Looking for screen replacement in Trivandrum? iPhonix provides professional smartphone screen replacement services in Karamana with quality parts and expert technicians."
  },
  "display-replacement": {
    slug: "display-replacement",
    title: "Display Replacement",
    shortDesc: "Complete OLED & LCD panel replacements to resolve display bleeding, dead pixels, and touch failures.",
    overview: "If your screen shows black spots, vertical green/purple lines, bleeding colors, or has completely stopped registering touch inputs, you require a complete display panel replacement. We use premium, certified OEM-grade display units to restore crisp visual clarity, original refresh rates, and immediate touch responsiveness.",
    image: "https://i.ibb.co/DgjsCj8n/image.png",
    bannerImage: "https://i.ibb.co/DgjsCj8n/image.png",
    process: [
      { step: "01", title: "Visual & Multi-meter Check", desc: "We confirm display controller lines and power outputs on the logic board before installing the display." },
      { step: "02", title: "Display Removal", desc: "We soften surrounding water-resistant adhesives with controlled heating and safely detach the damaged display panel." },
      { step: "03", title: "IC Serialization & Transfer", desc: "We program and write serialization data from the old display to the new panel to prevent 'non-genuine' alerts." },
      { step: "04", title: "Thermal Adhesion", desc: "We apply new waterproof gaskets and secure the replacement display unit with custom frame clamps." }
    ],
    whyChooseUs: [
      "OEM-grade display panels with original brightness and color reproduction",
      "Data serialization transfer to maintain display authenticity options",
      "Replacement of water-resistance adhesive seals included",
      "Immediate doorstep turnaround in under 30 minutes"
    ],
    faqs: [
      { q: "Will I get a 'non-genuine screen' notification?", a: "No. Our technicians write the hardware ID serialization data from your original panel onto the new screen using professional programmers to prevent system warnings." },
      { q: "Is the display covered under warranty?", a: "Yes, we provide warranty coverage on all replacement display panels, protecting you against touch responsiveness issues or display defects." }
    ],
    relatedSlugs: ["screen-replacement", "motherboard-repair"],
    reviews: [
      { author: "Ananya Nair", rating: 5, text: "My screen was bleeding purple ink after a bad drop. iPhonix replaced the entire display right inside my living room. Truly professional!", date: "1 week ago" }
    ],
    metaTitle: "Mobile Display Replacement in Trivandrum | iPhonix",
    metaDesc: "Professional mobile display replacement in Karamana, Trivandrum for iPhone, Samsung, OnePlus, Pixel, and other major smartphone brands."
  },
  "battery-replacement": {
    slug: "battery-replacement",
    title: "Battery Replacement",
    shortDesc: "Certified battery swaps to restore battery health, prevent rapid drain, and eliminate random shutdowns.",
    overview: "Over time, lithium-ion batteries degrade, leading to reduced runtime, sudden percentage drops, and processor throttling. If your battery health is below 80% or you experience shutdowns under load, our certified battery replacement restores your device to peak performance and original capacity.",
    image: "https://i.ibb.co/MyPYqZ3j/image.png",
    bannerImage: "https://i.ibb.co/MyPYqZ3j/image.png",
    process: [
      { step: "01", title: "Capacity Diagnostics", desc: "We run battery health tests measuring capacity, charge cycles, and voltage stability." },
      { step: "02", title: "Safe Extraction", desc: "Using safe solvent release, we peel off the dangerous battery adhesive strips without puncturing the pack." },
      { step: "03", title: "BMS Board Transfer", desc: "For modern models, we micro-solder your original Battery Management System (BMS) board to display battery health percentages." },
      { step: "04", title: "Secure Installation", desc: "The new pack is adhered using manufacturer-grade pull-tabs and re-connected safely." }
    ],
    whyChooseUs: [
      "High-capacity certified lithium-ion cells matching original specs",
      "BMS micro-soldering to preserve internal Battery Health displays",
      "Safe battery removal procedures to prevent thermal events",
      "Full compliance with environment disposal guidelines"
    ],
    faqs: [
      { q: "When should I replace my phone battery?", a: "We recommend battery replacement when your battery health falls below 80%, or if you experience rapid draining and random shutdowns." },
      { q: "Will my device show 'Unknown Part' after replacement?", a: "For newer iPhone models, we transfer your original BMS chip to the new battery, ensuring your system displays battery health without warnings." }
    ],
    relatedSlugs: ["charging-port-repair", "motherboard-repair"],
    reviews: [
      { author: "Michael George", rating: 5, text: "Battery health went from 76% to 100%. Phone is snappy again and doesn't shutdown at 20% charge. Awesome doorstep service!", date: "3 days ago" }
    ],
    metaTitle: "Mobile Battery Replacement in Trivandrum | iPhonix",
    metaDesc: "Get professional smartphone battery replacement in Karamana and Trivandrum from experienced mobile repair technicians."
  },
  "charging-port-repair": {
    slug: "charging-port-repair",
    title: "Charging Port Repair",
    shortDesc: "Resolve loose charging connections, slow charging speeds, and auxiliary port faults.",
    overview: "A loose charging cable, slow charging indicators, or complete failure to draw current is usually caused by accumulated debris, corrosion, or fractured solder joints in the charging port. We repair or replace charging docks to restore high-speed Power Delivery and sync capabilities.",
    image: "https://i.ibb.co/QRwLj07/image.png",
    bannerImage: "https://i.ibb.co/QRwLj07/image.png",
    process: [
      { step: "01", title: "Current Flow Test", desc: "We hook up a USB power analyzer to measure current drawing capacity and identify short circuits." },
      { step: "02", title: "Microscopic Clean", desc: "We clean debris out of the port. If physical contacts are damaged, we proceed with replacement." },
      { step: "03", title: "Flex Cable Replacement", desc: "The old dock module and its integrated microphone and antenna lines are safely removed." },
      { step: "04", title: "Component Calibration", desc: "We fit the new charging port flex cable, checking signal reception and mic recording." }
    ],
    whyChooseUs: [
      "Replacement of integrated primary microphone and antenna flex assemblies",
      "Upfront USB current analyzer diagnostics to check board faults",
      "High-speed data sync and fast charge protocols fully tested",
      "Precise alignment with custom frame tooling"
    ],
    faqs: [
      { q: "Is it just dirt, or do I need a new port?", a: "Many times it is just packed lint. Our technicians perform a professional deep clean first; if the pins are worn or damaged, we replace the port." },
      { q: "Does replacing the port affect signal strength?", a: "No, we use original-spec flex cables containing built-in antenna contacts to maintain high signal strength." }
    ],
    relatedSlugs: ["battery-replacement", "speaker-repair"],
    reviews: [
      { author: "Siddharth S.", rating: 5, text: "Charging cable kept falling out. The tech cleaned it out and replaced the charging port in 25 mins. Highly recommended doorstep service.", date: "5 days ago" }
    ],
    metaTitle: "Charging Port Repair in Trivandrum | iPhonix",
    metaDesc: "Professional charging port repair for smartphones in Karamana, Trivandrum. Get reliable mobile repair service from iPhonix."
  },
  "camera-repair": {
    slug: "camera-repair",
    title: "Camera Repair",
    shortDesc: "Resolve blurry lenses, focusing failures, image stabilization shaking, and camera sensor cracks.",
    overview: "If your front or rear camera has broken lens glass, fails to focus, displays black viewfinders, or has a shaking sensor due to failed optical image stabilization (OIS), we can replace the camera modules or outer lens covers to restore sharp photo and video recording capabilities.",
    image: "https://i.ibb.co/Q7JSyDRz/image.png",
    bannerImage: "https://i.ibb.co/Q7JSyDRz/image.png",
    process: [
      { step: "01", title: "Optics Diagnostics", desc: "We inspect sensor feed, focus coils, and color profiles to verify module failures." },
      { step: "02", title: "Lens Glass Heat", desc: "For cracked external lenses, we apply controlled local heat to peel away glass fragments safely." },
      { step: "03", title: "Sensor Replacement", desc: "If the camera module is damaged, we replace it with a factory-sealed OIS camera unit." },
      { step: "04", title: "Calibration Check", desc: "We re-program focus matrices and test wide, ultra-wide, and telephoto lens integrations." }
    ],
    whyChooseUs: [
      "Factory-sealed camera modules preserving original megapixel count and optical zooms",
      "Precise dust elimination before securing camera lens frames",
      "Expert micro-alignment of optical image stabilization coils",
      "Restores original low-light performance"
    ],
    faqs: [
      { q: "Can you fix just the cracked camera lens glass?", a: "Yes. If your camera sensor takes clear pictures but the outer protective glass is cracked, we can replace the glass without replacing the expensive camera module." },
      { q: "Why is my camera constantly shaking or vibrating?", a: "This is a failure of the Optical Image Stabilization (OIS) gyro coils, usually caused by heavy vibrations (like motorcycle mounts). We replace the camera module to fix this." }
    ],
    relatedSlugs: ["display-replacement", "face-id-repair"],
    reviews: [
      { author: "Karthik R.", rating: 5, text: "My iPhone camera lens was shattered and pictures were blurry. iPhonix replaced the glass at my house. Now photos are crisp again!", date: "1 week ago" }
    ],
    metaTitle: "Mobile Camera Repair in Trivandrum | iPhonix",
    metaDesc: "Expert smartphone camera repair services in Karamana, Trivandrum for iPhone, Samsung, OnePlus, Pixel, and more."
  },
  "motherboard-repair": {
    slug: "motherboard-repair",
    title: "Motherboard Repair",
    shortDesc: "Advanced micro-soldering, chip level diagnostics, and logic board circuit repairs.",
    overview: "When a phone refuses to turn on, won't charge, loop restarts, or has lost signal due to logic board faults, general repair shops declare it dead. At iPhonix, our micro-soldering engineers specialize in schematic diagnostics, trace repairs, short-circuit detection, and IC chip replacements under high-power microscopes.",
    image: "https://i.ibb.co/KxmBknMz/image.png",
    bannerImage: "https://i.ibb.co/KxmBknMz/image.png",
    process: [
      { step: "01", title: "Thermal Imaging Diagnostics", desc: "We power the board under a thermal camera to pinpoint hot short-circuited capacitors or ICs." },
      { step: "02", title: "Micro-soldering Prep", desc: "We place the board in a custom jig under a digital microscope and mask sensitive areas with polyimide tape." },
      { step: "03", title: "IC Reballing & Swap", desc: "Using hot-air rework stations, we desolder the faulty IC, clean the pads, reball and reflow the replacement chip." },
      { step: "04", title: "Post-soldering Validation", desc: "We run impedance checks, diode values, and system boot validation before final reassembly." }
    ],
    whyChooseUs: [
      "Certified micro-soldering engineers specializing in logic board repair",
      "Infrared thermal imaging to locate microscopic component shorts",
      "High-power digital microscopes for trace repairs",
      "Highest success rate for dead or unresponsive smartphones"
    ],
    faqs: [
      { q: "Is a motherboard repair safe for my data?", a: "Yes. Our micro-soldering repairs are targeted at power, charging, or display ICs and do not touch your encrypted CPU/NAND memory blocks." },
      { q: "How long do motherboard repairs take?", a: "Due to the complex testing and soldering involved, board repairs typically take 24 to 48 hours in our central lab. We handle secure pickup and delivery." }
    ],
    relatedSlugs: ["water-damage-repair", "data-recovery"],
    reviews: [
      { author: "Deepak G.", rating: 5, text: "Other repair shops told me my dead iPhone board was unfixable. iPhonix diagnosed a short capacitor, replaced it, and booted it up! Lifesavers.", date: "3 days ago" }
    ],
    metaTitle: "Mobile Motherboard Repair in Trivandrum | iPhonix",
    metaDesc: "Professional mobile motherboard repair and advanced smartphone diagnostics in Karamana, Trivandrum."
  },
  "speaker-repair": {
    slug: "speaker-repair",
    title: "Speaker Repair",
    shortDesc: "Fix quiet ear speakers, crackling loud speakers, and broken microphone units.",
    overview: "Muffled call audio, distorted playback, quiet ringtones, or absolute audio failures can severely limit your device. We deep-clean acoustic meshes and replace faulty ear speakers, bottom loudspeakers, and microphones to restore clear call volumes and high-quality audio playback.",
    image: "https://i.ibb.co/xNNrCpj/image.png",
    bannerImage: "https://i.ibb.co/xNNrCpj/image.png",
    process: [
      { step: "01", title: "Acoustic Test", desc: "We check frequency outputs and volume levels to confirm transducer degradation." },
      { step: "02", title: "Sonic Mesh Clean", desc: "We apply alcohol solvent and use microscopic brushes to clear oils, wax, and metal dust from grills." },
      { step: "03", title: "Transducer Swap", desc: "If the speaker driver or coil is blown, we install a new matching speaker unit." },
      { step: "04", title: "Audio Sweep Test", desc: "We play test sounds to check decibel outputs and clear, static-free frequencies." }
    ],
    whyChooseUs: [
      "Original specification dynamic speakers for deep bass and high trebles",
      "Ultrasonic mesh cleaning that often resolves quiet volume without hardware swaps",
      "Waterproofing adhesive gaskets replaced during screen reseals",
      "Quick 20-minute onsite service"
    ],
    faqs: [
      { q: "Why is my ear speaker so quiet?", a: "Most of the time, the tiny mesh screen gets blocked by ear wax and dust. We perform a specialized deep clean first which usually restores full volume." },
      { q: "Will my phone still be water-resistant after opening?", a: "Yes, we replace the custom display seals with high-grade waterproof adhesives to preserve original sealing." }
    ],
    relatedSlugs: ["charging-port-repair", "display-replacement"],
    reviews: [
      { author: "Arjun Krishnan", rating: 5, text: "My loudspeaker was crackling terribly. They came and replaced the speaker unit inside my office. Sound is clear now!", date: "4 days ago" }
    ],
    metaTitle: "Mobile Speaker & Microphone Repair in Trivandrum | iPhonix",
    metaDesc: "Get expert mobile speaker and microphone repair in Karamana, Trivandrum. Fast doorstep repairs for distorted audio or mic issues at iPhonix."
  },
  "water-damage-repair": {
    slug: "water-damage-repair",
    title: "Water Damage Repair",
    shortDesc: "Emergency ultrasonic cleaning and moisture extraction to recover water-damaged boards.",
    overview: "Accidental drops in pools, sinks, or rain can cause short circuits and corrosion on your phone's main board. Rice does not fix this. Our liquid damage recovery protocol involves immediate teardown, board cleaning in chemical ultrasonic baths, and targeted micro-soldering to save the device and protect your data.",
    image: "https://i.ibb.co/bMG8Nnqr/image.png",
    bannerImage: "https://i.ibb.co/bMG8Nnqr/image.png",
    process: [
      { step: "01", title: "Disassembly", desc: "We immediately disconnect the battery, screen, and cameras to prevent electricity from corroding contact pads." },
      { step: "02", title: "Ultrasonic Bath", desc: "The bare logic board is submerged in an isopropyl alcohol ultrasonic cleaner to sweep away mineral deposits and rust." },
      { step: "03", title: "Microscopic De-shielding", desc: "We desolder metallic RF shields on the board to clean moisture hidden underneath." },
      { step: "04", title: "Power Up Check", desc: "The board is thoroughly dried, test booted on a DC power supply, and shorted components are replaced." }
    ],
    whyChooseUs: [
      "Professional ultrasonic chemical baths to strip away rust and minerals",
      "Immediate teardown diagnostics to prevent galvanic corrosion",
      "Advanced micro-soldering to bypass blown logic board rails",
      "Highest success rate for liquid-damaged data recovery"
    ],
    faqs: [
      { q: "Should I put my wet phone in rice?", a: "No! Rice creates dust that mixes with water, forming a corrosive paste inside your phone. Keep it off, don't charge it, and get it to a technician immediately." },
      { q: "Can a water-damaged phone be fully recovered?", a: "Yes, if treated early. Over 85% of phones dismantled and put through ultrasonic cleaning within 24 hours are fully restored." }
    ],
    relatedSlugs: ["motherboard-repair", "data-recovery"],
    reviews: [
      { author: "Vivek Pillai", rating: 5, text: "Dropped my phone in a pool. iPhonix did a quick chemical cleaning, fixed a blown power rail on the board, and got it working. Highly professional!", date: "2 weeks ago" }
    ],
    metaTitle: "Water Damage Mobile Repair in Trivandrum | iPhonix",
    metaDesc: "Get professional water damage repair for smartphones in Karamana and Trivandrum from experienced technicians."
  },
  "software-repair": {
    slug: "software-repair",
    title: "Software Repair",
    shortDesc: "Resolve boot loops, frozen systems, storage blocks, and perform complete OS recovery.",
    overview: "Operating system crashes, corrupted update packages, storage blockages, and boot loops ('stuck on logo') can brick your smartphone. We flash official stock firmware, bypass boot errors, clear memory blockages, and resolve software bugs while prioritizing data safety.",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=800",
    bannerImage: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=1200",
    process: [
      { step: "01", title: "System Diagnostics", desc: "We connect the device to diagnostic terminals to identify kernel panic codes and boot loop triggers." },
      { step: "02", title: "Safe Mode Recovery", desc: "We boot the device into DFU, Recovery, or Fastboot modes depending on hardware platform." },
      { step: "03", title: "Firmware Flashing", desc: "We download and flash verified stock operating system firmware using secure interfaces." },
      { step: "04", title: "Security Calibration", desc: "We complete partition checks and calibrate system parameters to prevent memory leaks." }
    ],
    whyChooseUs: [
      "Official factory software flashing tools for iOS and Android",
      "Data retention priority during system recoveries and flashes",
      "Expert diagnostic sweep for hardware-triggered boot failures",
      "Fast onsite turnaround"
    ],
    faqs: [
      { q: "Will I lose my photos during software restore?", a: "We prioritize data recovery and use firmware update methods that preserve user data. A full wipe is only done as a last resort and with your consent." },
      { q: "What causes a boot loop?", a: "Boot loops can be caused by corrupt updates, low storage space, or hardware issues like faulty power buttons and battery BMS failures." }
    ],
    relatedSlugs: ["data-recovery", "motherboard-repair"],
    reviews: [
      { author: "Nikhil Raj", rating: 5, text: "Phone was stuck on the apple logo after a storage full error. iPhonix resolved the boot loop without wiping my photos. Life saver!", date: "1 week ago" }
    ],
    metaTitle: "Mobile Software Repair & OS Troubleshooting in Trivandrum | iPhonix",
    metaDesc: "Expert mobile software repair, bootloop fix, and OS troubleshooting in Karamana, Trivandrum. Recover and optimize your smartphone operating system."
  },
  "face-id-repair": {
    slug: "face-id-repair",
    title: "Face ID Repair",
    shortDesc: "Repair biometric sensors, dot projectors, and true-depth camera logic safely.",
    overview: "Face ID failures ('Move iPhone higher/lower' or 'Face ID is not available') occur when the dot projector, infrared camera, or flood illuminator gets slightly wet, dropped, or desynchronized from the secure enclave. We perform precision component-level repairs to restore biometric security without losing face tracking capabilities.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    bannerImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200",
    process: [
      { step: "01", title: "Enclave Diagnosis", desc: "We run hardware validations to check if the secure enclave is communicative with the TrueDepth sensor." },
      { step: "02", title: "Dot Projector Desoldering", desc: "Under a microscope, we extract the dot projector flex cable from the bracket." },
      { step: "03", title: "Micro-chip Bypass", desc: "We read the calibration token from the original chip, write it to a new flat flex programmer, and desolder the sensor glass." },
      { step: "04", title: "TrueDepth Realignment", desc: "We reflow the glass, program security hashes, and realign the optical prisms." }
    ],
    whyChooseUs: [
      "Expert microscopic repair of delicate biometric projector ICs",
      "Preservation of original secure enclave cryptographic bindings",
      "Specialized programmer tools for TrueDepth modules",
      "OEM-grade diagnostic alignment jigs"
    ],
    faqs: [
      { q: "Why did my Face ID stop working after a drop?", a: "The optical prisms inside the dot projector are extremely fragile. Drops can crack the alignment glass, or liquid can short out the flood illuminator." },
      { q: "Can other shops repair Face ID?", a: "Very few. Face ID is cryptographically locked to the motherboard. Only certified technicians with micro-soldering programmers can execute this repair." }
    ],
    relatedSlugs: ["camera-repair", "motherboard-repair"],
    reviews: [
      { author: "Shruti Sen", rating: 5, text: "Face ID got disabled after light water splash. iPhonix desoldered the sensor, cleaned it, and realigned the projector. Face unlock works perfectly now!", date: "3 days ago" }
    ],
    metaTitle: "iPhone Face ID & Touch ID Repair in Trivandrum | iPhonix",
    metaDesc: "Professional iPhone Face ID and Touch ID sensor repair services in Karamana, Trivandrum. Restore biometric security options on your Apple device."
  },
  "data-recovery": {
    slug: "data-recovery",
    title: "Data Recovery",
    shortDesc: "Retrieve contacts, photos, and critical documents from bricked or broken devices.",
    overview: "When a smartphone is smashed, ran over, or suffers a fatal board crash, recovering personal photos, WhatsApp backups, and work files is critical. We perform temporary board restorations, CPU swaps (transplants), and memory chip reads in our cleanroom labs to recover 100% of your data.",
    image: "https://i.ibb.co/whhVng3x/image.png",
    bannerImage: "https://i.ibb.co/whhVng3x/image.png",
    process: [
      { step: "01", title: "Medium Diagnostics", desc: "We analyze NAND flash health and secure enclave processor integrity." },
      { step: "02", title: "Board Reconstruction", desc: "We temporarily rebuild power rails on the logic board to allow the system to boot into diagnostic read mode." },
      { step: "03", title: "CPU/RAM Transplant", desc: "If the board is severely damaged, we desolder the CPU, EEPROM, and NAND chip and solder them onto a working donor board." },
      { step: "04", title: "Encrypted Data Dump", desc: "We mount the storage and pull an uncorrupted raw sector dump onto secure backup drives." }
    ],
    whyChooseUs: [
      "Logic board transplants to recover data from bent or run-over devices",
      "Specialized cleanroom lab for delicate chip desoldering",
      "Strict data confidentiality and privacy protocols",
      "No data recovered, no recovery fee policy"
    ],
    faqs: [
      { q: "What is your 'No Recovery, No Fee' policy?", a: "If your storage memory chip is cracked or physically demagnetized and we cannot recover any files, you do not pay a single rupee for the recovery attempt." },
      { q: "How do I receive my recovered data?", a: "We dump recovered files onto a secure, password-protected USB flash drive or upload it to a private cloud server for you to download." }
    ],
    relatedSlugs: ["motherboard-repair", "water-damage-repair"],
    reviews: [
      { author: "Thomas Mathew", rating: 5, text: "My phone was crushed by a car. I lost all hope of getting my business files back. iPhonix transplanted the chips to a donor board and recovered everything. Speechless!", date: "1 week ago" }
    ],
    metaTitle: "Mobile Data Recovery in Trivandrum | iPhonix",
    metaDesc: "Professional mobile data recovery services in Karamana, Trivandrum for smartphones experiencing software or hardware issues."
  }
};
